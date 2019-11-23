import React, { Component } from 'react'

class CartItemHotel extends Component {
  render() {
    return (
      <>
        <div className="shop-item shop-box my-4 position-relative">
          <div className="shop-vendor-title">
            <span>飯店(無數量修改)</span>
          </div>
          <div className="shop-close-item mt-2">+</div>
          <div className=" pr-4">
            <div className="shop-data d-flex justify-content-between">
              <div className="shop-product-photo">
                <a href="" className="">
                  <img
                    className=""
                    src="/images/coach/coach2.jpg"
                    alt="商品照片"
                  />
                </a>
              </div>
              <div className="d-flex flex-column mt-2">
                <a href="" className="text-decoration-none text-dark">
                  {this.props.cartData.prodName}
                </a>
                <span>品項內容</span>
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
