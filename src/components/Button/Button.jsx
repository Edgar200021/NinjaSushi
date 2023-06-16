import cn from 'classnames'

import PropTypes from 'prop-types'
import styles from './Button.module.sass'

const Button = ({ text, children, onClick = null, style = {} }) => {
  return (
    <button onClick={onClick} className={styles.button} style={style}>
      {text}
      {children}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  children: PropTypes.object,
  onClick: PropTypes.func,
  style: PropTypes.object,
}

export default Button
