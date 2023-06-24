import PropTypes from 'prop-types'
import cn from 'classnames'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '../Logo'
import Input from '../Input'
import Button from '../Button'

import twitter from '../../assets/icons/authorization/twitter.svg'
import facebook from '../../assets/icons/authorization/facebook.svg'
import github from '../../assets/icons/authorization/github.svg'
import passwordShow from '../../assets/icons/authorization/show-password.svg'

import styles from './Form.module.sass'

const Form = ({ type = 'register', onSubmit, userInfo, setUserInfo }) => {
  const [showPass, setShowPass] = useState(false)

  const isRegister = type === 'register'
  const descr = isRegister ? (
    <span className={styles.form__descr}>Создать аккаунт</span>
  ) : (
    <span className={styles.form__descr}>Войдите в свой аккаунт</span>
  )

  const terms = isRegister ? (
    <label className={styles.label}>
      <input required type="checkbox" />I Read and agree to
      <span>Terms & Conditions</span>
    </label>
  ) : (
    <span className={styles.form__forgot_descr}>Forgot your password?</span>
  )

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Logo />
      {descr}
      <div className={styles.form__fields}>
        {isRegister && (
          <div className={styles.form__field}>
            <span className={styles.form__field_descr}>Имя Пользователья*</span>
            <Input
              value={userInfo.name}
              onChange={e => setUserInfo({ ...userInfo, name: e.target.value })}
              required
              type="text"
              placeholder="Mark Aurelius"
            />
          </div>
        )}
        <div className={styles.form__field}>
          <span className={styles.form__field_descr}>Эл.Почта*</span>
          <Input
            value={userInfo.email}
            onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
            required
            type="email"
            placeholder="valentino@gmail.com"
          />
        </div>
        <div className={styles.form__field}>
          <span className={styles.form__field_descr}>Пароль</span>
          <Input
            value={userInfo.password}
            onChange={e =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
            required
            type={showPass ? 'text' : 'password'}
            placeholder="********"
          />
          <button
            type="button"
            onClick={() => setShowPass(prev => !prev)}
            className={
              showPass
                ? cn(
                    styles.form__field_showpass,
                    styles.form__field_showpass_active
                  )
                : styles.form__field_showpass
            }
          >
            <img src={passwordShow} alt="Показать пароль" />
          </button>
        </div>
        <div className={styles.form__field}>{terms}</div>
      </div>

      <Button text={isRegister ? 'Register Now' : 'Login'} />
      <span> Or {isRegister ? 'Register' : 'Login'} using social Media</span>
      <div className={styles.form__socials}>
        <img src={twitter} alt="Twitter" className={styles.form__social} />
        <img src={facebook} alt="Facebook" className={styles.form__social} />
        <img src={github} alt="Github" className={styles.form__social} />
      </div>

      <span className={styles.form__have}>
        {isRegister ? ' Already have an account?' : "Don't have an account?"}{' '}
        <NavLink to={isRegister ? '/login' : '/register'}>
          {isRegister ? 'Login' : 'Register Now'}
        </NavLink>
      </span>
    </form>
  )
}

Form.propTypes = {
  text: PropTypes.string,
}

export default Form
