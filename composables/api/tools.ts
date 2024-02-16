export const useTools = async () => {
    const runtimeConfig = useRuntimeConfig();
    const apiUrl = runtimeConfig.public.api_url;

    const {
        data: tools,
        error,
        pending,
    } = await useFetch(`${apiUrl}/api/tools?populate=*`, {
        transform: (tools: StrapiCollectionResponse<Tool>) => {
            return tools.data.map((tool) => ({
                ...tool.attributes,
                image: `${apiUrl}${tool.attributes?.image?.data.attributes.url}`
            }));
        },
    });

    return {
        tools,
        error,
        pending
    }
}