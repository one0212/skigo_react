import React from 'react'
import '../../css/ticket_page.css'
import { Form } from 'react-bootstrap'
import FilterBread2 from '../goods/FilterBread2'

class TicketPage extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      total: [],
      people: 0,
    }
  }

  handleClick = () => {
    const url = 'http://localhost:3001/api/cart/items'
    const id = document.querySelector('#ticket-id').textContent
    const select = document.querySelector('#ticket-select')
    const selectedValue = select.options[select.selectedIndex].value
    const obj = {
      // prodId, prodType, qty 這三個變數不可改
      prodId: parseInt(id), //這邊放資料庫的商品id
      prodType: 'areas', //這邊放資料庫的商品類型 例如飯店傳hotel,
      qty: parseInt(selectedValue), //商品數量 不需用字串
    }
    console.log(id, selectedValue, obj)
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
  async componentWillMount() {
    try {
      await this.setState({ loading: true })

      // const response = await fetch('http://localhost:5000/try-db', {
      const response = await fetch(
        `http://localhost:3001/ticket-page/${this.props.match.params.ticketid}`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (response) {
        console.log('get data!')
      }

      if (!response.ok) throw new Error(response.statusText)

      const jsonObject = await response.json()

      await this.setState({ total: jsonObject }, function() {})
    } catch (e) {
      console.log(e)
    } finally {
      await setTimeout(() => this.setState({ loading: false }))
      // await this.setState({ loading: false })
      // console.log('看我')
      // console.log(this.state.total[0].class_maxnum)
    }
  }

  componentDidMount() {
    // 價錢千分位處理
    const thousandComma = number => {
      let num = number.toString()
      const pattern = /(-?\d+)(\d{3})/

      while (pattern.test(num)) {
        num = num.replace(pattern, '$1,$2')
      }
      return num
    }
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <div>
            {/* <i className="fas fa-spinner fa-spin" /> */}
            資料載入中
          </div>
        ) : (
          <div class="ticket_book_out container">
            {/* 麵包屑 */}
            <FilterBread2 />
            <div id="ticket-id" style={{ display: 'none' }}>
              {this.state.total[0].ticket_sid}
              {console.log('id:' + this.state.total[0].ticket_sid)}
            </div>
            {/* 圖+內容 */}
            <div class="ticket_head row mb-5">
              {/* 圖 */}
              <div class="class_img col-xl-7 col-lg-6 col-md-12">
                <img
                  className="class_pic"
                  src={'/images/areas/' + this.state.total[0].ticket_pic}
                  alt=""
                />
              </div>
              {/* 內容 */}
              <div class="ski_class col-xl-5 col-lg-6 col-md-12 mt-2">
                <div class="row">
                  <div class="col-12">
                    <div className="d-flex">
                      <div className="d-flex">
                        <h1>{this.state.total[0].ticket_name} |</h1>
                        <h1 style={{ marginLeft: '0.6rem' }}>
                          {this.state.total[0].ticket_type}
                        </h1>
                      </div>
                      <div className="d-flex justify-content-between ml-3">
                        <p className="language font-orange">
                          <span>{this.state.total[0].ticket_age}</span>
                        </p>
                      </div>
                    </div>
                    <div className="ticket-snowfield d-flex align-items-center">
                      <span>NT</span>
                      <span className="ticket-price">
                        {this.state.total[0].ticket_price}
                      </span>
                    </div>
                    <div className="ticket-book row">
                      <div className="col-3 d-flex flex-column justify-content-around">
                        <h5>數量</h5>
                        <h5>使用期限</h5>
                        <h5>販售期間</h5>
                      </div>

                      <div className="ticket-page-style col-9">
                        {/* <input id="people" value={this.state.people} onChange={this.changepeople}
                                    name="people" className="ticket_book_num" type="number" /> */}
                        <Form.Group controlId="exampleForm.ControlSelect1">
                          <Form.Control as="select" id="ticket-select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                          </Form.Control>
                        </Form.Group>
                        <p className="ticket_time_line">
                          使用期限至{this.state.total[0].area_end_date}為止
                        </p>
                        <p className="ticket_date_line">
                          {this.state.total[0].ticket_start_date}~
                          {this.state.total[0].ticket_end_date}
                        </p>
                      </div>
                    </div>
                    <div className="ticket-date"></div>
                    <div>
                      {/* 此按鈕為加入購物車 */}
                      <button className="btn" onClick={this.handleClick}>
                        <i className="fas fa-shopping-cart"></i> 放入購物車
                      </button>
                      <button className="btn">
                        <i className="far fa-heart"></i> 收藏商品
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default TicketPage
