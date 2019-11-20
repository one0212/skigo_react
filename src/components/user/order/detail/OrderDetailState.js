import React, { Component } from 'react'
import { FiChevronRight } from 'react-icons/fi'

const text = {
  color: '#8DAEC1',
}
class OrderDetailState extends Component {
  render() {
    return (
      <>
        <div className="d-flex align-items-center ml-3">
          <span style={text} className="fw-500 mr-2">
            訂單狀態
          </span>
          <FiChevronRight />
          <span className="fw-500 ml-2">訂單編號</span>
          <span className="ml-auto mr-3">訂單日期</span>
        </div>
      </>
    )
  }
}

export default OrderDetailState
