import cn from 'classnames'

import Button from '../Button'

import img from '../../assets/img/banner/banner-1.png'


import styles from './Banner.module.sass'

const Banner = () => {


  return (
    <section className={styles.banner__section}>
        <div className={styles.banner}>
          <div className={styles.banner__left}>
            <h1 className={cn('first-title', styles.banner__title)}>
              Ninja Sushi<br/> в Киеве! Пока только на левом берегу
            </h1>
            <span className={styles.banner__descr}>
              Доставку делаем с 10:00 до 19:30
            </span>
            <Button text="Перейти к новостям" />
          </div>
          <div className={styles.banner__right}>
            <img className={styles.banner__img} src={img} alt="Баннер" />
          </div>
        </div>
    </section>
  )
}

export default Banner
