import React from 'react'
import ReactDOM from 'react-dom'
import './pages/todo-list/styles/index.css'
import App from './App'
import './db/auth'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
