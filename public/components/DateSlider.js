import React from 'react'

export default class DateSlider extends React.Component {
  onChange () { 
    console.log(new Date(parseInt(this.getDOMNode().value)))
  }
  render () {
    let step = 86400 * 1000
    return( 
      <input id="slider2" type ="range" min={this.props.minDate}  max={this.props.maxDate} step={step} onChange={this.onChange}/>
    )
   }
}
