export interface Brand {
  id: null | number
  name: string
  description: string
}

export interface BrandData {
  data: Brand[]
  links: []
  sort_field: string
  sort_direction: string
}
