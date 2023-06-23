import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'

import notfound from '../../assets/icons/not-found.svg'
import error from '../../assets/icons/error.svg'
import styles from './Notification.module.sass'

const Notification = ({ type = 'notFound' }) => {
	const navigate = useNavigate()
  const img = type === 'notFound' ? notfound : error
  const text =
    type === 'notFound'
      ? `Ошибка 404.Что-то пошло не так.`
      : 'Что-то пошло не так. Ваш заказ отменен'
  const style = type === 'notFound' ? { display: 'block' } : { display: 'none' }
  const btnText =
    type === 'notFound' ? 'Вернуться на главную' : 'Оформить повторно'

  return (
    <div className={styles.notification}>
      <div className={styles.notification__inner}>
        <img src={img} alt="Not Found" className={styles.notfound__img} />
        <p className={styles.notification__descr}>{text}</p>
        <p style={style} className={styles.notification__text}>
          Страница, которую вы ищите, временно не доступна или ее еже нет
        </p>
          <Button text={btnText} onClick={() => navigate(type === 'notFound' ? '/' : -1 )} />
      </div>
    </div>
  )
}

Notification.propTypes = {
  type: PropTypes.string,
}

export default Notification
