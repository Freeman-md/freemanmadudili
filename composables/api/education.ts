export const useEducations = async () => {
    const runtimeConfig = useRuntimeConfig();
    const apiUrl = runtimeConfig.public.api_url;

    const {
        data: educations,
        error,
        pending,
    } = await useFetch(`${apiUrl}/api/educations`, {
        transform: (educations: StrapiCollectionResponse<Education>) => {
            return educations.data.map((education) => ({
                ...education.attributes,
                end_date: new Date(education.attributes.end_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
            }));
        },
    });

    return {
        educations,
        error,
        pending
    }
}