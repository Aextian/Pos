import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import CardBorderTop from '@/shared/components/CardBorderTop'
import ContentTitle from '@/shared/components/ContentTitle'
import InputError from '@/shared/components/InputError'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { useForm } from '@inertiajs/react'
import {
  FaCircleInfo,
  FaLocationPin,
  FaMessage,
  FaPersonArrowUpFromLine,
  FaUser,
  FaUserGroup,
} from 'react-icons/fa6'
import Tooltip from '@/shared/components/Tooltip'
import { FaEnvelope, FaInfo, FaMap, FaMobile, FaMoneyBill, FaPhone } from 'react-icons/fa'
import Select from '@/shared/components/Select'
import { Form } from '@/features/Contact/components/Form'
import { Contact } from '@/features/Contact/types/contact-types'

const Create: React.FC<{ type: string }> = ({ type }) => {
  const { reset, setData, post, processing, errors, data } = useForm({
    name: '',
    email: '',
    supplier_business_name: '',
    contact_id: '',
    points_status: false,
    type: type,
    tax_number: '',
    city: '',
    state: '',
    country: '',
    landmark: '',
    mobile: '',
    landline: '',
    alternate_number: '',
    pay_term_number: '',
    pay_term_type: '',
    custom_field1: '',
    custom_field2: '',
    custom_field3: '',
    custom_field4: '',
    customer_group_id: '',
    credit_limit: 0 as number | null,
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
      const url = route('contacts.store')
      const response = post(url, {
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
    <MainLayout>
      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>Add new contact</CardBorderTop.Title>
        </CardBorderTop.Header>
        <CardBorderTop.Content>
          <Form
            onSubmit={handleSubmit}
            handleChange={handleChange}
            errors={errors}
            data={data}
            processing={processing}
          />
        </CardBorderTop.Content>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Create
