class Project {
    title: string = '';
    image?: string;
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
  
  export default Project;
  