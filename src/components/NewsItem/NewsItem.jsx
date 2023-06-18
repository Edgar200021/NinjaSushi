import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

import styles from './NewsItem.module.sass'

const NewsItem = ({img, genre, date, description}) => {
	return (
		<li className={styles.newsitem}>
			<img className={styles.newsitem__img} src={img} alt={genre} />
			<div className={styles.newsitem__genre_box}>
				<span className={styles.newsitem__genre}>{genre}</span>
				<span className={styles.newsitem__date}>{date}</span>
			</div>
			<p className={styles.newsitem__descr}>{description}</p>
			<NavLink className={styles.newsitem__link} to='#'>Подробнее</NavLink>
		</li>
	)
}

NewsItem.propTypes = {
	img: PropTypes.string,
	genre: PropTypes.string,
	date: PropTypes.string,
	description: PropTypes.string
}

export default NewsItem

