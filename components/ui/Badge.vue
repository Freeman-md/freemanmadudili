<template>
    <span class="block text-primary bg-primary/10 py-1 px-3 rounded-full min-w-fit">
        {{ text }}
    </span>
</template>

<script setup lang="ts">
const props = defineProps({
    text: String
})
</script>