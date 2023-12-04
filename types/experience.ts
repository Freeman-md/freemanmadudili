import type Project from "./project";

export default interface Experience {
    company: string;
    slug: string;
    position: string;
    start_year: number;
    end_year?: number | null;
    responsibilities: string[];
    projects: Partial<Project>[];
    technologies: string[];
  }