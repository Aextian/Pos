import { useCallback } from 'react'
import { router } from '@inertiajs/react'

interface QueryParams {
  sort_field: string
  sort_direction: 'asc' | 'desc'
  search?: string
}

const useSort = (queryParams: QueryParams, url: string) => {
  const sortChanged = useCallback(
    (name: string) => {
      const sortField = name
      const sortDirection = name === queryParams.sort_field ? (queryParams.sort_direction === 'asc' ? 'desc' : 'asc') : 'asc'

      router.get(
        route(url),
        {
          ...queryParams,
          sort_field: sortField,
          sort_direction: sortDirection,
        },
        {
          preserveState: true,
          preserveScroll: true,
        },
      )
    },

    [queryParams, url],
  )

  return sortChanged
}

export default useSort
