<template>
  <div
    v-show="openWalletModal"
    class="z-modal absolute top-0 right-0 h-screen w-full bg-white lg:left-[50%] lg:top-[50%] lg:h-[unset] lg:w-[45%] lg:translate-x-[-50%] lg:translate-y-[-50%]"
  >
    <div class="relative border-b-2 border-black py-4">
      <h2 class="text-center text-[1.5rem]">連結你的錢包</h2>
      <i
        class="bi bi-x absolute right-0 top-[50%] translate-y-[-50%] text-[1.8rem] font-[900]"
        @click="$emit('update:openWalletModal', false)"
      ></i>
    </div>
    <ul class="my-[26.5px] w-[100%] flex-wrap px-[.75rem] lg:flex">
      <li class="mb-[8px] mr-[8px] flex w-full items-center border-2 border-black py-[16px] lg:w-[calc(50%-8px)]">
        <img src="/img/icon/connect01.png" alt="" class="mx-[1rem] w-[1.5rem]" />
        <p class="font-squada font-[900]">MetaMask</p>
      </li>
      <li class="mb-[8px] flex items-center border-2 border-black py-[16px] lg:w-[calc(50%-8px)]">
        <img src="/img/icon/connect02.png" alt="" class="mx-[1rem] w-[1.5rem]" />
        <p class="font-squada font-[900]">Coinbase Wallet</p>
      </li>
      <li class="mb-[8px] mr-[8px] flex items-center border-2 border-black py-[16px] lg:w-[calc(50%-8px)]">
        <img src="/img/icon/connect03.png" alt="" class="mx-[1rem] w-[1.5rem]" />
        <p class="font-squada font-[900]">WalletConnect</p>
      </li>
      <li class="mb-[8px] flex items-center border-2 border-black py-[16px] lg:w-[calc(50%-8px)]">
        <img src="/img/icon/connect04.png" alt="" class="mx-[1rem] w-[1.5rem]" />
        <p class="font-squada font-[900]">Phantom</p>
      </li>
      <li class="mb-[8px] mr-[8px] flex items-center border-2 border-black py-[16px] lg:w-[calc(50%-8px)]">
        <img src="/img/icon/connect05.png" alt="" class="mx-[1rem] w-[1.5rem]" />
        <p class="font-squada font-[900]">Glow</p>
      </li>
      <li class="mb-[8px] flex items-center border-2 border-black py-[16px] lg:w-[calc(50%-8px)]">
        <img src="/img/icon/connect06.png" alt="" class="mx-[1rem] w-[1.5rem]" />
        <p class="font-squada font-[900]">Fortmatic</p>
      </li>
    </ul>
    <button></button>
  </div>
</template>

<script setup lang="ts">
// defineEmits(['update:openWalletModal'])
const props = defineProps({
  openWalletModal: {
    type: Boolean,
    default: false
  }
})

const { openWalletModal } = toRefs(props)
</script>
