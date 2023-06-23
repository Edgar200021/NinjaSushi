
import Notification from '../../components/Notification'

import styles from './OrderErrorPage.module.sass'

const OrderErrorPage = () => {
	return (
		<main className={styles.main}>
			<Notification type='error'/>
		</main>
	)
}

export default OrderErrorPage

