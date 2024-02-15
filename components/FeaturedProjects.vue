<template>
  <div class="container space-y-6 overflow-hidden">
    <div class="flex space-x-4 items-center justify-between">
      <h2
        class="text-center sm:text-left text-xl sm:text-4xl lg:text-5xl text-primary"
      >
        Featured Projects
      </h2>

      <NuxtLink
        aria-label="View projects archive"
        to="/"
        class="text-sm flex space-x-2 items-center text-smoky stroke-smoky transition duration-200 hover:text-primary hover:stroke-primary"
      >
        <span>view the archive</span>
        <ArrowRightIcon />
      </NuxtLink>
    </div>

    <UiLoading
      v-if="pending"
      text="Fetching projects"
      class="mx-auto"
    ></UiLoading>
    <div
      v-else-if="featuredProjects && !error"
      class="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 xl:gap-0"
    >
      <FeaturedProject
        v-for="(project, index) in featuredProjects"
        :key="index"
        :project="project"
      />
    </div>
    <UiEmpty v-else message="Featured Projects are currently unavailable" />
  </div>
</template>

<script setup lang="ts">
import ArrowRightIcon from "~/assets/svgs/arrow-right.svg";

const { projects, pending, error } = useProjects()

const featuredProjects = computed(() => {
  if (projects.value) {
    return projects.value.filter(project => project.featured);
  }
  
  return [];
});
</script>