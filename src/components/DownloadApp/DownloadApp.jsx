import cn from 'classnames'
import styles from './DownloadApp.module.sass'

import appstore from '../../assets/icons/app-store.svg'
import googleplay from '../../assets/icons/google-play.svg'
import app from '../../assets/icons/app.svg'

const DownloadApp = () => {
  return (
    <article className={styles.downloadapp}>
	<div className={styles.downloadapp__inner}>
      <div className={styles.downloadapp__info}>
        <h2 className={styles.downloadapp__title}>
          Ниндзя - это семья.Скачивайте наше приложение
        </h2>
        <p className={styles.downloadapp__descr}>
          Станьте ниндзя! Будьте в курсе всех новинок и никогда не оставаться
          голодным.
        </p>
        <a className={styles.downloadapp__link} href="https://www.apple.com/ru/app-store/">
          <img className={styles.downloadapp__icon}  src={appstore} alt="App Store" />
        </a>
        <a className={styles.downloadapp__link} href="https://play.google.com/store/games?hl=ru&gl=US">
          <img className={styles.downloadapp__icon} src={googleplay} alt="Google Play" />
        </a>
      </div>
	  <div className={styles.downloadapp__img_box}>
		<img  src={app} alt="Приложение Суши" className={styles.downloadapp__img} />
	  </div>
	  </div>
    </article>
  )
}

export default DownloadApp
