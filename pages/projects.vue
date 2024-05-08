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

        <UiLoading
                v-if="fetchingTools"
                text="Fetching tools"
            ></UiLoading>

            <UiEmpty
                v-else-if="fetchingToolsError"
                message="Tools are currently unavailable"
            >
            </UiEmpty>

        <div
                    v-else-if="tools && tools.length > 0"
                    class="flex space-x-4 items-center w-full overflow-y-hidden overflow-x-scroll"
                >
                    <UiBadge
                        v-for="(tool, index) in sortedTools"
                        :key="index"
                        :text="tool.title"
                        role="button"
                        @click="toggleTool(tool.title)"
                        :selected="isSelectedTool(tool.title)"
                    />
                </div>

        <div class="relative overflow-x-auto">
            <transition name="fade" mode="out-in">

            <SkeletonsProjectsArchiveTable
                v-if="pending"
                key="skeletons"
            ></SkeletonsProjectsArchiveTable>

            <UiEmpty
                v-else-if="error"
                message="Projects are currently unavailable"
            >
            </UiEmpty>

            <section v-else key="content" class="space-y-4">
                <table
                    class="w-full text-sm text-left rtl:text-right text-smoky"
                    v-if="projects && projects?.length > 0"
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
                                <NuxtLink
                                    :to="project.links.live || project.links.github"
                                    target="_blank"
                                    class="flex space-x-2 group transition text-white hover:text-primary md:hover:text-white"
                                >
                                    <span class="text-lg">{{
                                        project.title
                                    }}</span>
                                    <ArrowUpRightIcon
                                        class="!w-3 transition transform group-hover:-translate-y-1 group-hover:translate-x-1 md:hidden"
                                    />
                                </NuxtLink>
                            </td>
                            <!-- <td class="px-6 py-4">

                        </td> -->
                            <td class="px-6 py-4 flex flex-wrap items-center">
                                <UiBadge
                                    v-for="(tool, index) in project.tools"
                                    :key="index"
                                    :text="tool.title"
                                    class="mr-2 mb-2"
                                />
                            </td>
                            <td class="px-6 py-4 hidden md:table-cell">
                                <NuxtLink
                                    :to="project.links.live || project.links.github"
                                    target="_blank"
                                    class="flex space-x-2 group transition hover:text-primary"
                                >
                                    <span>{{ project.link }}</span>
                                    <ArrowUpRightIcon
                                        class="!w-3 transition transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                    />
                                </NuxtLink>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <UiEmpty
                    v-else
                    :message="
                        selectedTools.length > 0
                            ? `There are no projects with tools: ${selectedTools.join(
                                  ', '
                              )}`
                            : 'Projects are currently unavailable'
                    "
                >
                </UiEmpty>
            </section>

            </transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import ArrowLeftIcon from '~/assets/svgs/arrow-left.svg';
import ArrowUpRightIcon from '~/assets/svgs/arrow-up-right.svg';

const selectedTools = reactive<string[]>([]);

const toggleTool = (tool: string) => {
    const index = selectedTools.indexOf(tool);
    if (index !== -1) {
        selectedTools.splice(index, 1);
    } else {
        selectedTools.push(tool);
    }
};

const isSelectedTool = (tool: string) => selectedTools.includes(tool);

const endpoint = computed(() => {
    let url = `/api/projects?populate=*`;

    if (selectedTools.length <= 0) {
        return url;
    }

    selectedTools.forEach((tool: string, index: number) => {
        url += `&filters[tools][title][$in][${index}]=${tool}`;
    });

    return url;
});

const { projects, pending, error } = await useProjects(endpoint);

const {
    tools,
    pending: fetchingTools,
    error: fetchingToolsError,
} = await useTools();

const sortedTools = computed(() => {
    if (!tools.value || !Array.isArray(tools.value)) {
        return [];
    }

    const toolArray: Tool[] = (tools.value as unknown) as Tool[];

    const selected = toolArray.filter((tool: Tool) => selectedTools.includes(tool.title))
                              .sort((a: Tool, b: Tool) => a.title.localeCompare(b.title));
    const unselected = toolArray.filter((tool: Tool) => !selectedTools.includes(tool.title))
                                .sort((a: Tool, b: Tool) => a.title.localeCompare(b.title));
    return [...selected, ...unselected];
});
</script>