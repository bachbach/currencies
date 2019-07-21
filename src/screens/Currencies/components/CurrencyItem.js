import React, { PureComponent } from 'react'

export default class CurrencyItem extends PureComponent {
  bookmark = () => this.props.bookmark(this.props.currency)
  unbookmark = () => this.props.unbookmark(this.props.currency)

  get toggleButton() {
    // console.log('togglebutton', this.props)
    return this.props.bookmarks[this.props.currency.code] ?
      <button onClick={this.unbookmark}>unbookmark</button>
      : <button onClick={this.bookmark}>bookmark</button>

  }

  render() {
    return (
      <div>
        <span>{this.props.currency.currency}</span>
        <span>{this.props.currency.code}</span>
        <span>{this.props.currency.mid}</span>
        {this.toggleButton}
      </div>
    )
  }
}