import ExperienceService from "~/server/services/experience-service"
import Experience from "~/composables/models/experience";

const experiences: Partial<Experience>[] = [
    {
        company: "Pay4Me, Inc.",
        slug: "pay4me-inc",
        position: "Mid-Level Frontend Developer",
        start_year: 2022,
        end_year: 2023,
        responsibilities: [
            "Worked closely with the Head of Engineering and Backend Developers to manage and revamp the company’s website. resulting in a 20% increase in organic traffic and a 15% increase in conversion rate.",
            "Collaborated with the Head of Engineering and the design team to implement the B2B iteration of the corporate website with Nuxt.js, Vue.js, and TailwindCSS. This initiative facilitated seamless global school fee payments, strengthening partnerships with businesses and educational institutions.",
            "Optimized website performance by reducing page loading time by 30%, resulting in a better user experience and increased customer satisfaction."
        ],
        projects: [
            {
                title: "Pay4Me, Inc.",
                links: {
                    live: "https://pay4me.app"
                },
            },
        ],
        technologies: [
            "Nuxt 3",
            "Vue 3",
            "TypeScript",
            "Tailwind CSS",
            "JavaScript",
            "MySQL",
            "Adobe XD",
            "Git",
            "Vuex",
            "PHP",
            "JSON",
            "REST APIs",
            "E2E Testing",
            "Jest",
            "Cypress"
        ],
    },
    {
        company: "ScholarsHQ",
        slug: "scholars-hq",
        position: "Frontend Developer",
        start_year: 2021,
        end_year: 2022,
        responsibilities: [
            "Collaborated with a team of backend developers and UI/UX designers to develop and maintain a study abroad agency web application using Vue.js, TailwindCSS, Vuex, Laravel, and MySQL. Implemented an outstanding UI, API integration, and payment integrations which resulted in a significant 100% increase in conversion rate and generated over $6,000 in revenue within a week of launch.",
            "Developed a car booking platform using Vue.js, Nuxt.js, VueX, and TailwindCSS which had an intuitive user interface, was fully responsive, and allowed users to easily book cars, track their reservations, and make payments.",
            "Developed an outstanding admin panel for an Advanced Electronic Assessments system for informed mental health care using Vue.js, Nuxt.js, VueX, and TailwindCSS. The panel allowed administrators to easily track every single activity on the website and manage user accounts, assessments, and reports. The system was a critical tool for mental health professionals to provide informed care to their patients."
        ],
        projects: [
            {
                title: "AcrossTheHorizon",
                links: {
                    live: "https://acrossthehorizon.net"
                },
            },
            {
                title: "BirBur",
                links: {
                    live: "https://birbur-updated.netlify.app"
                },
            },
            {
                title: "Clear Assessments",
                links: {
                    live: "https://www.myclearassessments.com/"
                },
            },
        ],
        technologies: [
            "Nuxt 3",
            "Vue 3",
            "TypeScript",
            "Tailwind CSS",
            "JavaScript",
            "MySQL",
            "Adobe XD",
            "Git",
            "Vuex",
            "PHP",
            "JSON",
            "REST APIs",
            "E2E Testing",
            "Jest",
            "Cypress"
        ],
    },
    {
        company: "Xclusive Designs",
        slug: "xclusive-designs",
        position: "Software Developer",
        start_year: 2019,
        end_year: 2021,
        responsibilities: [
            "Successfully led a team of engineers, and oversaw the development and implementation of TRU, a marketplace, ensured timely project completion, met high-quality standards, managed a team of 5 IT professionals (Creative Designers, Mobile App and Backend Developers), and supervised all aspects of the software development lifecycle.",
            "Contributed significantly to the development of Viluxe, an advanced E-Commerce Platform, utilizing ReactJS and TypeScript with an emphasis on modern design principles. Employed Redux for efficient state management, integrated Stripe for secure checkout, and leveraged Firebase for robust data storage.",
            "Played a key role in building Circula, a versatile Personal Contact Manager leveraging React, TypeScript, and Redux. Engineered functionalities encompassing public and private fields, along with integrating Google Places API, Cloud Firestore, Google Authentication, and QR code sharing to create an intuitive and feature-rich user experience.",
            "Led the development of an e-commerce application alongside a 5-member technical team, achieving the notable recognition of being ranked the third best in a Global Techwiz.",
            "Developed a data visualization website, Forexify using TypeScript, AWS Lambda functions, DynamoDB, AWS Comprehend and serverless technology, with web sockets to process and display data in real-time. Reduced the website's loading time by 50% and increased user engagement by 40%, resulting in an increase in users retention rate.",
            "Developed an E-Commerce Web Application, Golfor Integrated Service, using PHP, Laravel, TailwindCSS, Alpine.JS, Livewire, and MySQL. Integrated payment gateways and shipping APIs to provide a seamless customer experience. Increased the website's conversion rate by 25% and achieved a 10% increase in monthly revenue."
        ],
        projects: [
            {
                title: "Forexify",
                links: {
                    github: "https://github.com/Freeman-md/forexify"
                },
            },
            {
                title: "PinVote",
                links: {
                    live: "https://pinvote.freemanmadudili.com"
                },
            },
            {
                title: "Viluxe",
                links: {
                    live: "https://viluxe.onrender.com"
                },
            },
            {
                title: "Circula",
                links: {
                    live: "https://circula-e10ee.web.app/"
                },
            },
        ],
        technologies: [
            "Next.js",
            "Nuxt.js",
            "Vue.js",
            "React.js",
            "Vuex",
            "Redux",
            "TypeScript",
            "Tailwind CSS",
            "JavaScript",
            "MySQL",
            "MongoDB",
            "Firebase",
            "Adobe XD",
            "Figma",
            "Python",
            "Git",
            "Vuex",
            "PHP",
            "JSON",
            "REST APIs",
            "E2E Testing",
            "Jest",
            "Cypress"
        ],
    },
]

export default defineEventHandler(async (event) => {
    try {
        const data = await ExperienceService.insertExperiences(experiences)

        return {
            statusCode: 201,
            message: 'Successfully inserted data'
        }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            message: error.message
        })
    }
})