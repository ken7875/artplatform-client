<template>
  <div class="w-full">
    <div class="h-[6rem] w-full sm:px-[1rem] lg:mb-[40px] lg:px-[unset]">
      <ul class="flex h-full w-full border-black lg:px-[71px] xl:border-y-2">
        <li class="flex w-[80%] items-center xl:w-[40%]">
          <h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="189.374" height="40.001" viewBox="0 0 189.374 40.001">
              <g id="logo" transform="translate(0 0)">
                <g id="img" transform="translate(0 0)">
                  <path
                    id="Path_7"
                    data-name="Path 7"
                    d="M30,64.508,41.421,40.988,47.87,53.349,62.7,31.507l15.532,33Z"
                    transform="translate(-30 -24.507)"
                  />
                  <rect id="Rectangle_18" data-name="Rectangle 18" width="10" height="10" fill="#e6553b" />
                </g>
                <path
                  id="Path_3"
                  data-name="Path 3"
                  d="M.615,3.906l3.864-40H18.047l3.8,40H14.274l-.568-6.455H8.888l-.5,6.455ZM9.456-8.935h3.636l-1.75-20.341h-.364ZM24.3,3.906v-40H36.57a6.771,6.771,0,0,1,4.636,1.4,7.009,7.009,0,0,1,2.1,3.909,28.644,28.644,0,0,1,.534,5.9,13.617,13.617,0,0,1-.83,5.227,4.794,4.794,0,0,1-3.125,2.7,3.584,3.584,0,0,1,2.648,1.875A8.459,8.459,0,0,1,43.3-11.23V3.906H35.411V-11.753q0-1.75-.716-2.17a4.759,4.759,0,0,0-2.307-.42V3.906Zm8.136-25.182h1.932q1.659,0,1.659-3.614a8.188,8.188,0,0,0-.364-3.068,1.381,1.381,0,0,0-1.364-.727H32.433ZM49.911,3.906V-28.412h-4.75v-7.682h17.5v7.682h-4.75V3.906Zm25.886,0v-40h8.227l3.682,19.159V-36.094h7.727v40H87.615l-4-20v20Zm23.182,0v-40h16v7.8h-7.955v6.364h7.545v7.7h-7.545V3.906Zm22,0V-28.412h-4.75v-7.682h17.5v7.682h-4.75V3.906Z"
                  transform="translate(55.645 36.094)"
                />
              </g>
            </svg>
          </h1>
        </li>
        <li class="hidden w-[60%] xl:flex">
          <ul class="flex w-full">
            <li class="flex w-[58%] border-collapse items-center justify-around border-x-2 border-black">
              <input
                type="text"
                class="mr-[1.5rem] border-none bg-transparent outline-none"
                placeholder="蒐集作品名稱、藝術家名稱"
              />
              <i class="bi bi-search"></i>
            </li>
            <li class="flex w-[14%] items-center justify-center">
              <p>探索</p>
            </li>
            <li class="flex w-[14%] border-collapse items-center justify-center border-x-2 border-black">
              <p>市值</p>
            </li>
            <li class="flex w-[14%] items-center justify-center">
              <i class="bi bi-wallet-fill text-[24px]" @click="openWalletModal = !openWalletModal"></i>
            </li>
          </ul>
        </li>
        <li class="flex items-center xl:hidden">
          <i class="bi bi-search mr-[1.5rem] text-xl font-[900]"></i>
          <i v-show="!showMobileMenu" class="bi bi-list text-[2rem]" @click="showMobileMenu = true"></i>
          <i v-show="showMobileMenu" class="bi bi-x text-[2rem]" @click="showMobileMenu = false"></i>
        </li>
      </ul>
    </div>
    <div :class="['w-screen xl:hidden', showMobileMenu ? 'block' : 'hidden']">
      <ul class="w-full px-[12px]">
        <li class="border-b-[1px] border-gray-500 py-[2rem]">
          <p class="text-center text-[20px] font-bold">探索</p>
        </li>
        <li class="py-[2rem]">
          <p class="text-center text-[20px] font-bold">市值</p>
        </li>
        <button
          class="mb-[24px] w-full bg-[#E6553B] py-[12px] text-center text-[20px] font-bold text-white"
          @click="openWalletModal = !openWalletModal"
        >
          鏈結錢包
        </button>
      </ul>
    </div>
    <main class="mx-auto lg:max-w-[1296px]">
      <WalletsChoose v-model:openWalletModal="openWalletModal" />
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import WalletsChoose from '@/components/layouts/walletsChoose.vue'

const showMobileMenu = ref(false)
const openWalletModal = ref(false)
</script>
