// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { resolve } from 'path';
import postcssOptions from './postcss.config'

export default defineNuxtConfig({
  head: {
    title: 'art platform',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  // css: ["~/assets/css/tailwind.css"],
  // alias: {
  //   '/images': resolve(__dirname, '../assets/img'),
  // },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  typescript: {
    typeCheck: true
  },
  build: {
    postcss: {
      postcssOptions,
    },
  },
});
