import supabase from "~/server/lib/supabase"
import Experience from "~/types/experience"

export default defineEventHandler(async (event) => {
    try {
        const id = getRouterParam(event, 'id')

        const { data } = await supabase.from('experiences').select('*').eq('id', id)

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