<template>
    <div class="container space-y-6 overflow-hidden">
        <div class="flex space-x-4 items-center justify-between">
            <h2 class="text-center sm:text-left text-xl sm:text-4xl lg:text-5xl text-primary">
                Featured Projects
            </h2>

            <NuxtLink aria-label="View projects archive" to="/projects"
                class="text-sm flex space-x-2 items-center text-white stroke-smoky transition duration-200 hover:text-primary hover:stroke-primary">
                <span>view the archive</span>
                <ArrowRightIcon />
            </NuxtLink>
        </div>

        <SkeletonsFeaturedProjects v-if="pending" />

        <UiEmpty v-else-if="(projects && projects.length === 0) || error"
            message="Featured Projects are currently unavailable">
        </UiEmpty>

        <div v-else class="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 xl:gap-0 xl:gap-y-10">
            <HomeFeaturedProject v-for="(project, index) in projects" :key="index" :project="project" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ArrowRightIcon from "~/assets/svgs/arrow-right.svg";

const endpoint = ref(`/api/projects?populate=*&filters[featured][$eq]=true&pagination[pageSize]=6`);

const { data: projects, pending, error } = await useProjects(endpoint);
</script>