import PropTypes from 'prop-types'
import cn from 'classnames'
import Select from 'react-select'

import { useState } from 'react'

import Input from '../Input'
import Button from '../Button'

import { address, inputAddress } from '../../constants/address'
import {
  orderDay,
  orderTime as time,
  paymentMethods,
} from '../../constants/order'

import location from '../../assets/icons/location.svg'
import locationActive from '../../assets/icons/location-active.svg'

import styles from './FormOrder.module.sass'

const FormOrder = ({
  setPersonalData,
  addresses,
  onCheckedAddress,
  onDeleteAddress,
  onAddAddress,
  addAddresses,
  onInput,
  onSelect,
  onNote,
  onSetPaymentMethod,
  surrender,
  setSurrender,
  restaurant,
  setRestaurant,
  setCity,
  setOrderType,
}) => {
  const [activeModal, setActiveModal] = useState(false)
  const [checked, setChecked] = useState(true)

  const modalClass = activeModal
    ? cn(styles.formorder__order_modal, styles.formorder__order_modal_active)
    : styles.formorder__order_modal

  const deleteAddressBtnStyle = !addresses?.length
    ? { opacity: 0, pointerEvents: 'none' }
    : null

  return (
    <form className={styles.formorder}>
      <div className={styles.formorder__box}>
        <fieldset className={styles.formorder__personal}>
          <legend className={styles.formorder__personal_title}>
            Личные данные
          </legend>
          <div>
            <span className={styles.formorder__personal_name}>
              Имя<strong>*</strong>
            </span>
            <Input
              type="text"
              placeholder="Введите имя"
              onChange={e =>
                setPersonalData(prev => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div>
            <span className={styles.formorder__personal_phone}>
              Телефон <strong>*</strong>
            </span>
            <Input
              type="number"
              placeholder="Введите номер телефона"
              onChange={e =>
                setPersonalData(prev => ({
                  ...prev,
                  phoneNumber: e.target.value,
                }))
              }
            />
          </div>
        </fieldset>
      </div>
      <div className={styles.formorder__box}>
        <fieldset className={styles.formorder__order}>
          <legend className={styles.formorder__order_title}>Доставка</legend>
          <span className={styles.formorder__order_zone}>Зона доставки</span>
          <span className={styles.formorder__order_descr}>
            Зона бесплатной доставки уточняется у оператора
          </span>
          <div className={styles.formorder__order_inputs}>
            <Input
              checked={checked}
              onChange={e => {
                setChecked(true)
                setOrderType(e.target.value)
              }}
              type="radio"
              name="order-type"
              text="Доставка"
              value="Доставка"
            />
            <Input
              onChange={e => {
                setChecked(false)
                setOrderType(e.target.value)
              }}
              type="radio"
              name="order-type"
              text="Самовывоз"
              value="Самовывоз"
            />
          </div>
          <div
            className={
              checked
                ? cn(styles.formorder__order_delivery, styles.active)
                : styles.formorder__order_delivery
            }
          >
            <span className={styles.formorder__order_min}>
              Минимальная сумма заказа 400 грн
            </span>

            <div className={styles.formorder__order_addressList}>
              {addresses?.map(
                (
                  { id, city, street, entrance, floor, apartment, checked },
                  index
                ) => {
                  return (
                    <label
                      key={index}
                      className={styles.formorder__order_address}
                    >
                      <img
                        className={styles.formorder__order_icon}
                        src={checked ? locationActive : location}
                        alt="Местоположение"
                      />
                      <div>
                        <span className={styles.formorder__order_street}>
                          {city}, {street}
                        </span>
                        <span className={styles.formorder__order_apartment}>
                          Подьезд {entrance},этаж {floor}, квартира {apartment}
                        </span>
                      </div>
                      <input
                        onChange={e => onCheckedAddress(e.target.checked, id)}
                        type="radio"
                        name="address"
                      />
                      <span className={styles.formorder__order_decor}></span>
                    </label>
                  )
                }
              )}
            </div>
            <div className={styles.formorder__order_btns}>
              <Button
                type="button"
                onClick={() => setActiveModal(true)}
                text="Добавить новый адрес"
              />
              <Button
                style={deleteAddressBtnStyle}
                onClick={onDeleteAddress}
                type="button"
                text="Удалить адрес"
              />
            </div>
            <label className={styles.formorder__order_checkbox}>
              <input
                value="Не звонить в дверь"
                type="checkbox"
                onChange={onNote}
              />
              <span></span>
              Не звонить в дверь
            </label>
            <label className={styles.formorder__order_checkbox}>
              <input
                value="Оставить под дверью"
                type="checkbox"
                onChange={onNote}
              />
              <span></span>
              Оставить под дверью
            </label>
          </div>
          <div
            className={
              checked
                ? styles.formorder__order_pickup
                : cn(styles.formorder__order_pickup, styles.active)
            }
          >
            <div className={styles.formorder__order_pickup_inputs}>
              {inputAddress.map(({ type, value, text }) => (
                <Input
                  key={value}
                  onChange={e => setCity(e.target.value)}
                  type={type}
                  value={value}
                  text={text}
                  name="city"
                />
              ))}
            </div>

            <span className={styles.formorder__order_pickup_descr}>
              Ресторан с которого будете забирать
            </span>
            <Input
              value={restaurant}
              onChange={e => setRestaurant(e.target.value)}
              type="text"
              placeholder="проспект Свободы "
            />
          </div>

          <div action="" className={modalClass}>
            {address.map(({ type, placeholder, value }) => (
              <Input
                key={value}
                type={type}
                placeholder={placeholder}
                dataAttr={value}
                onChange={e => onInput(e.target.dataset.value, e.target.value)}
                value={addAddresses[value]}
              />
            ))}
            <button
              type="button"
              onClick={() => setActiveModal(false)}
              data-close
            >
              X
            </button>
            <Button
              onClick={() => {
                setActiveModal(false)
                onAddAddress(addAddresses)
              }}
              type="button"
              text="Добавить"
            />
          </div>
        </fieldset>
      </div>
      <div className={styles.formorder__box}>
        <fieldset className={styles.formorder__ordertime}>
          <legend className={styles.formorder__ordertime_title}>
            {checked ? 'Время доставки' : 'Хочу забрать'}
          </legend>
          <span className={styles.formorder__ordertime_descr}>
            {checked
              ? 'Время доставки заказа уточните по телефону.'
              : 'Уточните, пожалуйста, наиболее удобное время самовывоза'}
          </span>
          <div className={styles.formorder__ordertime_selects}>
            <div className={styles.formorder__ordertime_select}>
              <span className={styles.formorder__ordertime_selectDescr}>
                День
              </span>
              <Select
                className={styles.react_select_container}
                onChange={({ value }) => {
                  onSelect('day', value)
                }}
                options={orderDay}
              />
            </div>
            <div className={styles.formorder__ordertime_select}>
              <span className={styles.formorder__ordertime_selectDescr}>
                Время
              </span>
              <Select
                className={styles.react_select_container}
                classNamePrefix={styles.react_select}
                onChange={({ value }) => {
                  onSelect('time', value)
                }}
                options={time}
              />
            </div>
          </div>
        </fieldset>
      </div>
      <div className={styles.formorder__box}>
        <fieldset className={styles.formorder__method}>
          <legend className={styles.formorder__method_title}>
            Способ оплаты
          </legend>
          <span className={styles.formorder__method_descr}>
            Алкогольные напитки оплачиваются только наличными
          </span>
          {paymentMethods.map(method => (
            <label key={method} className={styles.formorder__method_label}>
              <input
                type="radio"
                name="payment-method"
                onChange={() => onSetPaymentMethod(method)}
              />
              <span className={styles.formorder__method_decor}></span>
              {method}
            </label>
          ))}
          <span
            style={{
              display: 'block',
              fontSize: '14px',
              lineHeight: '20px',
              fontFamily: 400,
              color: '#9E9E9E',
              marginBottom: '6px',
            }}
          >
            Подготовить сдачу с
          </span>
          <Input
            value={surrender}
            onChange={e => setSurrender(e.target.value)}
            type="number"
            placeholder="грн"
          />
        </fieldset>
      </div>
    </form>
  )
}

FormOrder.propTypes = {
  text: PropTypes.string,
}

export default FormOrder
