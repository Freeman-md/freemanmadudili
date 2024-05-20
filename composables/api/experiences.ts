export const useExperiences = async () => {
  const endpoint = ref('/api/experiences');
  const transform = (experiences: StrapiCollectionResponse<Experience>) => {
    return experiences.data.map((experience) => ({
      ...experience.attributes,
      id: experience.id,
    }));
  };

  return await useApiService<StrapiCollectionResponse<Experience>, Experience[]>('experiences', endpoint, transform);
};
