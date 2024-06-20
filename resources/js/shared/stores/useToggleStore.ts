import { create } from 'zustand'

interface StoreState {
  isToggled: boolean
  toggle: () => void
}

const useToggle = create<StoreState>((set) => ({
  isToggled: false,
  toggle: () => set((state) => ({ isToggled: !state.isToggled })),
}))

export default useToggle
