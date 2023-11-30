<template>
    <div class="container flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:-space-x-16 lg:-space-x-32 xl:-space-x-40 justify-center items-center py-20 lg:py-32">
        <!-- Banner section with social links -->
        <div class="flex flex-col space-y-6 items-center w-1/2">
            <img src="/images/banner.png" alt="Freeman Madudili" class="object-contain w-3/4">

            <!-- Social Links -->
            <SocialLinks class="hidden sm:inline-block" />
        </div>

        <!-- About Me Intro -->
        <div class="w-auto">
            <h1 class="text-white text-center sm:text-left text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">I am <span class="text-primary">a creative</span> <br>
            frontend developer</h1>
        </div>

        <SocialLinks class="inline-block sm:hidden" />
    </div>
</template>