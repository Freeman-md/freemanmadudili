<template>
    <div class="hidden md:block w-[0.15rem] bg-smoky relative" :class="tabContainerHeightInRem">
      <div class="relative w-[0.15rem] h-[2.75rem] bg-primary transition-transform duration-200"
           :style="{ transform: translateYValueInRem }"
      ></div>
    </div>
  </template>
  
  <script setup lang="ts">
  const { tabContainerHeightInRem, translateYValueInRem } = defineProps(['tabContainerHeightInRem', 'translateYValueInRem']);
  </script>
  