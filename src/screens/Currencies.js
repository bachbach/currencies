import React, { PureComponent } from 'react'
import CurrenciesService from 'services/currencies'

export default class Currencies extends PureComponent {
  componentDidMount() {
    this.props.fetchCurrencies()
  }

  render() {
    console.log(this.props)
    return <div>
      hello from currencie
    </div>
  }
}