import customFetch from '~~/utils/customFetch'
export const getAllArtistsApi = () => {
  return customFetch('/artists', {
    method: 'GET'
  })
}
