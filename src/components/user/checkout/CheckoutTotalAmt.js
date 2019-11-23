import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import CheckoutCreditCard from './CheckoutCreditCard'

class CheckoutTotalAmt extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  // handleClick = () => {
  //   const url = 'http://localhost:3001/japi/orders'
  //   const obj = {
  //     orderNo: this.genOrderNo(),
  //     // totalAmt: this.props.checkoutData.totalAmt + 300,
  //     // orderItem: this.props.checkoutData.items,
  //   }
  //   console.log(obj)
  //   fetch(url, {
  //     body: JSON.stringify(obj),
  //   })
  // }

  // dateToString = date => {
  //   return `${date.getYear()}`
  // }

  // genOrderNo = () => {
  //   return (
  //     'ORD' +
  //     Math.random()
  //       .toString(36)
  //       .substr(2, 9)
  //   )
  // }

  render() {
    return (
      <>
        {console.log(this.props.checkoutData.items)}

        <div className="shop-box my-3">
          <div className="shop-vendor-name">付款資訊</div>
          <Row className="align-items-center">
            <Col
              md={7}
              className="d-flex align-items-center justify-content-center py-3"
            >
              <CheckoutCreditCard />
            </Col>
            <Col md={5} className="text-right pr-4">
              <div className="d-flex justify-content-between px-2">
                <p>商品總計</p>
                <p style={{ fontWeight: '500' }}>
                  NT$ {this.props.checkoutData.totalAmt}
                </p>
              </div>
              <div className="d-flex justify-content-between px-2">
                <p>運費總計</p>
                <p style={{ fontWeight: '500' }}>NT$ 300</p>
              </div>
              <div className="d-flex justify-content-between px-2">
                <p>結帳總金額</p>
                <p style={{ fontWeight: '500' }}>
                  NT$ {this.props.checkoutData.totalAmt + 300}
                </p>
              </div>
              <Button
                variant="orange"
                className="mt-3"
                onClick={this.handleClick}
              >
                確認送出信用卡資訊
              </Button>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

export default CheckoutTotalAmt
