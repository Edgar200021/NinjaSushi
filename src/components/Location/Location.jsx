import { YMaps, Map, RoutePanel } from '@pbe/react-yandex-maps'
import cn from 'classnames'

import styles from './Location.module.sass'

const Location = () => {
  return (
    <YMaps>
      <article className={styles.map__container}>
        <h2 className={cn('second-titke', styles.map__title)}>
          Каждая кухня работает со своей зоной доставки,<br/> чтобы привезти еду
          максимально быстро
        </h2>
        <div className={styles.map__labels}>
          <span className={styles.map__label}>Бесплатная доставка</span>
          <span className={styles.map__label}>Платная доставка</span>
          <span className={styles.map__label}>Доставку не делаем</span>
        </div>
        <div className={styles.map}>
          <Map
            defaultState={{
              center: [50.2216902, 33.3634487],
              zoom: 9,
            }}
			
          />
        </div>
      </article>
    </YMaps>
  )
}

export default Location
