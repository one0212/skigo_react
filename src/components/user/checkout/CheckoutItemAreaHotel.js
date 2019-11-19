import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class CheckoutItemAreaHotel extends Component {
  render() {
    return (
      <>
        <div className="shop-box mb-3">
          <div className="shop-vendor-name">雪場廠商名稱</div>
          <Row className="">
            <Col md={7} className="shop-item m-0 px-4">
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
                        <a href="" className="text-decoration-none text-dark">
                          這裡放商品名稱
                        </a>
                        <span>品項內容</span>
                      </div>
                      <div>X 1</div>
                    </div>
                  </div>
                </div>
                <div className="align-self-end flex-grow text-right">
                  NT $價格
                </div>
              </div>
              <div className="shop-subtotal text-right pt-3">
                商品小計
                <span className="ml-2 user-darkblue-text">NT$ 多少錢</span>
              </div>
            </Col>
            <Col
              md={5}
              className="d-flex flex-column px-5 py-3 justify-content-center"
            >
              <h5>收件資訊</h5>
              <p>付款後請至email確認商品</p>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

export default CheckoutItemAreaHotel
