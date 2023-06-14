import cn from 'classnames'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { getData } from '../../utils/fetchData'
import Banner from '../../components/Banner'
import Button from '../../components/Button'
import ProductsList from '../../components/ProductsList'
import BestOffer from '../../components/BestOffer'
import Location from '../../components/Location'
import DownloadApp from '../../components/DownloadApp'

import styles from './Main.module.sass'

const Main = () => {
  const [productsData, setProductsData] = useState([])
  const [error, setError] = useState(false)

  const getProducts = async (url) => {
    const data = await getData(url)

    if (!data) {
      setError(true)
      return
    }

    setProductsData(data)
    setError(false)
  }

  useEffect(() => {
    getProducts('http://localhost:4000/products')
  }, [])

  return (
    <main className={styles.main}>
      <Banner />
      <section className={styles.section}>
        <div className={styles.section__info}>
          <h2 className={cn(styles.sushi__title, 'second-title')}>Суши</h2>
          <NavLink className={styles.section__suplink}>
            <Button text="Смотреть все"></Button>
          </NavLink>
        </div>
        <ProductsList data={productsData} category='sushi' />
        <NavLink className={styles.section__sublink}>
          <Button
            className={styles.section__button}
            text="Смотреть все продукты"
          />
        </NavLink>
      </section>
      <section className={styles.section}>
        <div className={styles.section__info}>
          <h2 className={cn(styles.sushi__title, 'second-title')}>Роллы</h2>
          <NavLink className={styles.section__suplink}>
            <Button text="Смотреть все"></Button>
          </NavLink>
        </div>
        <ProductsList data={productsData} category='roles' />
        <NavLink className={styles.section__sublink}>
          <Button
            className={styles.section__button}
            text="Смотреть все продукты"
          />
        </NavLink>
      </section>
      <section className={cn(styles.section, styles.section__nospace)}>
        <div className={styles.section__info}>
          <h2 className={cn(styles.sushi__title, 'second-title')}>Закуски</h2>
          <NavLink className={styles.section__suplink}>
            <Button text="Смотреть все"></Button>
          </NavLink>
        </div>
        <ProductsList data={productsData} category='sets' />
        <NavLink className={styles.section__sublink}>
          <Button
            className={styles.section__button}
            text="Смотреть все продукты"
          />
        </NavLink>
      </section>
	  <BestOffer data={productsData}/>
	  <section className={styles.section}>
        <div className={styles.section__info}>
          <h2 className={cn(styles.sushi__title, 'second-title')}>Сеты</h2>
          <NavLink className={styles.section__suplink}>
            <Button text="Смотреть все"></Button>
          </NavLink>
        </div>
        <ProductsList data={productsData} category='snacks' />
        <NavLink className={styles.section__sublink}>
          <Button
            className={styles.section__button}
            text="Смотреть все продукты"
          />
        </NavLink>
      </section>
	  <section className={styles.section}>
        <div className={styles.section__info}>
          <h2 className={cn(styles.sushi__title, 'second-title')}>Напитки</h2>
          <NavLink className={styles.section__suplink}>
            <Button text="Смотреть все"></Button>
          </NavLink>
        </div>
        <ProductsList data={productsData} category='drinks' />
        <NavLink className={styles.section__sublink}>
          <Button
            className={styles.section__button}
            text="Смотреть все продукты"
          />
        </NavLink>
      </section>
	<Location/>
	<DownloadApp/>
    </main>
  )
}

export default Main
