import cn from 'classnames'

import { useState } from 'react'

import BestOfferItem from '../BestOfferItem'

import styles from './BestOffer.module.sass'

const BestOffer = ({ data }) => {
  const [slide, setSlide] = useState(0)

  const filteredData = data?.filter((item) => item.isOffer)

  const handleSlide = (e) => {
    if (e.target.matches('[data-prev]')) {
      setSlide((slide) => (slide === 0 ? filteredData.length - 1 : slide - 1))
    }

    if (e.target.matches('[data-next]')) {
      setSlide((slide) => (slide === filteredData.length - 1 ? 0 : slide + 1))
    }
  }

  return (
    <article className={styles.bestoffer}>
      <div className={styles.bestoffer__slider}>
        {filteredData.map((item) => {
          return (
            <div
              key={item.id}
              className={styles.bestoffer__slide}
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              <BestOfferItem {...item} />
            </div>
          )
        })}
      </div>

      <button
        onClick={handleSlide}
        data-prev
        className={cn(styles.bestoffer__btn, styles.bestoffer__btn_left)}
      ></button>
      <button
        onClick={handleSlide}
        data-next
        className={cn(styles.bestoffer__btn, styles.bestoffer__btn_right)}
      ></button>
    </article>
  )
}

export default BestOffer
