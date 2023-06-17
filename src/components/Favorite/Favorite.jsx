import cn from 'classnames'
import { useSelector } from 'react-redux'

import ProductItem from '../ProductItem/'

import favoriteEmpty from '../../assets/icons/empty-favorite.svg'
import styles from './Favorite.module.sass'

const Favorite = ({ openFavorite, onCloseFavorite }) => {
  const favoriteProducts = useSelector(
      state => state.favoriteProducts.products
    ),
    classes = openFavorite
      ? cn(styles.favorite, styles.favorite__active)
      : styles.favorite

  return (
    <article className={classes}>
      <div className={styles.favorite__inner}>
        <div className={styles.favorite__top}>
          <span className={styles.favorite__descr}>Избранные</span>
          <button
            onClick={() => {
              onCloseFavorite(false)
              document.body.style.overflow = 'auto'
            }}
            className={styles.favorite__btn}
          ></button>
        </div>
        <div className={styles.favorite__middle}>
          {favoriteProducts.length ? (
            <ul className={styles.favorite__list}>
              {favoriteProducts.map(product => {
                return <ProductItem key={product.id} {...product} />
              })}
            </ul>
          ) : (
            <div className={styles.favorite__empty}>
              <span className={styles.favorite__empty_supdescr}>
                Вы еще ничего не добавили в избранное
              </span>
              <span className={styles.favorite__empty_subdescr}>
                Переходите в интересующую вас категорию и отмечайте
                понравившиеся
              </span>
              <img
                className={styles.favorite__empty_icon}
                src={favoriteEmpty}
                alt="Сердце"
              />
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default Favorite
