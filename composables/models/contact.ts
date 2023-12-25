class Contact {
    id: number | null = null;
    name: string = '';
    email: string = '';
    phone: string = '';
    interest: string = '';
    field_of_study?: string;
    profile_url?: string;
    portfolio_purpose?: string;
    portfolio_description?: string;
    personal_information?: string;
    role?: string;
    role_description?: string;
    budget?: string;
    collaboration?: string;
    collaboration_overview?: string;
    inquiry?: string;
}

export default Contact