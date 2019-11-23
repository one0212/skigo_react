import React from 'react'
import { Container, Row } from 'react-bootstrap'

import UserSidebar from '../UserSidebar'
import Account from './Account'

import '../../../css/user/user_center_account.css'

const UserAccount = () => {
  return (
    <>
      <Container>
        <Row className="my-5 mx-2">
          <UserSidebar />
          <Account />
        </Row>
      </Container>
    </>
  )
}

export default UserAccount
