export const useExperiences = async (apiUrl: string) => {
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
  
    return { experiences, fetchingExperiencesError, isFetchingExperiences };
  };
  