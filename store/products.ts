import { defineStore } from 'pinia'
import { getNewestProductsApi } from '@/api/product'

type NewestData = Omit<RankingData, 'auth'> & { description: string; imgUrl: string }

interface State {
  newestProducts: NewestData[]
}

export const useProducts = defineStore('artistStore', {
  state: (): State => ({
    newestProducts: []
  }),
  actions: {
    async getNewestProducts() {
      const newestProducts = await getNewestProductsApi()
      this.newestProducts = newestProducts?.data.map((item: NewestData) => {
        item.imgUrl = `bg-[url('/img/${item.img}.jpg')]`
        // bg-[url('/img/hero-pattern.svg')]

        return item
      })
      //   console.log(this.newestProducts)
    }
  }
})
