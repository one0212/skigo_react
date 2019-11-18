import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
class AddressList extends Component {
  render() {
    return (
      <>
        <div className="user-address-data mt-5 mx-2 pt-2 px-2 d-flex justify-content-between">
          <div className="mt-3">
            <h5>收件人</h5>
            <p>商品會寄到這裡</p>
            <div className="my-5">
              <div className="">
                <p className="">姓名</p>
                <input
                  type="text"
                  className="mb-2 user-center-input"
                  // value="江宛婷"
                />
              </div>
              <div className="">
                <p className="">電話</p>
                <input
                  type="text"
                  className="mb-2 user-center-input"
                  // value="0911003909"
                />
              </div>
              <div className="mb-3">
                <p className="">地址</p>
                <input
                  type="text"
                  className="mb-2 user-center-input"
                  // value="台北市大安區復興南路一段390號"
                />
              </div>
              <Button variant="orange" className="">
                更新
              </Button>
            </div>
          </div>
          <a href="" className="mt-3 user-orange-text text-decoration-none">
            刪除
          </a>
        </div>
      </>
    )
  }
}

export default AddressList
