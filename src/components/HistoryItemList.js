import React from 'react'
import HistoryItem from './HistoryItem'

export default class HistoryItemList extends React.Component {
  render() {
    let items = this.props.items

    let itemViews = items.map(function(item) {
      return <HistoryItem title={item.title} />
    })

    return (
      <ul className="collection">
        {itemViews}
      </ul>
    )
  }
}
