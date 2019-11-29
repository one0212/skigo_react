import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserSidebar from '../../UserSidebar'
import OrderDetailState from './OrderDetailState'
import OrderDetailProductContent from './OrderDetailProductContent'
import OrderDetailAreaHotelContent from './OrderDetailAreaHotelContent'

import OrderDetailRecipient from './OrderDetailRecipient'
import OrderDetailPayment from './OrderDetailPayment'

class UserOrderDetail extends Component {
  constructor() {
    super()
    this.state = {
      orderDetail: undefined,
    }
  }
  componentWillMount() {
    const url = `http://localhost:3001/japi/orders/?orderNo=${this.props.match.params.orderNo}`
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({ orderDetail: json[0] })
        console.log(this.state.orderDetail)
        console.log(this.props.match.params)
      })
  }
  render() {
    let product, areaHotel
    if (this.state.orderDetail) {
      this.state.orderDetail.products.map((v, index) => {
        if (v.prodType === 'products') {
          product = (
            <>
              <OrderDetailProductContent
                key={index}
                detailData={this.state.orderDetail}
              />
              <OrderDetailRecipient detailData={this.state.orderDetail} />
            </>
          )
        } else {
          areaHotel = (
            <OrderDetailAreaHotelContent
              key={index}
              detailData={this.state.orderDetail}
            />
          )
        }
        return true
      })
    }
    return (
      <>
        <Container>
          <Row className="my-5 mx-2">
            <UserSidebar />
            <Col md={1}></Col>
            <Col md={8}>
              {this.state.orderDetail ? (
                <>
                  <OrderDetailState detailData={this.state.orderDetail} />
                  {areaHotel}
                  {product}
                  <OrderDetailPayment detailData={this.state.orderDetail} />
                </>
              ) : (
                ''
              )}
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default UserOrderDetail
