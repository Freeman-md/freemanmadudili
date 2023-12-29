export const useProjects = () => {
    const supabaseClient = useSupabaseClient()

    const getAllProjects = async () => {
        const response = await await supabaseClient.from('projects').select('*');

        return response
    }

    return {
        getAllProjects
    }
}