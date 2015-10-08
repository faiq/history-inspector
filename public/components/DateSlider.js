import React from 'react'

export default class DateSlider extends React.Component {
  onChange () {
    let domNode = React.findDOMNode(this)
    this.props.updateParent(new Date(parseInt(domNode.value)))
  }
  render () {
    let step = 86400 * 1000
    return(
      <input type="range" min={this.props.minDate}  max={this.props.maxDate} step={step} onChange={this.onChange.bind(this)}/>
    )
   }
}
