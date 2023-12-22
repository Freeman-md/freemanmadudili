<template>
    <div class="space-y-4">
        <div class="container">
            <h2
                class="text-center sm:text-left text-4xl lg:text-5xl text-white"
            >
                Adaptable Coding Artisan!
                <span class="text-primary">Strengths</span>
            </h2>
        </div>

        <UiLoading
            class="mx-auto my-auto w-full"
            v-if="isFetchingTools"
            text="Fetching skills"
        />
        <VueMarquee :duration="50" v-else-if="tools">
            <div class="flex items-end">
                <div
                    class="flex flex-col items-center space-y-4 grayscale transition duration-200 hover:grayscale-0 cursor-pointer mr-10"
                    v-for="(tool, index) in tools"
                    :key="index"
                >
                    <div class="w-20 sm:w-40">
                        <img
                            :src="`/images/tools-and-technologies/${tool.image}`"
                            :alt="tool.title"
                            class="w-full object-cover object-center"
                        />
                    </div>
                    <span class="text-white text-lg font-light">{{
                        tool.title
                    }}</span>
                </div>
            </div>
        </VueMarquee>
        <UiEmpty v-else message="Skills are currently unavailable" />
    </div>
</template>

<script setup lang="ts">
const { data: tools, pending: isFetchingTools } = await useFetch("/api/tools");
</script>