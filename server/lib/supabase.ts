import { SupabaseClient, createClient } from "@supabase/supabase-js";

const runtimeConfig = useRuntimeConfig()

const supabase: SupabaseClient = createClient(runtimeConfig.supabaseUrl, runtimeConfig.supabaseKey)

export default supabase