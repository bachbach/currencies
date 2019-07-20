import { transformById } from 'helpers/redux'
import CurrenciesService from 'services/currencies'

const currenciesService = new CurrenciesService()

export const FETCH_CURRENCIES_SUCCESS = Symbol('FETCH_CURRENCIES_SUCCESS')
export const FETCH_CURRENCIES_ERROR = Symbol('FETCH_CURRENCIES_ERROR')
export const TOGGLE_BOOKMARK_SUCCESS = Symbol('TOGGLE_BOOKMARK_SUCCESS')
export const TOGGLE_BOOKMARK_ERROR = Symbol('TOGGLE_BOOKMARK_ERROR')

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

const toggleBookmarkSuccess = (currency) => ({ type: TOGGLE_BOOKMARK_SUCCESS, currency })

const toggleBookmarkError = (error) => ({ type: TOGGLE_BOOKMARK_ERROR, error })

export const toggleBookmark = (currency) => {
  return async dispatch => {
    try {
      // here update localstorage
      dispatch(toggleBookmarkSuccess(currency))
      return currency
    } catch (e) {
      return dispatch(toggleBookmarkError(e))
    }
  }
}

const initState = {
  entries: {}
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
    case TOGGLE_BOOKMARK_SUCCESS:
      return {
        ...state,
        bookmarks: {
          ...state.bookmarks,
          [action.currency.code]: action.currency
        }
      }  
    default:
      return state
  }
}