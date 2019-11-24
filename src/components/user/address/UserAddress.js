import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import UserSidebar from '../UserSidebar'
import AddressTitle from './AddressTitle'
// import AddressEmpty from "./AddressEmpty";
import AddressList from './AddressList'

import '../../../css/user/user_center_address.css'

class UserAddress extends Component {
  constructor() {
    super()
    this.state = {
      infoResponse: '',
    }
  }
  componentWillMount() {
    const url = 'http://localhost:3001/api/user/delivery-info'
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(infos => {
        // console.log(infos)
        this.setState({ infoResponse: infos })
      })
  }
  render() {
    return (
      <>
        <Container>
          <Row className="my-5 mx-2">
            <UserSidebar />
            <Col md={1}></Col>
            <Col md={8} className="pb-5 d-flex flex-column">
              <AddressTitle />
              {/* <AddressEmpty /> */}
              {/* 判斷是否有地址列表 */}
              <AddressList />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default UserAddress
