import { useMemo } from 'react'

export const useFilteredProducts = (category, data) => {
  const filteredProducts = useMemo(() => {
    return !category.trim().length
      ? data
      : data.filter(item => item.subcategory.includes(category))
  }, [data, category])

  return filteredProducts
}

export const useFilteredAndSortedProducts = (sort, filteredData) => {
  const filteredAndSortedProducts = useMemo(() => {
    if (sort === 'cheapToExpensive') {
      return [...filteredData].sort((a, b) => a.price - b.price)
    }

    if (sort === 'expensiveToCheap') {
      return [...filteredData].sort((a, b) => b.price - a.price)
    }

    return filteredData
  }, [sort, filteredData])

  return filteredAndSortedProducts
}
