
<template>
    <header class="fixed z-20 backdrop-blur-md w-full">
        <div class="container py-4 flex justify-center md:justify-between space-x-4 items-center">
            <img src="/images/logo.png" alt="Freemancodz" class="w-40" />

            <div class="hidden md:flex space-x-4 lg:space-x-6 text-white text-sm">
                <a class="uppercase transition duration-200 hover:text-primary/70" :href="`#${link}`"
                    v-for="(link, index) in links"
                    :key="index"
                    >{{ link }}
                </a>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const links = [
    "about me",
    "skills",
    "experience",
    "portfolio",
    "blog",
    "contact",
];
</script>