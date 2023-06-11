import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import Logo from '../../components/Logo'

import phone from '../../assets/icons/phone.svg'

import role from '../../assets/icons/category-nav/role.svg'
import sushi from '../../assets/icons/category-nav/sushi.svg'
import sets from '../../assets/icons/category-nav/sets.svg'
import boules from '../../assets/icons/category-nav/boules.svg'
import drink from '../../assets/icons/category-nav/drink.svg'
import sauce from '../../assets/icons/category-nav/sauce.svg'


import styles from './Header.module.sass'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <Logo />

        <nav className={styles.header__nav}>
          <ul className={styles.header__list}>
            <li className={styles.header__item}>
              <NavLink to="/" className={styles.header__link}>
                Главная
              </NavLink>
            </li>
            <li className={styles.header__item}>
              <NavLink to="/1" className={styles.header__link}>
                Доставка
              </NavLink>
            </li>
            <li className={styles.header__item}>
              <NavLink to="/asda" className={styles.header__link}>
                О нас
              </NavLink>
            </li>
            <li className={styles.header__item}>
              <NavLink to="/sd" className={styles.header__link}>
                Новости
              </NavLink>
            </li>
            <li className={styles.header__item}>
              <a
                href="tel:+380976993438"
                className={cn(styles.header__link, styles.header__link_phone)}
                style={{ backgroundImage: `url(${phone})` }}
              >
                +38 097 699 34 38
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.header__actions}>
          <button className={styles.header__btn}>
            <svg className={styles.header__icon}>
              <use xlinkHref="icons/sprite.svg#icon-bell" />
            </svg>
          </button>
          <button className={styles.header__btn}>
            <svg className={styles.header__icon}>
              <use xlinkHref="icons/sprite.svg#icon-hearth" />
            </svg>
          </button>
          <button className={styles.header__btn}>
            <svg className={styles.header__icon}>
              <use xlinkHref="icons/sprite.svg#icon-user" />
            </svg>
          </button>
          <button className={styles.header__btn}>
            Корзина
            <svg className={styles.header__icon}>
              <use xlinkHref="icons/sprite.svg#icon-basket" />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.header__bottom}>
        <nav className={styles.category__nav}>
          <ul className={styles.category__list}>
            <li className={styles.category__item}>
              <NavLink to='/1' className={styles.category__link}>
					<span className={styles.category__icon} style={{backgroundImage: `url(${role})`}}></span>
                <span className={styles.category__descr}>Роллы</span>
              </NavLink>
            </li>
            <li className={styles.category__item}>
              <NavLink to='/2' className={styles.category__link}>
			  <span className={styles.category__icon} style={{backgroundImage: `url(${sushi})`}}></span>
                <span className={styles.category__descr}>Суши</span>
              </NavLink>
            </li>
            <li className={styles.category__item}>
              <NavLink to='/3' className={styles.category__link}>
			  <span className={styles.category__icon} style={{backgroundImage: `url(${sets})`}}></span>
                <span className={styles.category__descr}>Сеты</span>
              </NavLink>
            </li>
            <li className={styles.category__item}>
              <NavLink to='/4' className={styles.category__link}>
			  <span className={styles.category__icon} style={{backgroundImage: `url(${boules})`}}></span>
                <span className={styles.category__descr}>Боулы</span>
              </NavLink>
            </li>
            <li className={styles.category__item}>
              <NavLink to='/5' className={styles.category__link}>
			  <span className={styles.category__icon} style={{backgroundImage: `url(${drink})`}}></span>
                <span className={styles.category__descr}>Напитки</span>
              </NavLink>
            </li>
            <li className={styles.category__item}>
              <NavLink to='/6' className={styles.category__link}>
			  <span className={styles.category__icon} style={{backgroundImage: `url(${sauce})`}}></span>
                <span className={styles.category__descr}>Соусы</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
