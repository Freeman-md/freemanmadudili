import { defineComponent, ref, mergeProps, unref, useSSRContext, reactive, computed, watch, openBlock, createElementBlock, createElementVNode } from 'vue';
import { b as useNotification, d as useSeoMeta, M as MailIcon } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { L as LinkIcon } from './link-d7eV5WBs.mjs';
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

const useForm = (initialFields, validationRules, requiredFields) => {
  const form = reactive({});
  const errors = reactive({});
  const touched = reactive({});
  const isEmpty = (value) => !value;
  const isARequiredField = (fieldName) => {
    return requiredFields.includes(fieldName);
  };
  const initializeForm = () => {
    for (const key in initialFields) {
      form[key] = initialFields[key];
      errors[key] = "";
      touched[key] = false;
    }
  };
  const validateField = (fieldName, value) => {
    if (!touched[fieldName])
      return "";
    if (isARequiredField(fieldName) && isEmpty(value))
      return "This field is required";
    if (fieldName in validationRules)
      return validationRules[fieldName](value);
    return "";
  };
  const touchField = (fieldName) => {
    touched[fieldName] = true;
    errors[fieldName] = validateField(fieldName, form[fieldName]);
  };
  const isFormValid = computed(() => {
    const requiredFieldsFilled = requiredFields.every((field) => form[field]);
    const noErrors = Object.keys(errors).every((key) => !errors[key]);
    return requiredFieldsFilled && noErrors;
  });
  const validateForm = () => {
    Object.keys(form).forEach((key) => {
      touchField(key);
    });
  };
  initializeForm();
  Object.keys(form).forEach((key) => {
    watch(() => form[key], (newValue, oldValue) => {
      touchField(key);
    });
  });
  return {
    form,
    errors,
    touched,
    touchField,
    isFormValid,
    validateForm,
    initializeForm
  };
};
const interests = [
  "Portfolio Website",
  "Project Inquiry / Hiring",
  "Collaboration",
  "Other Inquiries"
];
const roles = [
  "Web Developer",
  "E-Commerce Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer"
];
const collaborations = [
  "Web Development Projects",
  "UI/UX Design Collaborations",
  "Tech Community Events (Workshops, Seminars)",
  "Open Source Contributions",
  "Joint Venture Tech Startups",
  "Educational Content Creation (Blogs, Tutorials)"
];
const budgets = [
  {
    value: "0-30000",
    text: "Under \xA330,000"
  },
  {
    value: "30000-40000",
    text: "\xA330000 - \xA340000"
  },
  {
    value: "40001-50000",
    text: "\xA340001 - \xA350000"
  },
  {
    value: "50001-75000",
    text: "\xA350001 - \xA375000"
  },
  {
    value: "75000+",
    text: "Over \xA375000"
  }
];
const useContactForm = () => {
  const formFields = {
    name: "",
    email: "",
    phone: "",
    interest: "Portfolio Website",
    field_of_study: "",
    profile_url: "",
    portfolio_purpose: "",
    portfolio_description: "",
    personal_information: "",
    role: "",
    role_description: "",
    budget: "",
    collaboration: "",
    collaboration_overview: "",
    inquiry: ""
  };
  const requiredFields = ["name", "email", "phone", "interest"];
  const validationRules = {
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email format",
    phone: (value) => /^\+?([0-9]{1,3})\s?([0-9]{1,4})[\s-]?([0-9]{1,4})[\s-]?([0-9]{1,4})[\s-]?([0-9]{1,9})$/.test(value) ? "" : "Phone must be a valid number",
    interest: (value) => value && interests.includes(value) ? "" : "Selected interest is invalid"
  };
  const { form, errors, isFormValid, touchField, validateForm, initializeForm } = useForm(formFields, validationRules, requiredFields);
  const selectInterest = (interest) => {
    touchField("interest");
    form.interest = interest;
  };
  const selectBudget = (budget) => {
    touchField("budget");
    form.budget = budget;
  };
  const isSelectedInterest = (interest) => form.interest === interest;
  const isSelectedBudget = (budget) => form.budget === budget;
  return {
    budgets,
    interests,
    roles,
    collaborations,
    selectInterest,
    selectBudget,
    isSelectedInterest,
    isSelectedBudget,
    form,
    errors,
    isFormValid,
    touchField,
    validateForm,
    initializeForm
  };
};
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  class: "w-6 h-6",
  viewBox: "0 0 24 24"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0M4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.9 17.9 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._hoisted_3$3]);
}
const UserIcon = { render: render$3 };
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  class: "w-6 h-6",
  viewBox: "0 0 24 24"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._hoisted_3$2]);
}
const MobileIcon = { render: render$2 };
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
  d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48 48 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A24 24 0 0 1 12 15.75a24 24 0 0 1-7.577-1.22 2 2 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48 48 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a49 49 0 0 0-7.5 0M12 12.75h.008v.008H12z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._hoisted_3$1]);
}
const BriefcaseIcon = { render: render$1 };
const _hoisted_1 = { viewBox: "0 0 24 24" };
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M12 2A10 10 0 1 1 2 12 10 10 0 0 1 12 2m0-2a12 12 0 1 0 12 12A12 12 0 0 0 12 0",
  opacity: ".25"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M22 12a10 10 0 0 1-10 10v-2a8 8 0 0 0 8-8Z"
}, null, -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._hoisted_4]);
}
const SpinnerIcon = { render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "get-in-touch",
  __ssrInlineRender: true,
  setup(__props) {
    const isProcessingForm = ref(false);
    const {
      interests: interests2,
      budgets: budgets2,
      roles: roles2,
      collaborations: collaborations2,
      form,
      errors,
      selectInterest,
      selectBudget,
      isSelectedInterest,
      isSelectedBudget,
      isFormValid,
      validateForm,
      initializeForm: resetForm
    } = useContactForm();
    useNotification();
    useSeoMeta({
      title: "Connect with Freemancodz"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container space-y-4 pt-28" }, _attrs))}><h1 class="uppercase text-sm text-white">Get In Touch</h1><h2 class="font-bold text-primary text-5xl"> Connect with Freemancodz </h2><p class="text-smoky"> Welcome to the hub of creativity and technology. Whether you&#39;re seeking a professional portfolio, project inquiry, collaboration, or just want to connect, let&#39;s make something amazing together. </p><form class="text-white pt-4 space-y-4"><div class="grid sm:grid-cols-2 gap-4"><div class="space-y-1"><div class="form-control">`);
      _push(ssrRenderComponent(unref(UserIcon), { class: "w-10" }, null, _parent));
      _push(`<input name="name" type="text" placeholder="Fullname"${ssrRenderAttr("value", unref(form).name)}></div><small class="text-red-500">${ssrInterpolate(unref(errors).name)}</small></div><div class="space-y-1"><div class="form-control">`);
      _push(ssrRenderComponent(unref(MailIcon), { class: "w-10" }, null, _parent));
      _push(`<input name="email" type="text" placeholder="Email Address"${ssrRenderAttr("value", unref(form).email)}></div><small class="text-red-500">${ssrInterpolate(unref(errors).email)}</small></div><div class="space-y-1"><div class="form-control">`);
      _push(ssrRenderComponent(unref(MobileIcon), { class: "w-10" }, null, _parent));
      _push(`<input name="phone" type="text" placeholder="Phone Number"${ssrRenderAttr("value", unref(form).phone)}></div><small class="text-red-500">${ssrInterpolate(unref(errors).phone)}</small></div></div><div class="space-y-2"><p class="text-primary">Select your interest</p><div class="flex flex-wrap"><!--[-->`);
      ssrRenderList(unref(interests2), (interest, index) => {
        _push(`<button type="button" class="${ssrRenderClass([[
          unref(isSelectedInterest)(interest) ? "btn-primary bg-primary/10" : "btn-white"
        ], "flex-1 btn mr-4 mb-4"])}">${ssrInterpolate(interest)}</button>`);
      });
      _push(`<!--]--></div><small class="text-red-500">${ssrInterpolate(unref(errors).interest)}</small></div><div>`);
      if (unref(form).interest === "Portfolio Website") {
        _push(`<section id="portfolio-website" class="space-y-4"><div class="grid sm:grid-cols-2 gap-4"><div class="form-control">`);
        _push(ssrRenderComponent(unref(BriefcaseIcon), { class: "w-10" }, null, _parent));
        _push(`<input name="field-of-study" type="text" placeholder="Field of Study"${ssrRenderAttr("value", unref(form).field_of_study)}></div><div class="form-control">`);
        _push(ssrRenderComponent(unref(LinkIcon), { class: "w-6" }, null, _parent));
        _push(`<input name="field-of-study" type="text" placeholder="Linkedin Profile"${ssrRenderAttr("value", unref(form).profile_url)}></div></div><div class="form-control"><textarea name="portfolio-purpose" placeholder="Purpose of Needing a Portfolio Website" rows="4" class="resize-none">${ssrInterpolate(unref(form).portfolio_purpose)}</textarea></div><div class="form-control"><textarea name="portfolio-description" placeholder="Description of Ideal Portfolio Website" rows="4" class="resize-none">${ssrInterpolate(unref(form).portfolio_description)}</textarea></div><div class="form-control"><textarea name="personal-information" placeholder="Personal Information (Optional)" rows="4" class="resize-none">${ssrInterpolate(unref(form).personal_information)}</textarea></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).interest === "Project Inquiry / Hiring") {
        _push(`<section id="project-inquiry" class="space-y-4"><div class="form-control">`);
        _push(ssrRenderComponent(unref(BriefcaseIcon), { class: "w-10" }, null, _parent));
        _push(`<select name="project-role"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "") : ssrLooseEqual(unref(form).role, "")) ? " selected" : ""}>Type of Project / Role</option><!--[-->`);
        ssrRenderList(unref(roles2), (role, index) => {
          _push(`<option${ssrRenderAttr("value", role)}>${ssrInterpolate(role)}</option>`);
        });
        _push(`<!--]--></select></div><div class="form-control"><textarea name="project-description" placeholder="Brief Description of Project/Role" rows="4" class="resize-none">${ssrInterpolate(unref(form).role_description)}</textarea></div><div class="space-y-2"><p class="text-primary">Budget Range</p><div class="flex flex-wrap"><!--[-->`);
        ssrRenderList(unref(budgets2), (budget, index) => {
          _push(`<button type="button" class="${ssrRenderClass([[
            unref(isSelectedBudget)(budget.value) ? "btn-primary bg-primary/10" : "btn-white"
          ], "flex-1 btn mr-4 mb-4"])}">${ssrInterpolate(budget.text)}</button>`);
        });
        _push(`<!--]--></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).interest === "Collaboration") {
        _push(`<section id="collaboration" class="space-y-4"><div class="form-control">`);
        _push(ssrRenderComponent(unref(BriefcaseIcon), { class: "w-10" }, null, _parent));
        _push(`<select name="collaboration"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).collaboration) ? ssrLooseContain(unref(form).collaboration, "") : ssrLooseEqual(unref(form).collaboration, "")) ? " selected" : ""}>Area of Collaboration</option><!--[-->`);
        ssrRenderList(unref(collaborations2), (collaboration, index) => {
          _push(`<option${ssrRenderAttr("value", collaboration)}>${ssrInterpolate(collaboration)}</option>`);
        });
        _push(`<!--]--></select></div><div class="form-control"><textarea name="collaboration-overview" placeholder="Overview of Collaboration Idea" rows="4" class="resize-none">${ssrInterpolate(unref(form).collaboration_overview)}</textarea></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).interest === "Other Inquiries") {
        _push(`<section id="other-inquiries" class="space-y-4"><div class="form-control"><textarea name="other-inquiries" placeholder="What do you have in mind?" rows="4" class="resize-none">${ssrInterpolate(unref(form).inquiry)}</textarea></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit" class="btn btn-primary disabled:!btn-smoky flex items-center justify-center"${ssrIncludeBooleanAttr(!unref(isFormValid)) ? " disabled" : ""}>`);
      if (unref(isProcessingForm)) {
        _push(ssrRenderComponent(unref(SpinnerIcon), { class: "animate-spin w-5 h-5 mr-3" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(` Submit &amp; Connect with Freemancodz </button></form></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/get-in-touch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=get-in-touch-CegVHjO8.mjs.map
