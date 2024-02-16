<template>
    <section id="hero" class="container py-20 lg:py-32 space-y-8">

        <p class="text-primary text-lg text-center md:text-left">— Freeman Madudili —</p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">

            <div class="lg:col-span-2 flex flex-col space-y-8 items-start">

                <h1 class="text-5xl md:text-7xl text-smoky">
                    I'm a <span class="text-primary">
                        Certified Full Stack Developer
                    </span>
                </h1>

                <p class="text-white">
                    A distinguished Full Stack Developer with over <strong>3 years of experience</strong> and a
                    <strong>First
                        Class Honours</strong> degree in <strong>Information Technology</strong> from Middlesex University.
                    Expert in crafting advanced web solutions, evidenced by numerous successful projects. Awarded a
                    <strong>Distinction</strong> in <strong>BTEC Level 3 Advanced Diploma in Software Engineering</strong>
                    from
                    Aptech Computer Education.
                </p>

                <SocialLinks class="inline-block" />

                <a href="/freeman-madudili-cv.pdf" target="_blank" class="btn btn-primary">My Resume</a>

            </div>

            <div class="order-first md:order-last flex flex-col space-y-4 items-center justify-center">
                <div class="w-1/2 md:w-full md:h-96 overflow-hidden rounded-xl">
                    <img src="/images/banner.jpg" alt="Freeman Madudili" class="object-contain object-center w-full" />
                </div>
                <p class="text-smoky">A.K.A <span class="text-primary text-lg">Freemancodz</span></p>
            </div>

        </div>

    </section>
</template>

<style scoped>
p strong {
    @apply text-primary font-bold
}
</style>