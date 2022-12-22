<template>
  <button :class="['outline outline-2 outline-black', bgColor, textColor, width, height, triangle]">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  bgColor: {
    type: String,
    default: 'bg-[#FFFFFF]'
  },
  text: {
    type: [String, Number],
    default: ''
  },
  textColor: {
    type: String,
    default: 'text-black'
  },
  // hoverText: {
  //   type: String,
  //   default: 'hover:text-white'
  // },
  width: {
    type: String,
    default: 'w-[132px]'
  },
  height: {
    type: String,
    default: 'h-[35px]'
  },
  triangle: {
    type: String,
    default: 'triangle'
  }
  // hoverTriangle: {
  //   type: String,
  //   default: 'hover:triangle-black'
  // },
  // hoverBg: {
  //   type: String,
  //   default: 'hover:bg-[#E6553B]'
  // }
})

const { bgColor, text, textColor, width, height, triangle } = toRefs(props)
</script>
