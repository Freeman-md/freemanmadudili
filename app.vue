<template>
    <div class="relative">
        <div class="bg-secondary w-screen min-h-screen">
            <AppHeader />

            <NuxtPage />

            <GetInTouch id="contact" class="mt-20" />

            <AppFooter />

            <Sidebar />
        </div>

        <QuickContact />
    </div>
</template>

<style>
@import url("~/assets/css/main.css");
</style>
