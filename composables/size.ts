import { Ref } from 'vue'

interface Size {
  device: Ref<string>
}

export default (): Size => {
  const innerWidth = ref(0)
  if (process.client) {
    innerWidth.value = window.innerWidth
  }

  const device = ref('desktop')

  if (innerWidth.value > 1199.98) {
    device.value = 'desktop'
  } else if (innerWidth.value < 991.98 && innerWidth.value > 767.98) {
    device.value = 'tablets'
  } else if (innerWidth.value < 767.98 && innerWidth.value > 575.98) {
    device.value = 'landscape mobile'
  } else if (innerWidth.value < 575.98) {
    device.value = 'protiat mobile'
  }

  return { device }
}
