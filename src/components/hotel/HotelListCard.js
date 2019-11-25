import React from 'react'
import { Card, Button } from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../css/hotel/HotelListCard.css'
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from 'react-icons/ti'
import UseAnimations from 'react-useanimations'

class HotelListCard extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Card className="hotel_list_card" style={{ border: 'none' }}>
        <Card.Img
          variant="top"
          src="/images/hotel/hotel_slider/hotel_4.jpg"
          alt="..."
          className="hotel_slider_img"
        />
        <Card.Body>
          <Card.Title>
            <h6>【鉑爾曼倫】敦聖潘克拉斯飯店(鉑爾曼)</h6>
          </Card.Title>
          <Card.Text className="hotel_list_card_text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
            約 $<span>2,400</span>TWD / 晚
          </span>
          <Button variant="light" className="badge-pill hotel_list_card_btn">
            more
          </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default HotelListCard
