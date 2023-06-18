import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

import Button from '../Button'

import { addProduct } from '../../Store/basketSlice'
import { addProduct as addFavorite } from '../../Store/favoriteSlice'

import { getData } from '../../utils/fetchData'
import { PRODUCTS_URL } from '../../constants/url'

import chili from '../../assets/icons/chili.svg'
import vegan from '../../assets/icons/vegan.svg'
import lactose from '../../assets/icons/lactose.svg'

import styles from './SingleItem.module.sass'
import 'swiper/css'
import 'swiper/css/navigation'

const SingleItem = ({
  id,
  filters,
  img,
  labels,
  title,
  weight,
  components,
  ingridients,
  volume,
  price,
}) => {
  const dispatch = useDispatch()
  const [liked, setLiked] = useState(false)

  const likedStyle = liked ? {backgroundColor: "#FF6633", color: "white"} : null

  return (
    <div className={styles.singleitem}>
      <div className={styles.singleitem__inner}>
        <div className={styles.singleitem__left}>
          <ul className={styles.singleitem__filters}>
            {filters?.map(filter => {
              const img =
                filter === 'Острые'
                  ? chili
                  : filter === 'Вегетарианские'
                  ? vegan
                  : lactose

              return (
                <li key={filter} className={styles.singleitem__filter}>
                  <img
                    className={styles.singleitem__filter_img}
                    src={img}
                    alt={filter}
                  />
                  {filter}
                </li>
              )
            })}
          </ul>
          <img className={styles.singleitem__img} src={img} alt="Продукт" />
        </div>
        <div className={styles.singleitem__right}>
          <ul className={styles.singleitem__labels}>
            {labels?.map(label => (
              <li key={label} className={styles.singleitem__label}>
                {label}
              </li>
            ))}
          </ul>
          <h2 className={styles.singleitem__title}>{title}</h2>
          <span className={styles.singleitem__weight}>
            {weight ? 'Вес:' : 'Обьем'} {weight || volume}
            {weight ? 'г' : 'л'}
          </span>
          {components && (
            <div className={styles.singleitem__slider}>
              <span style={{ marginBottom: '12px', display: 'block' }}>
                Состав:
              </span>
              <Swiper
                spaceBetween={8}
                slidesPerView={5}
                navigation={{
                  nextEl: '#next',
                  prevEl: '#prev',
                  clickable: true,
                }}
                modules={[Navigation]}
              >
                <button
                  id="prev"
                  data-prev
                  className={styles.singleitem__slider_btn}
                ></button>

                {components?.map(({ img, descr }) => {
                  return (
                    <SwiperSlide key={descr}>
                      <div className={styles.singleitem__ingridient}>
                        <img
                          className={styles.singleitem__ingridient_img}
                          src={img}
                          alt={descr}
                        />
                        <span className={styles.singleitem__ingridient_descr}>
                          {descr}
                        </span>
                      </div>
                    </SwiperSlide>
                  )
                })}
                <button
                  id="next"
                  data-next
                  className={styles.singleitem__slider_btn}
                ></button>
              </Swiper>
            </div>
          )}

          <div className={styles.singleitem__lactose_toggle}>
            <input
              id="lactose-free"
              type="checkbox"
              className={styles.singleitem__lactose_input}
            />
            <label
              htmlFor="lactose-free"
              className={styles.singleitem__lactose_label}
            >
              <span className={styles.singleitem__lactose_decor}></span>
              <span className={styles.singleitem__lactose_text}>
                Безлактозное
              </span>
            </label>
          </div>

          <div className={styles.singleitem__actions}>
            <span className={styles.singleitem__price}>
              <span>{price}</span>грн
            </span>
            <Button
              onClick={() =>
                dispatch(addProduct({ id, img, title, weight, volume, price }))
              }
              text="В корзину"
            >
              <svg className={styles.singleitem__btn_icon}>
                <use xlinkHref="/icons/sprite.svg#icon-basket" />
              </svg>
            </Button>
            <Button
              onClick={() => {
                dispatch(
                  addFavorite({
                    id,
                    img,
                    title,
                    weight,
                    ingridients,
                    volume,
                    price,
                  })
                )
				setLiked(prev => !prev)
              }}

			  style={likedStyle}
            >
              <svg className={styles.singleitem__btn_icon}>
                <use xlinkHref="/icons/sprite.svg#icon-hearth" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

SingleItem.propTypes = {
  id: PropTypes.number,
  filters: PropTypes.array,
  img: PropTypes.string,
  labels: PropTypes.array,
  title: PropTypes.string,
  weight: PropTypes.number,
  ingridients: PropTypes.array,
  volume: PropTypes.number,
  price: PropTypes.number,
}

export default SingleItem
