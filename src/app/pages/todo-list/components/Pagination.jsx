import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotalCountOfPagesAction } from '../../../store/reducer/todo-list/todoPaginationReducer'

const Pagination = ({ todos, todosPerPage, setPageHandler, currentPage }) => {
  const dispatch = useDispatch()
  const totalCountOfPages = useSelector(state => state.pagination.totalCountOfPages)

  let pages = []

  useEffect(() => {
    dispatch(calculateTotalCountOfPagesAction(Math.ceil(todos?.length / todosPerPage)))
  }, [dispatch, todos?.length, todosPerPage])

  for (let i = 1; i <= totalCountOfPages; i++) {
    pages = [
      ...pages,
      {
        page: i,
        selected: i === currentPage
      }
    ]
  }

  const changePage = e => {
    setPageHandler(Number(e.target.textContent))
    for (let i = 1; i <= totalCountOfPages; i++) {
      pages = [
        ...pages,
        {
          page: i,
          selected: true
        }
      ]
    }
  }

  const renderPagination = pages => {
    if (pages.length >= 2) {
      return pages.map((page, index) => {
        return <button
          className='page-button'
          onClick={ changePage }
          key={ index }
          style={{ border: page.selected ? '2px solid white' : '' }}
        >
          { page.page }
        </button>
      })
    }
  }

  return (
    <section>
      { renderPagination(pages) }
    </section>
  )
}

export default Pagination
