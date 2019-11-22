import 'date-fns'
import '../css/coachdate.css'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'

class CoachDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDate: new Date('2019-11-22'),
    }
  }

  handleDateChange = date => {
    this.setState({ selectedDate: date } ,()=>{
      this.props.changeDate(this.state.selectedDate)
      console.log('時間值是啥 : ' + this.state.selectedDate)})
    
    // console.log('時間值是啥 : ' + this.state.selectedDate)
  }

  render() {
    return (
      <>
        <div className="class_book">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={this.state.selectedDate}
                onChange={this.handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </div>
      </>
    )
  }
}

export default CoachDate

