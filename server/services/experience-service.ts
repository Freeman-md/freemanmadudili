import supabase from "../lib/supabase";
import Experience from "~/composables/models/experience";

class ExperienceService {
  static async getAllExperiences(): Promise<Experience[]> {
    const { data, error } = await supabase.from('experiences').select('*');

    if (error) {
      throw error
    }

    return data ?? [];
  }

  static async getExperienceBySlug(slug: string): Promise<Experience> {
    const { data, error } = await supabase.from('experiences').select('*').eq('slug', slug).single();

    if (error) {
      throw error
    }

    return data ?? null;
  }

  static async insertExperience(experience: Experience): Promise<Experience | null> {
    const { data, error } = await supabase.from('experiences').insert([experience]).single();

    if (error) {
      throw error
    }

    return data ?? null;
  }

  static async insertExperiences(experiences: Partial<Experience>[]): Promise<Experience[]> {
    const { data, error } = await supabase.from('experiences').upsert(experiences);
    if (error) {
      throw error;
    }
    return data ?? [];
  }

  static async getExperienceCompanies(): Promise<Partial<Experience>[]> {
    const { data, error } = await supabase.from('experiences').select('company, slug');

    if (error) {
      throw error
    }

    return data ?? []
  }

}

export default ExperienceService;
