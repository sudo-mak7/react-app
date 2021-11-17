import React from 'react'
import ReactDOM from 'react-dom'
import './app/pages/todo-list/styles/index.css'
import App from './app/App'
import './app/db/auth'
import { Provider } from 'react-redux'
import { store } from './app/store'

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
