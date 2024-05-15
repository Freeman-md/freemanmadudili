<template>
    <a :href="`mailto:hello@${appConfig.professional_email}?subject=Exciting Opportunity Available`" aria-label="Send a mail" class="fixed bottom-4 right-4 z-50 w-16 h-16 rounded-full border-2 border-primary text-primary flex items-center justify-center transition duration-200 hover:bg-primary/10 backdrop-blur-md">
        <MailIcon class="w-10" />
    </a>
</template>

<script setup lang="ts">
import MailIcon from '~/assets/svgs/mail.svg'

const appConfig = useState<FormattedAppConfig>('appConfig')
</script>

