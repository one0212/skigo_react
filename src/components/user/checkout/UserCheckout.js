import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import CheckoutHeader from './CheckoutHeader'
import CheckoutToCart from './CheckoutToCart'
import CheckoutItemAreaHotel from './CheckoutItemAreaHotel'
import CheckoutItemProduct from './CheckoutItemProduct'

import 'bootstrap/dist/css/bootstrap.css'
import '../../../css/header.css'
import '../../../css/user/user_center_account.css'
import '../../../css/cart/shopping_checkout.css'

class UserCheckout extends Component {
  render() {
    return (
      <>
        <Container>
          <CheckoutHeader />
          <Row className="justify-content-center">
            <Col md={9}>
              <CheckoutToCart />
              <CheckoutItemProduct />
              <CheckoutItemAreaHotel />
              <Col
                md={12}
                className="d-flex mr-2 flex-column justify-content-end align-items-end"
              >
                <span className="my-2">
                  總計：<span>多少錢</span>
                </span>
                <Button variant="orange">填寫信用卡資料</Button>
              </Col>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default UserCheckout
