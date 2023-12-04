import ExperienceService from "~/server/services/experience-service"
import Experience from "~/composables/experience";

export default defineEventHandler(async (event) => {
    try {
        const data = await ExperienceService.getAllExperiences()

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