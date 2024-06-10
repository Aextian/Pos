import React from 'react'

interface StockData {
  Id: number
  product: string
  stock: number
  location: string
}

const StockData: StockData[] = [
  {
    Id: 1,
    product: 'Abbocath/ivCath(g-24)',
    stock: 23,
    location: 'Pinamalayan',
  },

  {
    Id: 2,
    product: 'Abbocath/ivCath(g-18)',
    stock: 1,
    location: 'Papandayan',
  },

  {
    Id: 3,
    product: 'Abbocath/ivCath(g-21)',
    stock: 5,
    location: 'Socorro',
  },

  {
    Id: 4,
    product: 'Abbocath/ivsdCath(g-21)',
    stock: 188,
    location: 'Calapan',
  },

  {
    Id: 4,
    product: 'Abbocath/ivsdCath(g-2s1)',
    stock: 188,
    location: 'Calapan',
  },
]

export default StockData
