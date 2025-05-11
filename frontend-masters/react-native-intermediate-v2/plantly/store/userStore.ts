import { create } from 'zustand'

type TUserStore = {
  hasFinishedOnboarding: boolean
  toggleHasOnboarded: () => void
}

export const useUserStore = create<TUserStore>((set) => ({
  hasFinishedOnboarding: false,
  toggleHasOnboarded: () => {
    set((state) => {
      return {
        ...state,
        hasFinishedOnboarding: !state.hasFinishedOnboarding,
      }
    })
  },
}))
