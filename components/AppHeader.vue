
<template>
    <header class="fixed backdrop:blur-md w-full">
        <div class="container py-4 flex justify-between items-center">
            <img src="/images/logo.png" alt="Freemancodz" class="w-40" />

            <div class="flex space-x-6 text-white text-xs">
                <a class="uppercase transition duration-200 hover:text-primary/70" :href="`#${link}`"
                    v-for="(link, index) in links"
                    :key="index"
                    >{{ link }}
                </a>
            </div>
        </div>
    </header>
</template>

<script setup>
const links = [
    "about me",
    "skills",
    "experience",
    "portfolio",
    "blog",
    "contact",
];
</script>