import { connect } from 'react-redux'
import { fetchCurrencies, bookmark, unbookmark } from 'ducks/currencies'
import { getCurrenciesAsArray, getBookmarksKeys, getBookmarksAsArray } from 'selectors/currencies'
import Currencies from 'screens/Currencies/Currencies'

const mapStateToProps = state => ({
  currencies: getCurrenciesAsArray(state),
  bookmarksKeys: getBookmarksKeys(state),
  bookmarks: getBookmarksAsArray(state)
})

const mapDispatchToProps = dispatch => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
  bookmark: (currency) => dispatch(bookmark(currency)),
  unbookmark: (currency) => dispatch(unbookmark(currency))
})

export default connect(mapStateToProps, mapDispatchToProps)(Currencies)
