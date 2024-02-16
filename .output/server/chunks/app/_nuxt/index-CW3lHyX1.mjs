import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { u as useHead, _ as _export_sfc, e as useNuxtApp, G as GithubIcon, f as useRuntimeConfig, i as fetchDefaults, j as useState, a as __nuxt_component_0$1, h as asyncDataDefaults, c as createError, g as _sfc_main$7$1 } from '../server.mjs';
import { defineComponent, ref, computed, h, useSSRContext, mergeProps, withAsyncContext, resolveComponent, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, toDisplayString, toValue, reactive, shallowRef, toRef, getCurrentInstance, onServerPrefetch, createElementBlock, createElementVNode } from 'vue';
import { y as encodeParam, n as hasProtocol, z as withLeadingSlash, j as joinURL, p as parseURL, m as defu, A as hash, B as encodePath } from '../../nitro/node-server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { L as LinkIcon } from './link-d7eV5WBs.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestFetch() {
  var _a;
  return ((_a = useRequestEvent()) == null ? void 0 : _a.$fetch) || globalThis.$fetch;
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const sizes = parseSizes(opts.sizes);
  const densities = ((_c = opts.densities) == null ? void 0 : _c.trim()) ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$cJhZ4qbxzW = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ]
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$cJhZ4qbxzW, defaults: {} }
};
const useImage = () => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    }
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: true },
  // modifiers
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  // options
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  densities: { type: String, default: void 0 },
  preload: { type: Boolean, default: void 0 },
  // <img> attributes
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: {
    type: String,
    default: void 0,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], default: void 0 }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 }
};
const __nuxt_component_1 = defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load", "error"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          }
        }]
      });
    }
    const imgEl = ref();
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return () => h("img", {
      ref: imgEl,
      src: src.value,
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs.value,
      ...ctx.attrs
    });
  }
});
const _sfc_main$f = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_SocialLinks = _sfc_main$7$1;
  const _component_NuxtImg = __nuxt_component_1;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "hero",
    class: "container py-20 lg:py-32 space-y-8"
  }, _attrs))} data-v-51ea87b6><p class="text-primary text-lg text-center md:text-left" data-v-51ea87b6>\u2014 Freeman Madudili \u2014</p><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center" data-v-51ea87b6><div class="lg:col-span-2 flex flex-col space-y-8 items-start" data-v-51ea87b6><h1 class="text-5xl md:text-7xl text-smoky" data-v-51ea87b6> I&#39;m a <span class="text-primary" data-v-51ea87b6> Certified Full Stack Developer </span></h1><p class="text-white" data-v-51ea87b6> A distinguished Full Stack Developer with over <strong data-v-51ea87b6>3 years of experience</strong> and a <strong data-v-51ea87b6>First Class Honours</strong> degree in <strong data-v-51ea87b6>Information Technology</strong> from Middlesex University. Expert in crafting advanced web solutions, evidenced by numerous successful projects. Awarded a <strong data-v-51ea87b6>Distinction</strong> in <strong data-v-51ea87b6>BTEC Level 3 Advanced Diploma in Software Engineering</strong> from Aptech Computer Education. </p>`);
  _push(ssrRenderComponent(_component_SocialLinks, { class: "inline-block" }, null, _parent));
  _push(`<a href="/freeman-madudili-cv.pdf" target="_blank" class="btn btn-primary" data-v-51ea87b6>My Resume</a></div><div class="order-first md:order-last flex flex-col space-y-4 items-center justify-center" data-v-51ea87b6><div class="w-1/2 md:w-full md:h-96 overflow-hidden rounded-xl" data-v-51ea87b6>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/images/banner.jpg",
    alt: "Freeman Madudili",
    class: "object-contain object-center w-full"
  }, null, _parent));
  _push(`</div><p class="text-smoky" data-v-51ea87b6>A.K.A <span class="text-primary text-lg" data-v-51ea87b6>Freemancodz</span></p></div></div></section>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Hero.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-51ea87b6"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Loading",
  __ssrInlineRender: true,
  props: {
    text: { default: "UiLoading" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center space-y-2" }, _attrs))}><svg aria-hidden="true" class="w-8 h-8 text-smoky animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg><p class="text-primary text-center">${ssrInterpolate(props.text)}</p></div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Loading.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Tool",
  __ssrInlineRender: true,
  props: {
    tool: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center space-y-4 grayscale transition duration-200 hover:grayscale-0 cursor-pointer mr-10" }, _attrs))}><div class="w-20">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: `/images/tools-and-technologies/${__props.tool.image}`,
        alt: __props.tool.title,
        class: "w-full object-cover object-center"
      }, null, _parent));
      _push(`</div><span class="text-white text-lg font-light">${ssrInterpolate(__props.tool.title)}</span></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Tool.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Empty",
  __ssrInlineRender: true,
  props: {
    message: { default: "This resource is currently unavailable" }
  },
  setup(__props) {
    const { message } = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto flex flex-col space-y-4 items-center justify-center" }, _attrs))}><lottie-player class="p-0 h-20 w-20" src="/js/lottie/empty.json" speed="1" loop autoplay></lottie-player><p class="text-smoky">${ssrInterpolate(message)}</p></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Empty.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i;
  var _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = _handler ;
  const getDefault = () => null;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b2 = options.default) != null ? _b2 : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  options.dedupe = (_g = options.dedupe) != null ? _g : "cancel";
  const hasCachedData = () => ![null, void 0].includes(options.getCachedData(key));
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_h = (_b = nuxtApp.payload._errors)[key]) != null ? _h : _b[key] = null;
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref((_i = options.getCachedData(key)) != null ? _i : options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    var _a3;
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxtApp.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return toValue(r);
  });
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch,
    immediate,
    getCachedData,
    deep,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    if (timeoutLength) {
      setTimeout(() => controller.abort(), timeoutLength);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Tools",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: tools, pending: isFetchingTools } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/tools", "$jGl0KAS0sC")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiLoading = _sfc_main$e;
      const _component_VueMarquee = resolveComponent("VueMarquee");
      const _component_HomeTool = _sfc_main$d;
      const _component_UiEmpty = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><div class="container"><h2 class="text-center sm:text-left text-4xl lg:text-5xl text-white"> Adaptable Coding Artisan! <span class="text-primary">Strengths</span></h2></div>`);
      if (unref(isFetchingTools)) {
        _push(ssrRenderComponent(_component_UiLoading, {
          class: "mx-auto my-auto w-full",
          text: "Fetching skills"
        }, null, _parent));
      } else if (unref(tools)) {
        _push(ssrRenderComponent(_component_VueMarquee, { duration: 50 }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-end"${_scopeId}><!--[-->`);
              ssrRenderList(unref(tools), (tool, index2) => {
                _push2(ssrRenderComponent(_component_HomeTool, {
                  key: index2,
                  tool
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-end" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(tools), (tool, index2) => {
                    return openBlock(), createBlock(_component_HomeTool, {
                      key: index2,
                      tool
                    }, null, 8, ["tool"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_UiEmpty, { message: "Skills are currently unavailable" }, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Tools.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TabVerticalLine",
  __ssrInlineRender: true,
  props: ["tabContainerHeightInRem", "translateYValueInRem"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["hidden md:block w-[0.15rem] bg-smoky relative", __props.tabContainerHeightInRem]
      }, _attrs))}><div class="relative w-[0.15rem] h-[2.75rem] bg-primary transition-transform duration-200" style="${ssrRenderStyle({ transform: __props.translateYValueInRem })}"></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TabVerticalLine.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "TabHorizontalLine",
  __ssrInlineRender: true,
  props: ["tabWidthInPercent", "translateXValueInPercent"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:hidden w-full flex h-[0.15rem] bg-smoky relative" }, _attrs))}><div class="h-[0.15rem] relative bg-primary transition-transform duration-200" style="${ssrRenderStyle({ width: __props.tabWidthInPercent, transform: __props.translateXValueInPercent })}"></div></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TabHorizontalLine.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const useActiveExperienceCompany = () => useState("activeExperienceCompany", () => null);
const TAB_INDEX = 2.75;
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "JobExperienceCompanies",
  __ssrInlineRender: true,
  props: {
    companies: Object
  },
  setup(__props) {
    const { companies } = __props;
    const activeTabIndex = ref(0);
    useActiveExperienceCompany();
    const translateYValueInRem = computed(
      () => `translateY(${activeTabIndex.value * TAB_INDEX}rem)`
    );
    const translateXValueInPercent = computed(
      () => `translateX(${activeTabIndex.value * 101}%)`
    );
    const tabContainerHeightInRem = computed(
      () => companies ? `h-[${companies.length * TAB_INDEX}]` : "h-fit"
    );
    const tabWidthInPercent = computed(
      () => companies ? `${Math.floor(100 / companies.length)}%` : "100%"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TabVerticalLine = _sfc_main$a;
      const _component_TabHorizontalLine = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full md:flex-row md:w-1/4 h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_TabVerticalLine, {
        "translate-y-value-in-rem": unref(translateYValueInRem),
        "tab-container-height-in-rem": unref(tabContainerHeightInRem)
      }, null, _parent));
      _push(`<div class="w-full flex md:flex-col"><!--[-->`);
      ssrRenderList(__props.companies, (company, index2) => {
        _push(`<button class="${ssrRenderClass([{
          "!text-primary !bg-primary/10": unref(activeTabIndex) === index2
        }, "text-center md:text-left text-sm w-full text-white p-3 transition duration-200 hover:text-primary hover:bg-primary/10"])}">${ssrInterpolate(company.company)}</button>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_TabHorizontalLine, {
        "tab-width-in-percent": unref(tabWidthInPercent),
        "translate-x-value-in-percent": unref(translateXValueInPercent)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/JobExperienceCompanies.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    text: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: "block text-primary bg-primary/10 py-1 px-3 rounded-full min-w-fit" }, _attrs))}>${ssrInterpolate(__props.text)}</span>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Badge.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "35",
  height: "15",
  fill: "none"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "#64FFDA",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "m2.5 1.875 7 5.625-7 5.625z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._hoisted_3$2]);
}
const PlayIcon = { render: render$2 };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "JobExperience",
  __ssrInlineRender: true,
  props: {
    experience: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const { experience } = __props;
    const duration = computed(() => {
      let startDate = "N/A";
      let endDate = "Present";
      if (experience == null ? void 0 : experience.start_date) {
        startDate = new Date(experience.start_date).toLocaleString("default", { month: "long", year: "numeric" });
      }
      if (experience == null ? void 0 : experience.end_date) {
        endDate = new Date(experience.end_date).toLocaleString("default", { month: "long", year: "numeric" });
      }
      return `${startDate} - ${endDate}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UiBadge = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full md:w-3/4 flex flex-col space-y-3 overflow-hidden" }, _attrs))}><p class="text-white">${ssrInterpolate((_a = __props.experience) == null ? void 0 : _a.position)} <span class="text-primary">@ ${ssrInterpolate((_b = __props.experience) == null ? void 0 : _b.company)}</span></p><p class="text-smoky">${ssrInterpolate(unref(duration))}</p><!--[-->`);
      ssrRenderList((_c = __props.experience) == null ? void 0 : _c.responsibilities, (responsibility, index2) => {
        _push(`<div class="w-full flex space-x-4 items-start"><div class="w-4">`);
        _push(ssrRenderComponent(unref(PlayIcon), { class: "mt-1" }, null, _parent));
        _push(`</div><span class="text-smoky">${ssrInterpolate(responsibility)}</span></div>`);
      });
      _push(`<!--]--><div class="flex space-x-4 items-center w-full overflow-y-hidden overflow-x-scroll"><!--[-->`);
      ssrRenderList((_d = __props.experience) == null ? void 0 : _d.projects, (project, index2) => {
        var _a2;
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: (project == null ? void 0 : project.links.live) || ((_a2 = project.links) == null ? void 0 : _a2.github),
          target: "_blank",
          key: index2,
          class: "text-smoky transition duration-200 hover:text-white flex space-x-2 min-w-fit"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(LinkIcon), null, null, _parent2, _scopeId));
              _push2(` <span${_scopeId}>${ssrInterpolate(project.title)}</span>`);
            } else {
              return [
                createVNode(unref(LinkIcon)),
                createTextVNode(),
                createVNode("span", null, toDisplayString(project.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex space-x-4 items-center overflow-y-hidden overflow-x-scroll"><!--[-->`);
      ssrRenderList((_e = __props.experience) == null ? void 0 : _e.technologies, (technology, index2) => {
        _push(ssrRenderComponent(_component_UiBadge, {
          key: index2,
          text: technology
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/JobExperience.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const useExperiences = async (apiUrl) => {
  const {
    data: experiences,
    error: fetchingExperiencesError,
    pending: isFetchingExperiences
  } = await useFetch(`${apiUrl}/api/experiences`, {
    transform: (experiences2) => {
      return experiences2.data.map((experience) => ({
        ...experience.attributes,
        id: experience.id
      }));
    }
  }, "$HwMtmbnRlw");
  return { experiences, fetchingExperiencesError, isFetchingExperiences };
};
const useExperience = async (apiUrl, activeExperienceCompany) => {
  const {
    data: experience,
    pending: isFetchingExperience,
    error: fetchingExperienceError
  } = await useAsyncData(
    `experiences:${activeExperienceCompany.value}`,
    async () => {
      const url = `${apiUrl}/api/experiences/${activeExperienceCompany.value}?populate=*`;
      const response = await $fetch(url);
      return response;
    },
    {
      transform: (experience2) => {
        const fields = experience2.data.attributes;
        return {
          ...fields,
          id: experience2.data.id,
          projects: fields.projects.data.map((project) => project.attributes)
        };
      },
      watch: [activeExperienceCompany]
    }
  );
  return { experience, isFetchingExperience, fetchingExperienceError };
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "JobExperiences",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const activeExperienceCompany = useActiveExperienceCompany();
    const runtimeConfig = useRuntimeConfig();
    const apiUrl = runtimeConfig.public.api_url;
    const { experiences, fetchingExperiencesError, isFetchingExperiences } = ([__temp, __restore] = withAsyncContext(() => useExperiences(apiUrl)), __temp = await __temp, __restore(), __temp);
    if (experiences && experiences.value) {
      activeExperienceCompany.value = experiences.value[0].id;
    }
    const { experience, isFetchingExperience, fetchingExperienceError } = ([__temp, __restore] = withAsyncContext(() => useExperience(apiUrl, activeExperienceCompany)), __temp = await __temp, __restore(), __temp);
    const companies = computed(() => {
      if (experiences && experiences.value) {
        return experiences.value.map((experience2) => ({
          company: experience2.company,
          id: experience2.id
        }));
      }
      return [];
    });
    const hasError = computed(() => {
      return fetchingExperiencesError.value || fetchingExperienceError.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiLoading = _sfc_main$e;
      const _component_HomeJobExperienceCompanies = _sfc_main$8;
      const _component_UiEmpty = _sfc_main$c;
      const _component_HomeJobExperience = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container space-y-10" }, _attrs))}><h2 class="text-center sm:text-left text-4xl lg:text-5xl text-primary"> Career Highlights </h2><div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-start">`);
      if (unref(isFetchingExperiences)) {
        _push(ssrRenderComponent(_component_UiLoading, {
          text: "Fetching companies",
          class: "mx-auto"
        }, null, _parent));
      } else if (unref(companies).length > 0 && !unref(hasError)) {
        _push(ssrRenderComponent(_component_HomeJobExperienceCompanies, { companies: unref(companies) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isFetchingExperience)) {
        _push(ssrRenderComponent(_component_UiLoading, {
          class: "mx-auto my-auto w-full md:w-3/4",
          text: "Fetching experience"
        }, null, _parent));
      } else if (!unref(experience) || unref(hasError)) {
        _push(ssrRenderComponent(_component_UiEmpty, {
          message: "Career Highlights are currently unavailable",
          class: "w-full"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_HomeJobExperience, { experience: unref(experience) }, null, _parent));
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/JobExperiences.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container space-y-10" }, _attrs))}><h2 class="text-center sm:text-left text-4xl lg:text-5xl text-primary"> Education </h2><ol class="relative border-s border-gray-200 dark:border-gray-700"><li class="mb-10 ms-4"><div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-white"></div><time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2023</time><h3 class="text-lg font-semibold text-gray-900 dark:text-white"> B.Sc. in Information Technology <span class="text-primary"> - First Class Honours</span><br><small>Middlesex University, London</small></h3><p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"><span class="text-primary">Relevant Courses: </span> Advanced Web Development with Big Data, Artificial and Business Intelligence </p></li><li class="mb-10 ms-4"><div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-white"></div><time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2023</time><h3 class="text-lg font-semibold text-gray-900 dark:text-white"> BTEC Level 3 Advanced Diploma in Software Engineering (ADSE)<span class="text-primary"> - Distinction</span><br><small>Aptech Computer Education</small></h3><p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"><span class="text-primary">Relevant Courses: </span> Object Oriented Programming, Enterprise Software Development</p></li></ol></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Education.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._hoisted_3$1]);
}
const ExternalLinkIcon = { render: render$1 };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FeaturedProject",
  __ssrInlineRender: true,
  props: {
    project: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = __nuxt_component_1;
      const _component_UiBadge = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group grayscale xs:w-48 sm:w-64 md:w-80 lg:w-60 xl:w-72 transition duration-200 hover:!grayscale-0" }, _attrs))}><div class="relative rounded-lg border-4 border-smoky xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-60 lg:h-60 xl:w-72 xl:h-72 transition duration-200 group-hover:!border-transparent">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.project.links.live || __props.project.links.github,
        target: "_blank",
        class: "block transform translate-y-4 translate-x-4 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-60 lg:h-60 xl:w-72 xl:h-72 overflow-hidden rounded-lg transition duration-200 group-hover:!translate-x-0 group-hover:!translate-y-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: __props.project.image,
              alt: __props.project.title,
              class: "object-cover w-full h-full"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: __props.project.image,
                alt: __props.project.title,
                class: "object-cover w-full h-full"
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-4 pt-10 sm:pt-16 w-full overflow-hidden"><div class="flex space-x-4 justify-between items-center"><span class="text-xl text-smoky">${ssrInterpolate(__props.project.title)}</span><div class="flex space-x-2 items-center stroke-smoky">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        "aria-label": `View Github Repo for ${__props.project.title}`,
        to: __props.project.links.github,
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(GithubIcon), { class: "w-8 stroke-smoky transition duration-200 hover:stroke-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(GithubIcon), { class: "w-8 stroke-smoky transition duration-200 hover:stroke-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        "aria-label": `View Live Project for ${__props.project.title}`,
        to: __props.project.links.live,
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ExternalLinkIcon), { class: "stroke-smoky transition duration-200 hover:stroke-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ExternalLinkIcon), { class: "stroke-smoky transition duration-200 hover:stroke-primary" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><p class="text-smoky">${ssrInterpolate(__props.project.description)}</p><div class="flex space-x-4 items-center w-full overflow-y-hidden overflow-x-scroll"><!--[-->`);
      ssrRenderList(__props.project.technologies, (technology, index2) => {
        _push(ssrRenderComponent(_component_UiBadge, {
          key: index2,
          text: technology
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/FeaturedProject.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const useProjects = async () => {
  const runtimeConfig = useRuntimeConfig();
  const apiUrl = runtimeConfig.public.api_url;
  const {
    data: projects,
    error,
    pending
  } = await useFetch(`${apiUrl}/api/projects?populate=*`, {
    transform: (projects2) => {
      return projects2.data.map((project) => {
        var _a, _b;
        return {
          ...project.attributes,
          image: `${apiUrl}${(_b = (_a = project.attributes) == null ? void 0 : _a.image) == null ? void 0 : _b.data.attributes.url}`
        };
      });
    }
  }, "$iUX7reuB7S");
  return {
    projects,
    error,
    pending
  };
};
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "none",
  viewBox: "0 0 24 24"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5 12h14M12 5l7 7-7 7"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._hoisted_3]);
}
const ArrowRightIcon = { render };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FeaturedProjects",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { projects, pending, error } = ([__temp, __restore] = withAsyncContext(() => useProjects()), __temp = await __temp, __restore(), __temp);
    const featuredProjects = computed(() => {
      if (projects && projects.value) {
        return projects.value.filter((project) => project.featured);
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UiLoading = _sfc_main$e;
      const _component_UiEmpty = _sfc_main$c;
      const _component_HomeFeaturedProject = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container space-y-6 overflow-hidden" }, _attrs))}><div class="flex space-x-4 items-center justify-between"><h2 class="text-center sm:text-left text-xl sm:text-4xl lg:text-5xl text-primary"> Featured Projects </h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        "aria-label": "View projects archive",
        to: "/",
        class: "text-sm flex space-x-2 items-center text-smoky stroke-smoky transition duration-200 hover:text-primary hover:stroke-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>view the archive</span>`);
            _push2(ssrRenderComponent(unref(ArrowRightIcon), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "view the archive"),
              createVNode(unref(ArrowRightIcon))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(pending)) {
        _push(ssrRenderComponent(_component_UiLoading, {
          text: "Fetching projects",
          class: "mx-auto"
        }, null, _parent));
      } else if (unref(featuredProjects).length === 0 || unref(error)) {
        _push(ssrRenderComponent(_component_UiEmpty, { message: "Featured Projects are currently unavailable" }, null, _parent));
      } else {
        _push(`<div class="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 xl:gap-0"><!--[-->`);
        ssrRenderList(unref(featuredProjects), (project, index2) => {
          _push(ssrRenderComponent(_component_HomeFeaturedProject, {
            key: index2,
            project
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/FeaturedProjects.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("images/me.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_SocialLinks = _sfc_main$7$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container space-y-8 text-smoky" }, _attrs))}><p class="text-sm">Nice to meet you</p><h2 class="text-6xl text-primary font-bold">Hi there, I\u2019m Freeman Madudili</h2><p class="text-lg"> I&#39;m Freeman Madudili, a Full Stack Software Developer based in London, UK. </p><p> Currently, I&#39;m crafting seamless user interfaces and innovative web solutions at <b>Xclusive Designs</b>. With a track record of transforming ideas into functional applications, I bring a blend of creativity, technical expertise, and passion for delivering exceptional user experiences. </p><p> Let&#39;s create something extraordinary together. </p><div class="flex flex-col space-y-4 xs:flex-row xs:space-y-0 xs:space-x-4 xs:items-center xs:justify-between"><div class="flex space-x-6 items-center"><div class="w-20 h-20 rounded-full overflow-hidden"><img${ssrRenderAttr("src", _imports_0)} alt="Freemancodz"></div><h6 class="text-primary text-3xl">Freemancodz</h6></div>`);
  _push(ssrRenderComponent(_component_SocialLinks, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/AboutMe.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HomeHero = __nuxt_component_0;
  const _component_HomeTools = _sfc_main$b;
  const _component_HomeJobExperiences = _sfc_main$5;
  const _component_HomeEducation = __nuxt_component_3;
  const _component_HomeFeaturedProjects = _sfc_main$2;
  const _component_HomeAboutMe = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-20" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HomeHero, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeTools, {
    id: "skills",
    class: "scroll-mt-24"
  }, null, _parent));
  _push(ssrRenderComponent(_component_HomeJobExperiences, {
    id: "experience",
    class: "scroll-mt-24"
  }, null, _parent));
  _push(ssrRenderComponent(_component_HomeEducation, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeFeaturedProjects, {
    id: "portfolio",
    class: "scroll-mt-24"
  }, null, _parent));
  _push(ssrRenderComponent(_component_HomeAboutMe, {
    id: "about",
    class: "scroll-mt-24"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CW3lHyX1.mjs.map
