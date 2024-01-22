export const useExperiences = () => {
    const activeExperienceCompany = useActiveExperienceCompany();
    const runtimeConfig = useRuntimeConfig();
    const { showNotification } = useNotification();

    const apiUrl = runtimeConfig.public.api_url;

    const {
        data: experiences,
        error: fetchingExperiencesError,
        pending: isFetchingExperiences,
    } = useFetch(`${apiUrl}/api/experiences`, {
        transform: (experiences: { data: any[]; meta: object }) => {
            return experiences.data.map((experience) => ({
                ...experience.attributes,
                id: experience.id,
            }));
        },
    });

    const {
        data: experience,
        pending: isFetchingExperience,
        error: fetchingExperienceError,
    } = useAsyncData(
        `experiences:${activeExperienceCompany.value}`,
        (ctx) => {
            const url = `${apiUrl}/api/experiences/${activeExperienceCompany.value}?populate=*`;

            return $fetch(url);
        },
        {
            transform: (experience: { data: any; meta: object }) => {
                const fields = experience.data.attributes;

                return {
                    ...fields,
                    id: experience.data.id,
                    projects: fields.projects.data.map(
                        (project: any) => project.attributes
                    ),
                };
            },
            watch: [activeExperienceCompany],
        }
    );

    const companies = computed(() => {
        if (experiences.value) {
            return experiences.value.map((experience) => ({
                company: experience.company,
                id: experience.id,
            }));
        }

        return [];
    });

    return {
        experiences,
        experience,
        companies,
        isFetchingExperiences,
        isFetchingExperience,
        fetchingExperiencesError,
        fetchingExperienceError
    }
}