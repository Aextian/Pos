import Table from '@/shared/components/Table/Table'
import TableBody from '@/shared/components/Table/TableBody'
import TableHead from '@/shared/components/Table/TableHead'
import React, { memo, useCallback } from 'react'
import CreateTaxGroupModal from './CreateTaxGroupModal'
import useTaxStore from '../stores/useTaxStore'
import { QueryParam } from '@/shared/types/params'
import { Tax } from '../types/taxes-types'
import TableHeading from '@/shared/components/Table/TableHeading'
import useGlobalModalSortControl from '@/shared/hooks/useGlobalModalSortControl'
import DangerButton from '@/shared/components/Button/DangerButton'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import DeleteModal from '@/shared/components/Modal/DeleteModal'

type Props = {
  groups: Tax[]
  queryParams: QueryParam
}

const TaxGroup: React.FC<Props> = ({ queryParams, groups }) => {
  console.log(groups)

  const toggleGroup = useTaxStore(useCallback((state) => state.toggleGroup, []))

  const isToggleGroup = useTaxStore(useCallback((state) => state.isToggleGroup, []))

  const Thead = [
    { name: 'Name', sort_field: 'name' },
    { name: 'Tax Rates', sort_field: 'amount' },
    { name: 'Sub Taxes', sort_field: 'is_tax_group' },
    { name: 'Action', sort_field: '' },
  ]

  const {
    isCreateModal,
    setDelete,
    isDelete,
    handleShowCreateModal,
    isEditModal,
    handleShowEditModal,
    isEdit,
    sortChanged,
  } = useGlobalModalSortControl<Tax>(queryParams)

  return (
    <>
      <DeleteModal
        isDelete={isDelete}
        setDelete={setDelete}
        url="tax-rates.destroy"
        onCloseRoute="tax-rates.index"
        success="Tax rates deleted successfully"
      />
      <CreateTaxGroupModal showModal={isToggleGroup} handleShowModal={toggleGroup} />

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
          {groups.map((group) => (
            <TableBody.Row key={group.id}>
              <td className="px-6 py-3">{group.name}</td>
              <td className="px-6 py-3">{group.amount}</td>
              <td className="px-6 py-3">{group.is_tax_group}</td>
              <td className="space-x-3 whitespace-nowrap px-6 py-3">
                <DangerButton onClick={() => setDelete(group.id)}>Delete</DangerButton>
                <PrimaryButton onClick={() => handleShowEditModal(group)}>Edit</PrimaryButton>
              </td>
            </TableBody.Row>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default memo(TaxGroup)
