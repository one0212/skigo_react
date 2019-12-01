import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../css/hotel/HotelListCard.css'
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from 'react-icons/ti'
import UseAnimations from 'react-useanimations'

class HotelListCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    // console.log(this.props.hotelData)
  }

  render() {
    return (
      <Card className="hotel_list_card" style={{ border: 'none' }}>
        <Card.Img
          variant="top"
          src={this.props.hotelData.img[0]}
          alt="..."
          className="hotel_slider_img"
        />
        <Card.Body>
          <Card.Title>
            <h6>{this.props.hotelData.showName}</h6>
          </Card.Title>
          <Card.Text className="hotel_list_card_text">
            {this.props.hotelData.text}
          </Card.Text>
          <div className="d-flex justify-content-between">
            <ul class="list-unstyled d-flex hotel_list_card_star">
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
          <span class="hotel_card_money">
            約 NT <span>{this.props.hotelData.showPrice}</span> / 晚
          </span>
          <Link
            to={`/HotelIntroductionContent/all_room/${this.props.hotelData.id}`}
          >
            <Button variant="light" className="badge-pill hotel_list_card_btn">
              more
            </Button>
          </Link>
        </Card.Body>
      </Card>
    )
  }
}

export default HotelListCard
