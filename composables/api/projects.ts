export const useProjects = async () => {
    const runtimeConfig = useRuntimeConfig();
    const apiUrl = runtimeConfig.public.api_url;

    const {
        data: projects,
        error,
        pending,
    } = await useFetch(`${apiUrl}/api/projects?populate=*`, {
        transform: (projects: StrapiCollectionResponse<Project>) => {
            return projects.data.map((project) => ({
                ...project.attributes,
                image: `${apiUrl}${project.attributes?.image?.data.attributes.url}`
            }));
        },
    });

    return {
        projects,
        error,
        pending
    }
}