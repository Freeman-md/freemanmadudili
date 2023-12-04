<template>
    <Transition>
        <aside
            v-if="isSidebarOpen"
            class="fixed md:hidden z-40 w-60 border-2 border-primary rounded-lg backdrop-blur-lg h-fit right-0 inset-y-0 mr-16 mt-16"
        >
            <div
                class="flex flex-col space-y-4 p-6 text-white"
            >
                <NuxtLink
                    v-for="(link, index) in links"
                    :to="`#${link}`"
                    :key="index"
                    class="uppercase transition duration-200 hover:text-primary/70"
                    @click="toggleSidebar"
                    :class="{ 'text-primary': isLinkActive(link) }"
                >
                    {{ link }}
                </NuxtLink>
            </div>
        </aside>
    </Transition>
</template>

<script setup lang="ts">
const { links, isLinkActive } = useAppLinks();
const { isSidebarOpen, toggleSidebar } = useSidebar();
</script>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>