import React, { Component } from 'react'

class OrderDetailPayment extends Component {
  render() {
    return (
      <>
        <div className="shop-item shop-box my-4 position-relative">
          <div className="shop-vendor-title ml-2">
            <span className="fw-700">付款資訊</span>
          </div>
          <div className="p-3">
            <div className="order-list-status my-3 d-flex align-items-center">
              <span className="col-3 text-right mr-4 fw-500">付款方式</span>
              <span>信用卡安全加密付款</span>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default OrderDetailPayment
