interface Project {
    title: string;
    image?: string;
    description?: string;
    links: {
      github?: string;
      live?: string;
    };
    technologies: string[];
  }