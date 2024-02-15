import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      api_url: process.env.API_URL
    }
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
    '@nuxt/content'
  ],
  googleFonts: {
    download: true,
    families: {
      'Josefin+Sans': true
    }
  },
  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => ['lottie-player'].includes(tag),
    },
  }
})