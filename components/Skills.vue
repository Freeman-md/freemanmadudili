<template>
    <div class="container py-20">
        <h2 class="text-4xl lg:text-5xl xl:text-6xl text-white">Not your regular developer! <span class="text-primary">Skill Sets</span></h2>

        <div class="flex space-x-4 items-end">
            <div class="flex flex-col items-center space-y-4 grayscale transition duration-200 hover:grayscale-0 cursor-pointer" v-for="(tool, index) in data.tools" :key="index">
                <div class="w-40">
                    <img :src="`/images/tools-and-technologies/${tool.image}`" :alt="tool.title" class="w-full object-cover object-center">
                </div>
                <span class="text-white text-lg font-light">{{ tool.title }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/tools')
</script>