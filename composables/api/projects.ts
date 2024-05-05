export const useProjects = async (endpoint: string = '/api/projects?populate=*') => {
    const runtimeConfig = useRuntimeConfig();

    const apiUrl = runtimeConfig.public.api_url + endpoint

    const {
        data: projects,
        error,
        pending,
    } = await useFetch(apiUrl, {
        transform: (projects: StrapiCollectionResponse<Project>) => {
            return projects.data.map((project) => ({
                ...project.attributes,
                image: `${runtimeConfig.public.api_url}${project.attributes?.image?.data.attributes.url}`,
                tools: project.attributes.tools.data.map(tool => tool.attributes),
                link: (project.attributes.links.live || project.attributes.links.github)?.replace('https://', '') || ''
            }));
        },
    });

    return {
        projects,
        error,
        pending
    }
}