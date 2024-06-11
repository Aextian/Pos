import CardBorderTop from '@/shared/components/CardBorderTop'
import MainLayout from '@/Layouts/MainLayout'
import { useForm } from '@inertiajs/react'
import { Contact } from '@/features/Contact/types/contact-types'
import { UpdateForm } from '@/features/Contact/components/UpdateForm'

type Props = {
  contact: Contact
  type: string
}
const Edit: React.FC<Props> = ({ type, contact }) => {
  const { reset, setData, put, processing, errors, data } = useForm({
    name: contact.name ?? '',
    email: contact.email ?? '',
    supplier_business_name: contact.supplier_business_name ?? '',
    contact_id: contact.contact_id ?? '',
    points_status: contact.points_status ? true : false,
    type: contact.type,
    tax_number: contact.tax_number ?? '',
    city: contact.city ?? '',
    state: contact.state ?? '',
    country: contact.country ?? '',
    landmark: contact.landmark ?? '',
    mobile: contact.mobile ?? '',
    landline: contact.landline ?? '',
    alternate_number: contact.alternate_number ?? '',
    pay_term_number: contact.pay_term_number ?? '',
    pay_term_type: contact.pay_term_type ?? '',
    custom_field1: contact.custom_field1 ?? '',
    custom_field2: contact.custom_field2 ?? '',
    custom_field3: contact.custom_field3 ?? '',
    custom_field4: contact.custom_field4 ?? '',
    customer_group_id: contact.customer_group_id ?? '',
    credit_limit: contact.credit_limit ?? 0,
    t: type,
  } as unknown as Contact)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value, type } = e.target

    setData((prevValues) => ({
      ...prevValues,
      [name]: type === 'checkbox' ? ((e.target as HTMLInputElement).checked ? true : false) : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const url = route('contacts.update', contact.id)
      const response = put(url, {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
          reset()
        },
      })
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <MainLayout>
        <CardBorderTop>
          <CardBorderTop.Header>
            <CardBorderTop.Title>Add new contact</CardBorderTop.Title>
          </CardBorderTop.Header>
          <CardBorderTop.Content>
            <UpdateForm
              onSubmit={handleSubmit}
              handleChange={handleChange}
              errors={errors}
              data={data}
              processing={processing}
            />
          </CardBorderTop.Content>
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default Edit
