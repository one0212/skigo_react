import React from 'react'
import { Container, Row, Col, Form, Button, Breadcrumb,Table } from 'react-bootstrap'
import { FiShoppingCart } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
// import Breadcrumb from '../Breadcrumb'
import ProductShare from './ProductShare'
import SwipeToSlide from './SwipeToSlide'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class Product extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.location)
    this.state = {
      products: '',
      allSize: '',
    }
  }
  handleClick = () => {
    const url = 'http://localhost:3001/api/cart/items'
    // const id = document.querySelector('#product-id').textContent
    const size = document.querySelector('#product-size')
    const id = size.options[size.selectedIndex].value
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
        this.props.handleCartItemQtyChange()
      }
    })
  }

  componentWillMount() {
    fetch(
      'http://localhost:3001/japi/products?No=' +
        this.props.match.params.prodNo,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )
      .then(response => {
        return response.json()
      })
      .then(json => {
        console.log(json)
        const allSize = json.map(v => ({ id: v.id, size: v.size }))
        console.log(allSize)
        this.setState({ allSize: allSize })
        this.setState({ products: json[0] })
        console.log(this.state.products)
        console.log(this.state.allSize)
      })
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })

  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Breadcrumb>
              <Breadcrumb.Item href="/">SKIGO</Breadcrumb.Item>
              <Breadcrumb.Item href="/product">雪具裝備</Breadcrumb.Item>
              <Breadcrumb.Item disabled>
                {this.state.products.name}
              </Breadcrumb.Item>
            </Breadcrumb>
          </Row>
          <Row>
            <Col lg={7} sm={12}>
              <div className="product-carousel">
                <Slider
                  asNavFor={this.state.nav2}
                  ref={slider => (this.slider1 = slider)}
                  arrows={false}
                  className="pro-img1"
                >
                  {console.log(this.state.products.img)}
                  {this.state.products !== ''
                    ? this.state.products.img.map((img, index) => {
                        return (
                          <>
                            <div key={index}>
                              <img src={img} />
                            </div>
                          </>
                        )
                      })
                    : ''}
                  {/* {const {img} = this.state.products.img} */}
                  {/* <div >
              <img src={this.state.products.img}/>
            </div> */}
                </Slider>
                <Slider
                  asNavFor={this.state.nav1}
                  ref={slider => (this.slider2 = slider)}
                  slidesToShow={4}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  className="pro-img2"
                >
                  {this.state.products !== ''
                    ? this.state.products.img.map((img, index) => {
                        return (
                          <>
                            <div key={index}>
                              <img src={img} />
                            </div>
                          </>
                        )
                      })
                    : ''}
                </Slider>
              </div>
            </Col>
            <Col lg={5}>
              <div className="product-info">
                <div className="product-title">
                  <h2>{this.state.products.info_name}</h2>
                  <h1 className="product-name">{this.state.products.name}</h1>
                </div>
                <div className="product-price">
                  <span className="symbol">NT</span>
                  <span className="amount">{this.state.products.price}</span>
                </div>
                <div className="product-quantity">
                  <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                      尺寸
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control as="select" id="product-size">
                        {this.state.allSize !== ''
                          ? this.state.allSize.map((size, index) => {
                              return (
                                <option key={index} value={size.id}>
                                  {size.size}
                                </option>
                              )
                            })
                          : ''}
                      </Form.Control>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                      數量
                    </Form.Label>
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
                  <Button
                    className="btn-buy"
                    type="submit"
                    size="lg"
                    block
                    onClick={this.handleClick}
                  >
                    <FiShoppingCart />
                    放入購物車
                  </Button>
                  <Button className="btn-collect" type="submit" size="lg" block>
                    <IoMdHeartEmpty />
                    收藏商品
                  </Button>
                </div>
                <p>付款後，從備貨到寄出商品為 4 個工作天。（不包含假日）</p>
              </div>
              <ProductShare />
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="recommend-product">
            <div className="t01">
                <img src="/images/Product/012.png"/>
            </div>
            </Col>
            <Col sm={6} >
            <div className="t02">
                <img src="/images/Product/011.png"/>
            </div>
            </Col>
            <Col sm={6} >
            <h4 >{this.state.products.name}</h4>
            <p>有史以來最受信任的滑雪板，得到了眾多滑雪者廣大的信任。
                自從不起眼的一開始，創新就定義了Burton Custom系列，
                使其成為滑雪板中最受歡迎，用途最廣，銷售最高的滑雪板。 
                自1996年以來，該圖標就一直佔據統治地位，並以久經考驗的配方不斷發展，
                該配方結合了久經考驗的設計和推動信封的成分，從而打造出了輕巧，
                罌粟花和多功能的木板。 自定義彎度提供兩種版本，精確度和穩定性是許多專業人士的首選，
                而自定義飛行V™則將彎度的力量與輕鬆的搖桿浮動相結合，從而兼具兩者的優點。</p>  
              <p>3年保固-雪板</p>
              <p>從購買之日起，所有帶有Channel安裝系統的2014年及以後的Burton單板滑雪板（例如您在此處看到的那種）都享有三年保修。</p>
            </Col>
          </Row>
          <Row>
          <Col sm={12} >
          <div className="pro-size">
          <Table striped bordered hover >
              <thead>
                <tr style={{background:"#ccc"}}>
                  <th>雪板尺寸</th>
                  <th>150</th>
                  <th>154</th>
                  <th>156</th>
                  <th>158</th>
                  <th>162</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <th>重量範圍</th>
                  <th>54~82kg</th>
                  <th>54~82kg</th>
                  <th>68~91kg</th>
                  <th>68~91kg</th>
                  <th>82~118kg</th>

                </tr>
                <tr>
                <th>腰寬</th>
                  <th>24.8公分</th>
                  <th>25公分</th>
                  <th>25.2公分</th>
                  <th>25.4公分</th>
                  <th>25.6公分</th>
                </tr>
              </tbody>
            </Table>
            </div>
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
