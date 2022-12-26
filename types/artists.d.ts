interface StatisticsData {
  sailingNums: number,
  floorPrice: number,
  weekDeal: number,
  monthDeal: number
}

interface ArtistsList {
  name: string,
  img: string,
  imgUrl: string,
  id: string,
  social: string[],
  description: string,
  statisticsData: StatisticsData,
  splitName: { [first: string]: string, [last: string]: string }
}