import React, { PureComponent } from 'react'

export default class AllCurrencies extends PureComponent {

  get currencies() {
    return this.props.currencies.map(currency => (
      <li key={currency.code}>{currency.code}</li>
    ))
  }

  render() {
    console.log(this.props.currencies)
    return <ul>
      {this.currencies}
    </ul>
  }
}