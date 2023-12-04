import Project from "~/composables/models/project";
import ProjectService from "~/server/services/project-service";

const projects: Partial<Project>[] = [
    {
        title: "PinVote",
        slug: "pinvote",
        image: "/images/projects/pinvote.png",
        description: "One stop polling app for realtime voting",
        links: {
            github: "https://github.com/Freeman-md/pinvote",
            live: "https://pinvote.freemanmadudili.com",
        },
        technologies: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "EJS",
            "TailwindCSS",
        ],
    },
    {
        title: "Viluxe",
        slug: "viluxe",
        image: "/images/projects/pinvote.png",
        description:
            "Comprehensive E-Commerce Web Application Featuring Seamless Integrated Payment Gateway",
        links: {
            github: "https://github.com/Freeman-md/viluxe",
            live: "https://viluxe.onrender.com",
        },
        technologies: [
            "React.js",
            "TypeScript",
            "Redux",
            "Firebase",
            "TailwindCSS",
        ],
    },
    {
        title: "Circula",
        slug: "circula",
        image: "/images/projects/pinvote.png",
        description: "Personal Contact Manager App",
        links: {
            github: "https://github.com/Freeman-md/circula",
            live: "https://circula-e10ee.web.app/",
        },
        technologies: [
            "React.js",
            "TypeScript",
            "Redux",
            "Firebase",
            "TailwindCSS",
        ],
    },
]

export default defineEventHandler(async (event) => {
    try {
        const data = await ProjectService.insertProjects(projects)

        return {
            statusCode: 201,
            message: 'Successfully inserted projects'
        }
    } catch (error: any) {
        console.log(error)
        throw createError({
            statusCode: 500,
            message: error.message
        })
    }
})