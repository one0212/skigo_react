import React, { Component } from 'react'

const productInfo = {
  color: '#a8a8ab',
}
class CartItemHotel extends Component {
  render() {
    return (
      <>
        {console.log(this.props)}
        <div className="shop-item shop-box my-4 position-relative">
          <div className="shop-vendor-title">
            <span>{this.props.cartData.vendor}</span>
          </div>
          <div className="shop-close-item mt-2">+</div>
          <div className=" pr-4">
            <div className="shop-data d-flex justify-content-between">
              <div className="shop-product-photo">
                <a href="" className="">
                  <img
                    className=""
                    src={this.props.cartData.coverImg}
                    alt="商品照片"
                  />
                </a>
              </div>
              <div className="d-flex flex-column mt-2">
                <a href="" className="text-decoration-none text-dark">
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
                <span className="d-none">{this.props.cartData.qty}</span>
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

export default CartItemHotel
