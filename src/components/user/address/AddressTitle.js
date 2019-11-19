import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
class AddressTitle extends Component {
  render() {
    return (
      <>
        <div className="mb-5 d-flex justify-content-between">
          <div className="">
            <h4>寄送地址</h4>
            <span>以下為你的常用地址，可以在這裡管理所有使用過的購買地址</span>
          </div>
          <div className="p-1">
            <Button className="user-address-add" variant="orange">
              ＋ 新增地址
            </Button>
          </div>
        </div>
        <div className="user-address-remind p-3">
          <h6>小提醒</h6>
          <span>
            請放心，個人常用的收件地址及相關購買資料都是屬於你的個人隱私，網站依照個人資料保護法保障你的個人隱私！
          </span>
        </div>
      </>
    )
  }
}

export default AddressTitle
