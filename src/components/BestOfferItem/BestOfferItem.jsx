import PropTypes from 'prop-types'

import { addProduct } from '../../Store/basketSlice'
import Button from '../Button'

import img1 from '../../assets/img/bestoffer.png'

import styles from './BestOfferItem.module.sass'
import { useDispatch } from 'react-redux'

const BestOfferItem = ({
  id,
  ingridients,
  title,
  price,
  weight,
  volume,
  img,
}) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.bestofferitem}>
      <div className={styles.bestofferitem__info}>
        <h2 className={styles.bestofferitem__title}>{title}</h2>
        <ul className={styles.bestofferitem__ingridients}>
          {ingridients?.map((ingridient, i) => {
            if (ingridient === ingridients.at(-1)) {
              return (
                <li
                  key={ingridient}
                  className={styles.bestofferitem__ingridient}
                >
                  {ingridient}
                </li>
              )
            }
            return (
              <li key={ingridient} className={styles.bestofferitem__ingridient}>
                {`${ingridient},`}
              </li>
            )
          })}
        </ul>
        <div className={styles.bestofferitem__action}>
          <Button
            onClick={() =>
              dispatch(addProduct({ id, img, title, price, weight, volume }))
            }
            text="В корзину"
          />

          <span className={styles.bestofferitem__price}>
            <span>{price}</span>
            <span className={styles.bestofferitem__currency}>грн</span>
          </span>
        </div>
      </div>
      <div className={styles.bestofferitem__img_box}>
        <img className={styles.bestofferitem__img} src={img1} alt={title} />
      </div>
      <span className={styles.bestofferitem__offer}>
        Лучшее предложение недели!
      </span>
    </div>
  )
}

BestOfferItem.propTypes = {
  ingridients: PropTypes.array,
  title: PropTypes.string,
  price: PropTypes.number,
  weight: PropTypes.number,
  volume: PropTypes.number,
  img: PropTypes.string,
}

export default BestOfferItem
