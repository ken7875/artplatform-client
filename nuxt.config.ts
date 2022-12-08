// https://v3.nuxtjs.org/api/configuration/nuxt.config
// import postcssOptions from './postcss.config'

export default defineNuxtConfig({
  // css: ["~/assets/css/tailwind.css"],
  // alias: {
  //   '/images': resolve(__dirname, '../assets/img'),
  // },
  modules: ['@nuxtjs/tailwindcss'],
  typescript: {
    typeCheck: true
  }
})
