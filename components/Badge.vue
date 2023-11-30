<template>
    <span class="text-primary bg-primary/10 py-1 px-3 rounded-full">
        {{ text }}
    </span>
</template>

<script setup lang="ts">
const props = defineProps({
    text: String
})
</script>