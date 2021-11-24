import { StatusActionTypes } from '../../../types/tic-tac-toe/statusTypes'

export const changePlayerAction = (payload: string) => ({
  type: StatusActionTypes.CHANGE_PLAYER,
  payload
})
export const setWinnerAction = (payload: string) => ({
  type: StatusActionTypes.SET_WINNER,
  payload
})
export const setDrawAction = (payload: boolean) => ({
  type: StatusActionTypes.SET_DRAW,
  payload
})
export const addPlayerOneScoreAction = (payload: number) => ({
  type: StatusActionTypes.ADD_PLAYER_ONE_SCORE,
  payload
})
export const addPlayerTwoScoreAction = (payload: number) => ({
  type: StatusActionTypes.ADD_PLAYER_TWO_SCORE,
  payload
})
