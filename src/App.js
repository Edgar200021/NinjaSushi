import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './layouts/Header'
import Footer from './layouts/Footer'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element="" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
