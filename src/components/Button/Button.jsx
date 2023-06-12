import PropTypes from 'prop-types'
import styles from './Button.module.sass'

const Button = ({text}) => {
	return (
		<button className={styles.button}>{text}</button>
	)
}

Button.propTypes = {
	text: PropTypes.string
}

export default Button

