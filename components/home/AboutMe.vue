<template>
    <div class="container space-y-8 text-smoky">
        <p class="text-sm">Nice to meet you</p>

        <h2 class="text-6xl text-primary font-bold">{{ appConfig.about_me_intro }}</h2>

        <div v-html="appConfig.about_me">

        </div>

        <div class="flex flex-col space-y-4 xs:flex-row xs:space-y-0 xs:space-x-4 xs:items-center xs:justify-between">
            <div class="flex space-x-6 items-center">
                <div class="w-20 h-20 rounded-full overflow-hidden">
                    <img :src="appConfig.personal_photo" :alt="appConfig.nickname">
                </div>

                <h6 class="text-primary text-3xl">{{ appConfig.nickname }}</h6>
            </div>

            <SocialLinks />
        </div>
    </div>
</template>

<script setup lang="ts">
const appConfig = useState<FormattedAppConfig>('appConfig')

</script>