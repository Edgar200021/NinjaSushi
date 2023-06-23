import PropTypes from 'prop-types'

import { useNavigate, useParams } from 'react-router'
import { useState, useEffect, useMemo } from 'react'

import SuccessOrderItem from '../../components/SuccessOrderItem'
import Spinner from '../../components/Spinner'
import Button from '../../components/Button'

import { getData } from '../../utils/fetchData'
import { DELIVERY_URL } from '../../constants/url'

import styles from './SuccessOrder.module.sass'

const SuccessOrder = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [orderData, setOrderData] = useState([])
  const [fetchError, setFetchError] = useState(false)
  const [loading, setLoading] = useState(false)

  const getOrderInfo = async url => {
    setLoading(true)
    const data = await getData(url)

    if (!data) {
      setLoading(false)
      setFetchError(true)
      return
    }

    setLoading(false)

    setOrderData(data)
  }

  useEffect(() => {
    getOrderInfo(DELIVERY_URL)
  }, [id])

  const singleData = useMemo(
    () => orderData?.find(order => order.id === +id),
    [orderData, id]
  )

  const errorContent = fetchError ? (
    <h2 className="second-title"> Произошла ошибка</h2>
  ) : null

  return (
    <main className={styles.main}>
      {loading ? (
        <Spinner />
      ) : (
        errorContent || (
			<>
          <div className={styles.main__container}>
            <h2 className="second-title">
              Спасибо,
              <br /> ваш заказ <span>#{id}</span> успешно оформлен
            </h2>
            <div className={styles.orderinfo}>
              <h3 className={styles.orderinfo__title}>Информация о доставке</h3>
              <SuccessOrderItem
                note={singleData?.note}
                time={singleData?.orderTime.time}
                day={singleData?.orderTime.day}
                paymentMethod={singleData?.paymentMethod}
                price={singleData?.price}
                surrender={singleData?.surrender}
                address={singleData?.address}
                orderType={singleData?.orderType}
                restaurant={singleData?.restaurant}
                city={singleData?.city}
              />
            </div>
          </div>
		  <Button onClick={() => navigate('/')} text='Вернутся на главную'></Button>
		  </>
        )
      )}
    </main>
  )
}

SuccessOrder.propTypes = {
  text: PropTypes.string,
}

export default SuccessOrder
