import React from 'react'
import HotelRoomCarousel from './HotelRoomCarousel'
import HotelRoomContent from './HotelRoomContent'

class HotelRoomOrder extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <>
        <HotelRoomCarousel />
        <HotelRoomContent />
      </>
    )
  }
}

export default HotelRoomOrder
