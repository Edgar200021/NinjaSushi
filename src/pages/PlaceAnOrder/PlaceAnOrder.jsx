import { useSelector } from 'react-redux'
import { useCallback, useState, useMemo } from 'react'
import { useNavigate } from 'react-router'

import { postData } from '../../utils/fetchData'
import { DELIVERY_URL } from '../../constants/url'

import FormOrder from '../../components/FormOrder'
import BasketItem from '../../components/BasketItem'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Spinner from '../../components/Spinner'

import styles from './PlaceAnOrder.module.sass'

let id = 2

const PlaceAnOrder = () => {
  const basketProducts = useSelector(
    state => state.basketProducts.basketProducts
  )

  const price = useSelector(state => state.basketProducts.basketTotal)
  const [personalData, setPersonalData] = useState({
    name: '',
    phoneNumber: 0,
  })
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
      street: 'Николая Краснова, 16',
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
  const [restaurant, setRestaurant] = useState('')
  const [city, setCity] = useState('')
  const [orderType, setOrderType] = useState('Доставка')
  const [note, setNote] = useState([])
  const [orderTime, setOrderTime] = useState({
    day: '',
    time: '',
  })
  const [paymentMethod, setPaymentMethod] = useState('')
  const [surrender, setSurrender] = useState('')
  const [orderLoading, setOrderLoading] = useState(false)
  const [orderId, setOrderId] = useState(1)
  const navigate = useNavigate()

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
  const onDeleteAddress = () =>
    setAddresses(prev => prev.filter(address => address.checked === false))

  const onCheckedAddress = (checked, id) => {
    setAddresses(prev => {
      const arr = prev.map(address => {
        if (id === address.id) {
          return { ...address, checked: checked }
        }
        return { ...address, checked: false }
      })

      return arr
    })
  }

  const onNote = e => {
    setNote(prev => {
      return prev.includes(e.target.value)
        ? prev.filter(item => item !== e.target.value)
        : [...prev, e.target.value]
    })
  }

  const onSetPaymentMethod = value => {
    setPaymentMethod(value)
  }

  const onSelect = (property, value) => {
    setOrderTime(prev => {
      return { ...prev, [property]: value }
    })
  }

  const obj = {
    id: orderId,
    personalData,
    address: addresses.filter(address => address.checked === true),
    note,
    paymentMethod,
    orderTime,
    surrender,
    price,
	orderType, 
	city,
	restaurant
  }

  const confirmOrder = useCallback(async () => {
    setOrderLoading(true)
    const data = await postData(DELIVERY_URL, JSON.stringify(obj))

    if (!data) {
      setOrderLoading(false)
      navigate('/orderError')
      return
    }

    setOrderLoading(false)
    setOrderId(prev => prev + 1)
    navigate(`/order/${orderId}`)
  }, [DELIVERY_URL, obj, orderId])


  return (
    <main className={styles.main}>
      <h2 className="second-title">Оформление заказа</h2>
      <div className={styles.main__container}>
        <FormOrder
          setPersonalData={setPersonalData}
          addresses={addresses}
          onCheckedAddress={onCheckedAddress}
          onDeleteAddress={onDeleteAddress}
          addAddresses={addAddresses}
          onAddAddress={onAddAddress}
          onInput={onInput}
          onSelect={onSelect}
          onSetPaymentMethod={onSetPaymentMethod}
          setSurrender={setSurrender}
          surrender={surrender}
          onNote={onNote}
          restaurant={restaurant}
          setRestaurant={setRestaurant}
          setCity={setCity}
		  setOrderType={setOrderType}
        />

        {orderLoading ? (
          <Spinner />
        ) : (
          <div className={styles.box}>
            <ul className={styles.list}>
              {basketProducts.map(product => (
                <BasketItem key={product.id} {...product} />
              ))}
            </ul>
            <div className={styles.promocode}>
              <Input type="text" placeholder="Введите промокод" />
              <Button text="Применить" />
            </div>
            <div className={styles.total}>
              <div>
                <span className={styles.total__descr}>Итого:</span>
                <span className={styles.total__price}>
                  {price}
                  <span className={styles.total__currency}> грн</span>
                </span>
              </div>

              <Button
                onClick={confirmOrder}
                type="submit"
                text="Оформить заказ"
              />
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default PlaceAnOrder
