import PropTypes from 'prop-types'
import cn from 'classnames'

import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import { addProduct } from '../../Store/basketSlice'
import { addProduct as pushProduct } from '../../Store/favoriteSlice'

import Button from '../Button'

import chili from '../../assets/icons/chili.svg'
import vegan from '../../assets/icons/vegan.svg'
import lactose from '../../assets/icons/lactose.svg'

import styles from './ProductItem.module.sass'

const ProductItem = ({
  id,
  labels,
  img,
  filters,
  title,
  weight,
  ingridients,
  price,
  volume,
}) => {
  const dispatch = useDispatch(),
    [isFavorite, setIsFavorite] = useState(false),
    addBasketProduct = () =>
      dispatch(addProduct({ id, volume, img, title, weight, price }))



  return (
    <li data-product className={styles.product}>
      <ul data-labels className={styles.product__labels}>
        {labels?.map(label => (
          <li key={label} className={styles.product__label}>
            {label}
          </li>
        ))}
      </ul>
      <div data-box className={styles.product__img_box}>
        <NavLink to="/2123">
          <img src={img} alt="Суши" className={styles.product__img} />
        </NavLink>
      </div>
      <ul data-filters className={styles.product__filters}>
        {filters?.map(filter => {
          const img =
            filter === 'Острые' ? chili : filter === 'Вегетарианские' ? vegan : lactose

          return (
            <li key={filter} className={styles.product__filter}>
              <img src={img} alt={filter} />
            </li>
          )
        })}
      </ul>
      <div data-info className={styles.product__info}>
        <h3 className={cn(styles.product__title, 'third-title')}>{title}</h3>
        <span className={styles.product__weight}>
          {weight ? 'Вес' : 'Обьем'} {weight || volume} {weight ? 'г' : 'л'}
        </span>
        <ul className={styles.product__ingridients}>
          {ingridients?.map((ingridient, i) => {
            if (ingridient === ingridients.at(-1)) {
              return (
                <li key={ingridient} className={styles.product__ingridient}>
                  {ingridient}
                </li>
              )
            }
            return (
              <li
                key={ingridient}
                className={styles.product__ingridient}
              >{`${ingridient},`}</li>
            )
          })}
        </ul>
      </div>

      <div data-action className={styles.product__actions}>
        <div className={styles.product__price_box}>
          <span className={styles.product__price}>{price} </span>
          <span className={styles.product__currency}>грн</span>
        </div>

        <Button
		
          onClick={() => {
            dispatch(
              pushProduct({
                id,
                labels,
                img,
                title,
                weight,
                ingridients,
                price,
              })
            )
            setIsFavorite(!isFavorite)
          }}
		  style={isFavorite ? {backgroundColor: '#FF6633', color: 'white'} : null}
        >
          <svg className={styles.product__actions_icon}>
            <use xlinkHref="/icons/sprite.svg#icon-hearth" />
          </svg>
        </Button>
        <Button onClick={addBasketProduct}>
          <svg className={styles.product__actions_icon}>
            <use xlinkHref="/icons/sprite.svg#icon-plus" />
          </svg>
        </Button>
      </div>
    </li>
  )
}

ProductItem.propTypes = {
  id: PropTypes.number,
  labels: PropTypes.array,
  img: PropTypes.string,
  filters: PropTypes.array,
  title: PropTypes.string,
  weight: PropTypes.number,
  ingridients: PropTypes.array,
  price: PropTypes.number,
}

export default ProductItem
