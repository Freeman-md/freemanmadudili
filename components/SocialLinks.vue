<template>
    <div>
        <div class="flex space-x-4 stroke-smoky">
            <a :href="appConfig.socials.github" aria-label="Check out my Github profile"
                class="transition duration-200 hover:stroke-primary">
                <Github class="w-8 transition duration-200 stroke-smoky hover:stroke-primary" />
            </a>

            <a :href="appConfig.socials.linkedin" aria-label="Check out my Linkedin profile"
                class="transition duration-200 hover:stroke-primary">
                <Linkedin class="w-8 transition duration-200 stroke-smoky hover:stroke-primary" />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import Github from '~/assets/svgs/github.svg'
import Linkedin from '~/assets/svgs/linkedin.svg'

const appConfig = useState<FormattedAppConfig>('appConfig')
</script>