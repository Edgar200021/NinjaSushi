import PropTypes from 'prop-types'
import styles from './Input.module.sass'

const Input = ({ type = '', value = '', text = '', name = '', onChange, checked}) => {
  return type === 'radio' || type === 'checkbox' ? (
    <label data-subcategory className={styles.label}>
	   <input type={type} className={styles.input} value={value} name={name} onChange={onChange} checked={checked}></input>
	   <span className={styles.text}>{text}</span>
    </label>
  ) : (
    <input type={type} className={styles.input} value={value} name={name} onChange={onChange} checked={checked}></input>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool
}

export default Input
