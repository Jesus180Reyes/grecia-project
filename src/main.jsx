import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { App } from '../src/App'
import { store } from './store/store'
import { Provider } from 'react-redux'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode >
  </Provider>
)
