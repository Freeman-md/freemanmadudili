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
                v-if="fetchingExperienceCompanies.pending"
                text="Fetching companies"
                class="mx-auto"
            ></UiLoading>
            <JobExperienceCompanies v-else-if="fetchingExperienceCompanies.data" :companies="fetchingExperienceCompanies.data" />

            <!-- Display job experience for company -->
            <UiLoading
                class="mx-auto my-auto w-full md:w-3/4"
                v-if="fetchingExperience.pending"
                text="Fetching experience"
            ></UiLoading>
            <JobExperience v-else-if="fetchingExperience.data" :experience="fetchingExperience.data" />
            <UiEmpty v-else message="Career Highlights are currently unavailable" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import Experience from "~/composables/models/experience";

const fetchingExperienceCompanies = reactive({
    data: null as { company: never; slug: never; }[] | null,
    pending: false,
    error: null as string | null,
});

const fetchingExperience = reactive({
    data: {} as Partial<Experience>,
    pending: false,
    error: null as string | null,
});

const activeExperienceCompany = useActiveExperienceCompany();
const { showNotification } = useNotification();
const experiencesApi = useExperiences();

const fetchExperienceCompanies = async () => {
    try {
        fetchingExperienceCompanies.pending = true;
        const response = await experiencesApi.getExperienceCompanies();
        if (response && response.status === 200) {
            fetchingExperienceCompanies.data = response.data;
        }
    } catch (error: any) {
        showNotification(error.message || "An error has occurred", "error");
    } finally {
        fetchingExperienceCompanies.pending = false;
    }
};

const fetchExperience = async () => {
    if (!activeExperienceCompany.value) return;

    try {
        fetchingExperience.pending = true;
        const response = await experiencesApi.getExperience(activeExperienceCompany.value);
        if (response && response.status === 200) {
            fetchingExperience.data = response.data!;
        }
    } catch (error: any) {
        showNotification(error.message || "An error has occurred", "error");
    } finally {
        fetchingExperience.pending = false;
    }
};

onMounted(fetchExperienceCompanies);

watch(activeExperienceCompany, fetchExperience, { immediate: true });
</script>