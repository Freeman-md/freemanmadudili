
<template>
    <header class="fixed z-50 backdrop-blur-md w-full">
        <div class="container py-4 flex justify-between space-x-4 items-center">
            <NuxtLink to="/">
                <img src="/images/logo.png" alt="Freemancodz" class="w-40" />
            </NuxtLink>

            <div class="hidden md:flex space-x-4 lg:space-x-6 text-white text-sm">
                <NuxtLink class="uppercase transition duration-200 hover:text-primary/70" 
                    :to="`#${link}`"
                    v-for="(link, index) in links"
                    :key="index"
                    :class="{ 'text-primary': isLinkActive(link) }"
                    >{{ link }}
                </NuxtLink>
            </div>

            <button class="space-y-2 inline-block md:hidden" @click.prevent="() => toggleSidebar()">
                <div class="w-6 h-0.5 bg-primary transform transition duration-200" :class="{'rotate-45 translate-y-1': isSidebarOpen}"></div>
                <div class="w-6 h-0.5 bg-primary transform transition duration-200" :class="{'-rotate-45 -translate-y-[0.35rem]': isSidebarOpen}"></div>
            </button>
        </div>
    </header>
</template>

<script setup lang="ts">
const { links, isLinkActive } = useAppLinks()
const { isSidebarOpen, toggleSidebar } = useSidebar()
</script>