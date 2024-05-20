export const useEducations = async () => {
    const endpoint = ref('/api/educations');
    const transform = (educations: StrapiCollectionResponse<Education>) => {
        return educations.data.map((education) => ({
            ...education.attributes,
        }));
    };

    return await useApiService<StrapiCollectionResponse<Education>, Education[]>('educations', endpoint, transform);
};