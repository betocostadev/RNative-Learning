import axios from 'axios'
import { CAR_API_BASE_URL } from '../constants/car'
import { ICarResults } from '../types/car'

export const fetchCars = async (id: number) => {
  try {
    const response = await axios.get<ICarResults>(CAR_API_BASE_URL)
    const { data } = response
    return data.cars.find((car) => car.id === id) || null
  } catch (error) {
    console.log('Error fetching API data: ', error)
  }
}
