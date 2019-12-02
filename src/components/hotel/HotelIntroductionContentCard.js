import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../css/hotel/HotelIntroductionContentCard.css'
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from 'react-icons/ti'
import UseAnimations from 'react-useanimations'

class HotelIntroductionContentCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    // console.log(this.props.hotelIntCard.img[0])
  }

  render() {
    return (
      <>
        <Card className="hotel_introduction_card">
          <Card.Img
            variant="top"
            src={this.props.hotelIntCard.img}
            alt="..."
            className="hotel_slider_img"
          />
          <Card.Body>
            <Card.Title className="d-flex justify-content-between">
              <h6>{this.props.hotelIntCard.name}</h6>
              <p
                style={{
                  fontSize: '0.3rem',
                  paddingTop: '2px',
                  marginBottom: '5px',
                  fontWeight: 'normal',
                }}
              >
                房型面積: {this.props.hotelIntCard.roomSize}平方公尺
              </p>
            </Card.Title>

            <Card.Text className="hotel_introduction_card_text">
              {this.props.hotelIntCard.text}
            </Card.Text>
            <div className="d-flex justify-content-between">
              <ul class="list-unstyled d-flex hotel_introduction_card_star">
                <li>
                  <TiStarFullOutline />
                </li>
                <li>
                  <TiStarFullOutline />
                </li>
                <li>
                  <TiStarFullOutline />
                </li>
                <li>
                  <TiStarHalfOutline />
                </li>
                <li>
                  <TiStarOutline />
                </li>
              </ul>
              <span class="hotel_card_heart">
                <UseAnimations
                  animationKey="heart"
                  size={18}
                  style={{ color: 'red' }}
                />
              </span>
            </div>
            <span class="hotel_introduction_money">
              NT <span>{this.props.hotelIntCard.price}</span> / 晚
            </span>
            <Link
              to={`/HotelRoomContent/roomInt/${this.props.hotelIntCard.id}`}
            >
              <Button
                variant="light"
                className="badge-pill hotel_introduction_card_btn"
              >
                more
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default HotelIntroductionContentCard
