import '../../common/styles/style.css'
import React from 'react'
import Game from './components/Game'
import { Link } from 'react-router-dom'

const TicTacToe = () => {
  return (
    <div className="App">
      <main className="container">
        <header>
          <h1>Крестики-нолики</h1>
        </header>

        <Game/>

        <Link to='/'>
          <div className="to-todo-label">
            <p>Список<br/>дел</p>
          </div>
        </Link>
      </main>
    </div>
  )
}

export default TicTacToe
