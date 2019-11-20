import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserSidebar from '../../UserSidebar'
import OrderDetailState from './OrderDetailState'
import OrderDetailProductContent from './OrderDetailProductContent'
import OrderDetailAreaHotelContent from './OrderDetailAreaHotelContent'

import OrderDetailRecipient from './OrderDetailRecipient'
import OrderDetailPayment from './OrderDetailPayment'

class UserOrderDetail extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="my-5 mx-2">
            <UserSidebar />
            <Col md={1}></Col>
            <Col md={6}>
              <OrderDetailState />
              <OrderDetailProductContent />
              <OrderDetailAreaHotelContent />
              <OrderDetailRecipient />
              <OrderDetailPayment />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default UserOrderDetail
