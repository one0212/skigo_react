import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

class OrderStatus extends Component {
  render() {
    return (
      <div className="user-order-title my-1 pb-1">
        <Col md={7}>
          <ul className="list-unstyled d-flex justify-content-between">
            <li className="text-center">
              <a href="" className="user-lightblue-text text-decoration-none">
                尚未付款<small className="ml-2"></small>
              </a>
            </li>
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
          </ul>
        </Col>
      </div>
    )
  }
}

export default OrderStatus
