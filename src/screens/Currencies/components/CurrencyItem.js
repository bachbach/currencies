import React, { PureComponent } from 'react'
import './CurrencyItem.scss'

export default class CurrencyItem extends PureComponent {
  bookmark = () => this.props.bookmark(this.props.currency)
  unbookmark = () => this.props.unbookmark(this.props.currency)

  get toggleButton() {
    return this.props.bookmarks[this.props.currency.code]
      ? <button onClick={this.unbookmark}>unbookmark</button>
      : <button onClick={this.bookmark}>bookmark</button>

  }

  render() {
    return (
      <div className='currency_item'>
        <div className='currency_item__container'>
          <div>{this.props.currency.currency}</div>
          <div>{this.props.currency.code}</div>
          <div>{this.props.currency.mid}</div>
          {this.toggleButton}
        </div>
      </div>
    )
  }
}