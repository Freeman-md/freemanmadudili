<template>
    <div class="space-y-4">
        <div class="container">
            <h2 class="text-center sm:text-left text-4xl lg:text-5xl text-white">
                Tools & 
                <span class="text-primary">Technologies</span>
            </h2>
        </div>

        <UiLoading class="mx-auto my-auto w-full" v-if="pending" text="Fetching skills" />
        <Vue3Marquee :duration="50" v-else-if="tools && tools.length > 0">
            <div class="flex items-end">
                <HomeTool v-for="(tool, index) in tools" :key="index" :tool="tool" />
            </div>
        </Vue3Marquee>
        <UiEmpty v-else message="Skills are currently unavailable" />
    </div>
</template>

<script setup lang="ts">
const { data: tools, pending, error } = await useTools()

const appConfig = useState<AppConfig>('appConfig')
</script>