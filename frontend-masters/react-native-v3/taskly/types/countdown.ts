import { Duration } from 'date-fns'

export type PersistedCountdownState = {
  currentNotificationId: string | undefined
  completedAtTimestamps: number[]
}

export type CountdownStatus = {
  isOverdue: boolean
  distance: Duration
}
