import React from 'react';
import { Container, Row, Col, Accordion, Card, ListGroup, Form, Nav} from 'react-bootstrap';
import ProductCard from './ProductCard';
import Breadcrumb from '../Breadcrumb';
import '../../scss/filterProduct.scss'




class  FilterProduct extends React.Component{
  constructor(){
    super()
    this.state = {
      products: '',
    }
  }
  handleClick = e => {
    const url = `http://localhost:3001/japi/products?type=${e.target.id}`
    console.log(e.target)
    // const obj = {
    //   // prodId, prodType, qty 這三個變數不可改
    // }
    fetch(url).then(response => {
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
                      <div className="product-svg"><img id="snowboards" onClick={this.handleClick} src="/images/svg/Snowboards.svg"/>
                        <span>滑雪板</span>
                      </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#">
                      <div className="product-svg"><img id="bindings" onClick={this.handleClick} src="/images/svg/Bindings.svg"/>
                        <span>雪板固定器</span>
                      </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link >
                      <div className="product-svg"><img className="p-svg" id="boots" onClick={this.handleClick}  src="/images/svg/Boots.svg"/>
                      <span>雪靴</span>
                      </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="disabled">
                      <div className="product-svg"><img id="jackets" onClick={this.handleClick} src="/images/svg/Jackets.svg"/>
                      <span>雪衣</span>
                      </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="disabled">
                      <div className="product-svg"><img id="pants" onClick={this.handleClick} src="/images/svg/Snowboard-Pants.svg"/>
                      <span>雪褲</span>
                      </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="disabled">
                      <div className="product-svg"><img id="Helmets" onClick={this.handleClick} src="/images/svg/Gloves.svg"/>
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
          <Col sm={9} style={{border:"1px solid #ccc"}}>
          <div className="d-flex flex-wrap" >
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
 


