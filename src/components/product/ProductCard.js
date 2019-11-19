import React from 'react'
import {
  Card,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'


class ProductCard extends React.Component{
    constructor(){
      super()
      this.state = {}
    }
  
    render(){
      return (
        <>
            <Card>
                <div class="overlay">
                  <a href="#" class="item">加入購物車</a>
                  <a href="/product" class="item">查看商品</a>
                </div>
                <Card.Img variant="top" src="images/product/10549106620_3.png" />
                <Card.Body>
                  <Card.Title>Paramount Snowboard</Card.Title>
                  <div>
                    <p>NT<span>1990</span></p>
                  </div>
                </Card.Body>
              </Card>
        </>
    )
  }
 
}

export default ProductCard
 


