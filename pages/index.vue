<script lang="ts" setup>
import { getRankingProductsApi } from '~~/api/product'
// import { getArtistsDataList } from '@/composable/articles'
import BaseButton from '@/components/button.vue'
import { Pagination } from 'swiper'
// import { Ref } from 'vue'
// import Swiper, { Pagination } from 'swiper'
// import 'swiper/swiper.scss'

const { data: rankingData } = await useAsyncData('rankingData', () => getRankingProductsApi())
const { artistsList } = await getArtistsDataList()

let recommandData = ref()

onMounted(() => {
  recommandData.value = [
    {
      img: 'art01',
      auth: 'Kemus Wu',
      title: '瞳孔:流動的脈絡',
      description: '眼睛，總是吸引著我們的注意力，看、被看，也許眼睛裡有著從另一個世界看我們的世界。'
    },
    {
      img: 'art02',
      auth: 'Joanne',
      title: '海洋波度',
      description: '海洋的奧秘向我們揭示了深不可測的一面，它的深度——反映了我們的恐懼、同時也吸引著我們。'
    },
    {
      img: 'art03',
      auth: 'Michael',
      title: '我家窗前的鳥',
      description:
        '家門前每天都有不同的小鳥，大多數的小鳥都有特殊能力，特殊能力是什麼我就不說了，希望大家能從作品感受到小鳥的快樂。'
    }
  ]
})
let curSwiperIdx = ref(0)
const setVSwiperRef = (swiper: any) => {
  curSwiperIdx.value = swiper.activeIndex
  console.log(swiper, curSwiperIdx.value, swiper.activeIndex)
}
const slideChanged = (swiper: any) => {
  curSwiperIdx.value = swiper.activeIndex
  console.log(swiper, curSwiperIdx.value, swiper.activeIndex)
}
const modules = [Pagination]
</script>

