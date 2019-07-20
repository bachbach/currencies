import React, { PureComponent } from 'react'
import AllCurrencies from './components/AllCurrencies'

export default class Currencies extends PureComponent {
  componentDidMount() {
    console.log('?????')
    this.props.fetchCurrencies()
  }

  render() {
    console.log(this.props.currencies)
    return <div>
      <AllCurrencies currencies={this.props.currencies} toggleBookmark={this.props.toggleBookmark}/>
    </div>
  }
}