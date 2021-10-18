import '../../../styles/App.css'
import React from 'react'

const RemoveButton = ({ buttonValue, removeTodo, id, todos, todosPerPage, currentPage, setCurrentPage }) => {
  return (
    <button
      className='remove-button'
      onClick={() => {
        if (todos[todos.length - 1].id === id && todos.length % todosPerPage === 1) {
          setCurrentPage(currentPage - 1)
        }
        removeTodo(id)
      }}
    >
      { buttonValue }
    </button>
  )
}

export default RemoveButton