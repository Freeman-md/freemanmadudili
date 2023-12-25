<template>
    <transition name="slide">
        <div
            v-if="isVisible"
            class="fixed z-50 top-20 right-4 backdrop-blur-md border-2 border-primary bg-primary/10 text-primary p-4 rounded shadow-lg"
        >
            {{ notification || "Thanks for Connecting" }}
        </div>
    </transition>
</template>
  
  <script setup>
const { notification, isVisible } = useNotification();
</script>
  
  <style>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s, opacity 0.5s;
}
.slide-enter-from,
.slide-leave-to {
    transform: translateX(10rem);
    opacity: 0;
}
</style>
  