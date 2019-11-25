import React from 'react'
import HotelIntroductionCarousel from './HotelIntroductionCarousel'
import HotelIntroductionContent from './HotelIntroductionContent'

class HotelIntroduction extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <>
        <HotelIntroductionCarousel />
        <HotelIntroductionContent />
      </>
    )
  }
}

export default HotelIntroduction
