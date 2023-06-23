import PropTypes from 'prop-types'
import styles from './Input.module.sass'

const Input = ({
  type = '',
  value,
  text = '',
  name = '',
  placeholder='',
  onChange,
  checked,
  children,
  style,
  required = false,
  dataAttr
}) => {
  return type === 'radio' || type === 'checkbox' ? (
    <label data-subcategory={type} className={styles.label}>
      <input
        type={type}
        className={styles.input}
        value={value}
        name={name}
        onChange={onChange}
        checked={checked}
		style={style}
		required
      ></input>
      <span className={styles.text}>
        {children} {text}
      </span>
    </label>
  ) : (
    <input
	  data-value = {dataAttr}
	  value={value}
      type={type}
      className={styles.input}
      onChange={onChange}
	  placeholder={placeholder}
	  style={style}
	  required
    ></input>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
}

export default Input
