import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './pages/App'
import store from './Store'

import './styles/main.sass'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
//  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
//  </React.StrictMode>
)
