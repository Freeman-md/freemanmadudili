export const useCollaborationAreas = async () => {
    const runtimeConfig = useRuntimeConfig();
    const apiUrl = runtimeConfig.public.api_url;

    const {
        data: collaborationAreas,
        error,
        pending,
    } = await useFetch(`${apiUrl}/api/collaboration-areas`, {
        transform: (collaborationAreas: StrapiCollectionResponse<CollaborationArea>) => {
            return collaborationAreas.data.map((collaborationArea) => ({
                ...collaborationArea.attributes,
            }));
        },
    });

    return {
        collaborationAreas,
        error,
        pending
    }
}