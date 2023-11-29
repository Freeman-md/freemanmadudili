
<template>
    <header class="container py-2 flex justify-between items-center">
        <img src="/images/logo.png" alt="Freemancodz" class="w-40">

        <div class="flex space-x-4 text-white">
            <span v-for="(link, index) in links" :key="index" class="uppercase ">{{ link }}
            </span>
        </div>
    </header>
</template>

<script setup>
const links = [
    'about me',
    'skills',
    'experience',
    'portfolio',
    'blog',
    'contact'
]
</script>