<template>
  <div>
    <div>
      <ul class="mb-[80px] flex flex-wrap">
        <li
          :class="[
            'relative flex-row-reverse bg-white outline outline-1 outline-black lg:flex lg:h-[340px] lg:w-[50%] lg:first:h-[500px] lg:first:w-full lg:first:flex-row'
          ]"
          v-for="(data, i) in recommandData"
          :key="i"
        >
          <div
            class="absolute left-0 top-0 hidden h-full w-[100px] flex-col items-center bg-black px-[1.5rem] pt-[1.5rem] lg:first:flex"
            v-show="i === 0"
          >
            <p class="wrtting-virtual mb-[1rem] text-[40px] font-bold text-white">Recommend</p>
            <p class="wrtting-virtual whitespace-nowrap text-[20px] font-bold text-white">推薦系列</p>
          </div>
          <img :src="`/img/${data.img}.jpg`" :class="i === 0 ? 'lg:w-[70%]' : 'lg:w-[50%]'" />
          <div :class="['relative mt-[2rem] px-[1.5rem] pb-[1.5rem]', i === 0 ? 'lg:mt-[5rem]' : 'lg:mt-[2rem]']">
            <p class="mb-[1.5rem]">{{ data.auth }}</p>
            <h2 class="mb-[2rem] text-[2rem] font-[900]">
              {{ data.title }}
            </h2>
            <p class="mb-[91px]">
              {{ data.description }}
            </p>
            <div class="absolute bottom-[24px] right-[24px] h-[35px] w-[132px]">
              <BaseButton :text="'MORE'" :textColor="'text-black'" />
              <!-- <button
                class="triangle mb-[1.5rem] flex h-full w-full items-center justify-center font-[900] outline outline-2 outline-black"
              >
                MORE
              </button> -->
            </div>
          </div>
        </li>
      </ul>
      <div class="mb-[48px] flex items-end justify-between border-b-2 border-black font-[900]">
        <div class="mb-[16px] flex items-end">
          <h2 class="mr-[16px] text-[2rem]">Ranking</h2>
          <p>市價排行榜</p>
        </div>
        <p class="triangle px-[48px] py-[8px]">more</p>
      </div>
      <ul class="flex-wrap justify-between lg:flex">
        <li
          :class="[
            'group mb-[1rem] w-[100vw] cursor-pointer outline outline-2 outline-black lg:relative lg:mb-[2rem] lg:h-auto lg:w-[calc(33.3%-25px)]',
            data.id <= 3 ? 'flex lg:block' : 'flex'
          ]"
          v-for="data in rankingData.data"
          :key="data.id"
        >
          <div
            :class="[
              'top-0 left-0 z-50 flex items-center justify-center bg-white',
              data.id <= 3 ? 'lg:absolute lg:h-[4rem] lg:w-[4rem]' : 'lg:h-[100%]'
            ]"
          >
            <p :class="['sans px-[8px] font-bold lg:px-[16px]', { 'lg:text-[2rem]': data.id <= 3 }]">
              {{ data.id }}
            </p>
          </div>
          <div class="relative">
            <img
              :src="`/img/${data.img}.jpg`"
              alt=""
              :class="[
                data.id <= 3 ? 'w-[25%] lg:h-[374px] lg:w-full lg:object-top' : 'w-[25%]',
                'relative h-[91px] w-[87px] object-cover object-center'
              ]"
            />
            <div class="invisible absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.7)] group-hover:visible">
              <p
                :class="[
                  'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-[900] text-white',
                  data.id > 3 ? 'block' : 'lg:hidden'
                ]"
              >
                MORE
              </p>
              <div :class="['triangle h-full w-full', { 'sm:block lg:hidden': data.id <= 3 }]"></div>
            </div>
            <!-- <button class="triangle-black absolute bottom-0 right-0 bg-[#E6553B]">MORE</button> -->
            <div :class="['invisible absolute bottom-0 right-0', { 'group-hover:visible': data.id <= 3 }]">
              <BaseButton :bgColor="'bg-[#FFFFFF]'" :text="'MORE'" />
            </div>
          </div>
          <div :class="[data.id <= 3 ? 'w-[70%] lg:w-full' : 'w-[70%]', { 'border-t-2 border-black': data.id <= 3 }]">
            <h3 class="my-[1rem] ml-[1rem] text-[1rem] font-bold">
              {{ data.title }}
            </h3>
            <hr class="h-[2px] bg-black" />
            <div class="flex justify-between px-[1rem] py-[0.5rem] text-[12px] font-bold">
              <p>{{ data.auth }}</p>
              <p>{{ data.price }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <div class="mb-[48px] flex items-end justify-between border-b-2 border-black font-[900]">
        <div class="mb-[16px] flex items-end">
          <h2 class="mr-[16px] text-[2rem]">Artist</h2>
          <p>熱門藝術家</p>
        </div>
        <p class="triangle border-black px-[48px] py-[8px] hover:border">more</p>
      </div>
      <!-- class="swiper swiper-home" -->
      <!-- calc(-15% + 24px) -->
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :spaceBetween="24"
        :auto-height="true"
        @slideChange="slideChanged"
        @swiper="setVSwiperRef"
        :centeredSlides="true"
      >
        <swiper-slide
          v-for="(artist, i) in artistsList"
          :key="i"
          :style="{
            width: i === curSwiperIdx ? '636px' : '306px',
            height: i === curSwiperIdx ? '439px' : '262px'
          }"
          class="self-center"
        >
          <div :class="[artist.img, 'h-full bg-cover p-[24px]']">
            <template v-if="i === curSwiperIdx">
              <h3 class="whitespace-pre-wrap text-[4rem] leading-[5rem] text-white">
                <span class="block">{{ artist.splitName.first }}</span>
                <span class="block">{{ artist.splitName.last }}</span>
              </h3>
              <div class="flex justify-between">
                <div class="w-[307px] bg-[rgba(255,255,255,0.5)] p-[24px]">
                  <p class="text-[1rem]">{{ artist.description }}</p>
                </div>
                <BaseButton :text="'MORE'" />
              </div>
            </template>
          </div>
        </swiper-slide>
      </swiper>
      <div
        :class="['h-[8px] w-[8px] bg-black', { 'w-[16px] bg-primary': i === 2 }]"
        v-for="i in artistsList.length"
        :key="i"
      ></div>
    </div>
  </div>
</template>
