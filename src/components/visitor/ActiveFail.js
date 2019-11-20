import React from 'react'
import { Card, Button } from 'react-bootstrap'

import '../../css/user/account_active_result.css'
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
          <Card.Text className="my-3">點選以下按鈕重新發送驗證信</Card.Text>
          <Button href="/" variant="orange">
            點我重新發送驗證信
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default ActiveFail
