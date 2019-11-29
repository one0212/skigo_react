import React from 'react'
import { Button, Row, Col, Form, FormGroup } from 'react-bootstrap'
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from 'react-icons/ti'
import {
  RangeDatePicker,
  disableDay,
} from '../../../node_modules/@y0c/react-datepicker'
import '../../../node_modules/@y0c/react-datepicker/assets/styles/calendar.scss'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../css/hotel/HotelRoomContent.css'
import Select from 'react-select'
import HotelRoomSlide from './HotelRoomSlide'
import HotelsRoomCarousel from './HotelRoomCarousel'

const hotelDateSearchStyles = {
  hotelDateSearch: base => ({
    ...base,
    border: '3px',
  }),
}

const customStyles = {
  control: base => ({
    ...base,
    height: 35,
    minHeight: 60,
    border: 'none',
    whiteSpace: 'nowrap',
  }),
}
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

class HotelRoomContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption_p: null,
      selectedOption_c: null,
      room: {},
    }
  }
  changeDate = (start, end) => {
    console.log(start)
    console.log(end)
    // let s = start
    // let e = end
    // console.log(s)
    // console.log(e)
  }

  handleClick = () => {
    const url = 'http://localhost:3001/api/cart/items'
    const id = document.querySelector('#hotel-id').textContent
    const obj = {
      // prodId, prodType, qty 這三個變數不可改
      prodId: parseInt(1), //這邊放資料庫的商品id
      prodType: 'hotels', //這邊放資料庫的商品類型 例如飯店傳hotel,
      qty: parseInt(1), //商品數量 不需用字串
    }
    console.log(id, obj)
    fetch(url, {
      body: JSON.stringify(obj),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    }).then(response => {
      // 如果response.status拿到200表示加入商品成功
      if (response.status === 200) {
        // 所以可以用此判斷, 後續要做的事情就是放這邊
        console.log('商品加入成功')
      }
    })
  }

  handleChange = (selectedOption_p, selectedOption_c) => {
    this.setState(
      { selectedOption_p },
      console.log(`Option selected:`, this.state.selectedOption_p),
      { selectedOption_c },
      () => console.log(`Option selected:`, this.state.selectedOption_c)
    )
  }
  componentWillMount() {
    const id = this.props.location.pathname.split('/')[3]
    console.log(id)
    // http://localhost:3001/japi/hotels?id=${id}?rooms?id=${id}
    fetch(`http://localhost:3001/japi/hotels?id=${id}`, {
      method: 'GET',
    })
      .then(response => {
        return response.json()
      })
      .then(json => {
        // console.log(json)
        //取陣列裡的欄位陣列
        this.setState({ room: json[0].rooms[0] })
        console.log(this.state.room)
      })
  }

  render() {
    const { selectedOption } = this.state
    const p = this.state.room.price
    const d = 4
    const t = this.state.room.tax
    const o = this.state.room.otherPrice

    const addM = p * d
    const total = addM + t + o
    return (
      <>
        <HotelsRoomCarousel />
        <div className="container">
          <section className="hotel_room_introduction_area">
            <Row className="justify-content-center">
              <Col md={5} className="mr-5">
                <p className="h3">{this.state.room.name}</p>
                <div>
                  <p className="lead">{this.state.room.text}</p>
                </div>
                <p className="h4 hotel_room_line_box">服務設施</p>
                <Row className="mb-5">
                  <Col>
                    <p className="font-weight-bold h5">所有客房均提供:</p>
                    <ul className="list-unstyled hotel_room_facility_items">
                      <li>
                        <span>Mini Bar</span>
                      </li>
                      <li>
                        <span>免費瓶裝水</span>
                      </li>
                      <li>
                        <span>淋浴設備</span>
                      </li>
                      <li>
                        <span>吹風機</span>
                      </li>
                      <li>
                        <span>禁菸房</span>
                      </li>
                      <li>
                        <span>Wi-Fi</span>
                      </li>
                      <li>
                        <span>沖咖啡/泡茶設備</span>
                      </li>
                      <li>
                        <span>電話休憩區</span>
                      </li>
                      <li>
                        <span>房內保險箱</span>
                      </li>
                      <li>
                        <span>冰箱</span>
                      </li>
                      <li>
                        <span>空調</span>
                      </li>
                      <li>
                        <span>衛星頻道/有線電視</span>
                      </li>
                      <li>
                        <span>遮光窗簾</span>
                      </li>
                      <li>
                        <span>地毯</span>
                      </li>
                      <li>
                        <span>書桌</span>
                      </li>
                      <li>
                        <span>鬧鐘</span>
                      </li>
                      <li>
                        <span>衣櫥</span>
                      </li>
                      <li>
                        <span>浴缸</span>
                      </li>
                      <li>
                        <span>盥洗用品</span>
                      </li>
                      <li>
                        <span>烘衣機</span>
                      </li>
                      <li>
                        <span>熱水壺</span>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col md={4}>
                <Form id="hotel-id" className="hotel_room_order_area">
                  <p className="h5">
                    ${' '}
                    <span className="font-weight-bol h1">
                      {this.state.room.price}
                    </span>{' '}
                    一晚
                  </p>
                  <ul class="list-unstyled d-flex hotel_room_form_star">
                    <li>
                      <TiStarFullOutline />
                    </li>
                    <li>
                      <TiStarFullOutline />
                    </li>
                    <li>
                      <TiStarFullOutline />
                    </li>
                    <li>
                      <TiStarHalfOutline />
                    </li>
                    <li>
                      <TiStarOutline />
                    </li>
                    <li>
                      <span>2000</span>
                    </li>
                  </ul>
                  <FormGroup>
                    <Form.Label class="text-muted">日期</Form.Label>
                    <div className="hotel_rome_date_box">
                      <RangeDatePicker
                        styles={hotelDateSearchStyles}
                        dateFormat="YYYY/MM/DD"
                        startPlaceholder="入住日期..."
                        endPlaceholder="退房日期..."
                        disableDay={disableDay}
                        onChange={this.changeDate}
                      />
                    </div>
                  </FormGroup>
                  <FormGroup className="mt-3">
                    <Form.Label className="text-muted">人數</Form.Label>
                    <div className="d-flex">
                      <div>
                        <Select
                          className="hotel_room_search_select"
                          styles={customStyles}
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={options_p}
                          placeholder="1位成人"
                        />
                      </div>
                      <div>
                        <Select
                          className="hotel_room_search_select ml-3"
                          styles={customStyles}
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={options_c}
                          placeholder="0位孩童"
                        />
                      </div>
                    </div>
                  </FormGroup>

                  <FormGroup className="mt-5">
                    <ul className="list-unstyled d-flex justify-content-between hotel_room_order_list">
                      <li className="d-flex">
                        <p className="font-weight-light">
                          $<span>{this.state.room.price}</span>
                        </p>
                        <p className="font-weight-light">
                          x <span>{d}</span>晚
                        </p>
                      </li>
                      <li>
                        <p className="font-weight-light">
                          $<span>{addM}</span>
                        </p>
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-between hotel_room_order_list">
                      <li>
                        <p className="font-weight-light">服務費</p>
                      </li>
                      <li>
                        <p className="font-weight-light">
                          $<span>{this.state.room.otherPrice}</span>
                        </p>
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-between hotel_room_order_list">
                      <li>
                        <p className="font-weight-light">住宿税和費用</p>
                      </li>
                      <li>
                        <p className="font-weight-light">
                          $<span>{this.state.room.tax}</span>
                        </p>
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-between hotel_room_order_list">
                      <li>
                        <p className="font-weight-bold">總計</p>
                      </li>
                      <li>
                        <p className="font-weight-bold">
                          $<span>{total}</span>
                        </p>
                      </li>
                    </ul>
                  </FormGroup>
                  <Button
                    variant="primary"
                    className="hotel_room_order_btn"
                    onClick={this.handleClick}
                  >
                    <span className="h4 font-weight-normal">預定</span>
                  </Button>
                </Form>
              </Col>
            </Row>
          </section>
          <section class="more_like_room_area">
            <p class="h3 like_room_text">更多您可能會喜歡的房源</p>
            <HotelRoomSlide />
          </section>
        </div>
      </>
    )
  }
}

export default HotelRoomContent
