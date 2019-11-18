import React, { Component } from 'react'
import { Col, Button } from 'react-bootstrap'

class Account extends Component {
  render() {
    return (
      <>
        <Col md={1}></Col>
        <Col md={5} className="pb-5 d-flex flex-column">
          <div className="mb-5">
            <h4>我的帳號</h4>
            <span>管理你的檔案以保護你的帳戶</span>
          </div>
          <div className="user-center-line my-3 px-2">
            <div className="user-nick-name my-4 d-flex align-items-center pr-5">
              <span className="user-center-title">顯示暱稱</span>
              <input className="ml-5 user-center-input" type="text" />
            </div>
            <div className="user-center-email my-4 d-flex align-items-center pr-5">
              <span className="user-center-title">電子郵件</span>
              <span className="ml-5">feliciajiang12@gmail.com</span>
            </div>
            <div className="my-4 d-flex align-items-center pr-5">
              <span className="user-center-title">密碼</span>
              <div className="ml-5 d-inline-block">*********</div>
              <a
                href=""
                className="ml-4 mr-auto user-orange-text text-decoration-none"
              >
                變更
              </a>
            </div>
            <div className="my-4 d-flex pr-5">
              <span className="user-center-title">手機號碼</span>
              <input className="ml-5 user-center-input" type="text" />
            </div>
            <Button variant="orange">儲存</Button>
          </div>
        </Col>
        {/* 會員中心填寫end */}
        {/* 會員中心照片上傳star */}
        <div className="col-4 p-5 d-flex flex-column align-items-center justify-content-center">
          <div className="user-photo my-4"></div>
          <label className="btn btn-outline-secondary my-2">
            <input className="d-none" type="file" />
            上傳圖片
          </label>
          <span>檔案大小：最大1MB</span>
          <span>檔案限制：.JPEG、.PNG</span>
        </div>
      </>
    )
  }
}

export default Account
