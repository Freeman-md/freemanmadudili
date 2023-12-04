import ExperienceService from "~/server/services/experience-service"
import Experience from "~/composables/models/experience";

export default defineEventHandler(async (event) => {
    try {
        const slug = getRouterParam(event, 'slug')

        const data = await ExperienceService.getExperienceBySlug(slug!)

        if (!data) {
            return {} as Partial<Experience>
        }

        return data
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            message: error.message
        })
    }
})