<template>
    <div class="flex flex-col space-y-4 items-center justify-center text-center w-4/5 sm:w-3/5 lg:w-1/2 mx-auto">
        <p class="text-white">Get in touch</p>

        <h3 class="text-6xl font-bold text-white">Let's work together</h3>

        <div v-html="appConfig.contact_me_intro" class="text-white">

        </div>

        <NuxtLink to="/get-in-touch" class="btn btn-primary">Connect With Me</NuxtLink>
    </div>
</template>

<script setup lang="ts">

const appConfig = useState<FormattedAppConfig>('appConfig')

</script>