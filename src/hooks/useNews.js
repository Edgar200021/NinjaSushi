import { useMemo } from 'react'

export const useFilteredByGenre = (data, val) => {
  const newData = useMemo(() => {
    return !val ? data : data.filter(({ genre }) => genre.includes(val))
  }, [data, val])

  return newData
}


export const useFilteredByDescr = (data, val) => {
	const newData = useMemo(() => {
		return data.filter(({description})=> description.toLowerCase().includes(val.toLowerCase()))
	}, [data, val])

	return newData
}
