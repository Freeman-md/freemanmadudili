type Contact = {
    name: string,
    email: string,
    phone: string,
    interest: string,
    field_of_study?: string,
    profile_url?: string,
    portfolio_purpose?: string,
    portfolio_description?: string,
    personal_information?: string,
    role?: string,
    role_description?: string,
    budget?: string,
    collaboration?: string,
    collaboration_overview?: string,
    inquiry?: string,

    [key: string]: any;
}

const interests = [
    "Portfolio Website",
    "Project Inquiry / Hiring",
    "Collaboration",
    "Other Inquiries",
];

const roles = [
    "Web Developer",
    "E-Commerce Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer"
]

const collaborations = [
    'Web Development Projects',
    'UI/UX Design Collaborations',
    'Tech Community Events (Workshops, Seminars)',
    'Open Source Contributions',
    'Joint Venture Tech Startups',
    'Educational Content Creation (Blogs, Tutorials)',
]

const budgets = [
    {
        value: '0-30000',
        text: 'Under £30,000'
    },
    {
        value: '30000-40000',
        text: '£30000 - £40000'
    },
    {
        value: '40001-50000',
        text: '£40001 - £50000'
    },
    {
        value: '50001-75000',
        text: '£50001 - £75000'
    },
    {
        value: '75000+',
        text: 'Over £75000'
    }
]

const validateField = (value: string) => value.length ? '' : `This field is required`;
const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email format';
const validateName = (value: string) => value.length > 5 ? '' : 'Name must be at least 6 characters long';
const validatePhone = (value: string) => /^(\+44\s?7\d{3}|\(?07\d{3}\)?|\+44\s?\(0\)\s?\d{3}|\(0\d{4}\)\s?|\(0\d{3}\)\s?|\(0\d{2}\)\s?|\d{4}\s?|\d{5}\s?)[\d\s]{3,9}$/.test(value) ? '' : 'Phone must be a valid UK number';
const validateInterest = (value: string) => value && interests.includes(value) ? '' : 'Selected interest is invalid';
const validateDescription = (value: string) => value.length > 20 ? '' : 'Description must be at least 20 characters long';
const validateBudget = (value: string) => value && budgets.some(budget => budget.value === value) ? '' : 'Selected budget is not valid';
const validateRole = (value: string) => value && roles.some(role => role === value) ? '' : 'Selected role is not valid';
const validateCollaboration = (value: string) => value && collaborations.some(collaboration => collaboration === value) ? '' : 'Selected collaboration is not valid';

export const useContactForm = () => {
    // Define the fields specific to the contact form
    const fields = {
        name: {
            value: '',
            validation: validateName
        },
        email: {
            value: '',
            validation: validateEmail
        },
        phone: {
            value: '',
            validation: validatePhone
        },
        interest: {
            value: 'Portfolio Website',
            validation: validateInterest
        },
        field_of_study: {
            value: '',
            validation: validateField
        },
        profile_url: {
            value: '',
            validation: validateField
        },
        portfolio_purpose: {
            value: '',
            validation: validateField
        },
        portfolio_description: {
            value: '',
            validation: validateField
        },
        personal_information: {
            value: '',
            validation: validateField
        },
        role: {
            value: '',
            validation: validateField
        },
        role_description: {
            value: '',
            validation: validateField
        },
        budget: {
            value: '',
            validation: validateField
        },
        collaboration: {
            value: '',
            validation: validateField
        },
        collaboration_overview: {
            value: '',
            validation: validateField
        },
        inquiry: {
            value: '',
            validation: validateField
        },
    };

    const requiredFields = ['name', 'email', 'phone', 'interest']

    const { form, errors, isFormValid, touchField, validateAll } = useForm(fields, requiredFields);

    const selectInterest = (interest: string) => {
        touchField('interest')

        form.interest = interest
    }

    const selectBudget = (budget: string) => {
        touchField('budget')

        form.budget = budget
    }

    const isSelectedInterest = (interest: string) => form.interest === interest

    const isSelectedBudget = (budget: string) => form.budget === budget

    const handleSubmit = async () => {
        if (!validateAll()) {
            console.log('form is invalid')
            return false
        }

        try {
            let formData = new FormData();
            for (let key in form) {
                formData.append(key, form[key]);
            }

            const response = await fetch('/', {
                method: 'POST',
                body: formData,
            });
        } catch (error) {
            // Handle exceptions
        }
    }

    return {
        budgets,
        interests,
        roles,
        collaborations,
        form,
        errors,
        selectInterest,
        selectBudget,
        isSelectedInterest,
        isSelectedBudget,
        isFormValid,
        touchField,
        handleSubmit
    }
}