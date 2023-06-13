import PropTypes from 'prop-types'
import styles from './Button.module.sass'

const Button = ({text, children}) => {
	return (
		<button  className={styles.button}>{text}
			{children}
		</button>
	)
}

Button.propTypes = {
	text: PropTypes.string
}

export default Button

