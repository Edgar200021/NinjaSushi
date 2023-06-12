import { NavLink } from 'react-router-dom'

import Button from '../Button'

import img from '../../assets/icons/not-found.svg'
import styles from './NotFound.module.sass'

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <div className={styles.notfound__inner}>
        <img src={img} alt="Not Found" className={styles.notfound__img} />
        <p className={styles.notfound__descr}>
          Ошибка 404.
          <br />
          Что-то пошло не так.
        </p>
        <p className={styles.notfound__text}>
          Страница, которую вы ищите, временно не доступна или ее еже нет
        </p>
        <NavLink to="/">
          <Button text="Вернуться на главную" />
        </NavLink>
      </div>
    </div>
  )
}

export default NotFound
