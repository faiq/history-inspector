//import HistoryItem from './components/HistoryItem'
import DateSlider from './components/DateSlider'
import HistoryItemList from './components/HistoryItemList'
import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: "",
      items: [],
    }
    this.setDate = this.setDate.bind(this)
  }

  generateRandomItems() {
    let rand = Math.ceil(Math.random() * 50)
    let items = [];

    for (var i=0; i < rand; i++) {
      items.push({
        text: 'item #'+ Math.ceil(Math.random() * 100),
      })
    }

    return items
  }

  setDate(date) {
    this.setState({
      date: date,
      items: this.generateRandomItems()
    })
  }

  render() {
    let min = (new Date("2015-06-17Z")).getTime()

    return (
      <div className="container">
        <div className="date-region">
          <DateSlider minDate={min} maxDate={(new Date()).getTime()} updateParent={this.setDate} />
          <div className="date"> 
            <span>{this.state.date.toString()}</span> 
          </div>
        </div>
        <HistoryItemList items={this.state.items} />
      </div>
    )
  }
}

React.render(<App />, document.body);
