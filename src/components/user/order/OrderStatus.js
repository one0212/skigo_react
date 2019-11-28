import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import OrderList from './OrderList'

import '../../../css/user/user_tab.css'
class OrderStatus extends Component {
  constructor() {
    super()
    this.state = {
      orderData: '',
    }
  }
  componentWillMount() {
    const url = 'http://localhost:3001/api/order'
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({ orderData: json })
        console.log(this.state.orderData)
      })
      .catch(err => {
        console.log(err)
      })
    // const json = [
    //   {
    //     address: '',
    //     mobile: '',
    //     orderAmt: 4200,
    //     orderNo: 'LE71XM5U',
    //     orderTime: 1574763424328,
    //     products: [
    //       {
    //         info: '2小時的單板滑雪體驗課程',
    //         name: '專業講師開班',
    //         price: '1200',
    //         prodId: 1,
    //         prodType: 'coaches',
    //         qty: 1,
    //         totalAmt: 1200,
    //         vendor: '北海道富良野雪場',
    //       },
    //       {
    //         info: '一般券',
    //         name: '滑雪服租借券',
    //         price: '1500',
    //         prodId: 2,
    //         prodType: 'areas',
    //         qty: 2,
    //         totalAmt: 3000,
    //         vendor: '富良野滑雪場',
    //       },
    //     ],
    //     receiver: '',
    //     status: 'PROCESSING',
    //     userId: 'yOnKPidc',
    //   },
    //   {
    //     address: '',
    //     mobile: '',
    //     orderAmt: 4000,
    //     orderNo: 'HJKLEKLJY',
    //     orderTime: 1574763424328,
    //     products: [
    //       {
    //         info: '2小時的單板滑雪體驗課程',
    //         name: '專業講師開班',
    //         price: '1000',
    //         prodId: 1,
    //         prodType: 'coaches',
    //         qty: 1,
    //         totalAmt: 1000,
    //         vendor: '北海道富良野雪場',
    //       },
    //       {
    //         info: '一般券',
    //         name: '滑雪服租借券',
    //         price: '1500',
    //         prodId: 2,
    //         prodType: 'areas',
    //         qty: 2,
    //         totalAmt: 3000,
    //         vendor: '富良野滑雪場',
    //       },
    //     ],
    //     receiver: '',
    //     status: 'PROCESSING',
    //     userId: 'yOnKPidc',
    //   },
    // ]
    // this.setState({ orderData: json })
  }

  render() {
    return (
      <Col md={8} className="mx-0 mt-5 pb-1 pl-0">
        <div className="mytab-container">
          <input
            type="radio"
            name="radio"
            className="radioInput"
            id="tab1"
            hidden
            // checked
          />
          <input
            type="radio"
            name="radio"
            className="radioInput"
            id="tab2"
            hidden
          />
          <input
            type="radio"
            name="radio"
            className="radioInput"
            id="tab3"
            hidden
          />
          <input
            type="radio"
            name="radio"
            className="radioInput"
            id="tab4"
            hidden
          />

          <div className="tabHeader-container">
            <label htmlFor="tab1" className="tabHeader">
              處理中
            </label>
            <label htmlFor="tab2" className="tabHeader">
              待收貨
            </label>
            <label htmlFor="tab3" className="tabHeader">
              已完成
            </label>
            <label htmlFor="tab4" className="tabHeader">
              已取消
            </label>
          </div>

          <span className="activeTab-indicator"></span>

          <div className="tabContent-container">
            <div className="tabContent tab1-content">
              {this.state.orderData !== ''
                ? this.state.orderData.map((item, index) => {
                    return <OrderList key={index} orderData={item} />
                  })
                : ''}
            </div>

            <div className="tabContent tab2-content text-center">
              <h3 className="py-5">目前無待收貨訂單</h3>
            </div>

            <div className="tabContent tab3-content text-center">
              <h3 className="py-5">目前無已完成訂單</h3>
            </div>
            <div className="tabContent tab4-content text-center">
              <h3 className="py-5">目前無已取消訂單</h3>
            </div>
          </div>
        </div>
        {/* </div> */}
      </Col>
    )
  }
}

export default OrderStatus
