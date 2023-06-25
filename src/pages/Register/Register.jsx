import Form from '../../components/Form'
import Spinner from '../../components/Spinner'

import { postData } from '../../utils/fetchData'
import { USERS_URL } from '../../constants/url'

import styles from './Register.module.sass'
import { useState } from 'react'

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const addUser = async e => {
    e.preventDefault()

    setLoading(true)
    const data = await postData(USERS_URL, JSON.stringify(userInfo))

    if (!data) {
      setLoading(false)
      setError(true)
      return
    }

    setLoading(false)
    console.log(data)
  }

  return (
    <main className={styles.main}>
      {loading ? (
        <Spinner />
      ) : (
        <Form
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          onSubmit={addUser}
        />
      )}
    </main>
  )
}

export default Register
