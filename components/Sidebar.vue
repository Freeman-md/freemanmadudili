<template>
    <Transition>
        <aside
            v-if="isSidebarOpen"
            class="fixed md:hidden z-40 w-2/3 backdrop-blur-md h-screen right-0 inset-y-0"
        >
            <div
                class="flex flex-col space-y-8 p-6 mt-16 text-white"
            >
                <NuxtLink
                    v-for="(link, index) in links"
                    :to="`#${link}`"
                    :key="index"
                    class="uppercase text-xl transition duration-200 hover:text-primary/70"
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
    transition: transform 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    transform: translateX(100%);
}
</style>