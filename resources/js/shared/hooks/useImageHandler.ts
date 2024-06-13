import { useState, useCallback } from 'react'

const useImageHandler = () => {
  const [image, setImage] = useState<string | null>(null)
  // const [fileName, setFileName] = useState<string | null>(null)
  const [fileSize, setFileSize] = useState<number | null>(null)

  const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      // setFileName(file.name) // Set file name
      setFileSize(file.size)
      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result as string // Assert type to string
        setImage(result)
      }
      reader.readAsDataURL(file)
    } else {
      setImage(null)
      setFileSize(null)
    }
  }, [])

  const formatBytes = useCallback((bytes: number) => {
    const mb = bytes / (1024 * 1024)
    return mb.toFixed(2) // Convert bytes to MB and format to two decimal places
  }, [])

  return {
    image,
    fileSize,
    handleImageChange,
    formatBytes,
  }
}

export default useImageHandler
