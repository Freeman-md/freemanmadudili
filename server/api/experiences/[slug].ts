import supabase from "~/server/lib/supabase"
import Experience from "~/types/experience"

export default defineEventHandler(async (event) => {
    try {
        const slug = getRouterParam(event, 'slug')

        const { data } = await supabase.from('experiences').select('*').eq('slug', slug)

        if (!data) {
            return {} as Partial<Experience>
        }

        return data[0] as Experience
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            message: error.message
        })
    }
})