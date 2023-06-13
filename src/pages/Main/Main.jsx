import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import Banner from '../../components/Banner'
import Button from '../../components/Button'
import ProductsList from '../../components/ProductsList'

import styles from './Main.module.sass'

const Main = () => {
  return (
    <main className={styles.main}>
      <Banner />
      <section className={styles.section}>
        <div className={styles.section__info}>
          <h2 className={cn(styles.sushi__title, 'second-title')}>Суши</h2>
          <NavLink  className={styles.section__suplink}>
            <Button text="Смотреть все"></Button>
          </NavLink>
        </div>
        <ProductsList />
        <NavLink className={styles.section__sublink}>
          <Button
            className={styles.section__button}
            text="Смотреть все продукты"
          />
        </NavLink>
      </section>
    </main>
  )
}

export default Main
