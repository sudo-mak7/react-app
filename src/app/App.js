import './pages/todo-list/styles/todo.css'
import React from 'react'
import Todo from './pages/todo-list/Todo'
import TicTacToe from './pages/tic-tac-toe/TicTacToe'
import { BrowserRouter as Router } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { useMatch, useResolvedPath } from 'react-router'

const App = () => {
  const routes = [
    { path: '/', element: <Todo/> },
    { path: '/tic-tac-toe', element: <TicTacToe/> }
  ]

  const MyRoute = ({ path, element }) => {
    const resolvedPath = useResolvedPath(path)
    const match = useMatch(resolvedPath.pathname)
    return (
      <CSSTransition
        in={ match != null }
        timeout={ 300 }
        classNames="page"
        unmountOnExit
      >
        { element }
      </CSSTransition>
    )
  }

  return (
    <Router>
      {routes.map(({ path, element }) => (
        <MyRoute
          key={ path }
          path={ path }
          element={ element }
        />
      ))}
    </Router>
  )
}

export default App
