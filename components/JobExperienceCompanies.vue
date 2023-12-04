<template>
    <div class="flex flex-col w-full md:flex-row md:w-1/4 h-full">
        <TabVerticalLine
            :translate-y-value-in-rem="translateYValueInRem"
            :tab-container-height-in-rem="tabContainerHeightInRem"
        />

        <div class="w-full flex md:flex-col">
            <button
                @click.prevent="selectCompanyTab(index, company.slug)"
                class="text-center md:text-left text-sm w-full text-white p-3 transition duration-200 hover:text-primary hover:bg-primary/10"
                :class="{
                    '!text-primary !bg-primary/10': activeTabIndex === index,
                }"
                v-for="(company, index) in companies"
                :key="index"
            >
                {{ company.company }}
            </button>
        </div>

        <TabHorizontalLine
            :tab-width-in-percent="tabWidthInPercent"
            :translate-x-value-in-percent="translateXValueInPercent"
        />
    </div>
</template>
  
  <script setup lang="ts">
import type Experience from "~/types/experience";

const { companies } = defineProps({
    companies: Object as () => Partial<Experience>[] | null,
});

const TAB_INDEX = 2.75;
const activeTabIndex = ref<number>(0);
const activeExperienceCompany = useActiveExperienceCompany();

const translateYValueInRem = computed(
    () => `translateY(${activeTabIndex.value * TAB_INDEX}rem)`
);
const translateXValueInPercent = computed(
    () => `translateX(${activeTabIndex.value * 101}%)`
);
const tabContainerHeightInRem = computed(() =>
    companies ? `h-[${companies.length * TAB_INDEX}]` : "h-fit"
);
const tabWidthInPercent = computed(() =>
    companies ? `${Math.floor(100 / companies.length)}%` : "100%"
);

const selectCompanyTab = (index: number, slug: string | undefined) => {
    activeTabIndex.value = index;
    activeExperienceCompany.value = slug!;
};

onMounted(() => {
    activeTabIndex.value = 0
    activeExperienceCompany.value = companies ? companies[0].slug! : ''
})
</script>
  