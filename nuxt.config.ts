import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  devtools: { enabled: true },
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
