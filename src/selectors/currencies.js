import { createSelector } from 'reselect'
import { transformToArray } from 'helpers/redux'

const getCurrencies = state => state.currencies.entries

export const getBookmarks = state => state.currencies.bookmarks

export const getCurrenciesAsArray = createSelector(
  getCurrencies,
  (currencies) => transformToArray(currencies)
)