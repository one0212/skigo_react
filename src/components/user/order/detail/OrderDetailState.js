import React, { Component } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const text = {
  color: '#8DAEC1',
}
class OrderDetailState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: '',
    }
  }
  componentWillMount() {
    const timestamp = this.props.detailData.orderTime
    console.log(timestamp)
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
    var a = new Date(timestamp)
    var year = a.getFullYear()
    var month = months[a.getMonth()]
    var date = a.getDate()
    var time = `${date} ${month} ${year}`
    this.setState({ time: time })
  }

  render() {
    return (
      <>
        {console.log(this.props.detailData)}
        <div className="d-flex align-items-center ml-3">
          <Link to="/user/order">
            <span className="fw-500 mr-2">我的訂單</span>
          </Link>
          <FiChevronRight />
          <span style={text} className="fw-500 mx-2">
            {this.props.detailData.status === 'PROCESSING' ? '處理中' : ''}
          </span>
          <FiChevronRight />
          <span className="fw-500 ml-2">
            訂單編號：{this.props.detailData.orderNo}
          </span>

          <span className="ml-auto mr-3">訂單日期：{this.state.time}</span>
        </div>
      </>
    )
  }
}

export default OrderDetailState
