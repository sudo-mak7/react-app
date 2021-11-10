import '../styles/todo.css'
import React, { useCallback, useEffect, useState } from 'react'
import Loader from '../../../common/loader/Loader'
import RemoveButton from './ui/button/RemoveButton'
import Pagination from './Pagination'

const TodoList = ({ loading, todos, completeTodo, removeTodo }) => {
  const selectedPage = 1
  const todosPerPage = 3

  const [todoPaginated, setPagination] = useState([])
  const [todosOnCurrentPage, setTodosOnCurrentPage] = useState([])
  const [currentPage, setCurrentPage] = useState(selectedPage)

  const setPageHandler = useCallback(selectedPage => {
    setCurrentPage(selectedPage)
  }, [])

  useEffect(() => {
    for (let i = 0; i < Math.ceil(todos?.length / todosPerPage); i++){
      todoPaginated[i] = todos?.slice((i * todosPerPage), (i * todosPerPage) + todosPerPage)
    }
    setPagination(todoPaginated)
    setTodosOnCurrentPage(todoPaginated[currentPage - 1])
  }, [currentPage, setPageHandler, todoPaginated, todos])

  return (
    <section>
      {loading
        ? <Loader/>
        : <ul>
          {(!todos?.length)
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
                  setCurrentPage={ setCurrentPage }
                  currentPage={ currentPage }
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
