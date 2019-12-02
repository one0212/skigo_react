import React, { Component } from 'react'

const productInfo = {
  color: '#a8a8ab',
}
class CartItemProductArea extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    console.log(props)
  }
  render() {
    return (
      <>
        <div className="shop-item shop-box my-4 position-relative">
          <div className="shop-vendor-title">{this.props.cartData.vendor}</div>
          <div className="shop-close-item mt-2">+</div>
          <div className="pr-4">
            <div className="shop-data d-flex justify-content-between">
              <div className="shop-product-photo">
                <a href="" className=" ">
                  <img
                    className=""
                    src={this.props.cartData.coverImg}
                    alt="商品照片"
                  />
                </a>
              </div>
              <div className="d-flex flex-column mt-2">
                <a href="#" className="text-decoration-none text-dark">
                  {this.props.cartData.name}
                </a>
                <div>
                  {this.props.cartData.info.map((info, index) => {
                    return (
                      <p className="m-0" key={index} style={productInfo}>
                        {info}
                      </p>
                    )
                  })}
                </div>
              </div>
              <div className="shop-select position-relative mt-2">
                <select className="position-absolute d-inline-block">
                  {/* <option selected>Open this select menu</option>  */}
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                <div className="shop-select-tri position-relative d-flex align-items-center">
                  {/* 選擇數量動態修改 */}
                  <span className="">{this.props.cartData.qty}</span>
                </div>
              </div>
              <div className="shop-item-price mt-2">
                NT$ {this.props.cartData.price}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CartItemProductArea
