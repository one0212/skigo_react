import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../css/hotel/HotelSearchForm.css'
import {
  RangeDatePicker,
  disableDay,
} from '../../../node_modules/@y0c/react-datepicker'
// import '../../../node_modules/@y0c/react-datepicker/assets/styles/calendar.scss'
import Select from 'react-select'
import Ink from 'react-ink'

// 這裡是人數選單
const options_p = [
  { value: '1位成人', label: '1位成人' },
  { value: '2位成人', label: '2位成人' },
  { value: '3位成人', label: '3位成人' },
  { value: '4位成人', label: '4位成人' },
  { value: '4位成人', label: '4位成人' },
]
const options_c = [
  { value: '1位孩童', label: '1位孩童' },
  { value: '2位孩童', label: '2位孩童' },
  { value: '3位孩童', label: '3位孩童' },
  { value: '4位孩童', label: '4位孩童' },
  { value: '4位孩童', label: '4位孩童' },
]
const customStyles = {
  control: base => ({
    ...base,
    height: 35,
    minHeight: 60,
    border: 'none',
    whiteSpace: 'nowrap',
  }),
}
const hotelDateSearchStyles = {
  hotelDateSearch: base => ({
    ...base,
    border: '3px',
  }),
}

class HotelSearchForm extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedOption_p: null,
      selectedOption_c: null,
    }
  }
  handleChange = (selectedOption_p, selectedOption_c) => {
    this.setState(
      { selectedOption_p },
      () => console.log(`Option selected:`, this.state.selectedOption_p),
      { selectedOption_c },
      () => console.log(`Option selected:`, this.state.selectedOption_c)
    )
  }
  render() {
    const { selectedOption } = this.state
    return (
      <Form
        action=""
        method="get"
        className="search_date_form align-self-center animated bounce fast"
      >
        <div className="d-flex">
          <div className="search_date_area_input search_setting_bg">
            <input type="text" className="form-control" placeholder="北海道" />
          </div>
          <div className="hotel_room_date_search">
            <RangeDatePicker
              styles={hotelDateSearchStyles}
              dateFormat="YYYY/MM/DD"
              startPlaceholder="2019/12/13"
              endPlaceholder="2019/12/15"
              disableDay={disableDay}
            />
          </div>
          <Select
            className="search_select_p ml-3"
            styles={customStyles}
            value={selectedOption}
            onChange={this.handleChange}
            options={options_p}
            placeholder="4位成人"
          />
          <Select
            className="search_select_p"
            styles={customStyles}
            value={selectedOption}
            onChange={this.handleChange}
            options={options_c}
            placeholder="0位孩童"
          />
          <Button
            variant="none"
            onClick={this.changePage}
            style={{
              position: 'relative',
              backgroundColor: '#fd702d',
              color: '#fff',
            }}
          >
            <Ink key="__ink" />
            搜出好飯店 GO
          </Button>
        </div>
      </Form>
      //       </Col>
      //     </Row>
      //   </div>
    )
  }
}

export default HotelSearchForm
