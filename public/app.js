//import HistoryItem from './components/HistoryItem'
import DateSlider from './components/DateSlider'
import React from 'react'                                                                                                                                                
require('./styles/all.scss')
let min = (new Date("2015-06-17Z")).getTime()
React.render(<DateSlider minDate={min} maxDate={(new Date()).getTime()}/>, document.getElementById('myForm'))
