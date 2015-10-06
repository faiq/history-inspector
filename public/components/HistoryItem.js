import React from 'react'

export default class HistoryItem extends React.Component {
  render() {
    return (
      <li
        id="listItem">
        {this.props.text}
      </li>
    )
  }
}
