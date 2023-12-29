export const useProjects = () => {
    const supabaseClient = useSupabaseClient()

    const getAllProjects = async () => await supabaseClient.from('projects').select('*');

    return {
        getAllProjects
    }
}