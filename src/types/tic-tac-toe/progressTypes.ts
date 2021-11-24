export interface ProgressState {
  squaresValues: (null | string)[],
  moves: any[],
  playerOneMoves: number[],
  playerTwoMoves: number[]
}

export enum ProgressActionTypes {
  SET_SQUARES_VALUES = 'SET_SQUARES_VALUES',
  SET_MOVES = 'SET_MOVES',
  SET_PLAYER_ONE_MOVES = 'SET_PLAYER_ONE_MOVES',
  SET_PLAYER_TWO_MOVES = 'SET_PLAYER_TWO_MOVES'
}

interface setSquaresValuesAction {
  type: ProgressActionTypes.SET_SQUARES_VALUES,
  payload: (null | string)[]
}

interface setMovesAction {
  type: ProgressActionTypes.SET_MOVES,
  payload: number[]
}

interface setPlayerOneMovesAction {
  type: ProgressActionTypes.SET_PLAYER_ONE_MOVES,
  payload: number[]
}

interface setPlayerTwoMovesAction {
  type: ProgressActionTypes.SET_PLAYER_TWO_MOVES,
  payload: number[]
}

export type ProgressAction =
  setSquaresValuesAction |
  setMovesAction |
  setPlayerOneMovesAction |
  setPlayerTwoMovesAction
