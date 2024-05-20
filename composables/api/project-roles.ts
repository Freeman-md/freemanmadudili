export const useProjectRoles = async () => {
  const endpoint = ref('/api/project-roles');
  const transform = (projectRoles: StrapiCollectionResponse<ProjectRole>) => {
    return projectRoles.data.map((projectRole) => ({
      ...projectRole.attributes,
    }));
  };

  return await useApiService<StrapiCollectionResponse<ProjectRole>, ProjectRole[]>('project-roles', endpoint, transform);
};