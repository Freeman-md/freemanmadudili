import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**'
    ]
  },
  vite: {
    plugins: [
      svgLoader(),
    ],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
  ],
  googleFonts: {
    download: true,
    families: {
      'Josefin+Sans': true
    }
  }
})