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

            <Experience :experience="experience" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
const data = useFetch('/api/experiences')

console.log(data)

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
  