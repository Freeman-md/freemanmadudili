<template>
    <div class="md:hidden w-full flex h-[0.15rem] bg-smoky relative">
      <div class="h-[0.15rem] relative bg-primary transition-transform duration-200"
           :style="{ width: tabWidthInPercent, transform: translateXValueInPercent }"
      ></div>
    </div>
  </template>
  
  <script setup lang="ts">
  const { tabWidthInPercent, translateXValueInPercent } = defineProps(['tabWidthInPercent', 'translateXValueInPercent']);
  </script>
  