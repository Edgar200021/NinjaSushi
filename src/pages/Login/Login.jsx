import { useState } from 'react'
import Form from '../../components/Form'

import styles from './Login.module.sass'

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
  })
  return (
    <main className={styles.main}>
      <Form type="login" userInfo={userInfo} setUserInfo={setUserInfo} />
    </main>
  )
}

export default Login
