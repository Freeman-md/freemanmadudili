<template>
    <div class="group grayscale xs:w-48 sm:w-64 md:w-80 lg:w-60 xl:w-72 transition duration-200 hover:!grayscale-0">
        <div class="relative rounded-lg border-4 border-smoky xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-60 lg:h-60 xl:w-72 xl:h-72 transition duration-200 group-hover:!border-transparent">
            
            <NuxtLink
                :to="project.links.live || project.links.github"
                target="_blank"
                class="block transform translate-y-4 translate-x-4 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-60 lg:h-60 xl:w-72 xl:h-72 overflow-hidden rounded-lg transition duration-200 group-hover:!translate-x-0 group-hover:!translate-y-0"
            >
                <img
                    :src="project.image"
                    :alt="project.title"
                    class="object-cover w-full h-full"
                />
            </NuxtLink>
        </div>

        <div class="space-y-4 pt-10 sm:pt-16 w-full overflow-hidden">
            <div class="flex space-x-4 justify-between items-center">
                <span class="text-xl text-smoky">{{ project.title }}</span>

                <div class="flex space-x-2 items-center stroke-smoky">
                    <NuxtLink :aria-label="`View Github Repo for ${project.title}`" :to="project.links.github" target="_blank">
                        <GithubIcon
                            class="w-8 stroke-smoky transition duration-200 hover:stroke-primary"
                        />
                    </NuxtLink>
                    <NuxtLink :aria-label="`View Live Project for ${project.title}`" :to="project.links.live" target="_blank">
                        <ExternalLinkIcon
                            class="stroke-smoky transition duration-200 hover:stroke-primary"
                        />
                    </NuxtLink>
                </div>
            </div>
            
            <p class="text-smoky">{{ project.description }}</p>

            <div
                class="flex space-x-4 items-center w-full overflow-y-hidden overflow-x-scroll"
            >
                <UiBadge
                    v-for="(technology, index) in project.technologies"
                    :key="index"
                    :text="technology"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import GithubIcon from "~/assets/svgs/github.svg";
import ExternalLinkIcon from "~/assets/svgs/external-link.svg";

const { project } = defineProps({
    project: Object,
});
</script>