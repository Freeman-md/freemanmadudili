export const useProjects = async (endpoint: globalThis.Ref<string>) => {
    const runtimeConfig = useRuntimeConfig();

    const apiUrl = runtimeConfig.public.api_url

    const {
        data: projects,
        error,
        pending,
    } = await useAsyncData(
        `projects:${endpoint.value}`,
        async () => {
            const url = apiUrl + endpoint.value
            const response = await $fetch<StrapiCollectionResponse<Project>>(url);
            return response;
        },
        {
            transform: (projects: StrapiCollectionResponse<Project>) => {
                return projects.data.map((project) => ({
                    ...project.attributes,
                    image: `${runtimeConfig.public.api_url}${project.attributes?.image?.data.attributes.url}`,
                    tools: project.attributes.tools.data.map(tool => tool.attributes),
                    link: (project.attributes.links.live || project.attributes.links.github)?.replace('https://', '') || ''
                }));
            },
            watch: [endpoint],
        });

    return {
        projects,
        error,
        pending
    }
}