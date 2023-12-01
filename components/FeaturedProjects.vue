<template>
    <div class="container py-20 space-y-6 overflow-hidden">
        <div class="flex space-x-4 items-center justify-between">
            <h2
                class="text-center sm:text-left text-xl sm:text-4xl lg:text-5xl text-primary"
            >
                Featured Projects
            </h2>

            <NuxtLink
                to="/"
                class="text-sm flex space-x-2 items-center text-smoky stroke-smoky transition duration-200 hover:text-primary hover:stroke-primary"
            >
                <span>view the archive</span>
                <ArrowRightIcon />
            </NuxtLink>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            <FeaturedProject
                v-for="(project, index) in projects"
                :key="index"
                :project="project"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import ArrowRightIcon from "~/assets/svgs/arrow-right.svg";

const projects = [
    {
        title: "PinVote",
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
];
</script>