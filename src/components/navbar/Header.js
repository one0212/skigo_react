import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Cookies from 'universal-cookie'
import { FaRegUserCircle } from 'react-icons/fa'
import { FiMail, FiShoppingCart } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'

import UserLightbox from './UserLightbox'
import '../../css/header.css'

let iconStyle = {
  fontSize: '1.5rem',
  color: '#6A6A6A',
  margin: '0.8rem',
  cursor: 'pointer',
}

const cookies = new Cookies()
class Header extends Component {
  constructor(props) {
    console.log(`Header - constructor`)
    super(props)
    this.state = {
      isOpen: false,
      showLoginIcon: false,
      userDropdown: false,
      cartItemQty: props.cartItemQty,
    }
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      `Header - will update. nextProps=${nextProps}, nextState=${nextState}`
    )
  }

  componentWillUnmount() {
    console.log(
      `Header - will unmount. props=${this.props}, state=${this.state}`
    )
  }

  componentWillReceiveProps(nextProps) {
    this.syncCartItemQty()
  }

  refreshLoginState = () => {
    // console.log(this.props)
    if (cookies.get('role') === 'VISITOR') {
      this.setState({ showLoginIcon: false })
    } else {
      this.setState({ showLoginIcon: true })
    }
  }

  cartVerify = () => {
    if (cookies.get('role') === 'VISITOR') {
      this.setState({ isOpen: true })
    } else {
      window.location.href = '/cart'
    }
  }

  syncCartItemQty = () => {
    // if (cookies.get('role') && cookies.get('role') !== 'VISITOR') {
    fetch('http://localhost:3001/api/cart', {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(resp => resp.json())
      .then(json => {
        console.log(json)
        this.setState({ cartItemQty: json.items.length })
      })
      .catch(err => {
        console.log(err)
      })
    // }
  }

  componentWillMount() {
    console.log(`Header - will mount. props=${this.props}, state=${this.state}`)
    if (!cookies.get('role') || cookies.get('role') === 'VISITOR') {
      this.setState({ showLoginIcon: false })
    } else {
      this.setState({ showLoginIcon: true })
      // todo: 購物車點選跳轉頁
    }
    this.syncCartItemQty()
  }

  logout = () => {
    const url = 'http://localhost:3001/api/user/logout'
    fetch(url, {
      method: 'put',
    }).then(response => {
      if (response.status === 200) {
        this.refreshLoginState()
        this.setState({ userDropdown: false })
        // window.location.href = '/'
      }
    })
  }

  render() {
    console.log(`Header - do render. props=${this.props}, state=${this.state}`)
    return (
      <>
        {/* {console.log(window.location)} */}
        <style type="text/css">
          {`
        .btn-orange {
        background-color: #fd702d;
        color: #fff;
        }
        .btn-blue {
          background-color: #4c95e8;
          color: #fff;
        }
    `}
        </style>
        {/* userDropdown之後要搬到最外層 */}
        {window.location.pathname !== '/cart' &&
        window.location.pathname !== '/checkout' &&
        window.location.pathname !== '/activeUser' ? (
          <Navbar
            collapseOnSelect
            className="navbar-light pt-2 mb-2"
            expand="lg"
          >
            <Container>
              <Navbar.Brand href="/" className="ml-4">
                <img
                  className="logo mr-3"
                  src="/images/small-logo.svg"
                  alt="logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/ticketlist" className="nav-item mx-3">
                    雪場票券
                  </Nav.Link>
                  <Nav.Link href="/CoachList" className="nav-item mx-3">
                    教練課程
                  </Nav.Link>
                  <Nav.Link href="/HotelHome" className="nav-item mx-3">
                    找飯店
                  </Nav.Link>
                  <Nav.Link href="/product" className="nav-item mx-3">
                    雪具裝備
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-item mx-3">
                    景點排程
                  </Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                  <Nav.Link>
                    {!this.state.showLoginIcon ? (
                      <input
                        className="nav-item navbar-btn btn btn-outline-secondary btn-sm"
                        type="button"
                        value="登入｜註冊"
                        onClick={() => this.setState({ isOpen: true })}
                      />
                    ) : (
                      ''
                    )}
                    {this.state.showLoginIcon ? (
                      <span>
                        <FaRegUserCircle
                          style={iconStyle}
                          onClick={() =>
                            this.setState({
                              userDropdown: !this.state.userDropdown,
                            })
                          }
                        />
                      </span>
                    ) : (
                      ''
                    )}

                    {this.state.showLoginIcon ? (
                      <span>
                        <FiMail style={iconStyle} />
                      </span>
                    ) : (
                      ''
                    )}
                    {this.state.showLoginIcon ? (
                      <span>
                        <AiOutlineHeart style={iconStyle} />
                      </span>
                    ) : (
                      ''
                    )}
                    <span className="position-relative">
                      <FiShoppingCart
                        style={iconStyle}
                        className="m-3"
                        onClick={this.cartVerify}
                      />
                      <span
                        className="red-point position-absolute text-center"
                        style={{
                          opacity: this.state.cartItemQty !== 0 ? '1' : '0',
                        }}
                      >
                        {this.state.cartItemQty}
                      </span>
                    </span>
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link
                    className="p-0 user-drop-list text-center position-absolute mt-3"
                    style={{
                      boxShadow: this.state.userDropdown
                        ? '0 0 15px #ccc'
                        : '0',
                    }}
                  >
                    <ul
                      className="m-0 list-unstyled drop-menu"
                      style={{
                        opacity: this.state.userDropdown ? '1' : '0',
                        maxHeight: this.state.userDropdown ? '11rem' : '0',
                      }}
                    >
                      <li className="my-3">
                        <Link
                          onClick={() => {
                            this.setState({
                              userDropdown: !this.state.userDropdown,
                            })
                          }}
                          to="/user/profile"
                          className="user-darkblue-text text-decoration-none"
                        >
                          我的帳戶
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          onClick={() => {
                            this.setState({
                              userDropdown: !this.state.userDropdown,
                            })
                          }}
                          to="/user/order"
                          className="user-darkblue-text text-decoration-none"
                        >
                          我的訂單
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          to="#"
                          className="user-darkblue-text text-decoration-none"
                        >
                          紅利點數
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          to="/"
                          onClick={this.logout}
                          className="cursor-point user-darkblue-text text-decoration-none"
                        >
                          登出
                        </Link>
                      </li>
                    </ul>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        ) : (
          ''
        )}
        <UserLightbox
          refreshLoginState={this.refreshLoginState}
          isOpen={this.state.isOpen}
          onClose={() => {
            this.setState({ isOpen: false })
          }}
        />
      </>
    )
  }
}
export default Header
