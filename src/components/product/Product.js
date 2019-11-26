import React from 'react'
import {
  Container,Row,Col,Form,Button,
} from 'react-bootstrap'
import { FiShoppingCart} from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import Breadcrumb from '../Breadcrumb'
import ProductShare from './ProductShare'
import ProductAsNavFor from './ProductAsNavFor'
import SwipeToSlide from './SwipeToSlide'
import Footer from '../Footer'


const Product = () => {
  const handleClick = () => {
    const url = 'http://localhost:3001/api/cart/items'
    const id = document.querySelector('#product-id').textContent
    const select = document.querySelector('#product-select')
    const selectedValue = select.options[select.selectedIndex].value
    const obj = {
      // prodId, prodType, qty 這三個變數不可改
      prodId: parseInt(id), //這邊放資料庫的商品id
      prodType: 'products', //這邊放資料庫的商品類型 例如飯店傳hotel,
      qty: parseInt(selectedValue), //商品數量 不需用字串
    }
    console.log(id, selectedValue, obj)
    fetch(url, {
      body: JSON.stringify(obj),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    }).then(response => {
      // 如果response.status拿到200表示加入商品成功
      if (response.status === 200) {
        // 所以可以用此判斷, 後續要做的事情就是放這邊
        console.log('商品加入成功')
      }
    })
  }
  
  return (
    <>
<Container>
  <Row>
  <Breadcrumb/>
  </Row>
  <Row>
    <Col lg={7} sm={12}>
        <ProductAsNavFor/>
    </Col>
    <Col lg={5}>
    <div id="product-id" style={{ display: 'none' }}>4</div>
        <div className="product-info">
          <div class="product-title">
            <h2 class="">ALL MOUNTAIN SNOWBOARD</h2>
            <h1 class="product-name">Men's Burton Custom Camber Snowboard</h1>
          </div>
          <div className="product-price">
              <span className="symbol">NT</span>
              <span className="amount">1,280</span>
          </div>
          <div className="product-quantity">
          <Form.Group controlId="exampleForm.ControlSelect1" as={Row}>
            <Form.Label column sm={2}>尺寸</Form.Label>
            <Col sm={10}>
              <Form.Control as="select">
                <option value="1">150</option>
                <option value="2">160</option>
                <option value="3">165</option>
                <option value="4">165W</option>
                <option value="5">150W</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2" as={Row}>
            <Form.Label column sm={2}>數量</Form.Label>
            <Col sm={4}>
              <Form.Control as="select" id="product-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
            </Col>
          </Form.Group>
          </div>
          <div className="product-btn">
            <Button className="btn-buy" type="submit" size="lg" block onClick={handleClick} ><FiShoppingCart/>放入購物車</Button>
            <Button className="btn-collect" type="submit" size="lg" block><IoMdHeartEmpty/>收藏商品</Button>
          </div>
            <p>付款後，從備貨到寄出商品為 4 個工作天。（不包含假日）</p>
          </div>
          <ProductShare/>
    </Col>
  </Row>
  <Row>
    <Col sm={12} className="recommend-product">
        <h5>推薦商品</h5>  
        <SwipeToSlide/>
    </Col>
  </Row>
</Container>
<Footer/>

</>
  )
}
export default Product
