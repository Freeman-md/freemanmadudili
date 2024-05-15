<template>
    <footer class="flex flex-col items-center justify-center space-y-4 pt-20 pb-8">
        <SocialLinks />

        <p class="text-smoky text-center">
            &copy; {{ currentYear }} All rights reserved. – Designed & Coded by <a href="https://freemanmadudili.com" class="text-primary underline underline-offset-4">Freeman Madudili</a>
        </p>
    </footer>
</template>

<script setup lang="ts">

const currentYear = (new Date).getFullYear()

const appConfig = useState<FormattedAppConfig>('appConfig')

</script>