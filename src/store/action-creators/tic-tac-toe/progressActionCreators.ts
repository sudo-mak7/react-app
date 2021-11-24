import { ProgressActionTypes } from '../../../types/tic-tac-toe/progressTypes'

export const setSquaresValuesAction = (payload: (null | string)[]) => ({
  type: ProgressActionTypes.SET_SQUARES_VALUES,
  payload
})

export const setMovesAction = (payload: any[]) => ({
  type: ProgressActionTypes.SET_MOVES,
  payload
})

export const setPlayerOneMovesAction = (payload: number[]) => ({
  type: ProgressActionTypes.SET_PLAYER_ONE_MOVES,
  payload
})

export const setPlayerTwoMovesAction = (payload: number[]) => ({
  type: ProgressActionTypes.SET_PLAYER_TWO_MOVES,
  payload
})
