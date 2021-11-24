export interface StatusState {
  player: string,
  winner: string,
  draw: boolean,
  playerOneScore: number,
  playerTwoScore: number
}

export enum StatusActionTypes {
  CHANGE_PLAYER = 'CHANGE_PLAYER',
  SET_WINNER = 'SET_WINNER',
  SET_DRAW = 'SET_DRAW',
  ADD_PLAYER_ONE_SCORE = 'ADD_PLAYER_ONE_SCORE',
  ADD_PLAYER_TWO_SCORE = 'ADD_PLAYER_TWO_SCORE'
}

interface changePlayerAction {
  type: StatusActionTypes.CHANGE_PLAYER,
  payload: string
}

interface setWinnerAction {
  type: StatusActionTypes.SET_WINNER,
  payload: string
}

interface setDrawAction {
  type: StatusActionTypes.SET_DRAW,
  payload: boolean
}

interface addPlayerOneScoreAction {
  type: StatusActionTypes.ADD_PLAYER_ONE_SCORE,
  payload: number
}

interface addPlayerTwoScoreAction {
  type: StatusActionTypes.ADD_PLAYER_TWO_SCORE,
  payload: number
}

export type StatusAction =
  changePlayerAction |
  setWinnerAction |
  setDrawAction |
  addPlayerOneScoreAction |
  addPlayerTwoScoreAction
