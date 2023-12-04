<template>
    <div class="container space-y-10">
        <h2 class="text-center sm:text-left text-4xl lg:text-5xl text-primary">
            Career Highlights
        </h2>

        <div
            class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-start"
        >
            <!-- Display job experience companies -->
            <Loading
                v-if="isFetchingCompanies"
                text="Fetching companies"
                class="mx-auto"
            ></Loading>
            <JobExperienceCompanies v-else :companies="companies" />

            <Loading
                class="mx-auto my-auto w-full md:w-3/4"
                v-if="isFetchingExperience"
                text="Fetching experience"
            ></Loading>

            <JobExperience v-else-if="experience" :experience="experience" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import type Experience from "~/types/experience";

const activeExperienceCompany = useActiveExperienceCompany();

const { data: companies, pending: isFetchingCompanies } = await useFetch<
    Partial<Experience>[] | null
>("/api/experience-companies");

const { data: experience, pending: isFetchingExperience, execute: fetchExperiences } =
    await useAsyncData<Experience>(
        `experiences:${activeExperienceCompany.value}`,
        () => {
            return $fetch(`/api/experiences/${activeExperienceCompany.value}`);
        },
        {
            watch: [activeExperienceCompany],
            immediate: false,
        }
    );

onMounted(() => {
    setTimeout(() => {
        fetchExperiences()
    }, 500);
})
</script>
  