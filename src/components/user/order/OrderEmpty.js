import React from 'react'

const OrderEmpty = () => {
  return (
    <>
      <div className="user-order-content text-center">
        <img
          className="user-order-photo"
          src={'images/user/order.png'}
          alt="訂單貓咪"
        />
        <p className="user-order-none ">你沒有尚未付款的訂單</p>
      </div>
    </>
  )
}

export default OrderEmpty
