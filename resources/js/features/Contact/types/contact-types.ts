export interface Contact {
  id: number
  contact_id: string
  supplier_business_name: string
  name: string
  email: string
  type: 'supplier' | 'customer' | 'both'
  tax_number: string
  city: string
  state: string
  country: string
  landmark: string
  mobile: string
  landline: string
  alternative_number: string
  pay_term_number: number
  credit_limit: 'days' | 'months'
  pay_term_type: string
  customer_group_id: number
  custom_field1: string
  custom_field2: string
  custom_field3: string
  custom_field4: string
  points_value: string
  points_status: boolean
  is_default: boolean
  alternate_number: string
}
