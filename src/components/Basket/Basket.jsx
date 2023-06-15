import PropTypes from 'prop-types'
import cn from 'classnames'

import { useSelector } from 'react-redux'
import { useState } from 'react'

import Button from '../Button'
import BasketItem from '../BasketItem'
import styles from './Basket.module.sass'

import '../../assets/icons/empty-basket.svg'

const Basket = ({ openBasket, onCloseBasket }) => {
  const total = useSelector(state => state.basketProducts.basketTotal)

  const basketProducts = useSelector(
    state => state.basketProducts.basketProducts
  )
  const classes = openBasket
    ? cn(styles.basket, styles.basket__active)
    : styles.basket

//  const calcTotal = price => {
//    setTotal(prev => prev + price )
//  }

  return (
    <div className={classes}>
      <div className={styles.basket__inner}>
        <div className={styles.basket__top}>
          <span className={styles.basket__title}>Ваш заказ</span>
          <button
            onClick={() => {
              onCloseBasket(false)
              document.body.style.overflow = 'auto'
            }}
            className={styles.basket__btn}
          ></button>
        </div>
        <div className={styles.basket__middle}>
          <ul className={styles.basket__list}>
            {basketProducts.map(product => (
              <BasketItem key={product.id} {...product}  />
            ))}
          </ul>
        </div>
        <span className={styles.basket__descr}>
          Минимальная сумма заказа 400 грн
        </span>
        <div className={styles.basket__bottom}>
          <span className={styles.basket__total}>
            <span className={styles.basket__total_descr}>Итого:</span>
            <span className={styles.basket__total_price}>
              {total} <small>грн</small>
            </span>
          </span>
          <Button text="Оформить заказ" />
        </div>
      </div>
    </div>
  )
}

Basket.propTypes = {
  openBasket: PropTypes.bool,
}

export default Basket
