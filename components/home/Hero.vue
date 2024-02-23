<template>
    <section id="hero" class="container space-y-8">

        <p class="text-primary text-lg text-center md:text-left">— {{ appConfig.professional_name }} —</p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">

            <div class="lg:col-span-2 flex flex-col space-y-8 items-start">

                <h1 class="text-5xl md:text-7xl text-smoky">
                    I'm a <span class="text-primary">
                        {{ appConfig.hero_headline }}
                    </span>
                </h1>

                <div class="text-white" v-html="appConfig.hero_intro">
                </div>

                <SocialLinks class="inline-block" />

                <a :href="appConfig.resume" target="_blank" class="btn btn-primary">My Resume</a>

            </div>

            <div class="order-first md:order-last flex flex-col space-y-4 items-center justify-center">
                <div class="w-1/2 md:w-full md:h-96 overflow-hidden rounded-xl">
                    <NuxtImg preload placeholder :src="appConfig.hero_image" :alt="appConfig.professional_name" class="object-contain object-center w-full" />
                </div>
                <p class="text-smoky">A.K.A <span class="text-primary text-lg">{{ appConfig.nickname }}</span></p>
            </div>

        </div>

    </section>
</template>

<style scoped>
p strong {
    @apply text-primary font-bold
}
</style>

<script setup lang="ts">

const appConfig = useState<FormattedAppConfig>('appConfig')

</script>