import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import Breadcrumb from '../Breadcrumb';




class  FilterProduct extends React.Component{
    constructor(){
      super()
      this.state = {}
    }
  
    render(){
       return (
        <>
        <Container>
          <Row>
              <Col sm={12}>
                <Breadcrumb/>
              </Col>
          </Row>
        <Row>
              <Col sm={12}>
                <h1>123</h1>
              </Col>
        </Row>
          <div className="d-flex flex-wrap" style={{background:"#ccc"}}>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
        </Container>
        </>
    )
  }
 
}

export default FilterProduct
 


