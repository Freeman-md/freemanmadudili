<template>
    <div
        class="container flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:-space-x-16 md:-space-x-20 lg:-space-x-28 xl:-space-x-32 justify-center items-center py-20 lg:py-32"
    >
        <!-- Banner section with social links -->
        <div class="flex flex-col space-y-6 items-center w-1/2 min-w-1/2">
            <div class="sm:w-3/4 overflow-hidden">
                <img
                    src="/images/banner.svg"
                    alt="Freeman Madudili"
                    class="object-cover w-full"
                />
            </div>

            <!-- Social Links -->
            <SocialLinks class="hidden sm:inline-block" />
        </div>

        <!-- About Me Intro -->
        <div class="w-auto">
            <h1
                ref="typewriter"
                class="text-white text-center sm:text-left text-5xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
                I am <span class="text-primary lowercase"></span>
            </h1>
        </div>

        <SocialLinks class="inline-block sm:hidden" />
    </div>
</template>
  
  <script>
export default {
    data() {
        return {
            texts: [
                "An Infinite Possibilities Architect",
                "A Creative Technologist",
                "A Digital Visionary",
                "A Future-Forward Developer",
                "An Innovation Enthusiast",
            ],
            currentIndex: 0,
        };
    },
    mounted() {
        this.typeWriter();
    },
    methods: {
        typeWriter() {
            const currentText = this.texts[this.currentIndex];
            const span =
                this.$refs.typewriter.querySelector("span.text-primary");

            if (span.textContent.length < currentText.length) {
                span.textContent += currentText.charAt(span.textContent.length);
                setTimeout(() => this.typeWriter(), 100);
            } else {
                // Wait for some seconds before starting the backspacing
                setTimeout(() => this.backspaceText(), 1500);
            }
        },
        backspaceText() {
            const span =
                this.$refs.typewriter.querySelector("span.text-primary");
            const currentText = span.textContent;

            if (currentText.length > 0) {
                span.textContent = currentText.slice(0, -1);
                setTimeout(() => this.backspaceText(), 100);
            } else {
                // Move to the next text after backspacing
                this.nextText();
            }
        },
        nextText() {
            const span =
                this.$refs.typewriter.querySelector("span.text-primary");
            span.textContent = ""; // Clear the current text

            // Move to the next index, or loop back to the first index
            this.currentIndex = (this.currentIndex + 1) % this.texts.length;

            this.typeWriter(); // Start typing the next text
        },
    },
};
</script>
  