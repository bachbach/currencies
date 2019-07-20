import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import storeConfigurator from 'services/ReduxStoreConfigurator'

const store = storeConfigurator.configureStore()

const history = createBrowserHistory()

class Router extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Route path='/' render={() => <div>hello</div>} />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Router