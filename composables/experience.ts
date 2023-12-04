import type Project from "~/types/project";

class Experience {
    id: number | null = null;
    created_at: string | null = null;
    updated_at: string | null = null;
    company: string = '';
    slug: string = '';
    position: string = '';
    start_year: number = 0;
    end_year: number | null = null;
    responsibilities: string[] = [];
    projects: Partial<Project>[] = [];
    technologies: string[] = [];
}

export default Experience