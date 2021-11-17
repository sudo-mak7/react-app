const defaultState = {
  player: '\u2715',
  winner: '',
  draw: false,
  playerOneScore: 0,
  playerTwoScore: 0
}

const CHANGE_PLAYER = 'CHANGE_PLAYER'
const SET_WINNER = 'SET_WINNER'
const SET_DRAW = 'SET_DRAW'
const ADD_PLAYER_ONE_SCORE = 'ADD_PLAYER_ONE_SCORE'
const ADD_PLAYER_TWO_SCORE = 'ADD_PLAYER_TWO_SCORE'

export const gameStatusReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_PLAYER:
      return { ...state, player: action.payload }

    case SET_WINNER:
      return { ...state, winner: action.payload }

    case SET_DRAW:
      return { ...state, draw: action.payload }

    case ADD_PLAYER_ONE_SCORE:
      return { ...state, playerOneScore: action.payload + 1 }

    case ADD_PLAYER_TWO_SCORE:
      return { ...state, playerTwoScore: action.payload + 1 }

    default: return state
  }
}

export const changePlayerAction = payload => ({ type: CHANGE_PLAYER, payload })
export const setWinnerAction = payload => ({ type: SET_WINNER, payload })
export const setDrawAction = payload => ({ type: SET_DRAW, payload })
export const addPlayerOneScoreAction = payload => ({ type: ADD_PLAYER_ONE_SCORE, payload })
export const addPlayerTwoScoreAction = payload => ({ type: ADD_PLAYER_TWO_SCORE, payload })
