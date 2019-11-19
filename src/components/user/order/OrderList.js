import React, { Component } from 'react'

class OrderList extends Component {
  render() {
    return (
      <>
        <div className="user-order-line">
          <div className="user-order-date">
            <ul className="list-unstyled p-3">
              <li className="px-2">訂購的日期</li>
            </ul>
          </div>
          <div className="user-order-list py-2 px-2">
            <div className="order-list-status my-3 d-flex align-items-center">
              <span className="col-2 text-right mr-4">狀態</span>
              <span>這邊放訂單狀態</span>
            </div>
            <div className="order-list-number my-3 d-flex align-items-center">
              <span className="col-2 text-right mr-4">訂單編號</span>
              <span>這邊放訂單編號</span>
            </div>
            <div className="order-list-status my-3 d-flex align-items-center">
              <span className="col-2 text-right mr-4">總計</span>
              <span>這邊放訂單金額</span>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default OrderList
