export interface Category {
  id: null | number
  name: string
  cat_discount: number
  cat_status: boolean
  short_code: string
  parent_id: null | number
}

export interface CategoryData {
  data: Category[]
  links: []
  sort_field: string
  sort_direction: string
}
