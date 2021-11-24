import '../styles/todo.css'
import React, { useCallback, useEffect } from 'react'
import Loader from '../../../common/loader/Loader'
import RemoveButton from './ui/button/RemoveButton'
import Pagination from './Pagination'
import { useDispatch, useSelector } from 'react-redux'
import {
  calculatePagesAction,
  calculateTodosOnCurrentPageAction,
  setCurrentPageAction
} from '../../../store/reducer/todo-list/todoPaginationReducer'

const TodoList = ({ loading, todos, completeTodo, removeTodo }) => {
  // eslint-disable-next-line no-unused-vars
  const selectedPage = 1
  const todosPerPage = 3

  const dispatch = useDispatch()

  const todoPaginated = useSelector(state => state.pagination.todoPaginated)
  const todosOnCurrentPage = useSelector(state => state.pagination.todosOnCurrentPage)
  const currentPage = useSelector(state => state.pagination.currentPage)

  const setPageHandler = useCallback(selectedPage => {
    dispatch(setCurrentPageAction(selectedPage))
  }, [dispatch])

  useEffect(() => {
    for (let i = 0; i < Math.ceil(todos?.length / todosPerPage); i++){
      todoPaginated[i] = todos?.slice((i * todosPerPage), (i * todosPerPage) + todosPerPage)
    }
    dispatch(calculatePagesAction(todoPaginated))
    dispatch(calculateTodosOnCurrentPageAction(todoPaginated[currentPage - 1]))
  }, [currentPage, dispatch, todoPaginated, todos])

  return (
    <section>
      { loading
        ? <Loader/>
        : <ul>
          { !todos?.length
            ? <p>Пока никаких дел нет...</p>
            : todosOnCurrentPage?.map((todo, index) => (
              <li
                key={ index }
              >
                <div
                  className="task"
                  onClick={ () => completeTodo(todo.id) }
                >
                  <label style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
                    { todo.text }
                  </label>
                </div>
                <RemoveButton
                  buttonValue={ 'Удалить' }
                  removeTodo={ removeTodo }
                  id={ todo.id }
                  todos={ todos }
                  todosPerPage={ todosPerPage }
                />
              </li>
            ))
          }
        </ul>
      }

      <Pagination
        todos={ todos }
        todosPerPage={ todosPerPage }
        setPageHandler={ setPageHandler }
        currentPage={ currentPage }
      />
    </section>
  )
}

export default TodoList
