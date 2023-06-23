import { Routes, Route } from 'react-router-dom'

import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import routeConfig from '../../routes/routeConfig'

import SingleItemPage from '../SingleItemPage'
import SuccessOrder from '../SuccessOrder/SuccessOrder'

import styles from './App.module.sass'

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/products/:id" element={<SingleItemPage />} />
        <Route path="/order/:id" element={<SuccessOrder />} />
        {routeConfig.map(({ path, element }, index) => {
          return <Route key={index} path={path} element={element()} />
        })}
      </Routes>
      <Footer />
    </div>
  )
}
export default App
