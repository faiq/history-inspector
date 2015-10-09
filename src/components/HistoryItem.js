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
    const { url, title } = this.props
    let favicon = this.getFavicon(url)
    let style = {
      'background-image': `url(${favicon})` 
    }
    return (
      <li className="collection-item history-item" style={style}>
        {title} - {this.getDomain(url)}
      </li>
    )
  }
}
