<template>
    <div class="flex flex-col items-center justify-center space-y-4 pt-20 pb-8">
        <SocialLinks />

        <p class="text-smoky">
            &copy; {{ currentYear }} All rights reserved. – Designed & Coded by Freeman Madudili
        </p>
    </div>
</template>

<script setup lang="ts">

const currentYear = (new Date).getFullYear()

</script>