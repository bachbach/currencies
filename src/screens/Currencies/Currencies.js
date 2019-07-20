import React, { PureComponent } from 'react'

export default class Currencies extends PureComponent {
  componentDidMount() {
    this.props.fetchCurrencies()
  }

  render() {
    console.log(this.props)
    return <div>
      hello from currencies
    </div>
  }
}