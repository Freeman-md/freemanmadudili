<template>
    <div class="max-w-4xl mx-auto flex flex-col space-y-4 items-center justify-center">
        <lottie-player class="p-0 h-20 w-20" src="/js/lottie/empty.json" speed="1" loop autoplay></lottie-player>
        <p class="text-white text-center" v-html="message"></p>
    </div>
</template>

<script setup lang="ts">
type EmptyProps = {
    message: string;
};

const { message } = withDefaults(defineProps<EmptyProps>(), {
    message: "This resource is currently unavailable",
});
</script>