export interface IGroup {
  id: number | null
  name: string
  amount: string
}

export interface IGroupData {
  data: IGroup[]
  links: []
  sort_field: string
  sort_direction: string
}
