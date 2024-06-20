import ContentTitle from '@/shared/components/ContentTitle'
import SecondaryButton from '@/shared/components/Button/SecondaryButton'
import MainLayout from '@/Layouts/MainLayout'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import CardBorderTop from '@/shared/components/CardBorderTop'
import { QueryParam } from '@/shared/types/params'
import TaxRates from '@/features/Tax/components/TaxRates'
import SearchBar from '@/shared/components/Table/SearchBar'
import { TaxData } from '@/features/Tax/types/taxes-types'
import Pagination from '@/shared/components/Table/Pagination'
import useTaxStore from '@/features/Tax/stores/useTaxStore'
import TaxGroup from '@/features/Tax/components/TaxGroup'

type Props = {
  queryParams: QueryParam
  tax_rates: TaxData
  tax_groups: TaxData
}

const Index: React.FC<Props> = ({ queryParams, tax_rates, tax_groups }) => {
  // handle to show modal
  const { toggleTax, toggleGroup } = useTaxStore()

  return (
    <>
      <MainLayout>
        <ContentTitle>
          Tax Rates<span className="text-xs text-gray-300"> Manage your Tax rates</span>
        </ContentTitle>

        {/* tax rates */}
        <CardBorderTop>
          <CardBorderTop.Header>
            <CardBorderTop.Title>All your tax rates</CardBorderTop.Title>
            <SecondaryButton onClick={toggleTax} className="gap-2">
              <FaPlus /> Add
            </SecondaryButton>
          </CardBorderTop.Header>
          <SearchBar queryParams={queryParams} url="tax-rates.index" type="tax-rates" />
          <CardBorderTop.Content>
            <TaxRates taxes={tax_rates.data} queryParams={queryParams} />
          </CardBorderTop.Content>
          <Pagination links={tax_rates.links} />
        </CardBorderTop>

        {/* tax group */}
        <CardBorderTop>
          <CardBorderTop.Header>
            <CardBorderTop.Title>Tax groups (Combination of multiple)</CardBorderTop.Title>
            <SearchBar queryParams={queryParams} url="tax-rates.index" type="tax-groups" />
            <SecondaryButton onClick={toggleGroup} className="gap-2">
              <FaPlus /> Add
            </SecondaryButton>
          </CardBorderTop.Header>
          <CardBorderTop.Content>
            <TaxGroup groups={tax_groups.data} queryParams={queryParams} />
          </CardBorderTop.Content>
          <Pagination links={tax_groups.links} />
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default Index
