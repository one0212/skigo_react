import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CartHeader from './CartHeader'
import CartItemProductArea from './CartItemProductArea'
import CartItemHotel from './CartItemHotel'
import CartToCheckout from './CartToCheckout'

import 'bootstrap/dist/css/bootstrap.css'
import '../../../css/cart/shopping_cart.css'
import '../../../css/header.css'

class UserCart extends Component {
  constructor() {
    super()
    this.state = {
      cartResponse: '',
    }
  }
  componentWillMount() {
    // const url = 'http://localhost:3001/api/cart'
    // fetch(url, {
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    // })
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(json => {
    //     console.log(json)
    //     this.setState({ cartResponse: json })
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    const mockResp = {
      items: [
        {
          price: 2500,
          prodId: 123456,
          prodName: '雪板',
          prodType: 'products',
          qty: 4,
          totalAmt: 10000,
        },
        {
          price: 4000,
          prodId: 789123,
          prodName: '三人房',
          prodType: 'hotels',
          qty: 4,
          totalAmt: 10000,
        },
        {
          price: 2500,
          prodId: 777777,
          prodName: '雪板',
          prodType: 'products',
          qty: 3,
          totalAmt: 7500,
        },
      ],
      totalAmt: 10000,
    }
    this.setState({ cartResponse: mockResp })
  }
  render() {
    return (
      <>
        <Container>
          <CartHeader />
          <Row className="align-items-start mt-4">
            <Col md={1}></Col>
            <Col md={7}>
              {this.state.cartResponse !== ''
                ? this.state.cartResponse.items.map((item, index) => {
                    if (
                      item.prodType === 'products' ||
                      item.prodType === 'areas'
                    ) {
                      return <CartItemProductArea key={index} cartData={item} />
                    } else {
                      return <CartItemHotel key={index} cartData={item} />
                    }
                  })
                : ''}
            </Col>
            <Col md={3} className="shop-order p-0 mt-4">
              {this.state.cartResponse !== '' ? (
                <CartToCheckout totalAmt={this.state.cartResponse.totalAmt} />
              ) : (
                ''
              )}
            </Col>
            <Col md={1}></Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default UserCart
