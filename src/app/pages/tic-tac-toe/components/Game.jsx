import React, { useEffect } from 'react'
import Board from './Board'
import { useDispatch, useSelector } from 'react-redux'
import {
  setSquaresValuesAction,
  setMovesAction,
  setPlayerOneMovesAction,
  setPlayerTwoMovesAction
} from '../../../store/reducer/tic-tac-toe/gameProgressReducer'
import {
  addPlayerOneScoreAction,
  addPlayerTwoScoreAction,
  changePlayerAction,
  setDrawAction,
  setWinnerAction
} from '../../../store/reducer/tic-tac-toe/gameStatusReducer'

const Game = () => {
  const playerOne = '\u2715'
  const playerTwo = '\u2B58'

  const dispatch = useDispatch()

  const player = useSelector(state => state.status.player)
  const winner = useSelector(state => state.status.winner)
  const draw = useSelector(state => state.status.draw)
  const playerOneScore = useSelector(state => state.status.playerOneScore)
  const playerTwoScore = useSelector(state => state.status.playerTwoScore)
  const squaresValues = useSelector(state => state.progress.squaresValues)
  const moves = useSelector(state => state.progress.moves)
  const playerOneMoves = useSelector(state => state.progress.playerOneMoves)
  const playerTwoMoves = useSelector(state => state.progress.playerTwoMoves)

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
        dispatch(setWinnerAction(playerOne))
      }

      for (let j = 0; j < winningLines[i].length; j++) {
        playerTwoWins.push(playerTwoMoves.includes(winningLines[i][j]))
      }
      if (!playerTwoWins.includes(false) && !draw) {
        dispatch(setWinnerAction(playerTwo))
      }
    }

    if (!squaresValues.includes(null) && !winner) {
      dispatch(setDrawAction(true))
    }
  }, [dispatch, draw, playerOneMoves, playerTwoMoves, squaresValues, winner])

  const handleClick = i => {
    if (!moves.includes(i) && !winner && !draw) {
      if (player === playerOne) {
        dispatch(setMovesAction([...moves, i]))
        dispatch(setPlayerOneMovesAction([...playerOneMoves, i]))
      } else {
        dispatch(setMovesAction([...moves, i]))
        dispatch(setPlayerTwoMovesAction([...playerTwoMoves, i]))
      }

      const squares = squaresValues.slice()

      squares[i] = player
      dispatch(setSquaresValuesAction(squares))

      let nextPlayer = player

      nextPlayer = nextPlayer === playerOne ? playerTwo : playerOne
      dispatch(changePlayerAction(nextPlayer))
    }

    if (winner || draw) {
      if (winner && !draw) {
        winner === playerOne
          ? dispatch(addPlayerOneScoreAction(playerOneScore))
          : dispatch(addPlayerTwoScoreAction(playerTwoScore))
      }

      dispatch(setSquaresValuesAction(Array(9).fill(null)))
      dispatch(setMovesAction([]))
      dispatch(setPlayerOneMovesAction([]))
      dispatch(setPlayerTwoMovesAction([]))
      dispatch(setWinnerAction(''))
      dispatch(setDrawAction(false))
    }
  }

  return (
    <section className="game">
      <div className="status">
        { draw
          ? <h2>Ничья!</h2>
          : winner
            ? <h2>Победитель: { winner }</h2>
            : <h2>Следующий ход: { player }</h2>
        }
      </div>
      <div className="game-board">
        <Board
          squaresValues={ squaresValues }
          handleClick={ handleClick }
        />
      </div>

      <div>
        { playerOneScore !== 0 || playerTwoScore !==0
          ? <div>
            <h2>Счет:</h2>
            <h2>Игрок { playerOne } – { playerOneScore }</h2>
            <h2>Игрок { playerTwo } – { playerTwoScore }</h2>
          </div>
          : ''
        }
      </div>
    </section>
  )
}

export default Game
