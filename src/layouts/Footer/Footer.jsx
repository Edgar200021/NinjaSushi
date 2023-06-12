import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import Logo from '../../components/Logo'

import appStore from '../../assets/icons/app-store.svg'
import googlePlay from '../../assets/icons/google-play.svg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import telegram from '../../assets/icons/telegram.svg'
import visa from '../../assets/icons/visa.svg'
import mastercard from '../../assets/icons/mastercard.svg'
import bank from '../../assets/icons/bank.svg'

import styles from './Footer.module.sass'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__copyright}>
          <Logo />
          <div className={styles.footer__copyright_links}>
            <a
              className={styles.footer__copyright_link}
              href="https://www.apple.com/ru/app-store/"
            >
              <img
                className={styles.footer__copyright_img}
                src={appStore}
                alt="App Store"
              />
            </a>
            <a
              className={styles.footer__copyright_link}
              href="https://play.google.com/store/games?hl=ru&gl=US&pli=1"
            >
              <img
                className={styles.footer__copyright_img}
                src={googlePlay}
                alt="Google Play"
              />
            </a>
          </div>
          <span className={styles.footer__copyright_descr}>
            © Ninja Sushi. All rights reserved.
          </span>
          <span className={styles.footer__copyright_politic}>
            Политика конфиденциальности
          </span>
        </div>

        <div className={styles.footer__list_box}>
          <span className={styles.footer__list_descr}>Навигация:</span>
          <nav className={styles.footer__nav}>
            <ul className={styles.footer__list}>
              <li className={styles.footer__list_item}>
                <NavLink to="/" className={styles.footer__list_link}>
                  Главная
                </NavLink>
              </li>
              <li className={styles.footer__list_item}>
                <NavLink className={styles.footer__list_link}>Меню</NavLink>
              </li>
              <li className={styles.footer__list_item}>
                <NavLink className={styles.footer__list_link}>Доставка</NavLink>
              </li>
              <li className={styles.footer__list_item}>
                <NavLink className={styles.footer__list_link}>Вакансии</NavLink>
              </li>
              <li className={styles.footer__list_item}>
                <NavLink className={styles.footer__list_link}>Новости</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.footer__list_box}>
          <span className={styles.footer__list_descr}>Оформить заказ:</span>
          <ul className={styles.footer__list}>
            <li className={styles.footer__list_item}>
              <a href="tel:+380674366127" className={styles.footer__list_link}>
                +38 (067) 436 61 27
              </a>
            </li>
            <li className={styles.footer__list_item}>
              <a href="tel:+380660317630" className={styles.footer__list_link}>
                +38 (066) 031 76 30
              </a>
            </li>
            <li className={styles.footer__list_item}>
              <a href="tel:+380939249828" className={styles.footer__list_link}>
                +38 (093) 924 98 28
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footer__list_box}>
          <span className={styles.footer__list_descr}>Время работы:</span>
          <ul className={styles.footer__list}>
            <li className={styles.footer__list_item}>
              <span >с 11:00 до 22:45</span>
            </li>
            <li className={styles.footer__list_item}>
              <span>с 22.45 до 06.00</span>
            </li>
          </ul>
          <span className={styles.footer__list_text}>Ночная доставка</span>
        </div>
        <div className={styles.footer__list_box}>
          <span className={styles.footer__list_descr}>Мы в соц. сетях:</span>
          <ul className={cn(styles.footer__list,styles.footer__list_flex)}>
            <li className={styles.footer__list_item}>
              <a
                href="https://www.facebook.com/"
                className={styles.footer__list_link}
              >
                <img
                  className={styles.footer__list_icon}
                  src={facebook}
                  alt="Facebook"
                />
              </a>
            </li>
            <li className={styles.footer__list_item}>
              <a
                href="https://www.instagram.com/"
                className={styles.footer__list_link}
              >
                <img
                  className={styles.footer__list_icon}
                  src={instagram}
                  alt="Instagram"
                />
              </a>
            </li>
          </ul>
          <a
            className={styles.footer__telegram_link}
            href="https://web.telegram.org/"
          >
            <img className={styles.footer__telegram_icon} src={telegram} alt="Telegram" />
            <span>Техподдержка</span>
          </a>
        </div>

        <div className={styles.footer__terms}>
          <span className={styles.footer__terms_descr}>
            Пользовательское соглашение
          </span>
          <ul className={styles.footer__terms_list}>
            <li className={styles.footer__terms_item}>
              <img
                src={mastercard}
                alt="Mastercard"
                className={styles.footer__terms_img}
              />
            </li>
            <li className={styles.footer__terms_item}>
              <img src={visa} alt="Visa" className={styles.footer__terms_img} />
            </li>
            <li className={styles.footer__terms_item}>
              <img src={bank} alt="Bank" className={styles.footer__terms_img} />
            </li>
          </ul>

          <span className={styles.footer__terms_text}>
            © Ninja Sushi. All right reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
