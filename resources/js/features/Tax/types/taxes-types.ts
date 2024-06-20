export interface Tax {
  id: null | number
  name: string
  amount: number | null
  is_tax_group: boolean
}

export interface TaxData {
  data: Tax[]
  links: []
  sort_field: string
  sort_direction: string
}
