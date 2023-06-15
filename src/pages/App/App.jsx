import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { getData } from '../../utils/fetchData'

import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import routeConfig from '../../routes/routeConfig'

import styles from './App.module.sass'

const App = () => {

	const [productsData, setProductsData] = useState([])
	const [error, setError] = useState(false)

  
	const getProducts = async (url) => {
	  const data = await getData(url)
  
	  if (!data) {
		setError(true)
		return
	  }
  
	  setProductsData(data)
	  setError(false)
	}
  
	useEffect(() => {
	  getProducts('http://localhost:4000/products')
	}, [])

	return (
	  <div className={styles.app}>
		<BrowserRouter>
		  <Header />
		  <Routes>
			{routeConfig.map(({path, element}, index) => {
				return <Route key={index} path={path} element={element()}/>
			})
			}
		  </Routes>
		  <Footer />
		</BrowserRouter>
	  </div>
	)
  }
export default App

