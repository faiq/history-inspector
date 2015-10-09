import React from 'react'
import HistoryItem from './HistoryItem'

export default class HistoryItemList extends React.Component {
  render() {
    let items = this.props.items

    let itemViews = items.map((item, i) => {
      return <HistoryItem title={item.title} key={i} url={item.url} />
    })

    return (
      <ul className="collection">
        {itemViews}
      </ul>
    )
  }
}
