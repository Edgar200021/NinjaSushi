import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import NewsFilter from '../../components/NewsFilter'
import NewsList from '../../components/NewsList'
import Spinner from '../../components/Spinner'
import Button from '../../components/Button'

import { getNews } from '../../Store/newsSlice'
import { useFilteredByDescr, useFilteredByGenre } from '../../hooks/useNews'
import { getData } from '../../utils/fetchData'
import { NEWS_URL } from '../../constants/url'

import styles from './News.module.sass'

const News = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [newsCount, setNewsCount] = useState(10)
  const generalData = useSelector(state => state.news.news)
  const newsData = useSelector(state => state.news.news.slice(0, newsCount))
  const [filter, setFilter] = useState({
    filterByGenre: '',
    filterByDescr: '',
  })

  const fetchData = async url => {
    setLoading(true)
    const data = await getData(url)

    if (!data) {
      setError(true)
      setLoading(false)
      return
    }

    setLoading(false)
    dispatch(getNews(data))
  }

  useEffect(() => {
    fetchData(NEWS_URL)
  }, [])

  const onInput = value => {
    setFilter(prev => ({
      ...prev,
      filterByGenre: value,
    }))
  }

  const onSearch = value => {
    setFilter(prev => ({
      ...prev,
      filterByDescr: value,
    }))
  }

  const loadMoreNews = () => {
    setNewsCount(prev => prev + 4)
  }

  const filteredByGenre = useFilteredByGenre(newsData, filter.filterByGenre)
  const filteredByDescription = useFilteredByDescr(
    filteredByGenre,
    filter.filterByDescr
  )

  const hideBtnStyle = newsCount >= generalData.length ? {display: 'none'} : {display: 'block'}
  const hideDescrStyle = newsCount >= generalData.length ? {display: 'block'} : {display: 'none'}

  const emptyContent = !newsData.length ? <h2>Новостей пока нет</h2> : null
  const errorContent = error ? <h2>Произошла ошибка</h2> : null
  const epmtySearchContent = !filteredByDescription.length ? (
    <h2>Таких новостей нет</h2>
  ) : (
    <>
      <NewsList data={filteredByDescription} />
      <Button style={hideBtnStyle} onClick={loadMoreNews} text="Показать больше" />
	  <span style={hideDescrStyle}  className={styles.news__end_descr}>Новости закончились</span>
    </>
  )

  return (
    <main className={styles.main}>
      {loading ? (
        <Spinner />
      ) : (
        errorContent ||
        emptyContent || (
          <>
            <NewsFilter onInput={onInput} onSearch={onSearch} />
            {epmtySearchContent}
          </>
        )
      )}
    </main>
  )
}

export default News
