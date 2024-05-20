export const useCollaborationAreas = async () => {
    const endpoint = ref('/api/collaboration-areas');
    const transform = (collaborationAreas: StrapiCollectionResponse<CollaborationArea>) => {
      return collaborationAreas.data.map((collaborationArea) => ({
        ...collaborationArea.attributes,
      }));
    };
  
    return await useApiService<StrapiCollectionResponse<CollaborationArea>, CollaborationArea[]>('collaboration-areas', endpoint, transform);
  };