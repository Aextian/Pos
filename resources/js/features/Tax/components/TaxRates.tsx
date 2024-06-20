import Table from '@/shared/components/Table/Table'
import TableBody from '@/shared/components/Table/TableBody'
import TableHead from '@/shared/components/Table/TableHead'
import React, { memo, useCallback } from 'react'
import { Tax } from '@/features/Tax/types/taxes-types'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import DangerButton from '@/shared/components/Button/DangerButton'
import { QueryParam } from '@/shared/types/params'
import useGlobalModalSortControl from '@/shared/hooks/useGlobalModalSortControl'
import TableHeading from '@/shared/components/Table/TableHeading'
import CreateTaxRateModal from './CreateTaxRateModal'
import EditTaxRateModal from './EditTaxRateModal'
import DeleteModal from '@/shared/components/Modal/DeleteModal'
import useTaxStore from '../stores/useTaxStore'

type Props = {
  taxes: Tax[]
  queryParams: QueryParam
}

const TaxRates: React.FC<Props> = ({ taxes, queryParams }) => {
  const Thead = [
    { name: 'Name', sort_field: 'name' },
    { name: 'Tax Rates', sort_field: 'amount' },
    { name: 'Action', sort_field: '' },
  ]
  const url = 'tax-rates.index'

  const initialEditState = {
    id: null,
    name: '',
    amount: null,
    is_tax_group: false,
  }

  const { setDelete, isDelete, isEditModal, handleShowEditModal, isEdit, sortChanged } =
    useGlobalModalSortControl<Tax>(queryParams, url, initialEditState)

  const toggleTax = useTaxStore(useCallback((state) => state.toggleTax, []))

  const isToggleTax = useTaxStore(useCallback((state) => state.isToggleTax, []))

  return (
    <>
      <DeleteModal
        isDelete={isDelete}
        setDelete={setDelete}
        url="tax-rates.destroy"
        onCloseRoute="tax-rates.index"
        success="Tax rates deleted successfully"
      />
      <CreateTaxRateModal showModal={isToggleTax} handleShowModal={toggleTax} />

      <EditTaxRateModal showModal={isEditModal} tax={isEdit} handleShowModal={handleShowEditModal} />

      <Table>
        <TableHead>
          <TableHead.Row>
            {Thead.map((item, index) => (
              <TableHeading
                sort_field={queryParams.sort_field || ''}
                sortChanged={sortChanged}
                key={index}
                sort_direction={queryParams.sort_direction}
                name={item.sort_field}>
                {item.name}
              </TableHeading>
            ))}
          </TableHead.Row>
        </TableHead>

        <TableBody>
          {taxes.map((tax) => (
            <TableBody.Row key={tax.id}>
              <td className="px-6 py-3">{tax.name}</td>
              <td className="px-6 py-3">{tax.amount}</td>
              <td className="space-x-3 whitespace-nowrap px-6 py-3">
                <DangerButton onClick={() => setDelete(tax.id)}>Delete</DangerButton>
                <PrimaryButton onClick={() => handleShowEditModal(tax)}>Edit</PrimaryButton>
              </td>
            </TableBody.Row>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default memo(TaxRates)
