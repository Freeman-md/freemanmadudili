export const useDefaultMetaData = () => {
    const metaData = useState<FormattedMetaData | null>('metaData', () => null)

    const fetchMetaData = async () => {
        const apiUrl = useRuntimeConfig().public.api_url


        const { data, error, pending } = await useFetch<StrapiSingleResponse<MetaData>>(apiUrl + '/api/meta-data?populate=*')

        if (!data.value && error) {
            throw createError({ statusCode: error.value?.statusCode, statusMessage: error.value?.message })
        }

        if (data.value) {
            const metaDataAttributes = data.value?.data.attributes

            const image = `${apiUrl}${metaDataAttributes.image.data.attributes.url}`
            const appleTouchIcon = `${apiUrl}${metaDataAttributes.apple_touch_icon.data.attributes.url}`
            const favicon16x16 = `${apiUrl}${metaDataAttributes.favicon_16x16.data.attributes.url}`
            const favicon32x32 = `${apiUrl}${metaDataAttributes.favicon_32x32.data.attributes.url}`
            const manifestFile = `${apiUrl}${metaDataAttributes.manifest_file.data.attributes.url}`

            metaData.value = {
                ...metaDataAttributes,
                image,
                apple_touch_icon: appleTouchIcon,
                favicon_16x16: favicon16x16,
                favicon_32x32: favicon32x32,
                manifest_file: manifestFile
            }
        }
    }

    return {
        metaData,
        fetchMetaData,
    }
}