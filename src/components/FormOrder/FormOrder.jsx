import PropTypes from 'prop-types'
import cn from 'classnames'

import { useState } from 'react'

import Input from '../Input'
import Button from '../Button'

import { address } from '../../constants/address'

import location from '../../assets/icons/location.svg'
import locationActive from '../../assets/icons/location-active.svg'

import styles from './FormOrder.module.sass'

let id = 2

const FormOrder = () => {
  const [activeModal, setActiveModal] = useState(false)
  const [addAddresses, setAddAddresses] = useState({
    id: id,
    city: '',
    street: '',
    entrance: '',
    floor: '',
    apartment: '',
    checked: false,
  })
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      city: 'Киев',
      street: 'Киев, Николая Краснова, 16',
      entrance: 5,
      floor: 3,
      apartment: 104,
      checked: false,
    },
    {
      id: 2,
      city: 'Львов',
      street: 'Октябрьская, 6',
      entrance: 8,
      floor: 10,
      apartment: 25,
      checked: false,
    },
  ])

  const onInput = (val, text) => {
    setAddAddresses(prev => ({ ...prev, [val]: text }))
  }

  const onAddAddress = obj => {
    setAddresses(prev => [...prev, { ...obj, id: ++id }])
    setAddAddresses({
      city: '',
      street: '',
      entrance: '',
      floor: '',
      apartment: '',
      checked: false,
    })
  }

  const onCheckedAddress = (checked,id) => {
    setAddresses(prev => {
      const arr =  prev.map(address => {
        if (id === address.id) {
			return {...address, checked: checked}
		}
		return {...address, checked: false}
      })

	  return arr
    })
  }

  const onDeleteAddress = () => setAddresses(prev => prev.filter(address => address.checked === false))


  const modalClass = activeModal
    ? cn(styles.formorder__order_modal, styles.formorder__order_modal_active)
    : styles.formorder__order_modal

 const deleteAddressBtnStyle = !addresses.length ? {opacity: 0, pointerEvents: 'none'} : null

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
            <Input type="text" placeholder="Введите имя" required />
          </div>
          <div>
            <span className={styles.formorder__personal_phone}>
              Телефон <strong>*</strong>
            </span>
            <Input
              type="number"
              placeholder="Введите номер телефона"
              required
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
            <Input type="radio" name="order-type" text="Доставка" />
            <Input type="radio" name="order-type" text="Самовывоз" />
          </div>
          <div className={styles.formorder__order_delivery}>
            <span className={styles.formorder__order_min}>
              Минимальная сумма заказа 400 грн
            </span>

            <div className={styles.formorder__order_addressList}>
              {addresses.map(
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
                        src={location}
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
                        onChange={(e) => onCheckedAddress(e.target.checked, id)}
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
              <Button style={deleteAddressBtnStyle} onClick={onDeleteAddress} type="button" text="Удалить адрес" />
            </div>
            <label className={styles.formorder__order_checkbox}>
              <input value="Не звонить в дверь" type="checkbox" />
              <span></span>
              Не звонить в дверь
            </label>
            <label className={styles.formorder__order_checkbox}>
              <input value="Оставить под дверью" type="checkbox" />
              <span></span>
              Оставить под дверью
            </label>
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
    </form>
  )
}

FormOrder.propTypes = {
  text: PropTypes.string,
}

export default FormOrder
