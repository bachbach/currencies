import React, { PureComponent } from 'react'
import CurrencyItem from './CurrencyItem'
import './AllCurrencies.scss'

export default class AllCurrencies extends PureComponent {

  get currencies() {
    return this.props.currencies.map(currency => 
      <CurrencyItem
        key={currency.code}
        currency={currency}
        bookmarks={this.props.bookmarks}
        bookmarksKeys={this.props.bookmarksKeys}
        bookmark={this.props.bookmark}
        unbookmark={this.props.unbookmark}
      />
    )
  }

  render() {
    return <div className='all-currencies'>
      {this.currencies}
    </div>
  }
}