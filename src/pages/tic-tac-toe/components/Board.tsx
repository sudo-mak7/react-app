import React from 'react'
import Square from './Square'

interface BoardProps {
  squaresValues: (null | string)[],
  handleClick: (i: number) => void
}

const Board: React.FC<BoardProps> = ({ squaresValues, handleClick }) => {
  const renderSquare = (i: number) => {
    return <Square
      value={ squaresValues[i] }
      onClick={ () => handleClick(i) }
    />
  }

  return (
    <section>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </section>
  )
}

export default Board
