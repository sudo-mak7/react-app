import React, {useEffect, useState} from 'react'
import Board from './Board'

const Game = () => {
  const playerOne = '\u2715'
  const playerTwo = '\u2B58'

  const [squaresValues, setSquaresValues] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(playerOne)
  const [moves, setMoves] = useState([])
  const [playerOneMoves, setPlayerOneMoves] = useState([])
  const [playerTwoMoves, setPlayerTwoMoves] = useState([])
  const [winner, setWinner] = useState('')
  const [draw, setDraw] = useState(false)
  const [playerOneScore, setPlayerOneScore] = useState(0)
  const [playerTwoScore, setPlayerTwoScore] = useState(0)

  useEffect(() => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < winningLines.length; i++) {
      let playerOneWins = []
      let playerTwoWins = []

      for (let j = 0; j < winningLines[i].length; j++) {
        playerOneWins.push(playerOneMoves.includes(winningLines[i][j]))
      }
      if (!playerOneWins.includes(false) && !draw) {
        setWinner(playerOne)
      }

      for (let j = 0; j < winningLines[i].length; j++) {
        playerTwoWins.push(playerTwoMoves.includes(winningLines[i][j]))
      }
      if (!playerTwoWins.includes(false) && !draw) {
        setWinner(playerTwo)
      }
    }

    if (!squaresValues.includes(null) && !winner) {
      setDraw(true)
    }
  }, [draw, playerOneMoves, playerTwoMoves, squaresValues, winner])

  const handleClick = i => {
    if (!moves.includes(i) && !winner && !draw) {
      if (player === playerOne) {
        setMoves([...moves, i])
        setPlayerOneMoves([...playerOneMoves, i])
      } else {
        setMoves([...moves, i])
        setPlayerTwoMoves([...playerTwoMoves, i])
      }

      const squares = squaresValues.slice()

      squares[i] = player
      setSquaresValues(squares)

      let nextPlayer = player

      nextPlayer = nextPlayer === playerOne ? playerTwo : playerOne
      setPlayer(nextPlayer)
    }

    if (winner || draw) {
      if (winner && !draw) {
        winner === playerOne
          ? setPlayerOneScore(playerOneScore + 1)
          : setPlayerTwoScore(playerTwoScore + 1)
      }

      setSquaresValues(Array(9).fill(null))
      setMoves([])
      setPlayerOneMoves([])
      setPlayerTwoMoves([])
      setWinner('')
      setDraw(false)
    }
  }

  return (
    <section className="game">
      <div className="status">
        {draw
          ? <h2>Ничья!</h2>
          : winner
            ? <h2>Победитель: {winner}</h2>
            : <h2>Следующий ход: {player}</h2>
        }
      </div>
      <div className="game-board">
        <Board
          squaresValues={ squaresValues }
          handleClick={ handleClick }
        />
      </div>

      <div>
        {playerOneScore !== 0 || playerTwoScore !==0
          ? <div>
            <h2>Счет:</h2>
            <h2>Игрок {playerOne} – {playerOneScore}</h2>
            <h2>Игрок {playerTwo} – {playerTwoScore}</h2>
          </div>
          : ''
        }
      </div>
    </section>
  )
}

export default Game