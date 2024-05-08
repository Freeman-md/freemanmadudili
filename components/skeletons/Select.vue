<template>
    <div class="form-control animate-pulse">
      <div class="w-10 h-8 bg-gray-300 rounded-full"></div> <!-- Placeholder for icon -->
      <div class=" bg-gray-300 rounded-md h-8 w-full"></div> <!-- Placeholder for select -->
    </div>
  </template>
  
  <style scoped>
  .form-control {
    display: flex;
    align-items: center;
    gap: 0.5rem; /* Adjust gap as needed */
  }
  
  .animate-pulse {
    animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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
  