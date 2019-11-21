import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import OrderList from './OrderList'

import '../../../css/user/user_tab.css'
class OrderStatus extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Col md={8} className="mx-0 mt-5 pb-1">
        {/* <div className="d-flex justify-content-center align-items-center"> */}
        {/* <ul className="list-unstyled d-flex justify-content-between">
            <li className="text-center">
              <a href="" className="user-lightblue-text text-decoration-none">
                處理中<small className="ml-2"></small>
              </a>
            </li>
            <li className="text-center">
              <a href="" className="user-lightblue-text text-decoration-none">
                待收貨<small className="ml-2"></small>
              </a>
            </li>
            <li className="text-center">
              <a href="" className="user-lightblue-text text-decoration-none">
                已完成<small className="ml-2">1</small>
              </a>
            </li>
            <li className="text-center">
              <a href="" className="user-lightblue-text text-decoration-none">
                已取消<small className="ml-2"></small>
              </a>
            </li>
          </ul> */}

        <div className="mytab-container">
          <input
            type="radio"
            name="radio"
            className="radioInput"
            id="tab1"
            hidden
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
              <OrderList />
            </div>

            <div className="tabContent tab2-content">
              <h1>Tab 2</h1>
              <p>2</p>
            </div>

            <div className="tabContent tab3-content">
              <h1>Tab 3</h1>
              <p>3</p>
            </div>
            <div className="tabContent tab4-content">
              <h1>Tab 4</h1>
              <p>4</p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </Col>
    )
  }
}

export default OrderStatus
