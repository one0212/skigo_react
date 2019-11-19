import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { FaFacebookF, FaGoogle, FaEyeSlash } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

class SignUpModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: {
        email: '',
        pwd: '',
      },
      borderRed: {
        email: false,
        pwd: false,
      },
      errMsg: {
        email: '',
        pwd: '',
      },
    }
  }
  handleTextChange = e => {
    this.setState({
      text: {
        ...this.state.text,
        // ES2018(ES9) Object Initialize 物件展開運算符
        // 將物件的值展開 與陣列不同 會直接覆蓋掉原本的物件
        [e.target.name]: e.target.value,
      },
    })
  }

  handleKeyPress = e => {
    this.setState({
      borderRed: {
        ...this.state.borderRed,
        [e.currentTarget.name]: !e.currentTarget,
      },
      errMsg: { ...this.state.errMsg, [e.currentTarget.name]: '' },
    })
  }

  signUp = () => {
    let borderState = {}
    let msgState = {}
    if (document.querySelector('#signup-account').value === '') {
      borderState.email = true
      msgState.email = '電子郵件為必填'
    } else if (
      !this.props.emailRegex.test(
        document.querySelector('#signup-account').value
      )
    ) {
      borderState.email = true
      msgState.email = '請輸入有效的電子郵件'
    }

    if (document.querySelector('#signup-password').value === '') {
      borderState.pwd = true
      msgState.pwd = '需要填寫密碼'
    }
    if (Object.keys(borderState).length) {
      this.setState({ borderRed: borderState, errMsg: msgState })
      return
    }
    const url = 'http://localhost:3001/api/user/signup'
    const obj = {
      email: this.state.text.email,
      password: this.state.text.pwd,
      role: 'SKIGO',
    }
    console.log(obj)
    fetch(url, {
      body: JSON.stringify(obj),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    }).then(response => {
      console.log(response)
      if (response.status === 200) {
        // 清空input 註冊成功顯示
        this.setState({
          text: { email: '', pwd: '' },
        })
        this.props.signUpSucc()
        this.props.refreshLoginState()
      } else {
        if (response.status === 400) {
          this.setState({
            borderRed: { email: true },
            errMsg: { email: '信箱已被註冊' },
          })
        }
      }
    })
  }
  render() {
    return (
      <div
        className="user-modal-content signup-content text-center p-4"
        style={{ display: 'block' }}
      >
        <div className="close-modal" onClick={this.props.onClose}>
          +
        </div>
        <img
          className="user-small-logo mb-2"
          src="/images/small-logo.svg"
          alt=""
        />
        <Form className="text-left p-2">
          <div className="user-form-item position-relative my-2 d-flex align-items-center">
            <FiMail className="position-absolute user-inline-icon"></FiMail>
            <input
              id="signup-account"
              className="btn-block p-2 signup-input user-text-input"
              type="email"
              autoComplete="off"
              placeholder="電子郵件地址"
              name="email"
              value={this.state.text.email}
              onKeyPress={this.handleKeyPress}
              onChange={this.handleTextChange}
              style={{
                borderColor: this.state.borderRed.email
                  ? 'red'
                  : 'rgb(216, 216, 216)',
              }}
            />
          </div>
          <Form.Text className="text-danger">
            {this.state.errMsg.email}
          </Form.Text>
          <div className="user-form-item position-relative my-2">
            <FaEyeSlash className="position-absolute user-inline-icon"></FaEyeSlash>
            <input
              id="signup-password"
              className="btn-block p-2 signup-input user-text-input"
              type="password"
              autoComplete="off"
              placeholder="密碼"
              name="pwd"
              value={this.state.text.pwd}
              onKeyPress={this.handleKeyPress}
              onChange={this.handleTextChange}
              style={{
                borderColor: this.state.borderRed.pwd
                  ? 'red'
                  : 'rgb(216, 216, 216)',
              }}
            />
          </div>
          <Form.Text className="text-danger">{this.state.errMsg.pwd}</Form.Text>
          <small className="my-3 user-small-info">
            我們會透過電子郵件將行銷宣傳、優惠與政策更新資訊發送給您。
          </small>
          <Button
            variant="orange"
            className="signup-btn btn btn-block my-1"
            type="button"
            onClick={this.signUp}
          >
            註冊
          </Button>
          <small className="my-3 user-small-info text-center">
            <div className="user-or-line d-inline-block"></div>或
            <div className="user-or-line d-inline-block"></div>
          </small>
          <div className="d-flex justify-content-between align-items-center">
            <div className="mx-2 user-third-input py-2 mt-2 d-flex justify-content-around align-items-center">
              <FaFacebookF className="user-fa-facebook" />
              <span className="text-center user-darkblue-text">Facebook</span>
              <span></span>
            </div>
            <div className="mx-2 user-third-input py-2 mt-2 d-flex justify-content-around align-items-center flex-grow">
              <FaGoogle className="user-fa-google"></FaGoogle>
              <span className="user-darkblue-text text-center">Google</span>
              <span></span>
            </div>
          </div>
          <small
            className="position-absolute login-text toggle-login user-darkblue-text cursor-point"
            onClick={this.props.showModal}
          >
            我要登入
          </small>
        </Form>
      </div>
    )
  }
}

export default SignUpModal
