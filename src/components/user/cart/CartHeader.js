import React from 'react'
import { Navbar } from 'react-bootstrap'

const CartHeader = () => {
  return (
    <>
      <Navbar collapseOnSelect className="navbar-light mt-4 mb-2" expand="lg">
        <Navbar.Brand href="/" className="ml-4">
          <img className="logo mr-3" src="/images/small-logo.svg" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <h5 className="m-0 px-4">購物車</h5>
          <span className="shop-step shop-lightblue-bg text-light text-center">
            1
          </span>
          <span className="shop-step-text user-darkblue-text">
            選擇要結帳的XXX
          </span>
          <span className="shop-step-line shop-gray-bg"></span>
          <span className="shop-step shop-gray-bg text-light text-center">
            2
          </span>
          <span className="shop-step-text shop-gray-text">填寫地址與付款</span>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default CartHeader
