const defaultState = {
  squaresValues: Array(9).fill(null),
  moves: [],
  playerOneMoves: [],
  playerTwoMoves: []
}

const SET_SQUARES_VALUES = 'SET_SQUARES_VALUES'
const SET_MOVES = 'SET_MOVES'
const SET_PLAYER_ONE_MOVES = 'SET_PLAYER_ONE_MOVES'
const SET_PLAYER_TWO_MOVES = 'SET_PLAYER_TWO_MOVES'

export const gameProgressReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SQUARES_VALUES:
      return { ...state, squaresValues: action.payload }

    case SET_MOVES:
      return { ...state, moves: [...state.moves, action.payload] }

    case SET_PLAYER_ONE_MOVES:
      return { ...state, playerOneMoves: action.payload }

    case SET_PLAYER_TWO_MOVES:
      return { ...state, playerTwoMoves: action.payload }

    default: return state
  }
}

export const setSquaresValuesAction = payload => ({ type: SET_SQUARES_VALUES, payload })
export const setMovesAction = payload => ({ type: SET_MOVES, payload })
export const setPlayerOneMovesAction = payload => ({ type: SET_PLAYER_ONE_MOVES, payload })
export const setPlayerTwoMovesAction = payload => ({ type: SET_PLAYER_TWO_MOVES, payload })
