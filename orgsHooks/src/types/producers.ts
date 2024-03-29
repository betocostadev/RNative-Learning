import {ImageSourcePropType} from 'react-native'

export interface IProducer {
  name: string
  image: ImageSourcePropType
  distance: number
  stars: number
  onPress?: () => void
  baskets?: BasketType[]
}

export type BasketType = {
  details: BasketTypeDetails
  items: BasketItemType[]
}

export type BasketTypeDetails = {
  name: string
  description: string
  price: string
  image: ImageSourcePropType
}

export type BasketItemType = {
  name: string
  image: ImageSourcePropType
}

export type TypeProducers = {
  list: IProducer[]
}

export type TextsType = {
  welcome?: string
  legend?: string
  legendBestProducers?: string
  titleProducers?: string
  titleProducer?: string
  titleBaskets?: string
  topBasket?: string
  buyBtn?: string
  titleItems?: string
}
