import supabase from "../lib/supabase";
import Contact from "~/composables/models/contact";

class ContactService {
  static async insertContact(project: Contact): Promise<Contact | null> {
    const { data, error } = await supabase.from('contacts').insert([project]).single();

    if (error) {
      throw error
    }

    return data ?? null;
  }
}

export default ContactService;
