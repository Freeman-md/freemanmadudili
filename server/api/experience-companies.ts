import ExperienceService from "../services/experience-service"

export default defineEventHandler(async (event) => {
    try {
        const data = await ExperienceService.getExperienceCompanies()

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