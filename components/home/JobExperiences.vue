<template>
    <div class="container space-y-10" ref="experiencesSection">
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
            <HomeJobExperienceCompanies
                v-else-if="companies.length > 0 && !hasError"
                :companies="companies"
            />

            <transition name="fade" mode="out-in">
                <!-- Display job experience for company -->
                <SkeletonsJobExperience
                    class="mx-auto my-auto w-full md:w-3/4"
                    key="experience-skeleton"
                    v-if="isFetchingExperience"
                >
                </SkeletonsJobExperience>
                <UiEmpty
                    v-else-if="!experience || hasError"
                    message="Career Highlights are currently unavailable"
                    class="w-full"
                />
                <HomeJobExperience v-else key="experience-content" :experience="experience" />
            </transition>
        </div>
    </div>
</template>
  
<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp();

const activeExperienceCompany = useActiveExperienceCompany();

// Fetch experiences
const { data: experiences, error: fetchingExperiencesError, pending: isFetchingExperiences } = await useExperiences();

// Set active experience company if experiences are available
if (experiences.value && experiences.value?.length > 0) {
    activeExperienceCompany.value = experiences.value[0].id;
}

// Fetch single experience based on active experience company
const { data: experience, pending: isFetchingExperience, error: fetchingExperienceError } = await useExperience(activeExperienceCompany);

// Computed properties
const companies = computed(() => {
  return experiences?.value ? experiences.value.map((experience: Experience) => ({
    company: experience.company,
    id: experience.id,
  })) : [];
});

const hasError = computed(() => {
  return fetchingExperiencesError.value || fetchingExperienceError.value;
});

// GSAP Reference for the experiences section
const experiencesSection = ref(null);

// GSAP animation
onMounted(() => {
  if (experiencesSection.value) {
    gsap.from(experiencesSection.value, {
      scrollTrigger: {
        trigger: experiencesSection.value,
        start: 'top bottom',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });
  }
});
</script>