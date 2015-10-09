import React from 'react'
import url from 'url'

export default class HistoryItem extends React.Component {
  getFavicon(href) {
    return `chrome://favicon/${this.getDomain(href)}`
  }

  getDomain(href) {
    let parsed = url.parse(href)
    return parsed.protocol + "//" + parsed.host
  }

  render() {
    return (
      <li className="collection-item">
        <img src={this.getFavicon(this.props.url)} />
        {this.props.title} - {this.getDomain(this.props.url)}
      </li>
    )
  }
}
