import React from 'react'
import HistoryItem from './HistoryItem'

export default class HistoryItemList extends React.Component {
  render() {
    let items = this.props.items

    let itemViews = items.map(function(item) {
      return <HistoryItem text={item.text} />
    })

    return (
      <ul> {itemViews} </ul>
    )
  }
}
