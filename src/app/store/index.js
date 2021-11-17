import { createStore, combineReducers } from 'redux'
import { todoPaginationReducer } from './reducer/todo-list/todoPaginationReducer'
import { gameStatusReducer } from './reducer/tic-tac-toe/gameStatusReducer'
import { gameProgressReducer } from './reducer/tic-tac-toe/gameProgressReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  pagination: todoPaginationReducer,
  status: gameStatusReducer,
  progress: gameProgressReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
