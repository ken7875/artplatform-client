// https://v3.nuxtjs.org/api/configuration/nuxt.config
// import postcssOptions from './postcss.config'

export default defineNuxtConfig({
  // css: ["~/assets/css/tailwind.css"],
  // alias: {
  //   '/images': resolve(__dirname, '../assets/img'),
  // },
  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    // 'http://localhost:3001/api/artplatform'
    public: {
      apiBase: process.env.API_BASE_URL,
      otherUrl: process.env.OTHER_URL
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/device'],
  typescript: {
    typeCheck: true
  },
  build: {
    transpile: ['swiper']
  }
})
