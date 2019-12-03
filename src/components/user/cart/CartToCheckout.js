import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class CartToCheckout extends Component {
  render() {
    return (
      <>
        {console.log(this.props)}
        <div className="shop-order-title card-header">訂單摘要</div>
        <div className="shop-order-body">
          <div className="shop-product-total d-flex justify-content-between">
            <span>商品總計</span>
            {/* <!-- "NT$ " + 資料庫金額 --> */}
            <span>NT$ {this.props.cartData.totalAmt}</span>
          </div>
          {/* 運費總計 */}
          <div className="shop-fare-total d-flex justify-content-between">
            <span>雪具運費總計</span>
            <span>NT$ 300</span>
          </div>
          <div className="shop-sum-price d-flex justify-content-between">
            <span>結帳總金額：</span>
            {/* 加總訂單總額  */}
            <span>NT$ {this.props.cartData.totalAmt + 300}</span>
          </div>
          <Button
            variant="orange"
            type="button"
            href="/checkout"
            className="btn-block checkout"
          >
            前往結帳
          </Button>
        </div>
      </>
    )
  }
}

export default CartToCheckout
