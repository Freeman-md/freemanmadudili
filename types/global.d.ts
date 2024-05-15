export {  }

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
        tools: {
            data: StrapiResponseData<Tool>[]
        };
    }

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
        link: string;
        technologies: string[] = [];
        slug?: string;
        featured: boolean = false,
        tools: {
            data: StrapiResponseData<Tool>[]
        };
    }

    type ProjectRole = {
        title: string;
    }

    type CollaborationArea = {
        title: string;
    }

    type Tool = {
        title: string = '';
        image?: {
            data: StrapiResponseData<StrapiMedia>
        };
    }

    type Contact = {
        id?: number | null = null;
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

    type AppConfig = {
        professional_name: string,
        professional_email: string,
        skills_title: string,
        nickname: string,
        hero_headline: string,
        about_me_intro: string,
        introduction: string,
        about_me: string,
        hero_intro: string,
        contact_me_intro: string,
        professional_logo: {
            data: StrapiResponseData<StrapiMedia>
        },
        resume: {
            data: StrapiResponseData<StrapiMedia>
        },
        hero_image: {
            data: StrapiResponseData<StrapiMedia>
        },
        personal_photo: {
            data: StrapiResponseData<StrapiMedia>
        },
        socials: {
            linkedin: string,
            github: string,
        }
        createdAt: string,
        publishedAt: string,
    }

    type MetaData = {
        title: string;
        description: string;
        url: string;
        image: {
            data: StrapiResponseData<StrapiMedia>
        },
        apple_touch_icon: {
            data: StrapiResponseData<StrapiMedia>
        },
        favicon_32x32: {
            data: StrapiResponseData<StrapiMedia>
        },
        favicon_16x16: {
            data: StrapiResponseData<StrapiMedia>
        },
        manifest_file: {
            data: StrapiResponseData<StrapiMedia>
        },
    }

    type Education = {
        course_title: string;
        grade: string;
        institution: string;
        start_date: Date;
        end_date: Date;
        courses: string;
        description: string;
    }

    type FormattedExperience = Omit<Experience, 'projects' | 'tools'> & {
        projects: Project[];
        tools: Tool[]
    };

type FormattedProject = Omit<Project, 'image' | 'tools'> & {
        image: string;
        tools: Tool[]
    };

type FormattedTool = Omit<Tool, 'image'> & {
        image: string;
    };

    type FormattedAppConfig = Omit<AppConfig, 'professional_logo' | "resume" | "hero_image" | "personal_photo"> & {
        professional_logo: string;
        resume: string;
        hero_image: string;
        personal_photo: string;
    }

    type FormattedMetaData = Omit<MetaData, 'image' | "apple_touch_icon" | "favicon_32x32" | "favicon_16x16" | "manifest_file"> & {
        image: string;
        apple_touch_icon: string;
        favicon_32x32: string;
        favicon_16x16: string;
        manifest_file: string;
    }

    type ValidationRules = {
        [key: string]: (value: string) => string
    }

}