<template>
    <div class="space-y-8 container">
        <NuxtLink
            to="/"
            class="flex space-x-2 items-center text-primary transition group"
        >
            <ArrowLeftIcon
                class="!w-4 transition transform group-hover:-translate-x-2"
            />
            <span>Freeman Madudili</span>
        </NuxtLink>

        <h1 class="text-5xl text-white">All Projects</h1>

        <div class="relative overflow-x-auto">
            <UiLoading v-if="pending" text="Fetching projects"></UiLoading>

            <UiEmpty
                v-else-if="projects?.length === 0 || error"
                message="Projects are currently unavailable"
            >
            </UiEmpty>

            <section v-else class="space-y-4">
                <div
                    v-if="tools && tools.length > 0"
                    class="flex space-x-4 items-center w-full overflow-y-hidden overflow-x-scroll"
                >
                    <UiBadge
                        v-for="(tool, index) in tools"
                        :key="index"
                        :text="tool.title"
                        role="button"
                        @click="toggleTool(tool.title)"
                        :selected="isSelectedTool(tool.title)"
                    />
                </div>

                <table
                    class="w-full text-sm text-left rtl:text-right text-smoky"
                >
                    <thead
                        class="text-xs text-gray-700 uppercase dark:text-gray-400 border-b border-smoky"
                    >
                        <tr>
                            <!-- <th scope="col" class="px-6 py-3">
                            Year
                        </th> -->
                            <th scope="col" class="px-6 py-3">Project</th>
                            <!-- <th scope="col" class="px-6 py-3">
                            Made at
                        </th> -->
                            <th scope="col" class="px-6 py-3">Built with</th>
                            <th
                                scope="col"
                                class="px-6 py-3 hidden md:table-cell"
                            >
                                Link
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr
                            class="border-b border-smoky items-center"
                            v-for="(project, index) in projects"
                            :key="index"
                        >
                            <!-- <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            2022
                        </th> -->
                            <td class="px-6 py-4">
                                <a
                                    :href="project.link"
                                    target="_blank"
                                    class="flex space-x-2 group transition text-white hover:text-primary md:hover:text-white"
                                >
                                    <span class="text-lg">{{
                                        project.title
                                    }}</span>
                                    <ArrowUpRightIcon
                                        class="!w-3 transition transform group-hover:-translate-y-1 group-hover:translate-x-1 md:hidden"
                                    />
                                </a>
                            </td>
                            <!-- <td class="px-6 py-4">

                        </td> -->
                            <td class="px-6 py-4 flex flex-wrap items-center">
                                <UiBadge
                                    v-for="(
                                        technology, index
                                    ) in project.technologies"
                                    :key="index"
                                    :text="technology"
                                    class="mr-2 mb-2"
                                />
                            </td>
                            <td class="px-6 py-4 hidden md:table-cell">
                                <a
                                    :href="project.link"
                                    target="_blank"
                                    class="flex space-x-2 group transition hover:text-primary"
                                >
                                    <span>{{ project.link }}</span>
                                    <ArrowUpRightIcon
                                        class="!w-3 transition transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                    />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import ArrowLeftIcon from '~/assets/svgs/arrow-left.svg';
import ArrowUpRightIcon from '~/assets/svgs/arrow-up-right.svg';

const runtimeConfig = useRuntimeConfig();

const { projects, pending, error } = await useProjects();

const {
    tools,
    pending: fetchingTools,
    error: fetchingToolsError,
} = await useTools();

const selectedTools = reactive<string[]>([])

const toggleTool = (tool: string) => {
    const index = selectedTools.indexOf(tool);
    if (index !== -1) {
        selectedTools.splice(index, 1);
    } else {
        selectedTools.push(tool);
    }
}

const isSelectedTool = (tool: string) => selectedTools.includes(tool);

</script>