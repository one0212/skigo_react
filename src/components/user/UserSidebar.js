import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import '../../css/user/user_center_account.css'

class UserSidebar extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <>
        <Col md={2} className="d-flex flex-column align-items-center ml-3">
          <div className="user-photo"></div>
          <ul className="user-list list-unstyled m-3 d-flex flex-column align-items-start">
            <li className="m-2">
              <Link
                to="/user/profile"
                className="text-dark text-decoration-none"
              >
                我的帳號
              </Link>
            </li>
            <li className="m-2">
              <a href="" className="text-dark text-decoration-none">
                信用卡管理
              </a>
            </li>
            <li className="m-2">
              <Link
                to="/user/address"
                className="text-dark text-decoration-none"
              >
                我的地址簿
              </Link>
            </li>
            <li className="m-2">
              <Link to="/user/order" className="text-dark text-decoration-none">
                我的訂單
              </Link>
            </li>
            <li className="m-2">
              <a href="" className="text-dark text-decoration-none">
                通知設定
              </a>
            </li>
            <li className="m-2">
              <a href="" className="text-dark text-decoration-none">
                紅利點數
              </a>
            </li>
          </ul>
        </Col>
      </>
    )
  }
}

export default UserSidebar
