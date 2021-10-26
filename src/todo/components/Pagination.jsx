import React, {useEffect, useState} from 'react'

const Pagination = ({ todos, todosPerPage, setPageHandler, currentPage }) => {
  const [totalCountPage, setTotalCountPage] = useState(1)
  let pages = []

  useEffect(() => {
    const calculateTotalCountPage = () => {
        setTotalCountPage(Math.ceil(todos?.length / todosPerPage))
    }
    calculateTotalCountPage()
  })

  for (let i = 1; i <= totalCountPage; i++) {
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
    for (let i = 1; i <= totalCountPage; i++) {
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