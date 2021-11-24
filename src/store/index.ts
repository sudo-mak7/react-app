import { createStore, combineReducers } from 'redux'
import { todoPaginationReducer } from './reducer/todo-list/todoPaginationReducer'
import { statusReducer } from './reducer/tic-tac-toe/statusReducer'
import { progressReducer } from './reducer/tic-tac-toe/progressReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  pagination: todoPaginationReducer,
  status: statusReducer,
  progress: progressReducer
})

export const store = createStore(rootReducer, composeWithDevTools())

export type RootState = ReturnType<typeof rootReducer>
