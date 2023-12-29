export type FormField = {
    value: string;
    validation: (value: string) => string;
};

export type FormFields = { [key: string]: FormField };