import { transformById } from 'helpers/redux'
import CurrenciesService from 'services/currencies'

const currenciesService = new CurrenciesService()

export const FETCH_CURRENCIES_SUCCESS = Symbol('FETCH_CURRENCIES_SUCCESS')
export const FETCH_CURRENCIES_ERROR = Symbol('FETCH_CURRENCIES_ERROR')

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

const initState = {
  entries: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES_SUCCESS:
      return {
        entries: {
          ...state.entries,
          ...transformById(action.currencies)
        }
      }
    default:
      return state
  }
}