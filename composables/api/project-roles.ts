export const useProjectRoles = async () => {
    const runtimeConfig = useRuntimeConfig();
    const apiUrl = runtimeConfig.public.api_url;

    const {
        data: projectRoles,
        error,
        pending,
    } = await useFetch(`${apiUrl}/api/project-roles`, {
        transform: (projectRoles: StrapiCollectionResponse<ProjectRole>) => {
            return projectRoles.data.map((projectRole) => ({
                ...projectRole.attributes,
            }));
        },
    });

    return {
        projectRoles,
        error,
        pending
    }
}