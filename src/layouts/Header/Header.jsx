import { NavLink } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import cn from 'classnames'

import Logo from '../../components/Logo'
import BurgerMenu from '../../components/BurgerMenu'
import Basket from '../../components/Basket'
import Favorite from '../../components/Favorite'

import phone from '../../assets/icons/phone.svg'

import role from '../../assets/icons/category-nav/role.svg'
import sushi from '../../assets/icons/category-nav/sushi.svg'
import sets from '../../assets/icons/category-nav/sets.svg'
import boules from '../../assets/icons/category-nav/boules.svg'
import drink from '../../assets/icons/category-nav/drink.svg'
import sauce from '../../assets/icons/category-nav/sauce.svg'

import styles from './Header.module.sass'

const Header = () => {
  const basketProducts = useSelector(
    state => state.basketProducts.basketProducts
  )
  const favoriteProducts = useSelector(state => state.favoriteProducts.products)

  const [openMenu, setOpenMenu] = useState(false)
  const [openBasket, setOpenBasket] = useState(false)
  const [openFavorite, setOpenFavorite] = useState(false)

  const basketTotal = basketProducts
    .map(product => product.count)
    .reduce((acc, val) => acc + val, 0)

  const favoriteTotal = favoriteProducts.length

  const basketBtnStyle = openBasket
    ? { color: 'white', backgroundColor: '#FF6633' }
    : null
  const basketIconSyle = openBasket ? { color: 'white' } : null
  const favoriteBtnStyle = openFavorite
    ? { color: 'white', backgroundColor: '#FF6633' }
    : null
  const favoriteIconStyle = openFavorite ? { color: 'white' } : null

  const onClickMenu = () => {
    setOpenMenu(!openMenu)
  }

  const onClickBasket = () => {
    setOpenBasket(true)

    setTimeout(() => {
      document.body.style.overflow = 'hidden'
    })
  }

  const onClickFavorite = () => {
    setOpenFavorite(true)

    setTimeout(() => {
      document.body.style.overflow = 'hidden'
    })
  }

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
            <span className={styles.header__btn_icon}>0</span>
            <svg className={styles.header__icon}>
              <use xlinkHref="icons/sprite.svg#icon-bell" />
            </svg>
          </button>
          <button
            style={favoriteBtnStyle}
            onClick={onClickFavorite}
            className={styles.header__btn}
          >
            <span className={styles.header__btn_icon}>{favoriteTotal}</span>
            <svg style={favoriteIconStyle} className={styles.header__icon}>
              <use xlinkHref="icons/sprite.svg#icon-hearth" />
            </svg>
          </button>
          <button className={styles.header__btn}>
            <svg className={styles.header__icon}>
              <use xlinkHref="icons/sprite.svg#icon-user" />
            </svg>
          </button>
          <button
            style={basketBtnStyle}
            onClick={onClickBasket}
            className={styles.header__btn}
          >
            <span>Корзина</span>
            <span className={styles.header__btn_icon}>{basketTotal}</span>
            <svg style={basketIconSyle} className={styles.header__icon}>
              <use xlinkHref="icons/sprite.svg#icon-basket" />
            </svg>
          </button>
          <BurgerMenu openedMenu={openMenu} onClickMenu={onClickMenu} />
        </div>
        <Basket openBasket={openBasket} onCloseBasket={setOpenBasket} />
        <Favorite
          openFavorite={openFavorite}
          onCloseFavorite={setOpenFavorite}
        />
      </div>
      <div className={styles.header__bottom}>
        <nav className={styles.category__nav}>
          <ul className={styles.category__list}>
            <li className={styles.category__item}>
              <NavLink to="/1" className={styles.category__link}>
                <span
                  className={styles.category__icon}
                  style={{ backgroundImage: `url(${role})` }}
                ></span>
                <span className={styles.category__descr}>Роллы</span>
              </NavLink>
            </li>
            <li className={styles.category__item}>
              <NavLink to="/2" className={styles.category__link}>
                <span
                  className={styles.category__icon}
                  style={{ backgroundImage: `url(${sushi})` }}
                ></span>
                <span className={styles.category__descr}>Суши</span>
              </NavLink>
            </li>
            <li className={styles.category__item}>
              <NavLink to="/3" className={styles.category__link}>
                <span
                  className={styles.category__icon}
                  style={{ backgroundImage: `url(${sets})` }}
                ></span>
                <span className={styles.category__descr}>Сеты</span>
              </NavLink>
            </li>
            <li className={styles.category__item}>
              <NavLink to="/4" className={styles.category__link}>
                <span
                  className={styles.category__icon}
                  style={{ backgroundImage: `url(${boules})` }}
                ></span>
                <span className={styles.category__descr}>Боулы</span>
              </NavLink>
            </li>
            <li className={styles.category__item}>
              <NavLink to="/5" className={styles.category__link}>
                <span
                  className={styles.category__icon}
                  style={{ backgroundImage: `url(${drink})` }}
                ></span>
                <span className={styles.category__descr}>Напитки</span>
              </NavLink>
            </li>
            <li className={styles.category__item}>
              <NavLink to="/6" className={styles.category__link}>
                <span
                  className={styles.category__icon}
                  style={{ backgroundImage: `url(${sauce})` }}
                ></span>
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
