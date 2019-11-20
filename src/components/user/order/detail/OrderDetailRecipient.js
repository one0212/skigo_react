import React, { Component } from 'react'

class OrderDetailRecipient extends Component {
  render() {
    return (
      <>
        <div className="shop-item shop-box my-4 position-relative">
          <div className="shop-vendor-title ml-2">
            <span className="fw-700">收件人資訊</span>
          </div>
          <div className="p-3">
            <div className="order-list-status my-3 d-flex align-items-center">
              <span className="col-3 text-right mr-4 fw-500">收件人</span>
              <span>收件人name</span>
            </div>
            <div className="order-list-number my-3 d-flex align-items-center">
              <span className="col-3 text-right mr-4 fw-500">收件人地址</span>
              <span>address</span>
            </div>
            <div className="order-list-status my-3 d-flex align-items-center">
              <span className="col-3 text-right mr-4 fw-500">收件人電話</span>
              <span>mobile</span>
            </div>
            <div className="order-list-status my-3 d-flex align-items-center">
              <span className="col-3 text-right mr-4 fw-500">寄送方式</span>
              <span>宅配</span>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default OrderDetailRecipient
