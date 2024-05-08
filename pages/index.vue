<template>
    <div class="space-y-20">
        <HomeHero />

        <HomeTools id="skills" class="scroll-mt-24" />

        <HomeJobExperiences id="experience" class="scroll-mt-24" />

        <HomeEducations />

        <HomeFeaturedProjects id="portfolio" class="scroll-mt-24" />

        <HomeAboutMe id="about" class="scroll-mt-24" />
    </div>
</template>

<style>
/* Define the fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* Starting and ending state for fade */ {
  opacity: 0;
}
</style>