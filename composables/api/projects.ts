export const useProjects = () => {
    const runtimeConfig = useRuntimeConfig();
    const apiUrl = runtimeConfig.public.api_url;

    const {
        data: projects,
        error,
        pending,
    } = useFetch(`${apiUrl}/api/projects?populate=*`, {
        transform: (projects: { data: any[]; meta: object }) => {
            return projects.data.map((project) => ({
                ...project.attributes,
                image: `${apiUrl}${project.attributes.image.data.attributes.url}`
            }));
        },
    });

    return {
        projects,
        error,
        pending
    }
}