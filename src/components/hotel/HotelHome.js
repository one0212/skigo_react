import React from 'react'
import HotelCarousel from './HotelCarousel'
import HotelCarouselSlide from './HotelCarouselSlide'
import HotelKeyword from './HotelKeyword'
import HotelHotArea from './HotelHotArea'

class HotelHome extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <>
        <HotelCarousel slides={HotelCarouselSlide} />
        <HotelKeyword />
        <HotelHotArea />
      </>
    )
  }
}

export default HotelHome
