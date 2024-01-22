<template>
  <div class="container space-y-10">
    <h2 class="text-center sm:text-left text-4xl lg:text-5xl text-primary">
      Career Highlights
    </h2>

    <div
      class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-start"
    >
      <!-- Display job experience companies -->
      <UiLoading
        v-if="isFetchingExperiences"
        text="Fetching companies"
        class="mx-auto"
      ></UiLoading>
      <JobExperienceCompanies v-else-if="companies" :companies="companies" />

      <!-- Display job experience for company -->
      <UiLoading
        class="mx-auto my-auto w-full md:w-3/4"
        v-if="isFetchingExperience"
        text="Fetching experience"
      ></UiLoading>
      <JobExperience v-else-if="experience" :experience="experience" />
      <UiEmpty v-else message="Career Highlights are currently unavailable" />
    </div>
  </div>
</template>
  
<script setup lang="ts">
const { companies, experience, isFetchingExperiences, isFetchingExperience } = useExperiences()
</script>