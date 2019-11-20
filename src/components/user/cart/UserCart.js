import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CartHeader from './CartHeader'
import CartItemProductArea from './CartItemProductArea'
import CartItemHotel from './CartItemHotel'
import CartToCheckout from './CartToCheckout'

import 'bootstrap/dist/css/bootstrap.css'
import '../../../css/cart/shopping_cart.css'
import '../../../css/header.css'

const UserCart = props => {
  return (
    <>
      <Container>
        <CartHeader />
        <Row className="align-items-start mt-4">
          <Col md={1}></Col>
          <Col md={7}>
            <CartItemProductArea />
            <CartItemHotel />
          </Col>
          <Col md={3} className="shop-order p-0 mt-4">
            <CartToCheckout />
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  )
}

export default UserCart
