import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

const text = {
  borderBottom: '1px solid #dfdede',
  margin: '0.5rem 0',
  paddingBottom: '0.5rem',
}
const photoStyle = {
  width: '6rem',
  height: '6rem',
}
const productInfo = {
  color: '#a8a8ab',
}
class OrderDetailProductContent extends Component {
  render() {
    const products = this.props.detailData
    const totalAmt =
      products.length === 1
        ? products[0].totalAmt
        : products.map(v => v.totalAmt).reduce((a, b) => a + b)
    return (
      <>
        {/* {console.log(this.props)} */}
        <div className="shop-item shop-box my-4">
          <div className="shop-vendor-title ml-2">
            <span className="fw-700">實體商品</span>
          </div>
          {products.map((product, index) => {
            return (
              <>
                <div className="ml-2" style={text} key={index}>
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
                            <p className="m-0" key={index} style={productInfo}>
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
          })}

          <div>
            <Col md={6} className="pl-4 d-flex ml-auto justify-content-between">
              <span className="">小計</span>
              <span className="">$ {totalAmt}</span>
            </Col>
            <Col
              style={text}
              md={6}
              className="pl-4 d-flex ml-auto justify-content-between"
            >
              <span className="">運費</span>
              <span>$ 300</span>
            </Col>
            <Col md={6} className="pl-4 d-flex ml-auto">
              <span className="mr-auto fw-700">總計</span>
              <span className="fw-700">$ {totalAmt + 300}</span>
            </Col>
          </div>
        </div>
      </>
    )
  }
}

export default OrderDetailProductContent
