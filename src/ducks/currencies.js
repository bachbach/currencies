import { transformById } from 'helpers/redux'
import CurrenciesService from 'services/currencies'

const currenciesService = new CurrenciesService()

export const FETCH_CURRENCIES_SUCCESS = Symbol('FETCH_CURRENCIES_SUCCESS')
export const FETCH_CURRENCIES_ERROR = Symbol('FETCH_CURRENCIES_ERROR')
export const BOOKMARK_SUCCESS = Symbol('BOOKMARK_SUCCESS')
export const BOOKMARK_ERROR = Symbol('BOOKMARK_ERROR')
export const UNBOOKMARK_SUCCESS = Symbol('UNBOOKMARK_SUCCESS')
export const UNBOOKMARK_ERROR = Symbol('UNBOOKMARK_ERROR')

const fetchCurrenciesSuccess = (currencies) => ({ type: FETCH_CURRENCIES_SUCCESS, currencies })

const fetchCurrenciesError = (error) => ({ type: FETCH_CURRENCIES_ERROR, error })

export const fetchCurrencies = () => {
  return async dispatch => {
    try {
      const { data: { 0 : { rates: currencies } } } = await currenciesService.fetchCurrencies()
      dispatch(fetchCurrenciesSuccess(currencies))
      return currencies
    } catch (e) {
      return dispatch(fetchCurrenciesError(e.response.data))
    }
  }
}

const bookmarkSuccess = (currency) => ({ type: BOOKMARK_SUCCESS, currency })

const bookmarkError = (error) => ({ type: BOOKMARK_ERROR, error })

export const bookmark = (currency) => {
  return async dispatch => {
    try {
      // here update localstorage
      dispatch(bookmarkSuccess(currency))
      return currency
    } catch (e) {
      return dispatch(bookmarkError(e))
    }
  }
}

const unbookmarkSuccess = (currency) => ({ type: UNBOOKMARK_SUCCESS, currency })

const unbookmarkError = (error) => ({ type: UNBOOKMARK_ERROR, error })

export const unbookmark = (currency) => {
  return async dispatch => {
    try {
      // here update localstorage
      dispatch(unbookmarkSuccess(currency))
      return currency
    } catch (e) {
      return dispatch(unbookmarkError(e))
    }
  }
}

const initState = {
  entries: {},
  bookmarks: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES_SUCCESS:
      return {
        ...state,
        entries: {
          ...state.entries,
          ...transformById(action.currencies, 'code')
        }
      }
    case BOOKMARK_SUCCESS:
      return {
        ...state,
        bookmarks: {
          ...state.bookmarks,
          [action.currency.code]: action.currency
        }
      }
    case UNBOOKMARK_SUCCESS:
      const { [action.currency.code]: {}, ...rest } = state.bookmarks
      return {
        ...state,
        bookmarks: rest
      }  
    default:
      return state
  }
}