import { PLANTY_USER_STORAGE_KEY } from '@/utils/constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type TUserStore = {
  hasFinishedOnboarding: boolean
  toggleHasOnboarded: () => void
}

export const useUserStore = create(
  persist<TUserStore>(
    (set) => ({
      // export const useUserStore = create<TUserStore>((set) => ({
      hasFinishedOnboarding: false,
      toggleHasOnboarded: () => {
        set((state) => {
          return {
            ...state,
            hasFinishedOnboarding: !state.hasFinishedOnboarding,
          }
        })
      },
    }),
    {
      name: PLANTY_USER_STORAGE_KEY,
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
