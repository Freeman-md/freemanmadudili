export const useDefaultAppConfig = () => {
    const appConfig = useState<FormattedAppConfig | null>('appConfig', () => null)

    const fetchAppConfig = async () => {
        const apiUrl = useRuntimeConfig().public.api_url

        const { data, error, pending } = await useFetch<StrapiSingleResponse<AppConfig>>(apiUrl + '/api/app-config?populate=*')

        if (!data.value && error) {
            throw createError({ statusCode: error.value?.statusCode, statusMessage: error.value?.message })
        }

        if (data.value) {
            const appConfigData = data.value?.data.attributes

            const professionalLogo = `${apiUrl}${appConfigData.professional_logo.data.attributes.url}`
            const resume = `${apiUrl}${appConfigData.resume.data.attributes.url}`
            const heroImage = `${apiUrl}${appConfigData.hero_image.data.attributes.url}`
            const personalPhoto = `${apiUrl}${appConfigData.personal_photo.data.attributes.url}`

            appConfig.value = {
                ...appConfigData,
                resume,
                professional_logo: professionalLogo,
                hero_image: heroImage,
                personal_photo: personalPhoto
            }
        }
    }

    return {
        appConfig,
        fetchAppConfig
    }
}