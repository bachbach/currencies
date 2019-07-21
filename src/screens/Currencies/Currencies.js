import React, { PureComponent } from 'react'
import AllCurrencies from './components/AllCurrencies'

export default class Currencies extends PureComponent {
  componentDidMount() {
    this.props.fetchCurrencies()
  }

  render() {
    return <div>
      <AllCurrencies
        currencies={this.props.currencies}
        bookmarks={this.props.bookmarks}
        bookmark={this.props.bookmark}
        unbookmark={this.props.unbookmark}
      />
    </div>
  }
}