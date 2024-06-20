import { create } from 'zustand'

interface StoreState {
  isToggleTax: boolean
  isToggleGroup: boolean
  toggleTax: () => void
  toggleGroup: () => void
}

const useTaxStore = create<StoreState>((set) => ({
  isToggleTax: false,
  toggleTax: () => set((state) => ({ isToggleTax: !state.isToggleTax })),

  isToggleGroup: false,
  toggleGroup: () => set((state) => ({ isToggleGroup: !state.isToggleGroup })),
}))

export default useTaxStore
