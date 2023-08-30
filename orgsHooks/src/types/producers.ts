import {ImageSourcePropType} from 'react-native'

export interface IProducer {
  name: string
  image: ImageSourcePropType
  distance: number
  stars: number
  baskets: BasketType[]
}

type BasketType = {
  details: {
    name: string
    description: string
    price: string
    image: ImageSourcePropType
  }
  items: BasketItemType[]
}

type BasketItemType = {
  name: string
  image: ImageSourcePropType
}

export type TypeProducers = {
  list: IProducer[]
}
