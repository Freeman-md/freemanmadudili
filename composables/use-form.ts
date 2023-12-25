import { reactive, computed, watch } from 'vue';

type FormField = {
    value: string;
    validation: (value: string) => string;
};

type FormFields = { [key: string]: FormField };

export const useForm = (initialFields: FormFields, requiredFields: string[] = []) => {
    const form = reactive<{ [key: string]: string }>({});
    const errors = reactive<{ [key: string]: string }>({});
    const touched = reactive<{ [key: string]: boolean }>({});

    // Initialize form fields, errors, and touched states
    for (const key in initialFields) {
        form[key] = initialFields[key].value;
        errors[key] = '';
        touched[key] = false;
    }

    // Function to validate if a field is required and non-empty
    const isRequiredAndEmpty = (fieldName: string, value: string) => {
        return requiredFields.includes(fieldName) && !value;
    };

    // Function to validate a single field
    const validateField = (fieldName: string, value: string) => {
        if (!touched[fieldName]) return '';
        if (isRequiredAndEmpty(fieldName, value)) return 'This field is required';
        return initialFields[fieldName].validation(value);
    };

    // Watch each form field for changes
    Object.keys(form).forEach((key) => {
        watch(() => form[key], (newValue) => {
            touchField(key)
            // if (touched[key]) {
                errors[key] = validateField(key, newValue);
            // }
        });
    });

    // Function to mark a field as touched
    const touchField = (fieldName: string) => {
        touched[fieldName] = true;
        errors[fieldName] = validateField(fieldName, form[fieldName]);
    };

    const validateAll = () => {
        let isValid = true;
    
        // First, mark all fields as touched and validate them
        for (const key in form) {
            touchField(key);
        }
    
        // Then, check if there are any errors
        for (const key in errors) {
            if (errors[key]) {
                isValid = false;
                break;
            }
        }
    
        return isValid;
    };
    

    const isFormValid = computed(() => {
        // Check if all required fields are filled        
        const requiredFieldsFilled = requiredFields.every(field => form[field]);
    
        // Check if there are no errors
        const noErrors = Object.keys(errors).every(key => !errors[key]);
    
        return requiredFieldsFilled && noErrors;
    });
    

    return {
        form,
        errors,
        touched,
        touchField,
        isFormValid,
        validateAll
    };
};
