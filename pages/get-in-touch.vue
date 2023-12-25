<template>
    <div class="container space-y-4 pt-28">
        <h1 class="uppercase text-sm text-white">Get In Touch</h1>

        <h2 class="font-bold text-primary text-5xl">
            Connect with Freemancodz
        </h2>

        <p class="text-smoky">
            Welcome to the hub of creativity and technology. Whether you're
            seeking a professional portfolio, project inquiry, collaboration, or
            just want to connect, let's make something amazing together.
        </p>

        <form action="" class="text-white pt-4 space-y-8">
            <div class="grid grid-cols-2 gap-4">
                <div class="form-control">
                    <UserIcon class="w-10" />

                    <input
                        name="fullname"
                        type="text"
                        placeholder="Enter your fullname"
                    />
                </div>

                <div class="form-control">
                    <MailIcon class="w-10" />

                    <input
                        name="email"
                        type="text"
                        placeholder="Enter your email address"
                    />
                </div>

                <div class="form-control">
                    <MobileIcon class="w-10" />

                    <input
                        name="phone"
                        type="text"
                        placeholder="Enter your phone number"
                    />
                </div>
            </div>

            <div class="space-y-2">
                <p class="text-primary">Select your interest</p>

                <div class="flex space-x-4">
                    <button
                        v-for="(interest, index) in interests"
                        :key="index"
                        type="button"
                        class="flex-1 btn btn-white"
                    >
                        {{ interest }}
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import UserIcon from "~/assets/svgs/user.svg";
import MailIcon from "~/assets/svgs/mail.svg";
import MobileIcon from "~/assets/svgs/mobile.svg";

const interests = [
    "Portfolio Website",
    "Project Inquiry / Hiring",
    "Collaboration",
    "Other Inquiries",
];
</script>