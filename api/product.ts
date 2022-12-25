import customFetch from '~~/utils/customFetch'

// const runtimeConfig = useRuntimeConfig()
// const baseUrl = runtimeConfig.public.apiBase

export const getRankingProductsApi = () => {
  return customFetch('/products/ranking', {
    method: 'GET'
  })
}

export const getNewestProductsApi = () => {
  return customFetch('/products/newest', {
    method: 'GET'
  })
}
