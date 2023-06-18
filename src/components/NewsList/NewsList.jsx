import PropTypes from 'prop-types'

import NewsItem from '../NewsItem/NewsItem'


import styles from './NewsList.module.sass'

const NewsList = ({data}) => {
	return (
		<ul className={styles.newslist}>
			{data?.map(val => {
				return <NewsItem key={val.id} {...val}/>
			})}
		</ul>
	)
}

NewsList.propTypes = {
	data: PropTypes.array
}

export default NewsList

