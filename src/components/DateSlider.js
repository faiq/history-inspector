import React from 'react'
import moment from 'moment'

export default class DateSlider extends React.Component {
  onChange () {
    let domNode = React.findDOMNode(this)
    this.props.updateParent(moment.unix(domNode.value))
  }
  render () {
    let step = 86400
    return(
      <input type="range" min={this.props.minDate}  max={this.props.maxDate} step={step} onChange={this.onChange.bind(this)}/>
    )
   }
}
