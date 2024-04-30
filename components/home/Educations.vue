<template>
    <div class="container space-y-10">
        <h2 class="text-center sm:text-left text-4xl lg:text-5xl text-primary">
            Education
        </h2>

        <UiLoading class="mx-auto my-auto w-full" v-if="pending" text="Fetching educational data" />

        <ol v-else-if="educations && educations.length > 0" class="relative border-s border-gray-200 dark:border-gray-700">
            <li v-for="education in educations" :key="education.course_title" class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-white">
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ education.end_date }}</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    {{ education.course_title }} <span class="text-primary"> - {{ education.grade }}</span><br>
                    <small>{{ education.institution }}</small>
                </h3>

                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"><span class="text-primary">Relevant
                        Courses: </span> {{ education.courses }} </p>
            </li>
        </ol>

        <UiEmpty v-else message="Educational data is currently unavailable" />
    </div>
</template>

<script setup lang="ts">
const { educations, pending, error } = await useEducations()
</script>