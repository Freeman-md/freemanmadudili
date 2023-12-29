import { H3Event } from 'h3';
import { serverSupabaseClient } from '#supabase/server'
import Contact from "~/composables/models/contact";
import supabase from '../lib/supabase';

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
