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
  }

  render() {
    return (
      <>
        {console.log(this.props.hotelIntCard)}
        <Card className="hotel_introduction_card">
          <Card.Img
            variant="top"
            src="/image/hotel/hotel_slider/hotel_4.jpg"
            alt="..."
            className="hotel_slider_img"
          />
          <Card.Body>
            <Card.Title>
              <h6>{this.props.hotelIntCard.name}</h6>
            </Card.Title>
            <Card.Text className="hotel_introduction_card_text">skd</Card.Text>
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
                  size={15}
                  style={{ color: 'red' }}
                />
              </span>
            </div>
            <span class="hotel_introduction_money">
              約 $<span>jfdf</span>TWD / 晚
            </span>
            <Link to="/HotelRoomOrder">
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
