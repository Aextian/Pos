import React, { useState } from 'react'

const Tabs = () => {
  const [isOpen, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!isOpen)
  }

  return (
    <div>
      <li onClick={() => toggle()}></li>
    </div>
  )
}

export default Tabs
