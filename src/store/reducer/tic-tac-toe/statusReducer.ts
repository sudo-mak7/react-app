import {
  StatusAction,
  StatusActionTypes,
  StatusState
} from '../../../types/tic-tac-toe/statusTypes'

const initialState: StatusState = {
  player: '\u2715',
  winner: '',
  draw: false,
  playerOneScore: 0,
  playerTwoScore: 0
}

export const statusReducer = (
  state = initialState,
  action: StatusAction
): StatusState => {
  switch (action.type) {
    case StatusActionTypes.CHANGE_PLAYER:
      return { ...state, player: action.payload }

    case StatusActionTypes.SET_WINNER:
      return { ...state, winner: action.payload }

    case StatusActionTypes.SET_DRAW:
      return { ...state, draw: action.payload }

    case StatusActionTypes.ADD_PLAYER_ONE_SCORE:
      return { ...state, playerOneScore: action.payload + 1 }

    case StatusActionTypes.ADD_PLAYER_TWO_SCORE:
      return { ...state, playerTwoScore: action.payload + 1 }

    default: return state
  }
}
