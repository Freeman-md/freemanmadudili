<template>
    <main class="container space-y-4 pt-28">
        <h1 class="uppercase text-sm text-white">Get In Touch</h1>

        <h2 class="font-bold text-primary text-5xl">
            Connect with Freemancodz
        </h2>

        <p class="text-smoky">
            Welcome to the hub of creativity and technology. Whether you're
            seeking a professional portfolio, project inquiry, collaboration, or
            just want to connect, let's make something amazing together.
        </p>

        <form @submit.prevent="handleSubmit" class="text-white pt-4 space-y-4">
            <div class="grid sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                    <div class="form-control">
                        <UserIcon class="w-10" />

                        <input
                            name="name"
                            type="text"
                            placeholder="Fullname"
                            v-model="form.name"
                        />
                    </div>

                    <small class="text-red-500">{{ errors.name }}</small>
                </div>

                <div class="space-y-1">
                    <div class="form-control">
                        <MailIcon class="w-10" />

                        <input
                            name="email"
                            type="text"
                            placeholder="Email Address"
                            v-model="form.email"
                        />
                    </div>
                    <small class="text-red-500">{{ errors.email }}</small>
                </div>

                <div class="space-y-1">
                    <div class="form-control">
                        <MobileIcon class="w-10" />

                        <input
                            name="phone"
                            type="text"
                            placeholder="Phone Number"
                            v-model="form.phone"
                        />
                    </div>
                    <small class="text-red-500">{{ errors.phone }}</small>
                </div>
            </div>

            <div class="space-y-2">
                <p class="text-primary">Select your interest</p>

                <div class="flex flex-wrap">
                    <button
                        @click="selectInterest(interest)"
                        v-for="(interest, index) in interests"
                        :key="index"
                        type="button"
                        class="flex-1 btn mr-4 mb-4"
                        :class="[
                            isSelectedInterest(interest)
                                ? 'btn-primary bg-primary/10'
                                : 'btn-white',
                        ]"
                    >
                        {{ interest }}
                    </button>
                </div>

                <small class="text-red-500">{{ errors.interest }}</small>
            </div>

            <div>
                <section
                    id="portfolio-website"
                    v-if="form.interest === 'Portfolio Website'"
                    class="space-y-4"
                >
                    <div class="grid sm:grid-cols-2 gap-4">
                        <div class="form-control">
                            <BriefcaseIcon class="w-10" />

                            <input
                                name="field-of-study"
                                type="text"
                                placeholder="Field of Study"
                                v-model="form.field_of_study"
                            />
                        </div>

                        <div class="form-control">
                            <LinkIcon class="w-6" />

                            <input
                                name="field-of-study"
                                type="text"
                                placeholder="Linkedin Profile"
                                v-model="form.profile_url"
                            />
                        </div>
                    </div>

                    <div class="form-control">
                        <textarea
                            name="portfolio-purpose"
                            placeholder="Purpose of Needing a Portfolio Website"
                            rows="4"
                            class="resize-none"
                            v-model="form.portfolio_purpose"
                        ></textarea>
                    </div>

                    <div class="form-control">
                        <textarea
                            name="portfolio-description"
                            placeholder="Description of Ideal Portfolio Website"
                            rows="4"
                            class="resize-none"
                            v-model="form.portfolio_description"
                        ></textarea>
                    </div>

                    <div class="form-control">
                        <textarea
                            name="personal-information"
                            placeholder="Personal Information (Optional)"
                            rows="4"
                            class="resize-none"
                            v-model="form.personal_information"
                        ></textarea>
                    </div>
                </section>

                <section
                    id="project-inquiry"
                    v-if="form.interest === 'Project Inquiry / Hiring'"
                    class="space-y-4"
                >
                    <div class="form-control">
                        <BriefcaseIcon class="w-10" />

                        <select name="project-role" v-model="form.role">
                            <option value="">Type of Project / Role</option>
                            <option
                                :value="role"
                                v-for="(role, index) in roles"
                                :key="index"
                            >
                                {{ role }}
                            </option>
                        </select>
                    </div>

                    <div class="form-control">
                        <textarea
                            name="project-description"
                            placeholder="Brief Description of Project/Role"
                            rows="4"
                            class="resize-none"
                            v-model="form.role_description"
                        ></textarea>
                    </div>

                    <div class="space-y-2">
                        <p class="text-primary">Budget Range</p>
                        <div class="flex flex-wrap">
                            <button
                                @click="selectBudget(budget.value)"
                                v-for="(budget, index) in budgets"
                                :key="index"
                                type="button"
                                class="flex-1 btn mr-4 mb-4"
                                :class="[
                                    isSelectedBudget(budget.value)
                                        ? 'btn-primary bg-primary/10'
                                        : 'btn-white',
                                ]"
                            >
                                {{ budget.text }}
                            </button>
                        </div>
                    </div>
                </section>

                <section
                    id="collaboration"
                    v-if="form.interest === 'Collaboration'"
                    class="space-y-4"
                >
                    <div class="form-control">
                        <BriefcaseIcon class="w-10" />

                        <select
                            name="collaboration"
                            v-model="form.collaboration"
                        >
                            <option value="">Area of Collaboration</option>
                            <option
                                :value="collaboration"
                                v-for="(collaboration, index) in collaborations"
                                :key="index"
                            >
                                {{ collaboration }}
                            </option>
                        </select>
                    </div>

                    <div class="form-control">
                        <textarea
                            name="collaboration-overview"
                            placeholder="Overview of Collaboration Idea"
                            rows="4"
                            class="resize-none"
                            v-model="form.collaboration_overview"
                        ></textarea>
                    </div>
                </section>

                <section
                    id="other-inquiries"
                    v-if="form.interest === 'Other Inquiries'"
                    class="space-y-4"
                >
                    <div class="form-control">
                        <textarea
                            name="other-inquiries"
                            placeholder="What do you have in mind?"
                            rows="4"
                            class="resize-none"
                            v-model="form.inquiry"
                        ></textarea>
                    </div>
                </section>
            </div>

            <button
                type="submit"
                class="btn btn-primary disabled:!btn-smoky flex items-center justify-center"
                :disabled="!isFormValid" 
            >
                <SpinnerIcon
                    v-if="isProcessingForm"
                    class="animate-spin w-5 h-5 mr-3"
                />
                Submit & Connect with Freemancodz
            </button>
        </form>
    </main>
