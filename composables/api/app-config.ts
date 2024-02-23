export const useDefaultAppConfig = () => {
    const appConfig = useState<AppConfig | null>('appConfig', () => null)

    const fetchAppConfig = async () => {
        const apiUrl = useRuntimeConfig().public.api_url + '/api/app-config'

        const { data, error, pending } = await useFetch<StrapiSingleResponse<AppConfig>>(apiUrl)

        if (data.value) {
            appConfig.value = data.value?.data.attributes
        }
    }

    return {
        appConfig,
        fetchAppConfig
    }
}