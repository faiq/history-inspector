import React from 'react'

export default class HistoryItem extends React.Component {
  render() {
    return (
      <li className="collection-item">
        {this.props.title}
      </li>
    )
  }
}
