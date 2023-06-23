import PropTypes from 'prop-types'

import { memo } from 'react'

import styles from './SuccessOrderItem.module.sass'

const SuccessOrderItem = memo(
  ({
    address = [],
    time = '',
    day = '',
    paymentMethod = '',
    price = 0,
    surrender = 0,
    note = [],
    orderType,
    restaurant,
    city,
  }) => {
    const content =
      orderType === 'Доставка' ? (
        <ul className={styles.successorder__list}>
          <li className={styles.successorder__item}>
            <span className={styles.successorder__item_descr}>
              Тип доставки:
            </span>
            <span className={styles.successorder__item_line}></span>
            <span className={styles.successorder__item_text}> {orderType}</span>
          </li>
          <li className={styles.successorder__item}>
            <span className={styles.successorder__item_descr}>Адрес:</span>
            <span className={styles.successorder__item_line}></span>
            <span className={styles.successorder__item_text}>
              Город {address?.[0]?.city}, улица {address?.[0]?.street}, кв
              {address?.[0]?.apartment}, этаж {address?.[0]?.floor}
            </span>
          </li>
          <li className={styles.successorder__item}>
            <span className={styles.successorder__item_descr}>Время:</span>
            <span className={styles.successorder__item_line}></span>
            <span className={styles.successorder__item_text}>
              {day} {time}
            </span>
          </li>
          <li className={styles.successorder__item}>
            <span className={styles.successorder__item_descr}>
              Способ оплаты:
            </span>
            <span className={styles.successorder__item_line}></span>
            <span className={styles.successorder__item_text}>
              {paymentMethod}
            </span>
          </li>
          <li className={styles.successorder__item}>
            <span className={styles.successorder__item_descr}>
              Сумма к оплате:
            </span>
            <span className={styles.successorder__item_line}></span>
            <span className={styles.successorder__item_text}>{price} грн</span>
          </li>
          <li className={styles.successorder__item}>
            <span className={styles.successorder__item_descr}>Сдача с</span>
            <span className={styles.successorder__item_line}></span>
            <span className={styles.successorder__item_text}>
              {surrender} грн
            </span>
          </li>

          <li className={styles.successorder__item}>
            <span className={styles.successorder__item_descr}>Примечание:</span>
            <span className={styles.successorder__item_text}>
              {note?.map(item => (
                <span key={item} style={{ display: 'block' }}>
                  {item}
                </span>
              ))}
            </span>
          </li>
        </ul>
      ) : (
        <ul className={styles.successorder__list}>
          <li className={styles.successorder__item}>
            <span className={styles.successorder__item_descr}>
              Тип доставки:
            </span>
            <span className={styles.successorder__item_line}></span>
            <span className={styles.successorder__item_text}> {orderType}</span>
          </li>
          <li className={styles.successorder__item}>
            <span className={styles.successorder__item_descr}>Город:</span>
            <span className={styles.successorder__item_line}></span>
            <span className={styles.successorder__item_text}>{city}</span>
          </li>
          <li className={styles.successorder__item}>
            <span className={styles.successorder__item_descr}>Ресторан</span>
            <span className={styles.successorder__item_line}></span>
            <span className={styles.successorder__item_text}>{restaurant}</span>
          </li>
          <li className={styles.successorder__item}>
            <span className={styles.successorder__item_descr}>Время:</span>
            <span className={styles.successorder__item_line}></span>
            <span className={styles.successorder__item_text}>
              {day} {time}
            </span>
          </li>
          <li className={styles.successorder__item}>
            <span className={styles.successorder__item_descr}>
              Способ оплаты:
            </span>
            <span className={styles.successorder__item_line}></span>
            <span className={styles.successorder__item_text}>
              {paymentMethod}
            </span>
          </li>
          <li className={styles.successorder__item}>
            <span className={styles.successorder__item_descr}>
              Сумма к оплате:
            </span>
            <span className={styles.successorder__item_line}></span>
            <span className={styles.successorder__item_text}>{price} грн</span>
          </li>
          <li className={styles.successorder__item}>
            <span className={styles.successorder__item_descr}>Сдача с</span>
            <span className={styles.successorder__item_line}></span>
            <span className={styles.successorder__item_text}>
              {surrender} грн
            </span>
          </li>

          <li className={styles.successorder__item}>
            <span className={styles.successorder__item_descr}>Примечание:</span>
            <span className={styles.successorder__item_text}>
              {note?.map(item => (
                <span key={item} style={{ display: 'block' }}>
                  {item}
                </span>
              ))}
            </span>
          </li>
        </ul>
      )

    return <>{content}</>
  }
)

SuccessOrderItem.propTypes = {
  text: PropTypes.string,
}

export default SuccessOrderItem
