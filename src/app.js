import DateSlider from './components/DateSlider'
import HistoryItemList from './components/HistoryItemList'
import React from 'react'
import moment from 'moment'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: "",
      items: [], //items will be fetched by chrome historian
    }
    this.setDate = this.setDate.bind(this)
  }

  setDate(date) {
    let startTime = date
    let endTime = moment(date).add(1, 'days')
    chrome.history.search({
      'startTime': startTime.unix() * 1000,
      'endTime': endTime.unix() * 1000,
      'text': ''
    }, (v) => {
      this.setState({
        date: date,
        items: v
      })
    })
  }

  render() {
    let lastWeek = moment().subtract(7, 'days').startOf('day')

    return (
      <div className="container">
        <div className="date-region">
          <h2 className="copy">
            Slide to pick a day
          </h2>
          <h2 className="date">
            {this.state.date ? moment(this.state.date).format("dddd, MMMM Do YYYY") : ""}
          </h2>
          <DateSlider minDate={lastWeek.unix()} maxDate={moment().unix()} updateParent={this.setDate} />
        </div>
        <HistoryItemList items={this.state.items} />
      </div>
    )
  }
}

React.render(<App />, document.body);
