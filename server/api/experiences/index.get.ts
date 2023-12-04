import ExperienceService from "~/server/services/experience-service"

export default defineEventHandler(async (event) => {
    try {
        const data = await ExperienceService.getAllExperiences()

        if (!data) {
            return []
        }

        return data
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            message: error.message
        })
    }
})