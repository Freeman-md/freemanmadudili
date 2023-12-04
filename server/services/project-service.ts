import supabase from "../lib/supabase";
import Project from "~/composables/models/project";

class ProjectService {
  static async getAllProjects(): Promise<Project[]> {
    const { data, error } = await supabase.from('projects').select('*');

    if (error) {
        throw error
    }

    return data ?? [];
  }

  static async getProjectBySlug(slug: string): Promise<Project | null> {
    const { data, error } = await supabase.from('projects').select('*').eq('slug', slug).single();

    if (error) {
        throw error
    }

    return data ?? null;
  }

  static async insertProject(project: Project): Promise<Project | null> {
    const { data, error } = await supabase.from('projects').insert([project]).single();

    if (error) {
      throw error
    }

    return data ?? null;
  }

  static async insertProjects(projects: Partial<Project>[]): Promise<Project[]> {
    const { data, error } = await supabase.from('projects').upsert(projects);
    if (error) {
      throw error;
    }
    return data ?? [];
  }
}

export default ProjectService;
