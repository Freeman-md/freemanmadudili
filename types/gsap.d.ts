// gsap.d.ts
import { GSAPStatic } from "gsap";

declare module "#app" {
  interface NuxtApp {
    $gsap: GSAPStatic;
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $gsap: GSAPStatic;
  }
}
