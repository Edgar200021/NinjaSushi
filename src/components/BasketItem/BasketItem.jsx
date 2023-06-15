import PropTypes from 'prop-types'
import cn from 'classnames'

import { useDispatch, useSelector } from 'react-redux'
import { removeProduct, changeCount, changeTotal} from '../../Store/basketSlice'
import { useState, useEffect } from 'react'

import styles from './BasketItem.module.sass'

const BasketItem = ({
  id,
  count,
  img,
  title,
  weight,
  volume,
  price,
  calcTotal,
  className = '',
}) => {
  const dispatch = useDispatch()

  const onChangeCount = (action, id) => {
    dispatch(changeCount({ action, id }))
  }


  return (
    <li className={cn(styles.basketitem, className)}>
      <img className={styles.basketitem__img} src={img} alt="" />
      <div className={styles.basketitem__info}>
        <h3 className={styles.basketitem__title}>{title}</h3>
        <span className={styles.basketitem__weight}>
          {weight ? 'Вес:' : 'Обьем'} {weight || volume} {weight ? 'г' : 'л'}
        </span>
      </div>
      <div data-action className={styles.basketitem__action}>
        <span className={styles.basketitem__price}>{price} грн</span>
        <button
          onClick={() => onChangeCount('minus', id)}
          className={styles.basketitem__btn}
        >
          -
        </button>
        <span className={styles.basketitem__quantity}>{count}</span>
        <button
          onClick={() => onChangeCount('plus', id)}
          className={styles.basketitem__btn}
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          dispatch(removeProduct({ id }))
		  dispatch(changeTotal({price: -price * count}))
        }}
        className={styles.basketitem__delete_btn}
      >
        x
      </button>
    </li>
  )
}

BasketItem.propTypes = {
  className: PropTypes.string,
}

export default BasketItem
