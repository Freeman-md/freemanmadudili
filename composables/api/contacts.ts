import type Contact from "../models/contact";

export const useContacts = () => {
    const supabaseClient = useSupabaseClient()

    const createContact = async (data: Contact) => {
        const response = await supabaseClient.from('contacts').insert([data]).single();

        return response
    }

    return {
        createContact
    }
}