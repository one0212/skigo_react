import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { FaFacebookF, FaGoogle, FaEyeSlash } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

import ForgotPwdModal from './ForgotPwdModal'
import SignUpSuccModal from './SignUpSuccModal'
import SignUpModal from './SignUpModal'

import '../../css/header.css'

// email驗證
const emailRegex = new RegExp('^[\\w-\\.]+@[a-zA-Z]+\\.?.*[^\\.]$')
const cursorPoint = {
  cursor: 'pointer',
}

class UserLightbox extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      showModal: 1,
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

  closeModal = e => {
    // console.log('黑底', e.currentTarget, e.target)
    if (e.currentTarget === e.target) {
      this.props.onClose()
      // this.setState({ showModal: 1 });
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

  login = () => {
    let borderState = {}
    let msgState = {}
    if (document.querySelector('#login-account').value === '') {
      borderState.email = true
      msgState.email = '電子郵件為必填'
    } else if (
      !emailRegex.test(document.querySelector('#login-account').value)
    ) {
      borderState.email = true
      msgState.email = '請輸入有效的電子郵件'
    }
    if (document.querySelector('#login-password').value === '') {
      borderState.pwd = true
      msgState.pwd = '請輸入密碼'
    }

    if (Object.keys(borderState).length) {
      this.setState({ borderRed: borderState, errMsg: msgState })
      return
    }

    const url = 'http://localhost:3001/api/user/login'
    const obj = {
      email: this.state.text.email,
      password: this.state.text.pwd,
    }
    fetch(url, {
      body: JSON.stringify(obj),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    }).then(response => {
      console.log(response)
      if (response.status === 200) {
        this.props.onClose()
        this.props.refreshLoginState()
        this.setState({ text: { email: '', pwd: '' } })
      } else {
        if (response.status === 400) {
          this.setState({
            borderRed: { email: true, pwd: true },
            errMsg: {
              email: '帳號密碼錯誤',
              pwd: '帳號密碼錯誤',
            },
          })
        }
      }
    })
    // todo: 關閉Modal
  }

  signUpSucc = () => {
    this.setState({ showModal: 4 })
  }

  render() {
    if (!this.props.isOpen) {
      return ''
    }

    // 登入光箱
    const loginModal = (
      <div
        className="user-modal-content login-content text-center p-4"
        style={{ display: 'block' }}
      >
        <div className="close-modal" onClick={this.closeModal}>
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
              id="login-account"
              className="btn-block p-2 login-input user-text-input"
              type="email"
              autoComplete="off"
              autoFocus
              placeholder="電子郵件地址"
              name="email"
              value={this.state.text.email}
              onKeyPress={this.handleKeyPress}
              onChange={this.handleTextChange}
              style={{
                borderColor: this.state.borderRed.email
                  ? 'red'
                  : 'rgb(208, 208, 208)',
              }}
            />
          </div>
          <Form.Text className="text-danger">
            {this.state.errMsg.email}
          </Form.Text>
          <div className="user-form-item position-relative my-2">
            <FaEyeSlash className="position-absolute user-inline-icon"></FaEyeSlash>
            <input
              id="login-password"
              className="btn-block p-2 login-input user-text-input"
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
          <div className="d-flex p-0 justify-content-between align-items-center mt-3">
            <div className="">
              <input type="checkbox" name="checkbox" />
              <label className="user-darkblue-text" htmlFor="checkbox">
                記住我
              </label>
            </div>
            <small
              className="forget-pwd cursor-point"
              onClick={() => {
                this.setState({ showModal: 3 })
              }}
            >
              忘記密碼
            </small>
          </div>
          <Button
            variant="blue"
            className="login-btn my-1 btn btn-block"
            type="button"
            onClick={this.login}
          >
            登入
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
              <span className="text-center user-darkblue-text">Google</span>
              <span></span>
            </div>
          </div>
          <small
            className="user-darkblue-text position-absolute cursor-point login-text toggle-login"
            onClick={() => {
              this.setState({ showModal: 2 })
            }}
          >
            我要註冊
          </small>
        </Form>
      </div>
    )

    let modalContent = loginModal
    if (this.state.showModal === 2) {
      modalContent = (
        <SignUpModal
          onClose={this.props.onClose}
          showModal={() => this.setState({ showModal: 1 })}
          refreshLoginState={this.props.refreshLoginState}
          signUpSucc={this.signUpSucc}
          emailRegex={emailRegex}
        />
      )
    } else if (this.state.showModal === 4) {
      modalContent = <SignUpSuccModal onClose={this.props.onClose} />
    } else if (this.state.showModal === 3) {
      modalContent = (
        <ForgotPwdModal
          onClose={this.props.onClose}
          showModal={() => this.setState({ showModal: 1 })}
          cursor={cursorPoint}
          emailRegex={emailRegex}
        />
      )
    }

    return (
      <div
        className="user-bg-modal"
        onClick={this.closeModal}
        style={{ display: 'flex' }}
      >
        {modalContent}
      </div>
    )
  }
}

export default UserLightbox
