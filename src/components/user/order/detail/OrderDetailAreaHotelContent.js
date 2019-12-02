import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

const text = {
  borderBottom: '1px solid #dfdede',
  margin: '0.5rem 0',
  paddingBottom: '1rem',
}
const photoStyle = {
  width: '6rem',
  height: '6rem',
}
const productInfo = {
  color: '#a8a8ab',
}
class OrderDetailProductContent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    console.log(this.props)
  }
  render() {
    return (
      <>
        <div className="shop-item shop-box my-4">
          <div className="shop-vendor-title ml-2">
            <span className="fw-700">電子票券商品</span>
          </div>
          {this.props.detailData.products.map((product, index) => {
            if (product.prodType === 'products') {
              return ''
            } else {
              return (
                <>
                  <div className="ml-2" style={text}>
                    <div className="d-flex justify-content-between p-2">
                      <div style={photoStyle}>
                        <a href="" className="">
                          <img
                            className=""
                            src={product.coverImg}
                            alt="商品照片"
                            style={{ width: '100%', height: '100%' }}
                          />
                        </a>
                      </div>
                      <div className="d-flex flex-column">
                        <span>{product.vendor}</span>
                        <a href="" className="text-decoration-none text-dark">
                          {product.name}
                        </a>
                        <div>
                          {product.info.map((info, index) => {
                            return (
                              <p
                                className="m-0"
                                key={index}
                                style={productInfo}
                              >
                                {info}
                              </p>
                            )
                          })}
                        </div>
                      </div>
                      <div>X {product.qty}</div>
                      <div>NT$ {product.price}</div>
                    </div>
                  </div>
                </>
              )
            }
          })}

          <div>
            <Col md={6} className="d-flex pl-4 ml-auto justify-content-between">
              <span className="">小計</span>
              <span className="">$ {this.props.detailData.orderAmt}</span>
            </Col>
            <Col
              style={text}
              md={6}
              className="pl-4 d-flex ml-auto justify-content-between"
            >
              <span className="">運費</span>
              <span>0</span>
            </Col>
            <Col md={6} className="pl-4 d-flex ml-auto justify-content-between">
              <span className="fw-700">總計</span>
              <span className="fw-700">$ {this.props.detailData.orderAmt}</span>
            </Col>
          </div>
        </div>
      </>
    )
  }
}

export default OrderDetailProductContent
