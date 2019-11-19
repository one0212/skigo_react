import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const CheckoutToCart = () => {
  return (
    <span class="mx-4 my-2 d-inline-block">
      <Link to="/cart" class="shop-lightblue-text text-decoration-none">
        <FiChevronLeft style={{ fontSize: '20px' }} /> 返回購物車
      </Link>
    </span>
  )
}

export default CheckoutToCart
