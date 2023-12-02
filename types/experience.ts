interface Experience {
    company: string;
    position: string;
    start: number;
    end?: number | null;
    responsibilities: string[];
    projects: Project[];
    technologies: string[];
  }