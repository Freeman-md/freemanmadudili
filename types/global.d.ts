export * from './form-fields'

declare global {

    type StrapiResponseData<T> = {
        id: number,
        attributes: T
    }

    type StrapiSingleResponse<T> = {
        data: StrapiResponseData<T>
        meta: object,
        error?: object
    }

    type StrapiCollectionResponse<T> = {
        data: StrapiResponseData<T>[]
        meta: object,
        error?: object
    }

    type StrapiMediaFormat = {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: null | string;
        size: number;
        width: number;
        height: number;
    };

    type StrapiMedia = {
        url: string;
        width: number;
        height: number;
        formats: {
            large?: StrapiMediaFormat;
            small?: StrapiMediaFormat;
            medium?: StrapiMediaFormat;
            thumbnail?: StrapiMediaFormat;
        };
        // Other fields like hash, ext, mime, etc., if needed
        // ...
    };

    // url contains media - has a lot other fields for different sizes
    type StrapiMedia = {
        url: string,
        [key]: string
    }


    type Experience = {
        id: number | null = null;
        created_at: string | null = null;
        updated_at: string | null = null;
        company: string = '';
        slug: string = '';
        position: string = '';
        start_date: number = 0;
        end_date: number | null = null;
        responsibilities: string[] = [];
        responsibilities_new: string = '';
        projects: {
            data: StrapiResponseData<Project>[]
        };
        technologies: string[] = [];
    }

    type FormattedExperience = Omit<Experience, 'projects'> & {
        projects: Project[];
    };

    type Project = {
        title: string = '';
        image?: {
            data: StrapiResponseData<StrapiMedia>
        };
        description?: string;
        links: {
            github?: string;
            live?: string;
        } = {
        github: undefined,
        live: undefined,
        };
        technologies: string[] = [];
        slug?: string;
        featured: boolean = false
    }

    type Contact = {
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

}