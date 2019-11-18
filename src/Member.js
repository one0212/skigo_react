import React from 'react'

import UserAccount from './components/user/account/UserAccount'
import UserAddress from './components/user/address/UserAddress'
import UserOrder from './components/user/order/UserOrder'
import 'bootstrap/dist/css/bootstrap.css'

function Member() {
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

      <UserAccount />
      <UserAddress />
      <UserOrder />
    </>
  )
}

export default Member
