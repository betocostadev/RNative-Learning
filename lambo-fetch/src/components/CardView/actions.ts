import { fetchCars } from '../../api/cars'
import { MAX_CAR_ID, MIN_CAR_ID } from '../../constants/car'
import { CarModel } from './props'

interface ICardActions {
  id: number
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

// Get API data
export const loadCarData = async ({
  id,
  setCarData,
  setLoading,
}: ICardActions) => {
  try {
    setLoading(true)
    const response = await fetchCars(id)
    if (response) {
      setCarData(response)
    }
  } catch (error) {
    console.log(error)
    setCarData(null)
  } finally {
    setLoading(false)
  }
}

// Get previous car from the API
export const handlePreviousItem = async ({
  id,
  setCarData,
  setLoading,
}: ICardActions) => {
  const prevId = id === MIN_CAR_ID ? 10 : id - 1
  try {
    setLoading(true)
    const response = await fetchCars(prevId)
    if (response) {
      setCarData(response)
    }
  } catch (error) {
    console.log(error)
    setCarData(null)
  } finally {
    setLoading(false)
  }
}

// Get next car from the API
export const handleNextItem = async ({
  id,
  setCarData,
  setLoading,
}: ICardActions) => {
  const nextId = id === MAX_CAR_ID ? 1 : id + 1
  try {
    setLoading(true)
    const response = await fetchCars(nextId)
    if (response) {
      setCarData(response)
    }
  } catch (error) {
    console.log(error)
    setCarData(null)
  } finally {
    setLoading(false)
  }
}
