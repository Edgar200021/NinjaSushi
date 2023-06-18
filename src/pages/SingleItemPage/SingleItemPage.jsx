import cn from 'classnames'

import { useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react'

import SingleItem from '../../components/SingleItem'
import Button from '../../components/Button'
import Spinner from '../../components/Spinner'

import { getData } from '../../utils/fetchData'
import { PRODUCTS_URL } from '../../constants/url'

import arrowLeft from '../../assets/icons/arrow-left.svg'

import styles from './SingleItemPage.module.sass'

const SingleItemPage = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  const fetchData = async url => {
    setLoading(true)
    const data = await getData(url)
    if (!data) {
      setLoading(false)
      setError(true)
      return
    }

    setLoading(false)
    setData(data)
  }

  useEffect(() => {
    fetchData(PRODUCTS_URL)
  }, [])

  const goBack = () => {
    navigate(-1)
  }

  const singleItem = data.find(product => product.id === Number(id))

  return (
    <main className={styles.main}>
      <Button className={styles.btn} onClick={goBack} text="Назад">
        <img className={styles.btn__icon} src={arrowLeft} alt="Кнопка назад" />
      </Button>
      {loading ? <Spinner /> : <SingleItem {...singleItem} />}

    </main>
  )
}

export default SingleItemPage
