import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

// 忘記密碼
class ForgotPwdModal extends Component {
  constructor(props) {
    super(props)
    console.log(`ForgotPwdModal ${props}`)
    this.state = {
      text: '',
      borderRed: false,
      errMsg: '',
    }
  }
  handleTextChange = e => {
    this.setState({
      text: e.target.value,
    })
  }

  forgotPwd = () => {
    let inputState = {}
    if (document.querySelector('#forget-pwd-input').value === '') {
      inputState.borderRed = true
      inputState.errMsg = '電子郵件為必填'
    } else if (
      !this.props.emailRegex.test(
        document.querySelector('#forget-pwd-input').value
      )
    ) {
      inputState.borderRed = true
      inputState.errMsg = '請輸入有效的電子郵件'
    }
    if (inputState) {
      this.setState(inputState)
      return
    }
  }

  handleKeyPress = e => {
    this.setState({
      borderRed: false,
      errMsg: '',
    })
  }

  render() {
    return (
      <div
        className="user-modal-content text-center p-4 forget-content"
        style={{ display: 'block' }}
      >
        <div className="close-modal" onClick={this.props.onClose}>
          +
        </div>
        <img
          className="user-small-logo mb-3"
          src="/images/small-logo.svg"
          alt=""
        />
        <h3 className="my-5">忘記密碼？</h3>
        <div className="user-form-item">
          <input
            id="forget-pwd-input"
            className="btn-block p-2 user-text-input"
            type="text"
            autoComplete="off"
            name="forgotPwd"
            onChange={this.handleTextChange}
            onKeyPress={this.handleKeyPress}
            value={this.state.text}
            placeholder="請填寫註冊時使用的email"
            style={{
              borderColor: this.state.borderRed ? 'red' : 'rgb(216, 216, 216)',
            }}
          />
        </div>
        <Form className="text-left">
          <Form.Text className="text-danger">{this.state.errMsg}</Form.Text>
          <Button
            variant="blue"
            className="resend-pwd my-4 btn btn-block my-2"
            type="button"
            onClick={this.forgotPwd}
          >
            重寄認證信給我
          </Button>
          <small className="cursor-point" onClick={this.props.showModal}>
            回上一頁
          </small>
        </Form>
      </div>
    )
  }
}

export default ForgotPwdModal
