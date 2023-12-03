import supabase from "~/server/lib/supabase"
import Experience from "~/types/experience"

export default defineEventHandler(async (event) => {
    try {
        const { data } = await supabase.from('experiences').select('company')

    if (!data) {
        return []
    }
    
    return data as Partial<Experience>[]
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            message: error.message
        })
    }
})