import VueAwesomeSwiper from 'vue-awesome-swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAwesomeSwiper)
})
