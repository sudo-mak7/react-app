import {
  ProgressAction,
  ProgressActionTypes,
  ProgressState
} from '../../../types/tic-tac-toe/progressTypes'

const initialState: ProgressState = {
  squaresValues: Array(9).fill(null),
  moves: [],
  playerOneMoves: [],
  playerTwoMoves: []
}

export const progressReducer = (
  state = initialState,
  action: ProgressAction
): ProgressState => {
  switch (action.type) {
    case ProgressActionTypes.SET_SQUARES_VALUES:
      return { ...state, squaresValues: action.payload }

    case ProgressActionTypes.SET_MOVES:
      return { ...state, moves: action.payload }

    case ProgressActionTypes.SET_PLAYER_ONE_MOVES:
      return { ...state, playerOneMoves: action.payload }

    case ProgressActionTypes.SET_PLAYER_TWO_MOVES:
      return { ...state, playerTwoMoves: action.payload }

    default: return state
  }
}
