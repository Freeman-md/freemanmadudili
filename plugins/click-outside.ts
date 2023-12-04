interface HTMLElementWithClickOutsideHandler extends HTMLElement {
    __ClickOutsideHandler__: (event: Event) => void;
  }

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('click-outside', {
        mounted(el: HTMLElementWithClickOutsideHandler, binding: { value: (event: Event) => void }) {
            el.__ClickOutsideHandler__ = (event: Event) => {
              if (!(el === event.target || el.contains(event.target as Node))) {
                binding.value(event);
              }
            };
            document.body.addEventListener('click', el.__ClickOutsideHandler__);
          },
          unmounted(el: HTMLElementWithClickOutsideHandler) {
            document.body.removeEventListener('click', el.__ClickOutsideHandler__);
          },
    })
})