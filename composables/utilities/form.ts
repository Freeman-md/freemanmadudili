export const useForm = <T extends Record<string, any>>(initialFields: T, validationRules: ValidationRules, requiredFields: string[]) => {
    const form = reactive<{ [key: string]: any }>({});
    const errors = reactive<{ [key: string]: string }>({});
    const touched = reactive<{ [key: string]: boolean }>({});

    const isEmpty = (value: string) => !value

    // check if field is required
    const isARequiredField = (fieldName: string) => {
        return requiredFields.includes(fieldName);
    };

    const initializeForm = () => {
        for (const key in initialFields) {
            form[key] = initialFields[key];
            errors[key] = '';
            touched[key] = false;
        }
    };

    // validate a single field
    const validateField = (fieldName: string, value: string) => {
        if (!touched[fieldName]) return '';

        if (isARequiredField(fieldName) && isEmpty(value)) return 'This field is required'

        if (fieldName in validationRules) return validationRules[fieldName](value)

        return ''
    };

    // mark field as touched
    const touchField = (fieldName: string) => {
        touched[fieldName] = true;
        
        errors[fieldName] = validateField(fieldName, form[fieldName]);
    };


    const isFormValid = computed(() => {
        // Check if all required fields are filled        
        const requiredFieldsFilled = requiredFields.every(field => form[field]);

        // Check if there are no errors
        const noErrors = Object.keys(errors).every(key => !errors[key]);

        return requiredFieldsFilled && noErrors;
    });

    const validateForm = () => {
        Object.keys(form).forEach(key => {
            touchField(key)
        })
    }

    initializeForm()

    // Watch each form field for changes
    Object.keys(form).forEach((key) => {
        watch(() => form[key], (newValue, oldValue) => {
            touchField(key)
        });
    });

    return {
        form,
        errors,
        touched,
        touchField,
        isFormValid,
        validateForm,
        initializeForm,
    };
};
