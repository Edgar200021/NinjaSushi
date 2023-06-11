import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import routeConfig from '../../routes/routeConfig'

import styles from './App.module.sass'

const App = () => {
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

