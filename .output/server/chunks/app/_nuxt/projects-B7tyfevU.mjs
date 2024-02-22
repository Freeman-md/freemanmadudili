import { e as useRuntimeConfig, a as __nuxt_component_0 } from '../server.mjs';
import { u as useProjects, _ as _sfc_main$2, b as _sfc_main$1, c as _sfc_main$3 } from './projects-BPzWbFr2.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext, openBlock, createElementBlock, createElementVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  class: "w-6 h-6",
  viewBox: "0 0 24 24"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._hoisted_3$1]);
}
const ArrowLeftIcon = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  class: "w-6 h-6",
  viewBox: "0 0 24 24"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._hoisted_3]);
}
const ArrowUpRightIcon = { render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "projects",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const runtimeConfig = useRuntimeConfig();
    const apiUrl = runtimeConfig.public.api_url + `/api/projects?populate=*`;
    const { projects, pending, error } = ([__temp, __restore] = withAsyncContext(() => useProjects(apiUrl)), __temp = await __temp, __restore(), __temp);
    const modifiedProjects = computed(() => {
      if (projects && projects.value) {
        return projects.value.map((project) => {
          var _a;
          return {
            ...project,
            link: (_a = project.links.live || project.links.github) == null ? void 0 : _a.replace("https://", "")
          };
        });
      }
    });
    console.log(modifiedProjects);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiLoading = _sfc_main$2;
      const _component_UiEmpty = _sfc_main$1;
      const _component_UiBadge = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8 container" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex space-x-2 items-center text-primary transition group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ArrowLeftIcon), { class: "!w-4 transition transform group-hover:-translate-x-2" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Freeman Madudili</span>`);
          } else {
            return [
              createVNode(unref(ArrowLeftIcon), { class: "!w-4 transition transform group-hover:-translate-x-2" }),
              createVNode("span", null, "Freeman Madudili")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-5xl text-white">All Projects</h1><div class="relative overflow-x-auto">`);
      if (unref(pending)) {
        _push(ssrRenderComponent(_component_UiLoading, { text: "Fetching projects" }, null, _parent));
      } else if (((_a = unref(modifiedProjects)) == null ? void 0 : _a.length) === 0 || unref(error)) {
        _push(ssrRenderComponent(_component_UiEmpty, { message: "Projects are currently unavailable" }, null, _parent));
      } else {
        _push(`<table class="w-full text-sm text-left rtl:text-right text-smoky"><thead class="text-xs text-gray-700 uppercase dark:text-gray-400 border-b border-smoky"><tr><th scope="col" class="px-6 py-3"> Project </th><th scope="col" class="px-6 py-3"> Built with </th><th scope="col" class="px-6 py-3 hidden md:table-cell"> Link </th></tr></thead><tbody><!--[-->`);
        ssrRenderList(unref(modifiedProjects), (project, index) => {
          _push(`<tr class="border-b border-smoky items-center"><td class="px-6 py-4">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: project.link,
            class: "flex space-x-2 group transition text-white hover:text-primary md:hover:text-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="text-lg"${_scopeId}>${ssrInterpolate(project.title)}</span>`);
                _push2(ssrRenderComponent(unref(ArrowUpRightIcon), { class: "!w-3 transition transform group-hover:-translate-y-1 group-hover:translate-x-1 md:hidden" }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("span", { class: "text-lg" }, toDisplayString(project.title), 1),
                  createVNode(unref(ArrowUpRightIcon), { class: "!w-3 transition transform group-hover:-translate-y-1 group-hover:translate-x-1 md:hidden" })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td><td class="px-6 py-4 flex flex-wrap items-center"><!--[-->`);
          ssrRenderList(project.technologies, (technology, index2) => {
            _push(ssrRenderComponent(_component_UiBadge, {
              key: index2,
              text: technology,
              class: "mr-2 mb-2"
            }, null, _parent));
          });
          _push(`<!--]--></td><td class="px-6 py-4 hidden md:table-cell">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: project.link,
            class: "flex space-x-2 group transition hover:text-primary"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${ssrInterpolate(project.link)}</span>`);
                _push2(ssrRenderComponent(unref(ArrowUpRightIcon), { class: "!w-3 transition transform group-hover:-translate-y-1 group-hover:translate-x-1" }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("span", null, toDisplayString(project.link), 1),
                  createVNode(unref(ArrowUpRightIcon), { class: "!w-3 transition transform group-hover:-translate-y-1 group-hover:translate-x-1" })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-B7tyfevU.mjs.map
