import Experience from "~/types/experience"
import supabase from "../../lib/supabase"

export default defineEventHandler(async (event) => {
    try {
        const { data } = await supabase.from('experiences').select('*')

        if (!data) {
            return []
        }

        return data as Experience[]
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            message: error.message
        })
    }
})