import { create } from 'zustand'

interface ImageState {
  image: string | null
  fileSize: number | null
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  formatBytes: (bytes: number) => string
}

const useImageStore = create<ImageState>((set) => ({
  image: null,
  fileSize: null,

  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      set({ fileSize: file.size })
      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result as string
        set({ image: result })
      }
      reader.readAsDataURL(file)
    } else {
      set({ image: null, fileSize: null })
    }
  },

  formatBytes: (bytes: number) => {
    const mb = bytes / (1024 * 1024)
    return mb.toFixed(2) // Convert bytes to MB and format to two decimal places
  },
}))

export default useImageStore
