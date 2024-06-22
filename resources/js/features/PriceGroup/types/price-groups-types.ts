export interface PriceGroup {
  id: null | number
  name: string
  description: string
}

export interface PriceGroupData {
  data: PriceGroup[]
  links: []
  sort_field: string
  sort_direction: string
}
