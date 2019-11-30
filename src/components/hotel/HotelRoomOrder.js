import React from 'react'
import HotelRoomCarousel from './HotelRoomCarousel'
import HotelRoomContent from './HotelRoomContent'

class HotelRoomOrder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <HotelRoomCarousel />
        <HotelRoomContent
          handleCartItemQtyChange={this.props.handleCartItemQtyChange}
        />
      </>
    )
  }
}

export default HotelRoomOrder
