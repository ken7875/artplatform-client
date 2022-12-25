// import type { Ref } from 'vue'
import { getAllArtistsApi } from '~~/api/artists'

export const getArtistsDataList = async () => {
  const artistsListState = useState<ArtistsList[] | null>('artistsList')
  const { data } = await useAsyncData('artistsData', () => getAllArtistsApi())

  artistsListState.value = data.value.data

  let artistsList = artistsListState.value!
  if (artistsListState.value !== null) {
    artistsList = artistsListState.value.map((item) => {
      // item.name = item.name.replace(' ', '/n')
      item.splitName = {
        first: item.name.split(' ')[0],
        last: item.name.split(' ')[1]
      }
      item.img = `bg-[url('/img/artist01.jpg')]`

      return item
    })
  }
  return { artistsList }
}
