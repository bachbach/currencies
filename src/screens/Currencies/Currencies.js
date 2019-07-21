import React, { PureComponent } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import AllCurrencies from './components/AllCurrencies'

export default class Currencies extends PureComponent {
  componentDidMount() {
    this.props.fetchCurrencies()
  }

  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>All Currencies</Tab>
          <Tab>Bookmarks</Tab>
        </TabList>
    
        <TabPanel>
          <AllCurrencies
            currencies={this.props.currencies}
            bookmarks={this.props.bookmarks}
            bookmarksKeys={this.props.bookmarksKeys}
            bookmark={this.props.bookmark}
            unbookmark={this.props.unbookmark}
          />
        </TabPanel>
        <TabPanel>
          <AllCurrencies
            currencies={this.props.bookmarks}
            bookmarks={this.props.bookmarks}
            bookmarksKeys={this.props.bookmarksKeys}
            bookmark={this.props.bookmark}
            unbookmark={this.props.unbookmark}
          />
        </TabPanel>
      </Tabs>
    )
  }
}