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
      <div className="container">
        <section className="hotel_room_introduction_area">
          <Row className="justify-content-center">
            <Col md={5} className="mr-5">
              <p className="h3">【鉑爾曼倫】敦聖房型</p>
              <div>
                <p className="lead">
                  因為韓國人都很愛攜家帶眷去度假，因此房間大多可容納4個人以上，非常適合闔家出遊～除了西式的床外，房間內還有另外一個小房間可以鋪床睡，想要體驗韓國的『溫突』式火坑一定要來這裡！它是利用天然氣燃燒所產生的熱氣，通過房屋下面的管道來烘暖整個屋內，所以地板一點也不冷冰冰，還很溫暖呢！浴室是採乾溼分離的設計，還有小廚房跟餐桌，非常溫馨～渡假村裡附有旋轉木馬、保齡球館和超市等，像一個小型遊樂園，休閒娛樂都顧到！
                </p>
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
              <Form action="" method="get" className="hotel_room_order_area">
                <p className="h5">
                  $ <span className="font-weight-bol h1">1,766</span> 一晚
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
                    <li>
                      <p className="font-weight-light">
                        $<span>1,766 x 3</span>晚
                      </p>
                    </li>
                    <li>
                      <p className="font-weight-light">
                        $<span>5,297</span>
                      </p>
                    </li>
                  </ul>
                  <ul className="list-unstyled d-flex justify-content-between hotel_room_order_list">
                    <li>
                      <p className="font-weight-light">服務費</p>
                    </li>
                    <li>
                      <p className="font-weight-light">
                        $<span>717</span>
                      </p>
                    </li>
                  </ul>
                  <ul className="list-unstyled d-flex justify-content-between hotel_room_order_list">
                    <li>
                      <p className="font-weight-light">住宿税和費用</p>
                    </li>
                    <li>
                      <p className="font-weight-light">
                        $<span>265</span>
                      </p>
                    </li>
                  </ul>
                  <ul className="list-unstyled d-flex justify-content-between hotel_room_order_list">
                    <li>
                      <p className="font-weight-bold">總計</p>
                    </li>
                    <li>
                      <p className="font-weight-bold">
                        $<span>6,279</span>
                      </p>
                    </li>
                  </ul>
                </FormGroup>
                <Button variant="primary" className="hotel_room_order_btn">
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
    )
  }
}

export default HotelRoomContent
