export const useProjects = async (endpoint: globalThis.Ref<string>) => {
    const runtimeConfig = useRuntimeConfig();
    const apiUrl = runtimeConfig.public.api_url;

    const transform = (projects: StrapiCollectionResponse<Project>) => {
        return projects.data.map((project) => ({
            ...project.attributes,
            image: `${apiUrl}${project.attributes?.image?.data.attributes.url}`,
            tools: project.attributes.tools.data.map(tool => tool.attributes),
            link: (project.attributes.links.live || project.attributes.links.github)?.replace('https://', '') || ''
        }));
    };

    return await useApiService<StrapiCollectionResponse<Project>, FormattedProject[]>(`projects:${endpoint.value}`, endpoint, transform, [endpoint]);
};
