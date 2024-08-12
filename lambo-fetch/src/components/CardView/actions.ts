import { fetchCars } from '../../api/cars'
import { CarModel } from './props'

interface ICardActions {
  id: number
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
}

// Get API data
export const loadCarData = async ({ id, setCarData }: ICardActions) => {
  try {
    const response = await fetchCars(id)
    if (response) {
      setCarData(response)
    }
  } catch (error) {
    console.log(error)
    setCarData(null)
  }
}

// Get previous car from the API
export const handlePreviousItem = async ({ id, setCarData }: ICardActions) => {
  const prevId = id === 1 ? 10 : id - 1
  try {
    const response = await fetchCars(prevId)
    if (response) {
      setCarData(response)
    }
  } catch (error) {
    console.log(error)
    setCarData(null)
  }
}

// Get next car from the API
export const handleNextItem = async ({ id, setCarData }: ICardActions) => {
  const nextId = id === 10 ? 1 : id + 1
  try {
    const response = await fetchCars(nextId)
    if (response) {
      setCarData(response)
    }
  } catch (error) {
    console.log(error)
    setCarData(null)
  }
}
