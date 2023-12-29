<template>
    <transition name="slide">
        <div
            v-if="isVisible"
            class="fixed z-50 top-20 right-4 backdrop-blur-md border-2 p-4 rounded shadow-lg"
            :class="{
                'border-primary bg-primary/10 text-primary':
                    notificationType === 'success',
                'border-red-500 bg-red-500/10 text-red-500':
                    notificationType === 'error',
            }"
        >
            {{ notificationMessage || "Thanks for Connecting" }}
        </div>
    </transition>
</template>
  
  <script setup>
const { notificationMessage, notificationType, isVisible } = useNotification();
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
  