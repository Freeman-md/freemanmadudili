export const useExperience = async (activeExperienceCompany: globalThis.Ref<number | null>) => {
  const endpoint = computed(() => `/api/experiences/${activeExperienceCompany.value}?populate=*`);
  const transform = (experience: StrapiSingleResponse<Experience>): FormattedExperience => {
    const fields = experience.data.attributes;
    return {
      ...fields,
      id: experience.data.id,
      projects: fields.projects.data.map(project => project.attributes),
      tools: fields.tools.data.map(tool => tool.attributes)
    };
  };

  return await useApiService<StrapiSingleResponse<Experience>, FormattedExperience>(`experiences:${activeExperienceCompany.value}`, endpoint, transform, [activeExperienceCompany]);
};
