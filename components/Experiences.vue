<template>
    <div class="container space-y-10">
        <h2 class="text-center sm:text-left text-4xl lg:text-5xl text-primary">
            Career Highlights
        </h2>

        <div
            class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-start"
        >
            <!-- Tab Container for Desktop -->
            <div class="flex flex-col w-full md:flex-row md:w-1/5 h-full">
                <!-- Vertical Line for Desktop -->
                <div
                    class="hidden md:block w-[0.15rem] bg-smoky relative"
                    :class="tabContainerHeight"
                >
                    <div
                        class="relative w-[0.15rem] h-[2.75rem] bg-primary transition-transform duration-200"
                        :style="{ transform: translateYValue }"
                    ></div>
                </div>

                <!-- Company Buttons Container -->
                <div class="w-full flex md:flex-col">
                    <button
                        @click.prevent="setActiveTabIndex(index)"
                        class="text-center md:text-left text-sm w-full text-white p-3 transition duration-200 hover:text-primary hover:bg-primary/10"
                        :class="{
                            '!text-primary !bg-primary/10':
                                isActiveTabIndex(index),
                        }"
                        v-for="(company, index) in companies"
                        :key="index"
                    >
                        {{ company }}
                    </button>
                </div>

                <!-- Horizontal Line for Mobile -->
                <div
                    class="md:hidden w-full flex h-[0.15rem] bg-smoky relative"
                >
                    <div
                        class="h-[0.15rem] relative bg-primary transition-transform duration-200"
                        :style="{ width: tabWidth, transform: translateXValue }"
                    ></div>
                </div>
            </div>

            <!-- Experience Details Container -->
            <div class="w-full md:w-3/4 flex flex-col space-y-3">
                <!-- Experience Information -->
                <h4 class="text-white">
                    {{ experience.position }}
                    <span class="text-primary">@ {{ experience.company }}</span>
                </h4>
                <p class="text-smoky">
                    {{ experience.start }} - {{ experience.end }}
                </p>

                <!-- Responsibilities -->
                <div
                    v-for="(
                        responsibility, index
                    ) in experience.responsibilities"
                    :key="index"
                    class="flex space-x-4 items-start"
                >
                    <div class="w-4"><PlayIcon class="mt-1" /></div>
                    <span class="text-smoky">{{ responsibility }}</span>
                </div>

                <!-- Project Links -->
                <div
                    class="flex space-x-4 items-center w-full overflow-y-hidden overflow-x-scroll"
                >
                    <a
                        :href="link.url"
                        v-for="(link, index) in experience.projects"
                        :key="index"
                        class="text-smoky transition duration-200 hover:text-white flex space-x-2"
                    >
                        <LinkIcon /> <span>{{ link.title }}</span>
                    </a>
                </div>

                <!-- Technologies -->
                <div
                    class="flex space-x-4 items-center w-full overflow-y-hidden overflow-x-scroll"
                >
                    <Badge
                        v-for="(technology, index) in experience.technologies"
                        :key="index"
                        :text="technology"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script setup lang="ts">
import PlayIcon from "~/assets/svgs/play.svg";
import LinkIcon from "~/assets/svgs/link.svg";

const TAB_INDEX = 2.75;

const activeTabIndex = ref<number>(0);

const companies: Array<string> = [
    "Pay4Me, Inc.",
    "ScholarsHQ",
    "Xclusive Designs",
];

const experience = {
    company: "Pay4Me, Inc.",
    position: "Frontend Developer",
    start: 2022,
    end: 2023,
    responsibilities: [
        "Worked closely with the Head of Engineering and Backend Developers to manage and revamp the company’s website.",
        "Collaborated closely with the Head of Engineering and the design team to deploy the B2B iteration of the corporate website with NuxtJS, VueJS, and TailwindCSS. This initiative facilitated seamless global school fee payments, strengthening partnerships with businesses and educational institutions.",
    ],
    projects: [
        {
            title: "Birbur",
            url: "https://birbur.com",
        },
        {
            title: "Birbur",
            url: "https://birbur.com",
        },
        {
            title: "Birbur",
            url: "https://birbur.com",
        },
    ],
    technologies: [
        "React.js",
        "Vue.js",
        "Nuxt.js",
        "React.js",
        "Vue.js",
        "Nuxt.js",
    ],
};

// Computed Properties
const translateYValue = computed(
    () => `translateY(${activeTabIndex.value * TAB_INDEX}rem)`
);
const translateXValue = computed(
    () => `translateX(${activeTabIndex.value * 101}%)`
);
const tabContainerHeight = computed(
    () => `h-[${companies.length * TAB_INDEX}]`
);
const tabWidth = computed(() => {
    const width = Math.floor(100 / companies.length);
    return `${width}%`;
});

const isActiveTabIndex = (index: number) => activeTabIndex.value === index;

const setActiveTabIndex = (index: number) => {
    activeTabIndex.value = index;
};
</script>
  