import React from 'react'
import {
  Card,
} from 'react-bootstrap'
import '../../scss/product_card.scss'
import 'bootstrap/dist/css/bootstrap.css'


class ProductCard extends React.Component{
    constructor(props){
      super(props)
      this.state = {
      }
    }
    // handleClick = () => {
    //   const url = 'http://localhost:3001/api/cart/items'
    //   const id = document.querySelector('#product-id').textContent
    //   const select = document.querySelector('#product-select')
    //   const selectedValue = select.options[select.selectedIndex].value
    //   const obj = {
    //     // prodId, prodType, qty 這三個變數不可改
    //     prodId: parseInt(id), //這邊放資料庫的商品id
    //     prodType: 'products', //這邊放資料庫的商品類型 例如飯店傳hotel,
    //     qty: parseInt(selectedValue), //商品數量 不需用字串
    //   }
    //   console.log(id, selectedValue, obj)
    //   fetch(url, {
    //     body: JSON.stringify(obj),
    //     headers: {
    //       'content-type': 'application/json',
    //     },
    //     method: 'POST',
    //   }).then(response => {
    //     // 如果response.status拿到200表示加入商品成功
    //     if (response.status === 200) {
    //       // 所以可以用此判斷, 後續要做的事情就是放這邊
    //       console.log('商品加入成功')
    //     }
    //   })
    // }
    
  
    render(){
      return (
        <>
            <Card className="product_card">
                <div className="overlay">
                  <a href="#" className="item">加入購物車</a>
                  <a href="/product" className="item">查看商品</a>
                </div>
                <Card.Img variant="top" src={this.props.productData.img[0]} />
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

export default ProductCard
 


