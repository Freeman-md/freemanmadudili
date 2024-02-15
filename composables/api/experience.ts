export const useExperience = async (apiUrl: string, activeExperienceCompany: globalThis.Ref<number | null>) => {
  const {
    data: experience,
    pending: isFetchingExperience,
    error: fetchingExperienceError,
  } = await useAsyncData(
    `experiences:${activeExperienceCompany.value}`,
    async () => {
      const url = `${apiUrl}/api/experiences/${activeExperienceCompany.value}?populate=*`;
      const response = await $fetch<StrapiSingleResponse<Experience>>(url);
      return response;
    },
    {
      transform: (experience: StrapiSingleResponse<Experience>): FormattedExperience => {
        const fields = experience.data.attributes;
        return {
          ...fields,
          id: experience.data.id,
          projects: fields.projects.data.map(project => project.attributes)
        };
      },
      watch: [activeExperienceCompany],
    }
  );

  return { experience, isFetchingExperience, fetchingExperienceError };
};
