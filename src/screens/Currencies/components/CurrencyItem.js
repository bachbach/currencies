import React, { PureComponent } from 'react'

export default class CurrencyItem extends PureComponent {
  toggleBookmark = () => this.props.toggleBookmark(this.props.currency)

  render() {
    return (
      <div>
        <span>{this.props.currency.currency}</span>
        <span>{this.props.currency.code}</span>
        <span>{this.props.currency.mid}</span>
        <button onClick={this.toggleBookmark}>bookmark</button>
      </div>
    )
  }
}