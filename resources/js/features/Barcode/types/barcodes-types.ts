export interface Barcode {
  id: null | number
  name: string
  description: string
  width: number
  height: number
  paper_width: number
  paper_height: number
  top_margin: number
  left_margin: number
  row_distance: number
  col_distance: number
  stickers_in_one_row: number
  is_default: boolean
  is_continuous: boolean
  stickers_in_one_sheet: number
  business_id: null | number
}
