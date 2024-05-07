<template>
    <div class="w-full md:w-3/4 flex flex-col space-y-3 overflow-hidden">
      <div class="animate-pulse">
        <div class="bg-gray-300/30 h-6 w-3/4 rounded"></div>
        <div class="bg-gray-200/30 h-4 w-1/2 rounded mt-2"></div>
        <div class="space-y-4 mt-4">
          <!-- Multiple lines for responsibilities -->
          <div v-for="i in 3" :key="i" class="flex space-x-4">
            <div class="bg-primary rounded-full h-2 w-2"></div>
            <div class="bg-gray-200/30 rounded h-4 w-3/4"></div>
          </div>
        </div>
        <!-- Placeholder for projects or tools -->
        <div class="flex space-x-2 mt-4">
          <div v-for="i in 5" :key="`proj-${i}`" class="bg-gray-200/30 rounded-full h-4 w-20"></div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  </style>
  