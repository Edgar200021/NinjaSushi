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



export const useFilteredByProperty = (properties, data) => {
	const filteredByProperty = useMemo(() => {
		if (!properties.length) return data
	
		return data.filter(product => {
		  return product.filters
			.sort()
			.join(' ')
			.includes(properties.sort().join(' '))
		})
	  }, [data, properties])

	  return filteredByProperty
}
