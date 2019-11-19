import React from 'react';
import { Container } from 'react-bootstrap';
import ProductCard from './ProductCard';
import Breadcrumb from '../components/Breadcrumb';




class  FilterProduct extends React.Component{
    constructor(){
      super()
      this.state = {}
    }
  
    render(){
       return (
        <>
        <Breadcrumb/>
        <Container>
          <div className="d-flex flex-wrap">
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
 


