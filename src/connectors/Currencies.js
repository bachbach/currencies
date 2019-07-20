import { connect } from 'react-redux'
import { fetchCurrencies, toggleBookmark } from 'ducks/currencies'
import { getCurrenciesAsArray } from 'selectors/currencies'
import Currencies from 'screens/Currencies/Currencies'

const mapStateToProps = state => ({
  currencies: getCurrenciesAsArray(state)
})

const mapDispatchToProps = dispatch => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
  toggleBookmark: (currency) => dispatch(toggleBookmark(currency))
})

export default connect(mapStateToProps, mapDispatchToProps)(Currencies)
