import { fetchCars } from '../../api/cars'
import { CarModel } from './props'

// Get API data
export const loadCarData = async (
  id: number,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
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
export const handlePreviousItem = async (
  id: number,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
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

// Get next car from the API
export const handleNextItem = async (
  id: number,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
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
