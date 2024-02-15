import type Project from "~/types/project";

class Experience {
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
    projects: Partial<Project>[] = [];
    technologies: string[] = [];
}

export default Experience