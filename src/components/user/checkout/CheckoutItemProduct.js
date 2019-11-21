import React, { useState } from 'react'
import { Row, Col, Button, Modal, Form } from 'react-bootstrap'

function CheckoutItemProduct() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <div className="shop-box mb-3">
        <div className="shop-vendor-name">品牌廠商名稱</div>
        <Row className="flex-row-reverse">
          <Col md={5} className="d-flex mt-0 flex-column px-5 py-3">
            <h5>收件資訊</h5>
            <Button variant="orange" className="mt-3 mb-2" onClick={handleShow}>
              請填寫收件人與購買人資料
            </Button>
            <p>運送方式：宅配</p>
            <small className="shop-gray-text">
              預計到貨時間12月8日 - 12月13日
            </small>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>請填寫收件人與購買人資料</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>收件人姓名</Form.Label>
                    <Form.Control
                      // className="btn-block my-1 p-2 user-text-input border-gray"
                      type="text"
                      autoComplete="off"
                      placeholder="真實姓名"
                      autofocus="autofocus"
                    />
                    <Form.Text>本欄位為必填</Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>收件人手機</Form.Label>
                    <Form.Control
                      className="btn-block my-1 p-2 user-text-input border-gray"
                      type="text"
                      autoComplete="off"
                    />
                    <Form.Text>本欄位為必填</Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>地址</Form.Label>
                    <Form.Control
                      className="btn-block p-2 my-1 user-text-input border-gray"
                      type="text"
                      autoComplete="off"
                      placeholder="例：台北市大安區復興南路一段390號2樓204室"
                    />
                    <Form.Text>本欄位為必填</Form.Text>
                  </Form.Group>

                  <Form.Group className="my-3">
                    <Form.Check type="checkbox" label="購買人資料同上" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>購買人姓名</Form.Label>
                    <Form.Control
                      className="btn-block p-2 my-1 user-text-input border-gray"
                      type="text"
                      autoComplete="off"
                      placeholder="真實姓名"
                    />
                    <Form.Text>本欄位為必填</Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>收件人手機</Form.Label>
                    <Form.Control
                      className="btn-block p-2 my-1 user-text-input border-gray"
                      type="text"
                      autoComplete="off"
                    />
                    <Form.Text>本欄位為必填</Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>地址</Form.Label>
                    <Form.Control
                      className="btn-block p-2 my-1 user-text-input border-gray"
                      type="text"
                      autoComplete="off"
                      placeholder="例：台北市大安區復興南路一段390號2樓204室"
                    />
                    <Form.Text>本欄位為必填</Form.Text>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="outline-secondary"
                  className="cancel shop-gray-text"
                  onClick={handleClose}
                >
                  取消
                </Button>
                <Button variant="orange" type="button" onClick={handleClose}>
                  使用地址
                </Button>
              </Modal.Footer>
            </Modal>
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

export default CheckoutItemProduct
