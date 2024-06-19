export interface Product {
  id: null | number
  name: string
  type: string
  unit_id: number | null
  brand_id: number | null
  category_id: number | null
  sub_category_id: number | null
  tax: number | null
  tax_type: 'inclusive' | 'exclusive' | null
  enabled_stock: boolean
  alert_quantity: number | null
  sku: string
  barcode_type: string
  expiry_period: number | null
  expiry_period_type: 'days' | 'months' | null
  enable_sr_no: boolean
  weight: string
  product_custom_field1: string
  product_custom_field2: string
  product_custom_field3: string
  product_custom_field4: string
  image: string | null
  product_description: string
  is_inactive: boolean
}
