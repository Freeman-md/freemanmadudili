import ProjectService from "~/server/services/project-service";

export default defineEventHandler(async (event) => {
    try {
        const data = await ProjectService.getAllProjects()

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