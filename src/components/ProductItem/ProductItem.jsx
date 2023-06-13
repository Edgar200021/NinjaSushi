import PropTypes from 'prop-types'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import Button from '../Button'

import styles from './ProductItem.module.sass'

import img from '../../assets/img/sushi.png'
import chili from '../../assets/icons/chili.svg'
import vegan from '../../assets/icons/vegan.svg'
import lactose from '../../assets/icons/lactose.svg'

const ProductItem = () => {
  return (
    <li className={styles.product}>
      <ul className={styles.product__labels}>
        <li className={styles.product__label}>Hit</li>
        <li className={styles.product__label}>Hit</li>
        <li className={styles.product__label}>Hit</li>
      </ul>
      <div className={styles.product__img_box}>
        <NavLink to="/2123">
          <img src={img} alt="Суши" className={styles.product__img} />
        </NavLink>
      </div>
      <ul className={styles.product__filters}>
        <li className={styles.product__filter}>
          <img src={chili} alt="Чили" />
        </li>
        <li className={styles.product__filter}>
          <img src={vegan} alt="Веган" />
        </li>
        <li className={styles.product__filter}>
          <img src={lactose} alt="Лактоза" />
        </li>
      </ul>
      <div className={styles.product__info}>
        <h3 className={cn(styles.product__title, 'third-title')}>
          Гункан лосось
        </h3>
        <span className={styles.product__weight}>Вес: 40г</span>
        <ul className={styles.product__ingridients}>
          <li className={styles.product__ingridient}>Нори,</li>
          <li className={styles.product__ingridient}>рис, </li>
          <li className={styles.product__ingridient}> японский майонез,</li>
          <li className={styles.product__ingridient}>бальзамик,</li>
          <li className={styles.product__ingridient}>трюфельная сальса,</li>
          <li className={styles.product__ingridient}>кунжутное масло</li>
        </ul>
      </div>

      <div className={styles.product__actions}>
        <div className={styles.product__price_box}>
          <span className={styles.product__price}>190 </span>
          <span className={styles.product__currency}>грн</span>
        </div>

        <Button>
          <svg className={styles.product__actions_icon}>
            <use xlinkHref="icons/sprite.svg#icon-hearth" />
          </svg>
        </Button>
        <Button>
          <svg className={styles.product__actions_icon} >
            <use xlinkHref="icons/sprite.svg#icon-plus" />
          </svg>
        </Button>
      </div>
    </li>
  )
}

ProductItem.propTypes = {
  text: PropTypes.string,
}

export default ProductItem
