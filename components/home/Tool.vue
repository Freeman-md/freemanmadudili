<template>
    <div
        class="flex flex-col items-center space-y-4 grayscale transition duration-200 hover:grayscale-0 cursor-pointer mr-10">
        <div class="w-20">
            <NuxtImg :src="`/images/tools-and-technologies/${tool.image}`" :alt="tool.title"
                class="w-full object-cover object-center" />
        </div>
        <span class="text-white text-lg font-light">{{
            tool.title
        }}</span>
    </div>
</template>

<script setup lang="ts">

const { tool } = defineProps({
    tool: Object,
});

</script>