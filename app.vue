<template>
    <div class="relative">
        <div class="bg-secondary w-screen min-h-screen">
            <AppHeader />

            <NuxtPage />

            <GetInTouch id="contact" class="mt-20" />

            <AppFooter />

            <UiSidebar />
        </div>

        <UiQuickContact />

        <UiNotification />
    </div>
</template>

<style>
@import url("~/assets/css/main.css");
</style>

<script setup lang="ts">
const title = "Merry Christmas! 🎄🎁 | Freeman Madudili - Digital Coding Artisan"
const description = "Full Stack Developer crafting exceptional digital experiences. Explore my portfolio and witness the fusion of creativity and technology. Let's build the future of the web together"
const url = "https://freemanmadudili.com"
const imageUrl = "/images/socialmedia.png"

useSeoMeta({
    title: title,
    description: description,
    ogTitle: title,
    ogDescription: description,
    ogImage: imageUrl,
    ogUrl: url,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: imageUrl,
    twitterCard: "summary",
});

useHead({
    htmlAttrs: {
        lang: "en",
    },
    link: [
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
        },
        {
            rel: "manifest",
            href: "/site.webmanifest",
        },
    ],
});
</script>