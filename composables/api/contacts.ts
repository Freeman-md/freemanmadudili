export const useContacts = () => {
    const runtimeConfig = useRuntimeConfig()
    const apiUrl = runtimeConfig.public.api_url

    const createContact = async (data: Contact) => {
        console.log('making request')
        return await useFetch(`${apiUrl}/api/contacts`, {
            method: 'POST',
            body: {
                data
            },
        })
    }

    return {
        createContact
    }
}