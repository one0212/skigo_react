import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../../css/account_active_result.css'
const ActiveFail = () => {
  return (
    <>
      <Card
        className="text-center m-auto"
        style={{
          width: '28rem',
          height: '16rem',
          backgroundColor: '#ffffff',
        }}
      >
        <Card.Header>
          <img src="/images/small-logo.svg" alt="" style={{ width: '11rem' }} />
        </Card.Header>
        <Card.Body style={{ backgroundColor: '#fffff' }}>
          <Card.Title as="h3">啟用連結已失效</Card.Title>
          <Card.Text>點選以下按鈕重新發送驗證信</Card.Text>
          <Button variant="orange">
            <Link
              className="text-decoration-none text-light"
              to="/member/profile"
            >
              點我重新發送驗證信
            </Link>
          </Button>
        </Card.Body>
        {/* <Card.Footer className="text-muted">123</Card.Footer> */}
      </Card>
    </>
  )
}

export default ActiveFail
