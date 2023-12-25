import ContactService from "../services/contact-service"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    try {
        await ContactService.insertContact(body)

        return {
            statusCode: 201,
            message: 'Successfully inserted contact'
        }
    } catch (error: any) {
        console.log(error)
        throw createError({
            statusCode: 500,
            message: error.message
        })
    }
})