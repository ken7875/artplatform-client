<script lang="ts" setup>
import { getRankingProductsApi } from '~~/api/product'
import { useProducts } from '@/store/products'
import { getArtistsDataList } from '@/composables/articles'
import BaseButton from '@/components/button.vue'
import { Pagination } from 'swiper'
import { storeToRefs } from 'pinia'
import MasonryWall from '@yeger/vue-masonry-wall'
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

// swiper
let curSwiperIdx = ref(0)
const setVSwiperRef = (swiper: any) => {
  curSwiperIdx.value = swiper.activeIndex
}
const slideChanged = (swiper: any) => {
  curSwiperIdx.value = swiper.activeIndex
}
const modules = [Pagination]

const { isDesktop } = useDevice()

let calcSliderSize = (idx: number) => {
  let sliderSize = {}
  if (isDesktop) {
    sliderSize = {
      width: idx === curSwiperIdx.value ? '636px' : '306px',
      height: idx === curSwiperIdx.value ? '439px' : '262px',
      transition: idx === curSwiperIdx.value && isDesktop ? '1s 0.1s' : 'unset'
    }
  } else {
    sliderSize = {
      height: 'auto'
    }
  }

  return sliderSize
}

// newest products
const productsStore = useProducts()

const { getNewestProducts } = productsStore
const { newestProducts } = storeToRefs(productsStore)
await getNewestProducts()

// mansory
const mansoryHeight = isDesktop ? [358, 431, 358, 273, 278, 358, 449, 358] : [191, 203, 145, 225, 244, 151]

const mansoryImgHeihgt = (index: number) => {
  return isDesktop
    ? {
        'h-[254px]': index === 0 || index === 2 || index === 5 || index === 7,
        'h-[327px]': index === 1,
        'h-[169px]': index === 3,
        'h-[174px]': index === 4,
        'h-[395px]': index === 6
      }
    : {
        'h-[139px]': index === 0,
        'h-[151px]': index === 1,
        'h-[93px]': index === 2,
        'h-[173px]': index === 3,
        'h-[192px]': index === 4,
        'h-[99px]': index === 5
      }
}
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
      <div class="mb-[48px] flex items-end justify-between border-b-2 border-black px-[12px] font-[900] lg:px-[0]">
        <div class="mb-[8px] flex items-end lg:mb-[16px]">
          <h2 class="mr-[16px] text-[2rem]">Ranking</h2>
          <p class="hidden lg:block">市價排行榜</p>
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
    <!-- 熱門藝術家 -->
    <div class="px-[12px] lg:px-[0]">
      <div class="mb-[48px] flex items-end justify-between border-b-2 border-black font-[900]">
        <div class="mb-[8px] flex items-end lg:mb-[16px]">
          <h2 class="mr-[16px] text-[2rem]">Artist</h2>
          <p class="hidden lg:block">熱門藝術家</p>
        </div>
        <p class="triangle border-black px-[48px] py-[8px] hover:border">more</p>
      </div>
      <!-- class="swiper swiper-home" -->
      <!-- calc(-15% + 24px) -->
      <div class="h-auto lg:h-[487px]">
        <swiper
          :modules="modules"
          :auto-height="true"
          :slidesPerView="$device.isDesktop ? 'auto' : 1"
          :spaceBetween="$device.isDesktop ? 24 : 0"
          :centeredSlides="true"
          @slideChange="slideChanged"
          @swiper="setVSwiperRef"
        >
          <swiper-slide v-for="(artist, i) in artistsList" :key="i" :style="calcSliderSize(i)" class="self-center">
            <!-- artist.imgUrl -->
            <div
              :class="['flex h-full flex-col justify-between self-center bg-cover p-[24px]']"
              v-if="$device.isDesktop"
              :style="{ backgroundImage: `url('/img/${artist.img}.jpg')` }"
            >
              <template v-if="i === curSwiperIdx">
                <h3 class="whitespace-pre-wrap text-[4rem] leading-[5rem] text-white">
                  <span class="block">{{ artist.splitName.first }}</span>
                  <span class="block">{{ artist.splitName.last }}</span>
                </h3>
                <div class="flex items-end justify-between">
                  <div class="w-[307px] bg-[rgba(255,255,255,0.5)] p-[24px]">
                    <p class="text-[1rem]">{{ artist.description }}</p>
                  </div>
                  <BaseButton :text="'MORE'" />
                </div>
              </template>
            </div>
            <div class="h-[500px]" v-else>
              <div
                :class="['flex h-[232px] w-full justify-between bg-cover p-[24px]']"
                :style="{ backgroundImage: `url('/img/${artist.img}.jpg')` }"
              >
                <h3 class="self-start whitespace-pre-wrap text-[2rem] leading-[5rem] text-white">
                  {{ artist.name }}
                </h3>
                <BaseButton :text="'MORE'" class="self-end" />
              </div>
              <div class="mt-[16px] flex w-full items-end justify-between">
                <div class="w-full bg-[rgba(255,255,255,0.5)] p-[24px]">
                  <p class="text-[1rem]">{{ artist.description }}</p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <ul class="mb-[80px] flex justify-center lg:mb-[80px]">
        <li
          v-for="i in artistsList.length"
          :key="i"
          :class="['mr-[8px] h-[8px] w-[8px] bg-black', { 'w-[16px] bg-primary': i - 1 === curSwiperIdx }]"
        ></li>
      </ul>
    </div>
    <!-- 最新藝術品 -->
    <div class="px-[12px] lg:px-[0]">
      <div class="mb-[48px] flex items-end justify-between border-b-2 border-black font-[900]">
        <div class="mb-[8px] flex items-end lg:mb-[16px]">
          <h2 class="mr-[16px] text-[2rem]">Artwork</h2>
          <p class="hidden lg:block">最新藝術品</p>
        </div>
        <p class="triangle border-black px-[48px] py-[8px] hover:border">more</p>
      </div>
      <!-- <ul class="w-full">
        <li v-for="(product, i) in newestProducts" :key="i">
          <img :src="`/img/${product.img}.jpg`" alt="" :class="{ 'h-[327px]': i === 1 }" />
          <p>{{ product.description }}</p>
        </li>
      </ul> -->
      <MasonryWall
        :items="mansoryHeight"
        :ssr-columns="1"
        :column-width="$device.isDesktop ? 306 : 156"
        :gap="$device.isDesktop ? 24 : 32"
      >
        <template #default="{ item, index }">
          <div :style="{ height: `${item}px` }" class="lg:border-b-2 lg:border-black">
            <div class="group relative bg-[#FFFFFF] p-[24px]">
              <img
                :src="`/img/${newestProducts[index].img}.jpg`"
                alt="newest products image"
                :class="[mansoryImgHeihgt(index), 'w-full object-cover']"
              />
              <div
                class="invisible absolute top-[50%] left-[50%] flex h-[calc(100%-48px)] w-[calc(100%-48px)] translate-x-[-50%] translate-y-[-50%] flex-col justify-between bg-[rgba(0,0,0,0.5)] p-[16px] group-hover:visible"
              >
                <p class="m-[8px] font-[700] text-white">{{ newestProducts[index].description }}</p>
                <BaseButton :text="'MORE'" class="self-end" />
              </div>
            </div>
            <p class="my-[8px] text-[0.9rem] font-[900] md:my-[1rem] md:text-[1.2rem]">
              {{ newestProducts[index].title }}
            </p>
          </div>
        </template>
      </MasonryWall>
    </div>
  </div>
</template>
