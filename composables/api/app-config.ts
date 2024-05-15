
export const useDefaultAppConfig = () => {
  const appConfig = useState<FormattedAppConfig | null>('appConfig', () => null);
  const apiUrl = useRuntimeConfig().public.api_url;
  
  const fetchAppConfig = async () => {
    const { data, error, pending } = await useFetch<StrapiSingleResponse<AppConfig>>(
      `${apiUrl}/api/app-config?populate=*`
    );

    if (error.value && error.value.statusCode !== 404) {
      throw createError({ statusCode: error.value.statusCode, statusMessage: error.value.message });
    }

    if (data.value) {
      const appConfigData = data.value.data.attributes;

      appConfig.value = {
        professional_name: appConfigData.professional_name,
        professional_email: appConfigData.professional_email,
        nickname: appConfigData.nickname,
        hero_headline: appConfigData.hero_headline,
        about_me_intro: appConfigData.about_me_intro,
        introduction: appConfigData.introduction,
        about_me: appConfigData.about_me,
        hero_intro: appConfigData.hero_intro,
        contact_me_intro: appConfigData.contact_me_intro,
        professional_logo: `${apiUrl}${appConfigData.professional_logo.data.attributes.url}`,
        resume: `${apiUrl}${appConfigData.resume.data.attributes.url}`,
        hero_image: `${apiUrl}${appConfigData.hero_image.data.attributes.url}`,
        personal_photo: `${apiUrl}${appConfigData.personal_photo.data.attributes.url}`,
        socials: appConfigData.socials,
        createdAt: appConfigData.createdAt,
        publishedAt: appConfigData.publishedAt
      };
    } else {
      appConfig.value = getDefaultAppConfig();
    }

    return { pending }
  };

  const getDefaultAppConfig = (): FormattedAppConfig => ({
    professional_name: '{Your Name}',
    professional_email: 'default@example.com',
    nickname: '{Your Nickname}',
    hero_headline: '{Your Headline}',
    about_me_intro: '{Your About Intro}',
    introduction: '{Your Introduction}',
    about_me:  '{About You}',
    hero_intro: '{Your Hero Intro}',
    contact_me_intro: '{Your Contact Intro}',
    professional_logo: `${apiUrl}/default-logo.png`,
    resume: `${apiUrl}/default-resume.pdf`,
    hero_image: `${apiUrl}/default-hero.png`,
    personal_photo: `${apiUrl}/default-photo.png`,
    socials: { linkedin: '', github: '' },
    createdAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
  });

  return {
    appConfig,
    fetchAppConfig,
  };
};
