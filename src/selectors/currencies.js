import { createSelector } from 'reselect'
import { transformToArray } from 'helpers/redux'

const getCurrencies = state => state.currencies.entries

export const getBookmarks = state => state.currencies.bookmarks

export const getCurrenciesAsArray = createSelector(
  getCurrencies,
  (currencies) => transformToArray(currencies)
)

export const getBookmarksAsArray = createSelector(
  getBookmarks,
  (bookmarks) => transformToArray(bookmarks)
)

export const getBookmarksKeys = createSelector(
  getBookmarks,
  (bookmarks) => Object.keys(bookmarks)
)
