import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Header from '../../navbar/Header'
import UserSidebar from '../UserSidebar'
import AddressTitle from './AddressTitle'
// import AddressEmpty from "./AddressEmpty";
import AddressList from './AddressList'

import '../../../css/user/user_center_address.css'

class UserAddress extends Component {
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
