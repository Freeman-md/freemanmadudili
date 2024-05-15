<template>
    <div class="relative">
      <div class="bg-secondary w-screen min-h-screen">
        <AppHeader />
  
        <main class="pt-28">
          <NuxtPage />
        </main>
  
        <GetInTouch id="contact" class="mt-20" />
  
        <AppFooter />
  
        <UiSidebar />
      </div>
  
      <UiQuickContact />
  
      <UiNotification />
    </div>
  </template>
  
  <style>
  @import url('~/assets/css/main.css');
  </style>
  
  <script setup lang="ts">
  import { useDefaultAppConfig } from './composables/api/app-config';
  import { useDefaultMetaData } from './composables/api/meta-data';
  
  const { fetchAppConfig, appConfig } = useDefaultAppConfig();
  const { fetchMetaData, metaData } = useDefaultMetaData();
  
  await fetchAppConfig();
  await fetchMetaData();
  
  if (metaData.value) {
    const metaInformation = metaData.value;
    useSeoMeta({
      title: metaInformation.title,
      description: metaInformation.description,
      ogTitle: metaInformation.title,
      ogDescription: metaInformation.description,
      ogImage: metaInformation.image,
      ogUrl: metaInformation.url,
      twitterTitle: metaInformation.title,
      twitterDescription: metaInformation.description,
      twitterImage: metaInformation.image,
      twitterCard: 'summary',
    });
  
    useHead({
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: metaInformation.apple_touch_icon },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: metaInformation.favicon_32x32 },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: metaInformation.favicon_16x16 },
        { rel: 'manifest', href: metaInformation.manifest_file },
      ],
    });
  }
  </script>
  