export const useExperiences = () => {
    const supabaseClient = useSupabaseClient()

    const getAllExperiences = async () => await supabaseClient.from('experiences').select('*');

    const getExperience = async (slug: string) =>  await supabaseClient.from('experiences').select('*').eq('slug', slug).single();

    const getExperienceCompanies = async () => await supabaseClient.from('experiences').select('company, slug').order('id', { ascending: true });

    return {
        getAllExperiences,
        getExperience,
        getExperienceCompanies,
    }
}