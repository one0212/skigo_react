import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Cookies from 'universal-cookie'
import { FaRegUserCircle } from 'react-icons/fa'
import { FiMail, FiShoppingCart } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { GoogleLogout } from 'react-google-login'

import UserLightbox from './UserLightbox'
import '../../css/header.css'

let iconStyle = {
  fontSize: '1.5rem',
  color: '#6A6A6A',
  margin: '0.8rem',
  cursor: 'pointer',
}

const cookies = new Cookies()
let prevScrollPos = 0
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      showLoginIcon: false,
      userDropdown: false,
      cartItemQty: props.cartItemQty,
      userAvatarUrl: '/images/avatar/default.png',
    }
  }

  componentWillReceiveProps(nextProps) {
    if (cookies.get('role') && cookies.get('role') !== 'VISITOR') {
      this.syncCartItemQty()
    }
  }

  refreshLoginState = () => {
    // console.log(this.props)
    if (!cookies.get('role') || cookies.get('role') === 'VISITOR') {
      this.setState({ showLoginIcon: false })
    } else {
      this.setState({ showLoginIcon: true })
    }
  }

  cartVerify = () => {
    if (!cookies.get('role') || cookies.get('role') === 'VISITOR') {
      this.setState({ isOpen: true })
    } else {
      window.location.href = '/cart'
    }
  }

  syncCartItemQty = () => {
    if (cookies.get('role') && cookies.get('role') !== 'VISITOR') {
      fetch('http://localhost:3001/api/cart', {
        headers: {
          'content-type': 'application/json',
        },
      })
        .then(resp => {
          if (resp.status === 200) {
            return resp.json()
          } else {
            throw new Error('get cart api status !== error')
          }
        })
        .then(json => {
          console.log(json)
          this.setState({ cartItemQty: json.items.length })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  handleScroll = () => {
    // let prevScrollPos = window.pageYOffset
    let currentScrollPos = window.pageYOffset
    console.log(currentScrollPos, prevScrollPos)
    prevScrollPos > currentScrollPos
      ? this.setState({
          top: '0',
        })
      : this.setState({
          top: '-100px',
        })

    prevScrollPos = currentScrollPos
    console.log(prevScrollPos)
  }

  componentWillMount() {
    window.removeEventListener('scroll', this.handleScroll)
    if (!cookies.get('role') || cookies.get('role') === 'VISITOR') {
      this.setState({ showLoginIcon: false })
    } else {
      this.setState({ showLoginIcon: true })
      this.syncCartItemQty()
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  signOut = () => {
    const url = 'http://localhost:3001/api/user/logout'
    fetch(url, {
      method: 'put',
    }).then(response => {
      if (response.status === 200) {
        this.setState({ userDropdown: false })
        this.refreshLoginState()
        if (window.FB) {
          window.FB.logout(resp => {
            console.log(`fb-loged out. resp=${resp}`)
          })
        }
        window.location.href = '/'
      }
    })
  }

  handleAvatarChange = url => {
    this.setState({ userAvatarUrl: url })
  }

  render() {
    const isGLogin = cookies.get('role') === 'GOOGLE'
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
          <>
            <Navbar
              collapseOnSelect
              className="navbar-light pt-2 mb-2 navbar-hidden"
              expand="lg"
              onScroll={this.handleScroll}
              style={{ top: this.state.top }}
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
                    <Nav.Link
                      href="/AttractionsIndex"
                      className="nav-item mx-3"
                    >
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
                        <span style={{ borderRadius: '50%' }}>
                          {/* <FaRegUserCircle
                            style={iconStyle}
                            avatarUrl={this.state.userAvatarUrl}
                            onClick={() =>
                              this.setState({
                                userDropdown: !this.state.userDropdown,
                              })
                            }
                          /> */}
                          <div
                            style={{
                              display: 'inline-block',
                              borderRadius: '50%',
                              width: '40px',
                              height: '40px',
                              border: '1px solid rgb(106,106,106)',
                              marginRight: '12.8px',
                            }}
                          >
                            <img
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '50%',
                              }}
                              src={this.state.userAvatarUrl}
                              alt="avatar"
                              onClick={() =>
                                this.setState({
                                  userDropdown: !this.state.userDropdown,
                                })
                              }
                            />
                          </div>
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
                          {isGLogin ? (
                            <GoogleLogout
                              clientId="71115162347-h4vb50788t99f79o1pata6n1u164m3ms.apps.googleusercontent.com"
                              buttonText="Logout"
                              onLogoutSuccess={this.signOut}
                              onFailure={err => console.log(err)}
                              render={renderProps => (
                                <Link
                                  to="/"
                                  onClick={renderProps.onClick}
                                  className="cursor-point user-darkblue-text text-decoration-none"
                                >
                                  登出
                                </Link>
                              )}
                            ></GoogleLogout>
                          ) : (
                            <Link
                              to="/"
                              onClick={this.signOut}
                              className="cursor-point user-darkblue-text text-decoration-none"
                            >
                              登出
                            </Link>
                          )}
                        </li>
                      </ul>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <div style={{ width: '100%', height: '100px' }}></div>
          </>
        ) : (
          ''
        )}
        <UserLightbox
          refreshLoginState={this.refreshLoginState}
          isOpen={this.state.isOpen}
          onClose={() => {
            this.setState({ isOpen: false })
          }}
          handleAvatarChange={this.handleAvatarChange}
        />
      </>
    )
  }
}
export default Header
