<template>
    <main class="container space-y-4 pt-28">
        <h1 class="uppercase text-sm text-white">Get In Touch</h1>

        <h2 class="font-bold text-primary text-5xl">
            Connect with {{ appConfig.nickname }}
        </h2>

        <p class="text-white">
            Welcome to the hub of creativity and technology. Whether you're
            seeking a professional portfolio, project inquiry, collaboration, or
            just want to connect, let's make something amazing together.
        </p>

        <form @submit.prevent="handleSubmit" class="text-white pt-4 space-y-4">
            <div class="grid sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                    <div class="form-control">
                        <UserIcon class="w-10" />

                        <input name="name" type="text" placeholder="Fullname" v-model="form.name" />
                    </div>

                    <small class="text-red-500">{{ errors.name }}</small>
                </div>

                <div class="space-y-1">
                    <div class="form-control">
                        <MailIcon class="w-10" />

                        <input name="email" type="text" placeholder="Email Address" v-model="form.email" />
                    </div>
                    <small class="text-red-500">{{ errors.email }}</small>
                </div>

                <div class="space-y-1">
                    <div class="form-control">
                        <MobileIcon class="w-10" />

                        <input name="phone" type="text" placeholder="Phone Number" v-model="form.phone" />
                    </div>
                    <small class="text-red-500">{{ errors.phone }}</small>
                </div>
            </div>

            <div class="space-y-2">
                <p class="text-primary">Select your interest</p>

                <div class="flex flex-wrap">
                    <button @click="selectInterest(interest)" v-for="(interest, index) in interests" :key="index"
                        type="button" class="flex-1 btn mr-4 mb-4" :class="[
                            isSelectedInterest(interest)
                                ? 'btn-primary bg-primary/10'
                                : 'btn-white',
                        ]">
                        {{ interest }}
                    </button>
                </div>

                <small class="text-red-500">{{ errors.interest }}</small>
            </div>

            <div>
                <section id="project-inquiry" v-if="form.interest === 'Project Inquiry / Hiring'" class="space-y-4">
                    <SkeletonsSelect v-if="fetchingProjectRoles" />
                    <div class="form-control" v-else-if="projectRoles && projectRoles.length > 0">
                        <BriefcaseIcon class="w-10" />

                        <select name="project-role" v-model="form.role">
                            <option value="">Type of Project / Role</option>
                            <option :value="role.title" v-for="(role, index) in projectRoles" :key="index">
                                {{ role.title }}
                            </option>
                        </select>
                    </div>

                    <div class="form-control">
                        <textarea name="project-description" placeholder="Brief Description of Project/Role" rows="4"
                            class="resize-none" v-model="form.role_description"></textarea>
                    </div>

                    <div class="space-y-2">
                        <p class="text-primary">Budget Range</p>
                        <div class="flex flex-wrap">
                            <button @click="selectBudget(budget.value)" v-for="(budget, index) in budgets" :key="index"
                                type="button" class="flex-1 btn mr-4 mb-4" :class="[
                                    isSelectedBudget(budget.value)
                                        ? 'btn-primary bg-primary/10'
                                        : 'btn-white',
                                ]">
                                {{ budget.text }}
                            </button>
                        </div>
                    </div>
                </section>

                <section id="collaboration" v-if="form.interest === 'Collaboration'" class="space-y-4">
                    <SkeletonsSelect v-if="fetchingCollaborationAreas" />
                    <div class="form-control" v-else-if="collaborationAreas && collaborationAreas.length > 0">
                        <BriefcaseIcon class="w-10" />

                        <select name="collaboration" v-model="form.collaboration">
                            <option value="">Area of Collaboration</option>
                            <option :value="area.title" v-for="(area, index) in collaborationAreas" :key="index">
                                {{ area.title }}
                            </option>
                        </select>
                    </div>

                    <div class="form-control">
                        <textarea name="collaboration-overview" placeholder="Overview of Collaboration Idea" rows="4"
                            class="resize-none" v-model="form.collaboration_overview"></textarea>
                    </div>
                </section>

                <section id="other-inquiries" v-if="form.interest === 'Other Inquiries'" class="space-y-4">
                    <div class="form-control">
                        <textarea name="other-inquiries" placeholder="What do you have in mind?" rows="4"
                            class="resize-none" v-model="form.inquiry"></textarea>
                    </div>
                </section>
            </div>

            <button type="submit" class="btn btn-primary disabled:!btn-smoky flex items-center justify-center"
                :disabled="!isFormValid">
                <SpinnerIcon v-if="isProcessingForm" class="animate-spin w-5 h-5 mr-3" />
                Submit & Connect with {{ appConfig.nickname }}
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

const appConfig = useState<AppConfig>('appConfig')

const { data: projectRoles, pending: fetchingProjectRoles, error: fetchingProjectRolesError } = await useProjectRoles()
const { data: collaborationAreas, pending: fetchingCollaborationAreas, error: fetchingCollaborationAreasError } = await useCollaborationAreas()

const isProcessingForm = ref(false);

const {
    interests,
    budgets,
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

        const { createContact } = useContacts();

        const contact = form as Contact;

        const { data, error } = await createContact(contact);

        if (error.value) {
            showNotification(error.value?.data.status.toString().startsWith('4') ? "Please make sure all inputs are correct" : "An error has occurred", "error");
        } else if (data.value) {
            resetForm();
            showNotification("Thanks for connecting! 👋 Exciting times ahead! 🚀", "success");
        }
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