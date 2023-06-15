import PropTypes from 'prop-types'
import styles from './Button.module.sass'

const Button = ({text, children, onClick = null}) => {
	return (
		<button onClick={onClick} className={styles.button}>{text}
			{children}
		</button>
	)
}

Button.propTypes = {
	text: PropTypes.string
}

export default Button

