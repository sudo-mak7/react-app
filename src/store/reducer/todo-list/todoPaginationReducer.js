const defaultState = {
  totalCountOfPages: 1,
  todoPaginated: [],
  todosOnCurrentPage: [],
  currentPage: 1
}

const CALCULATE_TOTAL_COUNT_OF_PAGES = 'CALCULATE_TOTAL_COUNT_OF_PAGES'
const CALCULATE_PAGINATED_PAGES = 'CALCULATE_PAGINATED_PAGES'
const CALCULATE_TODOS_ON_CURRENT_PAGE = 'CALCULATE_TODOS_ON_CURRENT_PAGE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export const todoPaginationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CALCULATE_TOTAL_COUNT_OF_PAGES:
      return { ...state, totalCountOfPages: action.payload }

    case CALCULATE_PAGINATED_PAGES:
      return { ...state, todoPaginated: action.payload }

    case CALCULATE_TODOS_ON_CURRENT_PAGE:
      return { ...state, todosOnCurrentPage: action.payload }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload }

    default: return state
  }
}

export const calculatePagesAction = payload => ({ type: CALCULATE_PAGINATED_PAGES, payload })
export const calculateTodosOnCurrentPageAction = payload => ({ type: CALCULATE_TODOS_ON_CURRENT_PAGE, payload })
export const setCurrentPageAction = payload => ({ type: SET_CURRENT_PAGE, payload })
export const calculateTotalCountOfPagesAction = payload => ({ type: CALCULATE_TOTAL_COUNT_OF_PAGES, payload })
