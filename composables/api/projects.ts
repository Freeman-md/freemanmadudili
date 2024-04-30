export const useProjects = async (apiUrl: string) => {
    const runtimeConfig = useRuntimeConfig();

    const {
        data: projects,
        error,
        pending,
    } = await useFetch(apiUrl, {
        transform: (projects: StrapiCollectionResponse<Project>) => {
            return projects.data.map((project) => ({
                ...project.attributes,
                image: `${runtimeConfig.public.api_url}${project.attributes?.image?.data.attributes.url}`,
                tools: project.attributes.tools.data.map(tool => tool.attributes)
            }));
        },
    });

    return {
        projects,
        error,
        pending
    }
}