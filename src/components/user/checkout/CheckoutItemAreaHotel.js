import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class CheckoutItemAreaHotel extends Component {
  render() {
    return (
      <>
        <div className="shop-box mb-3">
          <div className="shop-vendor-name">電子票券商品</div>
          <Row className="flex-row-reverse">
            <Col
              md={5}
              className="d-flex flex-column px-5 py-3 justify-content-center"
            >
              <h5>收件資訊</h5>
              <p>付款後請至email確認商品</p>
            </Col>
            {this.props.checkoutData.map((item, index) => {
              if (
                item.prodType === 'hotels' ||
                item.prodType === 'areas' ||
                item.proType === 'coaches'
              ) {
                return (
                  <>
                    <Col key={index} md={7} className="shop-item m-0 px-4 mb-5">
                      <div className="d-flex mt-2 justify-content-between">
                        <div className="d-flex">
                          <div className="shop-product-photo">
                            <a href="" className="">
                              <img
                                className=""
                                src="/images/coach/coach.jpg"
                                alt="商品照片"
                              />
                            </a>
                          </div>
                          <div className="d-flex">
                            <div className="d-flex flex-column justify-content-between ml-2">
                              <div className="d-flex flex-column">
                                <a
                                  href=""
                                  className="text-decoration-none text-dark"
                                >
                                  {item.prodName}
                                </a>
                                <span>品項內容</span>
                              </div>
                              <div>X {item.qty}</div>
                            </div>
                          </div>
                        </div>
                        <div className="align-self-end flex-grow text-right">
                          NT$ {item.price}
                        </div>
                      </div>
                      <div className="shop-subtotal text-right pt-3">
                        商品小計
                        <span className="ml-2 user-darkblue-text">
                          NT$ {item.totalAmt}
                        </span>
                      </div>
                    </Col>
                    <Col md={5}></Col>
                  </>
                )
              } else return ''
            })}
          </Row>
        </div>
      </>
    )
  }
}

export default CheckoutItemAreaHotel
