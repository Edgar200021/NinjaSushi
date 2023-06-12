import { NavLink } from 'react-router-dom'

import logo from '../../assets/icons/logo.svg'
import logoFrame1 from '../../assets/icons/logo-frame-1.svg'
import logoFrame2 from '../../assets/icons/logo-frame-2.svg'

import styles from './Logo.module.sass'

const Logo = () => {
	return (
		<div className={styles.logo}>
		<NavLink to='/' className={styles.logo__link}></NavLink>
			<div className={styles.logo__left}>
				<img className={styles.logo__img} src={logo} alt="Логотип" />
			</div>
			<div className={styles.logo__right}>
				<img className={styles.logo__frame} src={logoFrame2} alt="Лого фрейм-1" />		
				<img className={styles.logo__frame} src={logoFrame1} alt="Лого фрейм-1" />
			</div>
		</div>
	)
}


export default Logo

