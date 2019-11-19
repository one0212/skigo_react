import React, { Component } from 'react'

class CartItemProduct extends Component {
  render() {
    return (
      <>
        <div className="shop-item shop-box my-4 position-relative">
          <div className="shop-vendor-title">品牌、雪場廠商名稱</div>
          <div className="shop-close-item mt-2">+</div>
          <div className="pr-4">
            <div className="shop-data d-flex justify-content-between">
              <div className="shop-product-photo">
                <a href="" className=" ">
                  <img
                    className=""
                    src="/images/coach/coach.jpg"
                    alt="商品照片"
                  />
                </a>
              </div>
              <div className="d-flex flex-column mt-2">
                <a href="#" className="text-decoration-none text-dark">
                  這裡放商品名稱
                </a>
                <span>品項內容</span>
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
                  <span className="">數量</span>
                </div>
              </div>
              <div className="shop-item-price mt-2">NT$價格</div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CartItemProduct
