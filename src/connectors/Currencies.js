import { connect } from 'react-redux'
import { fetchCurrencies } from 'ducks/currencies'
import { getCurrenciesAsArray } from 'selectors/currencies'
import Currencies from 'screens/Currencies/Currencies'

const mapStateToProps = state => ({
  currencies: getCurrenciesAsArray(state)
})

const mapDispatchToProps = dispatch => ({
  fetchCurrencies: () => dispatch(fetchCurrencies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Currencies)
