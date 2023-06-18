import PropTypes from 'prop-types'

import Input from '../Input'

import { newsGenre } from '../../constants/category'

import styles from './NewsFilter.module.sass'

const NewsFilter = ({ onInput, onSearch }) => {
  return (
    <div className={styles.newsfilter}>
      <div className={styles.newsfilter__left}>
        <Input  onChange={e => onInput(e.target.value)}  name="news-input" type="radio" value="" text="Все" />
        {newsGenre.map(({ value }) => (
          <Input
            key={value}
            onChange={e => onInput(e.target.value)}
            name="news-input"
            type="radio"
            value={value}
            text={value}
          />
        ))}
      </div>
      <div className={styles.newsfilter__right}>
        <Input
          onChange={e => onSearch(e.target.value)}
          type="search"
          placehoalder="Введите ключевые слова"
        />
      </div>
    </div>
  )
}

NewsFilter.propTypes = {
  onInput: PropTypes.func,
  onSearch: PropTypes.func,
}

export default NewsFilter
