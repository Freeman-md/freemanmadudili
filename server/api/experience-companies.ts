import ExperienceService from "../services/experience-service"
import Experience from "~/composables/models/experience";

export default defineEventHandler(async (event) => {
    try {
        const data = await ExperienceService.getExperienceCompanies()

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