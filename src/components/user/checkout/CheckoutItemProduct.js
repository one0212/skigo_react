import React, { useState } from 'react'
import { Row, Col, Button, Modal, Form } from 'react-bootstrap'

function CheckoutItemProduct() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [text, setText] = useState({ receiveName: '', receivePhone: '', receiveAddress: '', buyName: '', buyPhone: '', buyAddress: '' })
  const [borderRed, setBorder] = useState({ receiveName: false, receivePhone: false, receiveAddress: false, buyName: false, buyPhone: false, buyAddress: false })
  const [errMsg, setErrMsg] = useState({ receiveName: '', receivePhone: '', receiveAddress: '', buyName: '', buyPhone: '', buyAddress: '' })

  const handleTextChange = e => {
    console.log(e.target.value)
    setText({ ...text, [e.target.id]: e.target.value })
  }

  const handleKeyPress = e => {
    setBorder({ ...borderRed, [e.target.id]: !e.target })
    setErrMsg({ ...errMsg, [e.target.id]: '' })
  }

  const handleSubmit = () => {
    let borderState = {}
    let msgState = {}
    if (document.querySelector('#receiveName').value === '') {
      borderState.receiveName = true
      msgState.receiveName = '本欄位為必填'
    }
    if (document.querySelector('#receivePhone').value === '') {
      borderState.receivePhone = true
      msgState.receivePhone = '本欄位為必填'
    }
    if (document.querySelector('#receiveAddress').value === '') {
      borderState.receiveAddress = true
      msgState.receiveAddress = '本欄位為必填'
    }
    if (document.querySelector('#buyName').value === '') {
      borderState.buyName = true
      msgState.buyName = '本欄位為必填'
    }
    if (document.querySelector('#buyPhone').value === '') {
      borderState.buyPhone = true
      msgState.buyPhone = '本欄位為必填'
    }
    if (document.querySelector('#buyAddress').value === '') {
      borderState.buyAddress = true
      msgState.buyAddress = '本欄位為必填'
    }

    if (Object.keys(borderState).length) {
      setBorder(borderState)
      setErrMsg(msgState)
      return
    }
  }
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
                      id="receiveName"
                      type="text"
                      autoComplete="off"
                      placeholder="真實姓名"
                      autofocus="autofocus"
                      onChange={handleTextChange}
                      onKeyPress={handleKeyPress}
                      style={{
                        borderColor: borderRed.receiveName
                          ? 'red'
                          : '#ddd',
                      }}
                    />
                    <Form.Text className="text-danger">{errMsg.receiveName}</Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>收件人手機</Form.Label>
                    <Form.Control
                      id="receivePhone"
                      type="text"
                      onChange={handleTextChange}
                      onKeyPress={handleKeyPress}
                      autoComplete="off"
                      style={{
                        borderColor: borderRed.receivePhone
                          ? 'red'
                          : '#ddd',
                      }}
                    />
                    <Form.Text className="text-danger">{errMsg.receivePhone}</Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>地址</Form.Label>
                    <Form.Control
                      id="receiveAddress"
                      type="text"
                      autoComplete="off"
                      onChange={handleTextChange}
                      onKeyPress={handleKeyPress}
                      style={{
                        borderColor: borderRed.receiveAddress
                          ? 'red'
                          : '#ddd',
                      }}
                      placeholder="例：台北市大安區復興南路一段390號2樓204室"
                    />
                    <Form.Text className="text-danger">{errMsg.receiveAddress}</Form.Text>
                  </Form.Group>

                  <Form.Group className="my-3">
                    <Form.Check type="checkbox" label="購買人資料同上" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>購買人姓名</Form.Label>
                    <Form.Control
                      id="buyName"
                      type="text"
                      autoComplete="off"
                      onChange={handleTextChange}
                      onKeyPress={handleKeyPress}
                      style={{
                        borderColor: borderRed.buyName
                          ? 'red'
                          : '#ddd',
                      }}
                      placeholder="真實姓名"
                    />
                    <Form.Text className="text-danger">{errMsg.buyName}</Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>購買人手機</Form.Label>
                    <Form.Control
                      id="buyPhone"
                      type="text"
                      onChange={handleTextChange}
                      onKeyPress={handleKeyPress}
                      style={{
                        borderColor: borderRed.buyPhone
                          ? 'red'
                          : '#ddd',
                      }}
                      autoComplete="off"
                    />
                    <Form.Text className="text-danger">{errMsg.buyPhone}</Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>地址</Form.Label>
                    <Form.Control
                      id="buyAddress"
                      type="text"
                      autoComplete="off"
                      onChange={handleTextChange}
                      onKeyPress={handleKeyPress}
                      style={{
                        borderColor: borderRed.buyAddress
                          ? 'red'
                          : '#ddd',
                      }}
                      placeholder="例：台北市大安區復興南路一段390號2樓204室"
                    />
                    <Form.Text className="text-danger">{errMsg.buyAddress}</Form.Text>
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
                <Button variant="orange" type="button" onClick={handleClose} onClick={handleSubmit}>
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
