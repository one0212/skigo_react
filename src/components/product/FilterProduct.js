import React from 'react';
import { Container, Row, Col, Accordion, Card, ListGroup, Form, Nav} from 'react-bootstrap';
import ProductCard from './ProductCard';
import Breadcrumb from '../Breadcrumb';
import '../../scss/filterProduct.scss'




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
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
        </Col>
        </Row>
        </Container>
        </>
    )
  }
 
}

export default FilterProduct
 


