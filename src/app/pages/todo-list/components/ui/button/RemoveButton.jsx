import '../../../styles/todo.css'
import React from 'react'
import { setCurrentPageAction } from '../../../../../store/reducer/todo-list/todoPaginationReducer'
import { useDispatch, useSelector } from 'react-redux'

const RemoveButton = ({ buttonValue, removeTodo, id, todos, todosPerPage }) => {
  const dispatch = useDispatch()
  const currentPage = useSelector(state => state.pagination.currentPage)

  return (
    <button
      className='remove-button'
      onClick={() => {
        if (todos[todos.length - 1].id === id && todos.length % todosPerPage === 1) {
          todos?.length === 1
          ? dispatch(setCurrentPageAction(currentPage))
          : dispatch(setCurrentPageAction(currentPage - 1))
        }
        removeTodo(id)
      }}
    >
      { buttonValue }
    </button>
  )
}

export default RemoveButton
