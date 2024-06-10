export interface Supplier {
  id: number
  name: string
  email: string
  supplier_business_name: string
  contact_id: string
  points_status: boolean
  type: string
  tax_number: string
  city: string
  state: string
  country: string
  landmark: string
  mobile: string
  landline: string
  opening_balance: string | number
  alternate_number: string
  pay_term_number: string | number // Assuming pay_term_number could be a string or number
  pay_term_type: string
  custom_field1: string
  custom_field2: string
  custom_field3: string
  custom_field4: string
}
