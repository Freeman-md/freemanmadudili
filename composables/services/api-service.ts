export const useApiService = async <T, R>(
  key: string,
  endpoint: globalThis.Ref<string>,
  transform: (data: T) => R,
  watchParams: any[] = [],
) => {
  const runtimeConfig = useRuntimeConfig();
  const apiUrl = runtimeConfig.public.api_url;

  const { data, error, pending } = await useAsyncData(
    key,
    async () => {
      const url = `${apiUrl}${endpoint.value}`;
      const response = await $fetch<T>(url);
      return response;
    },
    {
      transform,
      watch: watchParams,
    }
  );

  return { data, error, pending };
};