import React, { Component } from 'react'

class CartToCheckout extends Component {
  render() {
    return (
      <>
        <div class="shop-order-title card-header">訂單摘要</div>
        <div class="shop-order-body">
          <div class="shop-product-total d-flex justify-content-between">
            <span>商品總計</span>
            {/* <!-- "NT$ " + 資料庫金額 --> */}
            <span>NT$ 多少錢</span>
          </div>
          {/* 運費總計 */}
          <div class="shop-fare-total d-flex justify-content-between">
            <span>運費總計</span>
            <span>NT$ 多少錢</span>
          </div>
          <div class="shop-sum-price d-flex justify-content-between">
            <span>結帳總金額：</span>
            {/* 加總訂單總額  */}
            <span>NT$ 多少錢</span>
          </div>
          <button class="user-orange-btn btn btn-block user-btn checkout">
            <a href="#" class="text-light text-decoration-none">
              前往結帳
            </a>
          </button>
        </div>
      </>
    )
  }
}

export default CartToCheckout
