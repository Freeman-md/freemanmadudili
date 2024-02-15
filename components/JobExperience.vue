<template>
    <div class="w-full md:w-3/4 flex flex-col space-y-3 overflow-hidden">
        <h6 class="text-white">
            {{ experience?.position }}
            <span class="text-primary">@ {{ experience?.company }}</span>
        </h6>
        <p class="text-smoky">
            {{ duration }}
        </p>

        <div
            v-for="(responsibility, index) in experience?.responsibilities"
            :key="index"
            class="w-full flex space-x-4 items-start"
        >
            <div class="w-4"><PlayIcon class="mt-1" /></div>
            <span class="text-smoky">{{ responsibility }}</span>
        </div>

        <div
            class="flex space-x-4 items-center w-full overflow-y-hidden overflow-x-scroll"
        >
            <NuxtLink
                :to="project?.links.live || project.links?.github"
                target="_blank"
                v-for="(project, index) in experience?.projects"
                :key="index"
                class="text-smoky transition duration-200 hover:text-white flex space-x-2 min-w-fit"
            >
                <LinkIcon /> <span>{{ project.title }}</span>
            </NuxtLink>
        </div>

        <div
            class="flex space-x-4 items-center overflow-y-hidden overflow-x-scroll"
        >
            <UiBadge
                v-for="(technology, index) in experience?.technologies"
                :key="index"
                :text="technology"
            />
        </div>
    </div>
</template>

<script setup lang="ts">

import PlayIcon from "~/assets/svgs/play.svg";
import LinkIcon from "~/assets/svgs/link.svg";

const { experience } = defineProps({
    experience: {
        type: Object as () => FormattedExperience,
        required: true,
    },
});

const duration = computed(() => {
    let startDate: string | number = 'N/A'
    let endDate: string | number = 'Present'

    if (experience?.start_date) {
        startDate = new Date(experience.start_date).toLocaleString('default', { month: 'long', year: 'numeric' })
    }

    if (experience?.end_date) {
        endDate = new Date(experience.end_date).toLocaleString('default', { month: 'long', year: 'numeric' })
    }

    return `${startDate} - ${endDate}`
})
</script>