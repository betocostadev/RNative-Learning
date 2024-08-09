import { fetchCars } from '../../api/cars'

let carId = Math.floor(Math.random() * (11 - 1) + 1)

// Get API data
export const loadCarData = async (num = carId) => {
  const car = await fetchCars(num)
  return car
}

// Get previous car from the API
export const handlePreviousItem = async () => {
  let num = carId === 1 ? 10 : carId - 1
  carId = num
  const data = await fetchCars(carId)
  return data
}

// Get next car from the API
export const handleNextItem = async () => {
  let num = carId === 10 ? 1 : carId + 1
  carId = num
  const data = await fetchCars(carId)
  return data
}
