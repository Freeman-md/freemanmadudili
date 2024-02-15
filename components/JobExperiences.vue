<template>
  <div class="container space-y-10">
    <h2 class="text-center sm:text-left text-4xl lg:text-5xl text-primary">
      Career Highlights
    </h2>

    <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-start">
      <!-- Display job experience companies -->
      <UiLoading v-if="isFetchingExperiences" text="Fetching companies" class="mx-auto"></UiLoading>
      <JobExperienceCompanies v-else-if="companies.length > 0 && !hasError" :companies="companies" />

      <!-- Display job experience for company -->
      <UiLoading class="mx-auto my-auto w-full md:w-3/4" v-if="isFetchingExperience" text="Fetching experience">
      </UiLoading>
      <UiEmpty v-else-if="!experience || hasError" message="Career Highlights are currently unavailable" />
      <JobExperience v-else :experience="experience" />
    </div>
  </div>
</template>
  
<script setup lang="ts">
const activeExperienceCompany = useActiveExperienceCompany();
const runtimeConfig = useRuntimeConfig();

const apiUrl = runtimeConfig.public.api_url;

const {
  data: experiences,
  error: fetchingExperiencesError,
  pending: isFetchingExperiences,
} = await useFetch(`${apiUrl}/api/experiences`, {
  transform: (experiences: StrapiCollectionResponse<Experience>) => {
    return experiences.data.map((experience) => ({
      ...experience.attributes,
      id: experience.id,
    }));
  },
});

const {
  data: experience,
  pending: isFetchingExperience,
  error: fetchingExperienceError,
} = await useAsyncData(
  `experiences:${activeExperienceCompany.value}`,
  (ctx) => {
    const url = `${apiUrl}/api/experiences/${activeExperienceCompany.value}?populate=*`;

    return $fetch(url);
  },
  {
    transform: (experience: { data: any; meta: object }) => {
      const fields = experience.data.attributes;

      return {
        ...fields,
        id: experience.data.id,
        projects: fields.projects.data.map(
          (project: any) => project.attributes
        ),
      };
    },
    watch: [activeExperienceCompany],
  }
);

const companies = computed(() => {
  if (experiences && experiences.value) {
    return experiences.value.map((experience) => ({
      company: experience.company,
      id: experience.id,
    }));
  }

  return [];
});

// check if either experience(s) error does not have a status code of 200
const hasError = computed(() => {
  if (!fetchingExperiencesError.value || !fetchingExperienceError.value) {
    return false
  }

  return !fetchingExperiencesError.value?.statusCode?.toString().startsWith('2') || !fetchingExperienceError.value?.statusCode.toString().startsWith('2')
})
</script>