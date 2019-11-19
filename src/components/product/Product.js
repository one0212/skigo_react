import React from 'react'
import {
  Container,Row,Col,Form,Button,
} from 'react-bootstrap'

import Breadcrumb from '../components/Breadcrumb'
import { FiShoppingCart} from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import ProductShare from './ProductShare'
import ProductAsNavFor from './ProductAsNavFor'
import SwipeToSlide from './SwipeToSlide'



class Product extends React.Component{
    constructor(){
      super()
      this.state = {}
    }
  
    render(){
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
                            <option>150</option>
                            <option>160</option>
                            <option>165</option>
                            <option>165W</option>
                            <option>150W</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlSelect1" as={Row}>
                        <Form.Label column sm={2}>數量</Form.Label>
                        <Col sm={4}>
                          <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>

                      </div>
                      <div className="product-btn">
                        <Button className="btn-buy" type="submit" size="lg" block><FiShoppingCart/>放入購物車</Button>
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
            
        </>
    )
  }
 
}

export default Product
 


