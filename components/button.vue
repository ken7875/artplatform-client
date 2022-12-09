<template>
  <button :class="['border-2 border-black', bgColor, textColor, width, height]">{{ text }}</button>
</template>

<script setup lang="ts">
const props = defineProps({
  bgColor: {
    type: String,
    default: 'bg-primary'
  },
  text: {
    type: [String, Number],
    default: ''
  },
  textColor: {
    type: String,
    default: 'text-white'
  },
  width: {
    type: String,
    default: 'text-[1rem]'
  },
  height: {
    type: String,
    default: ''
  }
})

const { bgColor, text, textColor, width, height } = toRefs(props)
</script>
