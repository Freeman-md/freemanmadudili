import { SupabaseClient, createClient } from "@supabase/supabase-js";

const runtimeConfig = useRuntimeConfig()

const supabase: SupabaseClient = createClient('https://rpmoxpetgnucxvgqsjyp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwbW94cGV0Z251Y3h2Z3FzanlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE1MjYwMjMsImV4cCI6MjAxNzEwMjAyM30.OK7au5svXE8_WAV4A3rBrmtYjtETQNj1RYvK6Pp00Mc')

export default supabase