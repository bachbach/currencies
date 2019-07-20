import { connect } from 'react-redux'
import { fetchCurrencies } from 'ducks/currencies'
// import getDisplayName from 'react-display-name'
import { getCurrenciesAsArray } from 'selectors/currencies'
import Currencies from 'screens/Currencies'
// import { getErrorByDisplayName } from 'selectors/errors'

// const displayName = getDisplayName(BeersList)

const mapStateToProps = state => ({
  currencies: getCurrenciesAsArray(state)
  // error: getErrorByDisplayName(state, displayName)
})

const mapDispatchToProps = dispatch => ({
  fetchCurrencies: () => dispatch(fetchCurrencies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Currencies)
