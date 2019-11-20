import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

class CheckoutItemProduct extends Component {
  render() {
    return (
      <>
        <div className="shop-box mb-3">
          <div className="shop-vendor-name">品牌廠商名稱</div>
          <Row className="flex-row-reverse">
            <Col md={5} className="d-flex mt-0 flex-column px-5 py-3">
              <h5>收件資訊</h5>
              <Button
                variant="orange"
                className="mt-3 mb-2"
                data-toggle="modal"
                data-target="#exampleModalScrollable"
              >
                請填寫收件人與購買人資料
              </Button>
              <p>運送方式：宅配</p>
              <small className="shop-gray-text">
                預計到貨時間12月8日 - 12月13日
              </small>
              <div
                className="modal fade"
                id="exampleModalScrollable"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalScrollableTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-scrollable"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title"
                        id="exampleModalScrollableTitle"
                      >
                        請填寫收件人與購買人資料
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form action="" method="POST">
                        <div className="checkout-receiver">
                          <div>
                            <span>收件人姓名</span>
                            <input
                              className="btn-block my-1 p-2 user-text-input border-gray"
                              type="text"
                              autocomplete="off"
                              placeholder="真實姓名"
                            />
                          </div>
                          <small className="text-left user-small-text">
                            本欄位為必填
                          </small>
                          <div className="">
                            <span>收件人手機</span>
                            <input
                              className="btn-block my-1 p-2 user-text-input border-gray"
                              type="text"
                              autocomplete="off"
                            />
                          </div>
                          <small className="text-left user-small-text">
                            本欄位為必填
                          </small>
                          <div className="my-2">
                            <span>地址</span>
                            <input
                              className="btn-block p-2 my-1 user-text-input border-gray"
                              type="text"
                              autocomplete="off"
                              placeholder="例：台北市大安區復興南路一段390號2樓204室"
                            />
                          </div>
                          <small className="text-left user-small-text">
                            本欄位為必填
                          </small>
                          <div className="d-flex p-0 justify-content-between align-items-center mt-3 mb-1">
                            <div className="">
                              <input type="checkbox" name="checkbox" />
                              <label
                                className="user-darkblue-text"
                                htmlFor="checkbox"
                              >
                                購買人資料同上
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="checkout-buyer">
                          <div className="my-2">
                            <span>購買人姓名</span>
                            <input
                              className="btn-block p-2 my-1 user-text-input border-gray"
                              type="text"
                              autocomplete="off"
                              placeholder="真實姓名"
                            />
                          </div>
                          <small className="text-left user-small-text">
                            本欄位為必填
                          </small>
                          <div className="my-2">
                            <span>收件人手機</span>
                            <input
                              className="btn-block p-2 my-1 user-text-input border-gray"
                              type="text"
                              autocomplete="off"
                            />
                          </div>
                          <small className="text-left user-small-text">
                            本欄位為必填
                          </small>
                          <div className="my-2">
                            <span>地址</span>
                            <input
                              className="btn-block p-2 my-1 user-text-input border-gray"
                              type="text"
                              autocomplete="off"
                              placeholder="例：台北市大安區復興南路一段390號2樓204室"
                            />
                          </div>
                          <small className="text-left user-small-text">
                            本欄位為必填
                          </small>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <Button
                        variant="outline-secondary"
                        className="cancel shop-gray-text"
                        data-dismiss="modal"
                      >
                        取消
                      </Button>
                      <Button variant="orange" type="button">
                        使用地址
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={7} className="shop-item px-4 mb-5">
              <div className="d-flex mt-2 justify-content-between">
                <div className="d-flex">
                  <div className="shop-product-photo">
                    <a href="" className="">
                      <img
                        className=""
                        src="/images/coach/coach.jpg"
                        alt="商品照片"
                      />
                    </a>
                  </div>
                  <div className="d-flex">
                    <div className="d-flex flex-column justify-content-between ml-2">
                      <div className="d-flex flex-column">
                        <a href="" className="text-decoration-none text-dark">
                          這裡放商品名稱
                        </a>
                        <span>品項內容</span>
                      </div>
                      <div>X 1</div>
                    </div>
                  </div>
                </div>
                <div className="align-self-end flex-grow text-right">
                  NT $價格
                </div>
              </div>
              <div className="shop-subtotal text-right pt-3">
                商品小計
                <span className="ml-2 user-darkblue-text">NT$ 多少錢</span>
              </div>
            </Col>
            <Col md={5}></Col>
            <Col md={7} className="shop-item m-0 px-4 mb-5">
              <div className="d-flex mt-2 justify-content-between">
                <div className="d-flex">
                  <div className="shop-product-photo">
                    <a href="" className="">
                      <img
                        className=""
                        src="/images/coach/coach.jpg"
                        alt="商品照片"
                      />
                    </a>
                  </div>
                  <div className="d-flex">
                    <div className="d-flex flex-column justify-content-between ml-2">
                      <div className="d-flex flex-column">
                        <a href="" className="text-decoration-none text-dark">
                          這裡放商品名稱
                        </a>
                        <span>品項內容</span>
                      </div>
                      <div>X 1</div>
                    </div>
                  </div>
                </div>
                <div className="align-self-end flex-grow text-right">
                  NT $價格
                </div>
              </div>
              <div className="shop-subtotal text-right pt-3">
                商品小計
                <span className="ml-2 user-darkblue-text">NT$ 多少錢</span>
              </div>
            </Col>
            <Col md={5}></Col>
            <Col md={7} className="shop-item m-0 px-4 mb-5">
              <div className="d-flex mt-2 justify-content-between">
                <div className="d-flex">
                  <div className="shop-product-photo">
                    <a href="" className="">
                      <img
                        className=""
                        src="/images/coach/coach.jpg"
                        alt="商品照片"
                      />
                    </a>
                  </div>
                  <div className="d-flex">
                    <div className="d-flex flex-column justify-content-between ml-2">
                      <div className="d-flex flex-column">
                        <a href="" className="text-decoration-none text-dark">
                          這裡放商品名稱
                        </a>
                        <span>品項內容</span>
                      </div>
                      <div>X 1</div>
                    </div>
                  </div>
                </div>
                <div className="align-self-end flex-grow text-right">
                  NT $價格
                </div>
              </div>
              <div className="shop-subtotal text-right pt-3">
                商品小計
                <span className="ml-2 user-darkblue-text">NT$ 多少錢</span>
              </div>
            </Col>
            <Col md={5}></Col>
          </Row>
        </div>
      </>
    )
  }
}

export default CheckoutItemProduct
