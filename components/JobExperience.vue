<template>
    <!-- Experience Details Container -->
    <div class="w-full md:w-3/4 flex flex-col space-y-3 overflow-hidden">
        <!-- Experience Information -->
        <h4 class="text-white">
            {{ experience?.position }}
            <span class="text-primary">@ {{ experience?.company }}</span>
        </h4>
        <p class="text-smoky">
            {{ experience?.start_year }} - {{ experience?.end_year }}
        </p>

        <!-- Responsibilities -->
        <div
            v-for="(responsibility, index) in experience?.responsibilities"
            :key="index"
            class="w-full flex space-x-4 items-start"
        >
            <div class="w-4"><PlayIcon class="mt-1" /></div>
            <span class="text-smoky">{{ responsibility }}</span>
        </div>

        <!-- Project Links -->
        <div
            class="flex space-x-4 items-center w-full overflow-y-hidden overflow-x-scroll"
        >
            <a
                :href="link.links?.live || link.links?.github"
                v-for="(link, index) in experience?.projects"
                :key="index"
                class="text-smoky transition duration-200 hover:text-white flex space-x-2 min-w-fit"
            >
                <LinkIcon /> <span>{{ link.title }}</span>
            </a>
        </div>

        <!-- Technologies -->
        <div
            class="flex space-x-4 items-center overflow-y-hidden overflow-x-scroll"
        >
            <Badge
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

import type Experience from "~/types/experience";

const { experience } = defineProps({
    experience: {
        type: Object as () => Experience | null,
            required: true,
            
    },
});
</script>