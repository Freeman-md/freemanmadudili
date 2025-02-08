<template>
    <section id="hero" class="container space-y-8">
        <p class="text-primary text-lg text-center md:text-left animate-hero"
            style="opacity: 0; transform: translateY(20px)">
            — {{ appConfig.professional_name }} —
        </p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
            <div class="lg:col-span-2 flex flex-col space-y-8 items-start animate-hero"
                style="opacity: 0; transform: translateY(20px)">
                <h1 class="text-5xl md:text-7xl text-white">
                    I'm a
                    <span class="text-primary">{{
                        appConfig.hero_headline
                        }}</span>
                </h1>
                <div class="text-white" v-html="appConfig.hero_intro"></div>
                <SocialLinks class="inline-block" />
                <a :href="appConfig.resume" target="_blank" class="btn btn-primary">My Resume</a>
            </div>
            <div class="order-first md:order-last flex flex-col space-y-4 items-center justify-center animate-hero"
                style="opacity: 0; transform: translateY(20px)">
                <div class="w-1/2 md:w-full md:h-96 overflow-hidden rounded-xl">
                    <NuxtImg preload placeholder :src="appConfig.hero_image" :alt="appConfig.professional_name"
                        class="object-contain object-center w-full" />
                </div>
                <p class="text-white">
                    A.K.A
                    <span class="text-primary text-lg">{{
                        appConfig.nickname
                        }}</span>
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
p strong {
    @apply text-primary font-bold;
}
</style>

<script setup lang="ts">

const appConfig = useState<FormattedAppConfig>('appConfig');

const { $gsap: gsap } = useNuxtApp()

const heroLoaded = ref(false);

onMounted(() => {
    gsap.to('.animate-hero', {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.2,
        delay: 0,
        ease: 'power3.out',
        onComplete: () => {
            heroLoaded.value = true;
        }
    });
});
</script>