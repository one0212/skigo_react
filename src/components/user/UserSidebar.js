import React, { Component } from 'react'
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
        <Col md={2} className="d-flex flex-column align-items-center">
          <div className="user-photo"></div>
          <ul className="user-list list-unstyled m-3 d-flex flex-column align-items-start">
            <li className="m-2">
              <a href="" className="text-dark text-decoration-none">
                我的帳號
              </a>
            </li>
            <li className="m-2">
              <a href="" className="text-dark text-decoration-none">
                信用卡管理
              </a>
            </li>
            <li className="m-2">
              <a href="" className="text-dark text-decoration-none">
                寄送地址
              </a>
            </li>
            <li className="m-2">
              <a
                href="user_center_order.html"
                className="text-dark text-decoration-none"
              >
                我的訂單
              </a>
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
