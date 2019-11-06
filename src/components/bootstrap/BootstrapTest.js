import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap'

const BootstrapTest = props => (
  <>
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>React Bootstrap</h1>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
        </Col>
      </Row>
    </Container>
  </>
)

export default BootstrapTest