import React from 'react'

const AddressEmpty = () => {
  return (
    <>
      <div className="user-address-photo align-self-center mt-5 ">
        <img src={'images/user/address.png'} alt="地址簿" />
        <span className="">你的地址簿是空的</span>
      </div>
    </>
  )
}

export default AddressEmpty
