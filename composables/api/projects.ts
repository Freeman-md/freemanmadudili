export const useProjects = () => {
    const runtimeConfig = useRuntimeConfig();
    const apiUrl = runtimeConfig.public.api_url;

    const { showNotification } = useNotification();

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

    if (error.value) {
        const errorMessage = error.value.message

        showNotification("Failed to fetch projects");
    }

    return {
        projects,
        error,
        pending
    }
}