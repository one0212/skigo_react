import React, { Component } from 'react'
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
  constructor() {
    super()
    this.state = {
      isOpen: false,
      showLoginIcon: false,
      userDropdown: false,
    }
  }

  refreshLoginState = () => {
    // if (cookies.get('role') === 'VISITOR') {
    //   this.setState({ showLoginIcon: false })
    // } else {
    //   this.setState({ showLoginIcon: true })
    // }
  }

  componentDidMount() {
    if (cookies.get('role') !== 'VISITOR') {
      this.setState({ showLoginIcon: true })
      // todo: 購物車點選跳轉頁
    }
  }

  logout = () => {
    const url = 'http://localhost:3001/api/user/logout'
    fetch(url, {
      method: 'put',
    }).then(response => {
      if (response.status === 200) {
        this.refreshLoginState()
        this.setState({ userDropdown: false })
      }
    })
  }

  render() {
    return (
      <>
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
        <Container
        // onClick={() =>
        //   this.setState({ userDropdown: !this.state.userDropdown })
        // }
        >
          <Navbar
            collapseOnSelect
            className="navbar-light mt-4 mb-2"
            expand="lg"
          >
            <Navbar.Brand href="">
              <img
                className="logo mr-3"
                src="/images/small-logo.svg"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#" className="nav-item mx-3">
                  雪場票券
                </Nav.Link>
                <Nav.Link href="#" className="nav-item mx-3">
                  教練課程
                </Nav.Link>
                <Nav.Link href="#" className="nav-item mx-3">
                  找飯店
                </Nav.Link>
                <Nav.Link href="#" className="nav-item mx-3">
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
                    <FaRegUserCircle
                      style={iconStyle}
                      onClick={() =>
                        this.setState({
                          userDropdown: !this.state.userDropdown,
                        })
                      }
                    />
                  ) : (
                    ''
                  )}

                  {this.state.showLoginIcon ? <FiMail style={iconStyle} /> : ''}
                  {this.state.showLoginIcon ? (
                    <AiOutlineHeart style={iconStyle} />
                  ) : (
                    ''
                  )}
                  <FiShoppingCart style={iconStyle} className="m-3" />
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link
                  className="p-0 user-drop-list text-center position-absolute mt-3"
                  style={{
                    boxShadow: this.state.userDropdown ? '0 0 15px #ccc' : '0',
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
                      <a
                        href="#"
                        class="user-darkblue-text text-decoration-none"
                      >
                        我的帳戶
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        href="#"
                        class="user-darkblue-text text-decoration-none"
                      >
                        我的訂單
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        href="#"
                        class="user-darkblue-text text-decoration-none"
                      >
                        紅利點數
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        href="#"
                        onClick={this.logout}
                        class="cursor-point user-darkblue-text text-decoration-none"
                      >
                        登出
                      </a>
                    </li>
                  </ul>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <UserLightbox
            refreshLoginState={this.refreshLoginState}
            isOpen={this.state.isOpen}
            onClose={() => {
              this.setState({ isOpen: false })
            }}
          />
        </Container>
      </>
    )
  }
}
export default Header
