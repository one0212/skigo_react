import React from 'react'
import HotelIntroductionCarousel from './HotelIntroductionCarousel'
import HotelIntroductionContent from './HotelIntroductionContent'

class HotelIntroduction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hotels: '',
    }
    console.log(this.props)
  }

  componentWillMount() {
    // fetch(`http://localhost:3001/japi/hotel_rooms`, {
    //   method: 'GET',
    // })
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(json => {
    //     this.setState({ hotel_rooms: json })
    //   })
    // const id = this.props.location.pathname.split('/')[3]
    // console.log(id)
    // fetch(`http://localhost:3001/japi/hotels?id=${id}`, {
    //   method: 'GET',
    // })
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(json => {
    //     this.setState({ hotels: json })
    //     console.log(this.state.hotels)
    //   })
  }
  render() {
    return (
      <>
        {/* {this.state.hotels !== ''
          ? this.state.hotels.map((hotel, index) => {
              return (
                <Link to={`/all_room/${hotel.id}`}>
                  <HotelListCard key={index} hotelData={hotel} />
                </Link>
              )
            })
          : ''} */}
        {/* {this.state.hotels.map((img, index) => {
          return <HotelIntroductionCarousel key={index} hotelId={img} />
        })} */}
        <HotelIntroductionCarousel />
        <HotelIntroductionContent />
      </>
    )
  }
}

export default HotelIntroduction
