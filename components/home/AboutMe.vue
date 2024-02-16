<template>
    <div class="container space-y-8 text-smoky">
        <p class="text-sm">Nice to meet you</p>

        <h2 class="text-6xl text-primary font-bold">Hi there, I’m Freeman Madudili</h2>

        <p class="text-lg">
            I'm Freeman Madudili, a Full Stack Software Developer based in London, UK.
        </p>
        <p>
            Currently, I'm crafting seamless user interfaces and innovative web solutions at <b>Xclusive Designs</strong>.
                With a track record of transforming ideas into functional applications, I bring a blend of creativity,
                technical expertise, and passion for delivering exceptional user experiences.
        </p>
        <p>
            Let's create something extraordinary together.
        </p>

        <div class="flex flex-col space-y-4 xs:flex-row xs:space-y-0 xs:space-x-4 xs:items-center xs:justify-between">
            <div class="flex space-x-6 items-center">
                <div class="w-20 h-20 rounded-full overflow-hidden">
                    <img src="/images/me.png" alt="Freemancodz">
                </div>

                <h6 class="text-primary text-3xl">Freemancodz</h6>
            </div>

            <SocialLinks />
        </div>
    </div>
</template>