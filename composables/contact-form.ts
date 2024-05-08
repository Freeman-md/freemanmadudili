const interests = [
    "Project Inquiry / Hiring",
    "Collaboration",
    "Other Inquiries",
];

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

export const useContactForm = () => {
    // Define the fields specific to the contact form
    const formFields: Contact = {
        name: '',
        email: '',
        phone: '',
        interest: 'Project Inquiry / Hiring',
        role: '',
        role_description: '',
        budget: '',
        collaboration: '',
        collaboration_overview: '',
        inquiry: '',
    };

    const requiredFields = ['name', 'email', 'phone', 'interest']

    const validationRules = {
        email: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email format',
        phone: (value: string) => /^\+?([0-9]{1,3})\s?([0-9]{1,4})[\s-]?([0-9]{1,4})[\s-]?([0-9]{1,4})[\s-]?([0-9]{1,9})$/.test(value) ? '' : 'Phone must be a valid number',
        interest: (value: string) => value && interests.includes(value) ? '' : 'Selected interest is invalid'
    };

    const { form, errors, isFormValid, touchField, validateForm, initializeForm } = useForm<Contact>(formFields, validationRules, requiredFields);

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

    return {
        budgets,
        interests,
        selectInterest,
        selectBudget,
        isSelectedInterest,
        isSelectedBudget,
        form,
        errors,
        isFormValid,
        touchField,
        validateForm,
        initializeForm,
    }
}