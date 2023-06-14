import PropTypes from 'prop-types'

import Button from '../Button'

import img from '../../assets/img/bestoffer.png'

import styles from './BestOfferItem.module.sass'

const BestOfferItem = ({ ingridients, title, price }) => {
  return (
    <div className={styles.bestofferitem}>
      <div className={styles.bestofferitem__info}>
        <h2 className={styles.bestofferitem__title}>{title}</h2>
        <ul className={styles.bestofferitem__ingridients}>
          {ingridients?.map((ingridient, i) => {
            if (ingridient === ingridients.at(-1)) {
              return (
                <li key={ingridient} className={styles.bestofferitem__ingridient}>
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
          <Button text="В корзину" />

          <span className={styles.bestofferitem__price}>
            <span>{price}</span>
            <span className={styles.bestofferitem__currency}>грн</span>
          </span>
        </div>
      </div>
      <div className={styles.bestofferitem__img_box}>
        <img className={styles.bestofferitem__img} src={img} alt={title} />
      </div>
      <span className={styles.bestofferitem__offer}>
        Лучшее предложение недели!
      </span>
    </div>
  )
}

BestOfferItem.propTypes = {
  text: PropTypes.string,
}

export default BestOfferItem