</template>

<script setup lang="ts">
import UserIcon from "~/assets/svgs/user.svg";
import MailIcon from "~/assets/svgs/mail.svg";
import MobileIcon from "~/assets/svgs/mobile.svg";
import BriefcaseIcon from "~/assets/svgs/briefcase.svg";
import LinkIcon from "~/assets/svgs/link.svg";
import SpinnerIcon from "~/assets/svgs/spinner.svg";

const isProcessingForm = ref(false);

const {
    interests,
    budgets,
    roles,
    collaborations,
    form,
    errors,
    selectInterest,
    selectBudget,
    isSelectedInterest,
    isSelectedBudget,
    isFormValid,
    validateForm,
    initializeForm: resetForm,
} = useContactForm();

const { showNotification } = useNotification();

const handleSubmit = async () => {
    validateForm()

    if (!isFormValid.value) {
        showNotification('Please make sure all fields are valid', 'error')

        return false;
    }

    try {
        isProcessingForm.value = true;

        // const contactsApi = useContacts();

        // const contact = form as unknown as Contact;

        // const response = await contactsApi.createContact(contact);

        // if (response && response.status === 201) {
        //     resetForm();

        //     showNotification(
        //         "Thanks for connecting! 👋 Exciting times ahead! 🚀"
        //     );
        // }
    } catch (error: any) {
        showNotification(error.message || "An error has occurred", "error");
    } finally {
        isProcessingForm.value = false;
    }
};

useSeoMeta({
    title: "Connect with Freemancodz",
});
</script>