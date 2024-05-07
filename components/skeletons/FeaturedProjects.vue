<template>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 xl:gap-24">
      <div v-for="i in 3" :key="i" class="group transform transition duration-200 hover:scale-105 rounded-lg overflow-hidden shadow-lg">
        <div class="animate-pulse">
          <div class="bg-gray-200 rounded-lg h-48 sm:h-64 md:h-80 lg:h-60 xl:h-72"></div> <!-- Placeholder for the image -->
          <div class="py-4">
            <div class="bg-gray-300 rounded h-6 mb-2"></div> <!-- Title -->
            <div class="bg-gray-300 rounded h-4 w-5/6 mb-4"></div> <!-- Description -->
            <div class="flex space-x-2"> <!-- Tags -->
              <div class="bg-gray-300 rounded-full h-4 w-16"></div>
              <div class="bg-gray-300 rounded-full h-4 w-16"></div>
              <div class="bg-gray-300 rounded-full h-4 w-16"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .animate-pulse {
    @apply bg-transparent;
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
  