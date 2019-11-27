import React, { Component } from 'react'
import { FiChevronRight } from 'react-icons/fi'

const text = {
  color: '#8DAEC1',
}
class OrderDetailState extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <div className="d-flex align-items-center ml-3">
          <span style={text} className="fw-500 mr-2">
            {this.props.detailData.status === 'PROCESSING' ? '處理中' : ''}
          </span>
          <FiChevronRight />
          <span className="fw-500 ml-2">{this.props.detailData.orderNo}</span>
          <span className="ml-auto mr-3">訂單日期</span>
        </div>
      </>
    )
  }
}

export default OrderDetailState
