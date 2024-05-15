export const useDefaultMetaData = () => {
  const metaData = useState<FormattedMetaData | null>('metaData', () => null);
  const apiUrl = useRuntimeConfig().public.api_url;

  const fetchMetaData = async () => {
    const { data, error, pending } = await useFetch<StrapiSingleResponse<MetaData>>(
      `${apiUrl}/api/meta-data?populate=*`
    );

    if (error.value && error.value.statusCode !== 404) {
      throw createError({ statusCode: error.value.statusCode, statusMessage: error.value.message });
    }

    if (data.value) {
      const metaDataAttributes = data.value.data.attributes;

      metaData.value = {
        title: metaDataAttributes.title,
        description: metaDataAttributes.description,
        url: metaDataAttributes.url,
        image: `${apiUrl}${metaDataAttributes.image?.data?.attributes.url}`,
        apple_touch_icon: `${apiUrl}${metaDataAttributes.apple_touch_icon?.data?.attributes.url}`,
        favicon_16x16: `${apiUrl}${metaDataAttributes.favicon_16x16?.data?.attributes.url}`,
        favicon_32x32: `${apiUrl}${metaDataAttributes.favicon_32x32?.data?.attributes.url}`,
        manifest_file: `${apiUrl}${metaDataAttributes.manifest_file?.data?.attributes.url}`,
      };
    } else {
      metaData.value = getDefaultMetaData();
    }

    return { pending }
  };

  const getDefaultMetaData = (): FormattedMetaData => ({
    title: '{Your Name}\'s Personal Website',
    description: '{Your Name}\'s Website Description',
    url: 'https://yourdomain.com',
    image: `/images/socialmedia.pnh`,
    apple_touch_icon: `/apple-touch-icon.png`,
    favicon_16x16: `/favicon-16x16.png`,
    favicon_32x32: `/favicon-32x32.png`,
    manifest_file: `/site.webmanifest`,
  });

  return {
    metaData,
    fetchMetaData,
  };
};
