import React from 'react'
import { Button } from 'react-bootstrap'

const SignUpSuccModal = props => {
  return (
    <div
      className="user-modal-content signup-success text-center p-4"
      style={{ display: 'block' }}
    >
      <div className="close-modal" onClick={props.onClose}>
        +
      </div>
      <img
        className="user-small-logo mb-3"
        src="/images/small-logo.svg"
        alt=""
      />
      <h3 className="my-5">註冊成功！</h3>
      <h5 className="px-3">
        我們已經將一封認證信寄至您的信箱，請點擊信裡的確認連結已開通帳號。
      </h5>
      <Button
        variant="orange"
        className=" my-4 btn btn-block my-2"
        type="button"
      >
        重寄認證信給我
      </Button>
    </div>
  )
}

export default SignUpSuccModal
