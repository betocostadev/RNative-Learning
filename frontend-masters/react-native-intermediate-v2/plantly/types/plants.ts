export type PlantType = {
  id: string
  name: string
  wateringFrequencyDays: number
  lastWateredAtTimestamp?: number
  imageUri?: string
}

export type AddPlantArgs = Omit<PlantType, 'id' | 'lastWateredAtTimestamp'>

export type PlantsState = {
  nextId: number
  plants: PlantType[]
  addPlant: (args: AddPlantArgs) => Promise<void>
  removePlant: (plantId: string) => void
  waterPlant: (plantId: string) => void
}
