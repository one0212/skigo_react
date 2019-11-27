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
      orderDetail: '',
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
    let product = '',
      areaHotel = ''
    return (
      <>
        <Container>
          <Row className="my-5 mx-2">
            <UserSidebar />
            <Col md={1}></Col>
            <Col md={8}>
              {this.state.orderDetail !== '' ? (
                <>
                  <OrderDetailState detailData={this.state.orderDetail} />
                  {this.state.orderDetail.products.map((product, index) => {
                    if (product.prodType === 'product') {
                      product = (
                        <>
                          <OrderDetailProductContent
                            key={index}
                            detailData={this.state.orderDetail.products}
                            orderData={this.state.orderDetail}
                          />
                          <OrderDetailRecipient
                            detailData={this.state.orderDetail}
                          />
                        </>
                      )
                    } else {
                      areaHotel = (
                        <OrderDetailAreaHotelContent
                          key={index}
                          detailData={this.state.orderDetail.products}
                          orderData={this.state.orderDetail}
                        />
                      )
                    }
                    return true
                  })}
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
