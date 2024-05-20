export const useEducations = async () => {
    const endpoint = ref('/api/educations');
    const transform = (educations: StrapiCollectionResponse<Education>) => {
        return educations.data.map((education) => ({
            ...education.attributes,
            end_date: new Date(education.attributes.end_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        }));
    };

    return await useApiService<StrapiCollectionResponse<Education>, FormattedEducation[]>('educations', endpoint, transform);
};