import cn from 'classnames'

import PropTypes from 'prop-types'
import styles from './Button.module.sass'

const Button = ({className = '', text, children, onClick = null, style = {}, type }) => {
  return (
    <button onClick={onClick} type={type} className={cn(styles.button, className)} style={style}>
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
