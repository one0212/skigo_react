import React from 'react'
import {
  Card,
} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../../scss/product_card.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { isThisWeek } from 'date-fns';


class ProductCard2 extends React.Component{
    constructor(props){
      super(props)
      this.state = {
      }
    }
    
  
    render(){
      return (
        <>
            <Card className="product_card">
                <div className="overlay">
                  <a href="#" className="item">加入購物車</a>
                  <Link to="#" className="item">查看商品</Link>
                </div>
                <Card.Img variant="top" src="/images/Product/10707106000150_1.png" />
                <Card.Body>
                  <Card.Title>{this.props.productData.name}</Card.Title>
                  <div className="product-card-pice">
                    <p>NT<span>{this.props.productData.price}</span></p>
                  </div>
                </Card.Body>
              </Card>
        </>
    )
  }
 
}

export default ProductCard2
 




