import cn from 'classnames'

import { useEffect, useState } from 'react'

import ProductsList from '../../components/ProductsList'
import ProductFilter from '../../components/ProductFilter'
import Spinner from '../../components/Spinner'

import { getData } from '../../utils/fetchData'
import { PRODUCTS_URL } from '../../constants/url'
import {
  useFilteredProducts,
  useFilteredAndSortedProducts,
  useFilteredByProperty,
} from '../../hooks/useProducts'

import { foodProperties, foodSubCategory } from '../../constants/category'

import emptyImg from '../../assets/img/emptyproducts.jpg'
import errorImg from '../../assets/img/error.jpg'

import styles from './Snacks.module.sass'

const Snacks = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState({
    filterByCategory: '',
    filterByProperty: [],
    sortedByPrice: '',
  })

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

    setData(data.filter(item => item.category === 'snacks'))
    setFetchError(false)
    setLoading(false)
  }

  useEffect(() => {
    fetchData(PRODUCTS_URL)
  }, [])

  const filterBySubcategory = category => {
    setFilter(prev => ({
      ...prev,
      filterByCategory: category,
    }))
  }

  const sortByPrice = val => {
    setFilter(prev => ({
      ...prev,
      sortedByPrice: val,
    }))
  }

  const filterByProperty = property => {
    setFilter(prev => {
      if (prev.filterByProperty.includes(property)) {
        const arr = prev.filterByProperty.filter(item => item !== property)
        return {
          ...prev,
          filterByProperty: arr,
        }
      }

      return {
        ...prev,
        filterByProperty: [...prev.filterByProperty, property],
      }
    })
  }

  const filteredData = useFilteredProducts(filter.filterByCategory, data)

  const filteredAndSortedData = useFilteredAndSortedProducts(
    filter.sortedByPrice,
    filteredData
  )

  const filteredByProperty = useFilteredByProperty(
    filter.filterByProperty,
    filteredAndSortedData
  )

  const emptyContent = !data.length ? <><h3 className='empty-title'>Товаров пока нет</h3><img className='empty-img' src={emptyImg} alt="пустая коробка"/></> : null
  const error = fetchError ? <><h3 className='error-title'>Произошла ошибка</h3><img className='error-img' src={errorImg} alt="Ошибка" /></> : null

  return (
    <main className={styles.main}>
      <h2 className={cn(styles.main__title, 'second-title')}>Закуски</h2>
      {loading ? (
        <Spinner />
      ) : (
        error ||
        emptyContent || (
          <>
            <ProductFilter
			properties={foodProperties}
			subCategory={foodSubCategory}
              sortByPrice={sortByPrice}
              filterByProperty={filterByProperty}
              defaultValue="Сортировка по"
              onInput={filterBySubcategory}
            />
            <ProductsList data={filteredByProperty} />
          </>
        )
      )}
    </main>
  )
}

export default Snacks
