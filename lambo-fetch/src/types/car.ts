export interface ICarResults {
  cars: CarType[]
}

export type CarType = {
  id: number
  carName: 'string'
  releaseYear: number
  price: 'string'
}
