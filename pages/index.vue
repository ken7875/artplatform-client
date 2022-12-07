<script lang="ts" setup>
// const getRecommandData = async () => {
//   const { data } = await useAsyncData('recommandData', () => $fetch('/mock/recommandData'))
//   console.log(data)
// }

const recommandData = [
  {
    img: '/_nuxt/assets/img/art01.jpg',
    auth: 'Kemus Wu',
    title: '瞳孔:流動的脈絡',
    description: '眼睛，總是吸引著我們的注意力，看、被看，也許眼睛裡有著從另一個世界看我們的世界。'
  },
  {
    img: '/_nuxt/assets/img/art02.jpg',
    auth: 'Joanne',
    title: '海洋波度',
    description: '海洋的奧秘向我們揭示了深不可測的一面，它的深度——反映了我們的恐懼、同時也吸引著我們。'
  },
  {
    img: '/_nuxt/assets/img/art03.jpg',
    auth: 'Michael',
    title: '我家窗前的鳥',
    description:
      '家門前每天都有不同的小鳥，大多數的小鳥都有特殊能力，特殊能力是什麼我就不說了，希望大家能從作品感受到小鳥的快樂。'
  }
]

const rankingData = [
  {
    id: 1,
    img: '/_nuxt/assets/img/art04.jpg',
    title: '散步遇到的女人',
    auth: 'Zeo Jiang',
    price: 300
  },
  {
    id: 2,
    img: '/_nuxt/assets/img/art05.jpg',
    title: '爆炸頭的母親',
    auth: 'Yui',
    price: 300
  },
  {
    id: 3,
    img: '/_nuxt/assets/img/art06.jpg',
    title: '夏天的時候',
    auth: 'Bug Lin',
    price: 300
  },
  {
    id: 4,
    img: '/_nuxt/assets/img/art07.jpg',
    title: '爆炸頭的母親',
    auth: 'Yui',
    price: 300
  },
  {
    id: 5,
    img: '/_nuxt/assets/img/art08.jpg',
    title: '爆炸頭的母親',
    auth: 'Yui',
    price: 300
  },
  {
    id: 6,
    img: '/_nuxt/assets/img/art09.jpg',
    title: '爆炸頭的母親',
    auth: 'Yui',
    price: 300
  }
]
</script>

<template>
  <div>
    <div>
      <ul class="flex flex-wrap">
        <li
          class="relative flex-row-reverse bg-white lg:flex lg:h-[340px] lg:w-[50%] lg:first:h-[500px] lg:first:w-full lg:first:flex-row"
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
          <img :src="data.img" :class="i === 0 ? 'lg:w-[70%]' : 'lg:w-[50%]'" />
          <div :class="['mt-[2rem] px-[1.5rem] pb-[1.5rem]', i === 0 ? 'lg:mt-[5rem]' : 'lg:mt-[2rem]']">
            <p class="mb-[1.5rem]">{{ data.auth }}</p>
            <h2 class="mb-[2rem] text-[2rem] font-[900]">
              {{ data.title }}
            </h2>
            <p class="mb-[1.5rem]">
              {{ data.description }}
            </p>
            <div class="flex w-full justify-end">
              <button
                class="triangle mb-[1.5rem] flex h-[35px] w-[132px] items-center justify-center border-2 border-black font-[900]"
              >
                MORE
              </button>
            </div>
          </div>
        </li>
      </ul>
      <div>
        <div>
          <h2 class="text-[2rem]">Ranking</h2>
          <p>市價排行榜</p>
        </div>
        <div class="">more</div>
      </div>
      <ul class="flex-wrap justify-between lg:flex">
        <li
          :class="[
            'mb-[1rem] w-[100vw] border-[1px] border-black lg:relative lg:mb-[2rem] lg:w-[30%]',
            data.id <= 3 ? 'flex lg:block' : 'flex'
          ]"
          v-for="data in rankingData"
          :key="data.id"
        >
          <div
            :class="[
              'top-0 left-0 z-50 flex w-[10%] items-center justify-center bg-white',
              data.id <= 3 ? 'lg:absolute lg:h-[4rem] lg:w-[4rem]' : 'lg:h-[100%]'
            ]"
          >
            <p :class="['sans font-bold', { 'lg:text-[2rem]': data.id <= 3 }]">
              {{ data.id }}
            </p>
          </div>
          <img
            :src="data.img"
            alt=""
            :class="[data.id <= 3 ? 'w-[25%] lg:h-[374px] lg:w-full' : 'w-[25%]', 'object-cover object-top']"
          />
          <div :class="[data.id <= 3 ? 'w-[70%] lg:w-full' : 'w-[70%]']">
            <h3 class="my-[1rem] ml-[1rem] text-[1.5rem] font-bold">
              {{ data.title }}
            </h3>
            <hr class="h-[2px] bg-black" />
            <div class="flex justify-between px-[1rem] py-4">
              <p>{{ data.auth }}</p>
              <p>{{ data.price }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="swiper-wrap">
      <div></div>
    </div>
  </div>
</template>
