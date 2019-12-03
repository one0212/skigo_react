import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'

import CheckoutHeader from './CheckoutHeader'
import CheckoutItemAreaHotel from './CheckoutItemAreaHotel'
import CheckoutItemProduct from './CheckoutItemProduct'
import CheckoutTotalAmt from './CheckoutTotalAmt'

import 'bootstrap/dist/css/bootstrap.css'
import '../../../css/header.css'
import '../../../css/user/user_center_account.css'
import '../../../css/cart/shopping_checkout.css'

class UserCheckout extends Component {
  constructor() {
    super()
    this.state = {
      checkoutResponse: '',
      text: {
        receiveName: '',
        receivePhone: '',
        receiveAddress: '',
        buyName: '',
        buyPhone: '',
        buyAddress: '',
      },
    }
  }

  changeAddressData = receiveData => {
    this.setState({ text: { ...receiveData } }, function() {
      console.log(this.state)
    })
  }
  componentWillMount() {
    const url = 'http://localhost:3001/api/cart'
    fetch(url, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(response => {
        return response.json()
      })
      .then(json => {
        console.log(json)
        this.setState({ checkoutResponse: json })
      })
      .catch(err => {
        console.log(err)
      })
    //   const mockResp = {
    //     items: [
    //       {
    //         price: 2500,
    //         prodId: 123456,
    //         prodName: '雪板',
    //         prodType: 'products',
    //         qty: 4,
    //         totalAmt: 10000,
    //       },
    //       {
    //         price: 4000,
    //         prodId: 789123,
    //         prodName: '三人房',
    //         prodType: 'hotels',
    //         qty: 4,
    //         totalAmt: 10000,
    //       },
    //       {
    //         price: 5000,
    //         prodId: 777777,
    //         prodName: '雪具123',
    //         prodType: 'products',
    //         qty: 3,
    //         totalAmt: 15000,
    //       },
    //     ],
    //     totalAmt: 10000,
    //   }
    //   this.setState({ checkoutResponse: mockResp })
  }
  render() {
    let checkoutProduct = '',
      checkoutAreaHotel = ''
    if (this.state.checkoutResponse !== '') {
      let { items } = this.state.checkoutResponse
      items.map((item, index) => {
        if (
          item.prodType === 'areas' ||
          item.prodType === 'coaches' ||
          item.prodType === 'hotels'
        ) {
          return (checkoutAreaHotel = (
            <CheckoutItemAreaHotel key={index} checkoutData={items} />
          ))
        } else {
          return (checkoutProduct = (
            <CheckoutItemProduct
              text={this.state.text}
              key={index}
              checkoutData={items}
              changeAddressData={this.changeAddressData}
            />
          ))
        }
      })
    }
    return (
      <>
        <Container>
          <CheckoutHeader />
          <Row className="justify-content-center">
            <Col md={10}>
              <span className="mx-4 my-2 d-inline-block">
                <Link
                  to="/cart"
                  className="shop-lightblue-text text-decoration-none"
                >
                  <FiChevronLeft style={{ fontSize: '20px' }} /> 返回購物車
                </Link>
              </span>
              {/* {this.state.checkoutResponse !== ''
                ? this.state.checkoutResponse.items.map((item, index) => {
                    if (item.prodType === 'products') {
                      return (
                        <CheckoutItemProduct key={index} checkoutData={item} />
                      )
                    } else {
                      return <CheckoutItemAreaHotel />
                    }
                  })
                : ''} */}
              {checkoutProduct}
              {checkoutAreaHotel}
              <CheckoutTotalAmt
                checkoutData={this.state.checkoutResponse}
                addressData={this.state.text}
              />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default UserCheckout
