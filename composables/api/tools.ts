export const useTools = async () => {
    const runtimeConfig = useRuntimeConfig();
    const apiUrl = runtimeConfig.public.api_url;
    const endpoint = ref('/api/tools?populate=*');

    const transform = (tools: StrapiCollectionResponse<Tool>) => {
        return tools.data.map((tool) => ({
            ...tool.attributes,
            image: `${apiUrl}${tool.attributes?.image?.data.attributes.url}`
        }));
    };

    return await useApiService<StrapiCollectionResponse<Tool>, FormattedTool[]>('tools', endpoint, transform);
};
