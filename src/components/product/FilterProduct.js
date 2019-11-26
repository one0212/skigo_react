import React from 'react';
import { Container, Row, Col, Accordion, Card, ListGroup, Form, Nav} from 'react-bootstrap';
import ProductCard from './ProductCard';
import Breadcrumb from '../Breadcrumb';
import '../../scss/filterProduct.scss'




class  FilterProduct extends React.Component{
  constructor(){
    super()
    this.state = {
      products: ''
    }
  }
  handleClick = () => {
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
  
  componentWillMount(){
     fetch(
      `http://localhost:3001/japi/products`,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    ).then(response=>{
      return response.json()
    }).then(json=>{
      const uniqueNo = [];
      const uniqueProd = [];
      json.map(prod => {
          if (uniqueNo.indexOf(prod.No) === -1) {
            uniqueNo.push(prod.No);
            uniqueProd.push(prod);
          }
      });
      console.log(uniqueNo);
      this.setState({ products: uniqueProd})
      console.log(this.state.products)
    })
    .catch((error) => {
      "error"
    })
  }
  
    render(){
       return (
        <>
        <Container>
          <Row>
              <Col sm={12}>
                <Nav className="justify-content-center align-items-center" activeKey="/home">
                    <Nav.Item>
                      <Nav.Link href="#">
                      <div className="product-svg"><img src="/images/svg/Snowboards.svg"/>
                        <span>滑雪板</span>
                      </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#">
                      <div className="product-svg"><img src="/images/svg/Bindings.svg"/>
                        <span>雪板固定器</span>
                      </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="link-2">
                      <div className="product-svg"><img className="p-svg" src="/images/svg/Boots.svg"/>
                      <span>雪靴</span>
                      </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="disabled">
                      <div className="product-svg"><img src="/images/svg/Jackets.svg"/>
                      <span>雪衣</span>
                      </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="disabled">
                      <div className="product-svg"><img src="/images/svg/Snowboard-Pants.svg"/>
                      <span>雪褲</span>
                      </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="disabled">
                      <div className="product-svg"><img src="/images/svg/Gloves.svg"/>
                      <span>配件</span>
                      </div>
                      </Nav.Link>
                    </Nav.Item>           
                  </Nav>
              </Col>
          </Row>
        <Row className="product-main">

          <Col sm={3}>
            <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  類型
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" id="001"/>
                      <Form.Check type="checkbox" label="Check me out" id="002"/>
                      <Form.Check type="checkbox" label="Check me out" id="003"/>
                      <Form.Check type="checkbox" label="Check me out" id="004"/>
                    </Form.Group>

                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  特色
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" id="005"/>
                        <Form.Check type="checkbox" label="Check me out" id="006"/>
                        <Form.Check type="checkbox" label="Check me out" id="007"/>
                        <Form.Check type="checkbox" label="Check me out" id="008"/>
                      </Form.Group>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  顏色
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" id="005"/>
                        <Form.Check type="checkbox" label="Check me out" id="006"/>
                        <Form.Check type="checkbox" label="Check me out" id="007"/>
                        <Form.Check type="checkbox" label="Check me out" id="008"/>
                      </Form.Group>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  尺寸
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <Form.Group controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Check me out" id="005"/>
                          <Form.Check type="checkbox" label="Check me out" id="006"/>
                          <Form.Check type="checkbox" label="Check me out" id="007"/>
                          <Form.Check type="checkbox" label="Check me out" id="008"/>
                        </Form.Group>
                    </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col sm={9}>
          <div className="d-flex flex-wrap">
        {this.state.products !== '' ?
        this.state.products.map((product,index)=>{
          return <ProductCard key={index} productData={product}/>
        })
         : ''}
          
        </div>
        </Col>
        </Row>
        </Container>
        </>
    )
  }
 
}

export default FilterProduct
 


