export interface Category {
  id: null | number
  name: string
  short_code: string
  parent_id: null | number
}

export interface CategoryData {
  data: Category[]
  links: []
  sort_field: string
  sort_direction: string
}
