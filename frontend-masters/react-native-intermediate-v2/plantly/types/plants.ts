export type PlantType = {
  id: string
  name: string
  wateringFrequencyDays: number
  lastWateredAtTimestamp?: number
}

export type PlantsState = {
  nextId: number
  plants: PlantType[]
  addPlant: (name: string, wateringFrequencyDays: number) => void
  removePlant: (plantId: string) => void
  waterPlant: (plantId: string) => void
}
