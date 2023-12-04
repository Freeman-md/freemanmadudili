import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-49MQ1SP9TJ"
        },
        {
          src: '/js/google-analytics.js'
        },
      ]
    }
  },
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
  vite: {
    plugins: [
      svgLoader(),
    ],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    download: true,
    families: {
      'Josefin+Sans': true
    }
  }
})