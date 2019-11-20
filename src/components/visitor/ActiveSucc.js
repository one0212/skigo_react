import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../../css/user/account_active_result.css'
const ActiveSucc = () => {
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
          <Card.Title as="h3">帳號啟用完成</Card.Title>
          <Card.Text>趕快點選以下連結進入SKIGO吧～</Card.Text>
          <Button variant="orange">
            <Link className="text-decoration-none text-light" to="/">
              點我到首頁
            </Link>
          </Button>
        </Card.Body>
        {/* <Card.Footer className="text-muted">123</Card.Footer> */}
      </Card>
    </>
  )
}

export default ActiveSucc
