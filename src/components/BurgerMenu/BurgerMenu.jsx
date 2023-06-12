import PropTypes from 'prop-types'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import sushi from '../../assets/icons/category-nav/sushi-active.svg'
import roles from '../../assets/icons/category-nav/role-active.svg'
import sets from '../../assets/icons/category-nav/sets-active.svg'
import bouls from '../../assets/icons/category-nav/boules-active.svg'
import drink from '../../assets/icons/category-nav/drink-active.svg'
import sauce from '../../assets/icons/category-nav/sauce-active.svg'
import telegram from '../../assets/icons/telegram.svg'
import ninja1 from '../../assets/icons/ninja-1.svg'
import ninja2 from '../../assets/icons/ninja-2.svg'
import ninja3 from '../../assets/icons/ninja-3.svg'

import styles from './BurgerMenu.module.sass'

const BurgerMenu = ({ openedMenu, onClickMenu }) => {
  const classes = openedMenu
    ? cn(styles.burger, styles.burger_active)
    : styles.burger

  document.body.style.overflow = openedMenu ? 'hidden' : 'auto'

  const closeModal = () => {
    document.body.style.overflow = 'auto'
    onClickMenu()
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && openedMenu) {
      closeModal()
    }
  })

  return (
    <>
      <button onClick={onClickMenu} className={classes}>
        <span className={styles.burger__line}></span>
      </button>

      <div
        className={styles.burger__wrapper}
        onClick={(e) => {
          const target = e.target.closest('[data-menu]')
          if (target) return
          closeModal()
        }}
      >
        <div className={styles.burger__menu} data-menu>
          <h2 className={cn(styles.burger__title, 'second-title')}>Меню</h2>
          <ul className={styles.burger__list}>
            <li className={cn(styles.burger__item, styles.burger__item_nav)}>
              <NavLink className={styles.burger__link}>
                <span
                  style={{ backgroundImage: `url(${sushi})` }}
                  className={styles.burger__icon}
                ></span>
                <span>Суши</span>
              </NavLink>
            </li>
            <li className={cn(styles.burger__item, styles.burger__item_nav)}>
              <NavLink className={styles.burger__link}>
                <span
                  style={{ backgroundImage: `url(${roles})` }}
                  className={styles.burger__icon}
                ></span>
                <span>Роллы</span>
              </NavLink>
            </li>
            <li className={cn(styles.burger__item, styles.burger__item_nav)}>
              <NavLink className={styles.burger__link}>
                <span
                  style={{ backgroundImage: `url(${sets})` }}
                  className={styles.burger__icon}
                ></span>
                <span>Сеты</span>
              </NavLink>
            </li>
            <li className={cn(styles.burger__item, styles.burger__item_nav)}>
              <NavLink className={styles.burger__link}>
                <span
                  style={{ backgroundImage: `url(${bouls})` }}
                  className={styles.burger__icon}
                ></span>
                <span>Боулы</span>
              </NavLink>
            </li>
            <li className={cn(styles.burger__item, styles.burger__item_nav)}>
              <NavLink className={styles.burger__link}>
                <span
                  style={{ backgroundImage: `url(${drink})` }}
                  className={styles.burger__icon}
                ></span>
                <span>Напитки</span>
              </NavLink>
            </li>
            <li className={cn(styles.burger__item, styles.burger__item_nav)}>
              <NavLink className={styles.burger__link}>
                <span
                  style={{ backgroundImage: `url(${sauce})` }}
                  sauce
                  className={styles.burger__icon}
                ></span>
                <span>Соусы</span>
              </NavLink>
            </li>
            <li className={cn(styles.burger__item, styles.burger__item_nav2)}>
              <NavLink className={styles.burger__link}>
                <svg className={styles.burger__icon_small}>
                  <use xlinkHref="icons/sprite.svg#icon-basket" />
                </svg>
                <span>Повторить прошлый заказ</span>
              </NavLink>
            </li>
            <li className={cn(styles.burger__item, styles.burger__item_nav2)}>
              <NavLink className={styles.burger__link}>
                <svg className={styles.burger__icon_small}>
                  <use xlinkHref="icons/sprite.svg#icon-hearth" />
                </svg>
                <span>Избранное</span>
              </NavLink>
            </li>
            <li className={cn(styles.burger__item, styles.burger__item_nav2)}>
              <NavLink className={styles.burger__link}>
                <svg className={styles.burger__icon_small}>
                  <use xlinkHref="icons/sprite.svg#icon-user" />
                </svg>
                <span>Профиль</span>
              </NavLink>
            </li>
            <li className={cn(styles.burger__item, styles.burger__item_nav2)}>
              <NavLink className={styles.burger__link}>
                <span>Главная</span>
              </NavLink>
            </li>
            <li className={cn(styles.burger__item, styles.burger__item_nav2)}>
              <NavLink className={styles.burger__link}>
                <span>Доставка</span>
              </NavLink>
            </li>
            <li className={cn(styles.burger__item, styles.burger__item_nav2)}>
              <NavLink className={styles.burger__link}>
                <span>О нас</span>
              </NavLink>
            </li>
            <li className={cn(styles.burger__item, styles.burger__item_nav2)}>
              <NavLink className={styles.burger__link}>
                <span>Новости</span>
              </NavLink>
            </li>
            <li className={cn(styles.burger__item, styles.burger__item_blue)}>
              <a
                href="https://web.telegram.org/"
                className={styles.burger__link}
              >
                <img
                  src={telegram}
                  alt="Телеграмм"
                  className={styles.burger__icon}
                />
                <span>Поддержка</span>
              </a>
            </li>
            <li className={styles.burger__item}>
              <span className={styles.burger__sublist_descr}>
                Оформить заказ:
              </span>
              <ul className={styles.burger__sublist}>
                <li className={styles.burger__sublist_item}>
                  <a
                    href="tel:+380674366127"
                    className={styles.burger__sublist_link}
                  >
                    +38 (067) 436 61 27
                  </a>
                </li>
                <li className={styles.burger__sublist_item}>
                  <a
                    href="tel:+380660317630"
                    className={styles.burger__sublist_link}
                  >
                    +38 (066) 031 76 30
                  </a>
                </li>
                <li className={styles.burger__sublist_item}>
                  <a
                    href="tel:+380939249828"
                    className={styles.burger__sublist_link}
                  >
                    +38 (093) 924 98 28
                  </a>
                </li>
              </ul>
              <span className={styles.burger__sublist_call}>
                Звоните нам с 9:00 до 21:00 без выходных
              </span>
            </li>
            <li className={styles.burger__item}>
              <ul className={styles.burger__icons_list}>
                <li className={styles.burger__icons_item}>
                  <a href="" className={styles.burger__icons_link}>
                    <img
                      src={ninja1}
                      alt="Логотип суши"
                      className={styles.buger__icons_img}
                    />
                  </a>
                </li>
                <li className={styles.burger__icons_item}>
                  <a href="" className={styles.burger__icons_link}>
                    <img
                      src={ninja2}
                      alt="Логотип вок"
                      className={styles.buger__icons_img}
                    />
                  </a>
                </li>
                <li className={styles.burger__icons_item}>
                  <a href="" className={styles.burger__icons_link}>
                    <img
                      src={ninja3}
                      alt="Логотип пиццаs"
                      className={styles.buger__icons_img}
                    />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

BurgerMenu.propTypes = {
  openedMenu: PropTypes.bool,
  onClickMenu: PropTypes.func,
}

export default BurgerMenu
