import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Header from '../../navbar/Header'
import UserSidebar from '../UserSidebar'
import OrderTitle from './OrderTitle'
import OrderStatus from './OrderStatus'
import OrderList from './OrderList'
import OrderEmpty from './OrderEmpty'

import '../../../css/user/user_center_order.css'

class UserOrder extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <>
        <Container>
          <Row className="my-5 mx-2">
            <UserSidebar />
            <Col md={1}></Col>
            <Col md={8} className="pb-5">
              <OrderTitle />
              <OrderStatus />
              <OrderList />
              {/* 判斷是否有訂單 */}
              {/* <OrderEmpty /> */}
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default UserOrder
