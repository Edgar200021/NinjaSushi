import cn from 'classnames'

import { useEffect, useState, useMemo } from 'react'

import ProductItem from '../../components/ProductItem'
import ProductsList from '../../components/ProductsList'
import ProductFilter from '../../components/ProductFilter'
import Spinner from '../../components/Spinner'

import { getData } from '../../utils/fetchData'
import { PRODUCTS_URL } from '../../constants/url'
import { productSort } from '../../constants/category'
import {
  useFilteredProducts,
  useFilteredAndSortedProducts,
} from '../../hooks/useProducts'

import styles from './Rolles.module.sass'

const Rolles = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState({
	filterByCategory: '',
	sortedByPrice: '',
  })
  const [filterByCategory, setFilterByCategory] = useState('')
  const [sortedByPrice, setSortedByPrice] = useState('')
  const [fetchError, setFetchError] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchData = async url => {
    setLoading(true)
    const data = await getData(url)
    if (!data) {
      setFetchError(true)
      setLoading(false)
      return
    }

    setData(data.filter(item => item.category === 'roles'))
    setFetchError(false)
    setLoading(false)
  }

  useEffect(() => {
    fetchData(PRODUCTS_URL)
  }, [])

  const filterBySubcategory = category => {
    setFilterByCategory(category)
  }

  const sortByPrice = val => {
    setSortedByPrice(val)
  }

  const filteredData = useFilteredProducts(filterByCategory, data)

  const filteredAndSortedData = useFilteredAndSortedProducts(
    sortedByPrice,
    filteredData
  )

  const emptyContent = !data.length ? <h3>Товаров пока нет</h3> : null
  const error = fetchError ? <h3>произошла ошибка</h3> : null

  return (
    <main className={styles.main}>
      <h2 className={cn(styles.main__title, 'second-title')}>Роллы</h2>
      {loading ? (
        <Spinner />
      ) : (
        error ||
        emptyContent || (
          <>
            <ProductFilter
              sortByPrice={sortByPrice}
              defaultValue="Сортировка по"
              sort={productSort}
              onInput={filterBySubcategory}
            />
            <ProductsList data={filteredAndSortedData} />
          </>
        )
      )}
    </main>
  )
}

export default Rolles
