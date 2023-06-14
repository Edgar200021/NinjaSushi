import Notification from '../../components/Notification/Notification'

import styles from './NotFoundPage.module.sass'

const NotFoundPage = () => {
  return (
	<main className={styles.notfound__main}>
		<Notification type="notFound"/>
	</main>
  )
}

export default NotFoundPage
