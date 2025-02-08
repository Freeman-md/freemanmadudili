<template>
    <span ref="spanRef" :class="classes">
        {{ text }}
    </span>
</template>

<script setup lang="ts">
type BadgeProps = {
    text: string;
    selected?: boolean;
};
const props = defineProps<BadgeProps>();
const element = ref('span')
const spanRef = ref<HTMLElement | null>(null);
const classes = computed(() => {
    const defaultClasses = 'block py-1 px-3 rounded-full min-w-fit border border-transparent transition'

    if (element.value === 'span') {
        return defaultClasses + ' text-primary bg-primary/10'
    }

    if (props.selected === false) {
        return defaultClasses + ' !border-smoky text-white'
    } else {
        return defaultClasses + ' text-primary bg-primary/10'
    }
})

onMounted(() => {
    if (spanRef.value && spanRef.value.role) {
        element.value = spanRef.value.role
    }
});
</script>