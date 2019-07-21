import React, { PureComponent } from 'react'
import CurrencyItem from './CurrencyItem'

export default class AllCurrencies extends PureComponent {

  get currencies() {
    return this.props.currencies.map(currency => 
      <CurrencyItem
        key={currency.code}
        currency={currency}
        bookmarks={this.props.bookmarks}
        bookmark={this.props.bookmark}
        unbookmark={this.props.unbookmark}
      />
    )
  }

  render() {
    console.log(this.props.currencies)
    return <ul>
      {this.currencies}
    </ul>
  }
}