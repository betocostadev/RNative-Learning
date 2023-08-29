import {ImageSourcePropType} from 'react-native'

export interface IProducer {
  name: string
  image: ImageSourcePropType
  distance: string
  stars: number
}

export type TypeProducers = {
  title: string
  list: IProducer[]
}
