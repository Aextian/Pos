export interface Unit {
  id: number | null
  actual_name: string
  short_name: string
  allow_decimal: number | null
  base_unit_multiplier: number | null
  base_unit_id: number | null
}

export interface UnitData {
  data: Unit[]
  links: []
  sort_field: string
  sort_direction: string
}
