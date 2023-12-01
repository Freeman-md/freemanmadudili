
<template>
    <header class="fixed z-20 backdrop-blur-md w-full">
        <div class="container py-4 flex justify-center md:justify-between space-x-4 items-center">
            <img src="/images/logo.png" alt="Freemancodz" class="w-40" />

            <div class="hidden md:flex space-x-4 lg:space-x-6 text-white text-sm">
                <NuxtLink class="uppercase transition duration-200 hover:text-primary/70" 
                    :to="`#${link}`"
                    v-for="(link, index) in links"
                    :key="index"
                    >{{ link }}
                </NuxtLink>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const links: string[] = ["about", "skills", "experience", "portfolio", "blog", "contact"];
</script>