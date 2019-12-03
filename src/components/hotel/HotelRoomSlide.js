import React from 'react'
import Slider from 'react-slick'
import { Card, Button } from 'react-bootstrap'
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from 'react-icons/ti'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import '../../css/hotel/HotelRoomSlide.css'
import UseAnimations from 'react-useanimations'

class HotelRoomSlide extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    const settings = {
      //   dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      //   autoplay: false,
      speed: 800,
      adaptiveHeight: true,
      //   autoplaySpeed: 2000,
      //   cssEase: "linear"
    }
    return (
      <div className="container">
        <div>
          <Slider {...settings} className="hotel_slider d-flex">
            <Card className="hotel_slider_card">
              <Card.Img
                variant="top"
                src="/images/hotel/hotelHomeImg02.jpeg"
                alt="..."
                className="hotel_slider_img"
              />
              <Card.Body>
                <Card.Title>
                  <h5 className="font-weight-light">
                    【二世谷村希爾頓飯店】 (Hilton Niseko Village)
                  </h5>
                </Card.Title>
                <div className="d-flex justify-content-between hotel_slider_star">
                  <ul class="list-unstyled d-flex">
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
                <span class="hotel_card_money">
                  約 NT <span>1,690</span>TWD / 晚
                </span>
                <Button
                  variant="light"
                  className="hotel_room_slider_card_btn badge-pill"
                >
                  more
                </Button>
              </Card.Body>
            </Card>
            <Card className="hotel_slider_card">
              <Card.Img
                variant="top"
                src="/images/hotel/hotelHomeImg03.jpeg"
                alt="..."
                className="hotel_slider_img"
              />
              <Card.Body>
                <Card.Title>
                  <h5 className="font-weight-light">
                    【京王飯店】 (KEIO PRELIA SAPPORO)
                  </h5>
                </Card.Title>
                <div className="d-flex justify-content-between hotel_slider_star">
                  <ul class="list-unstyled d-flex">
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
                <span class="hotel_card_money">
                  約 NT <span>2,400</span>TWD / 晚
                </span>
                <Button
                  variant="light"
                  className="hotel_room_slider_card_btn badge-pill"
                >
                  more
                </Button>
              </Card.Body>
            </Card>
            <Card className="hotel_slider_card">
              <Card.Img
                variant="top"
                src="/images/hotel/hotelHomeImg04.jpg"
                alt="..."
                className="hotel_slider_img"
              />
              <Card.Body>
                <Card.Title>
                  <h5 className="font-weight-light">
                    【元町全景公寓】(Panoramique Motomachi)
                  </h5>
                </Card.Title>
                <div className="d-flex justify-content-between hotel_slider_star">
                  <ul class="list-unstyled d-flex">
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
                <span class="hotel_card_money">
                  約 NT <span>2,789</span>TWD / 晚
                </span>
                <Button
                  variant="light"
                  className="hotel_room_slider_card_btn badge-pill"
                >
                  more
                </Button>
              </Card.Body>
            </Card>
            <Card className="hotel_slider_card">
              <Card.Img
                variant="top"
                src="/images/hotel/hotelHomeImg05.jpg"
                alt="..."
                className="hotel_slider_img"
              />
              <Card.Body>
                <Card.Title>
                  <h5 className="font-weight-light">
                    【二世谷村希爾頓飯店】(Hilton Niseko Village)
                  </h5>
                </Card.Title>
                <div className="d-flex justify-content-between hotel_slider_star">
                  <ul class="list-unstyled d-flex">
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
                <span class="hotel_card_money">
                  約 NT <span>2,376</span>TWD / 晚
                </span>
                <Button
                  variant="light"
                  className="hotel_room_slider_card_btn badge-pill"
                >
                  more
                </Button>
              </Card.Body>
            </Card>
            <Card className="hotel_slider_card">
              <Card.Img
                variant="top"
                src="/images/hotel/hotelhomepage.jpg"
                alt="..."
                className="hotel_slider_img"
              />
              <Card.Body>
                <Card.Title>
                  <h5 className="font-weight-light">
                    【鉑爾曼倫】敦聖潘克拉斯飯店(鉑爾曼)
                  </h5>
                </Card.Title>
                <div className="d-flex justify-content-between hotel_slider_star">
                  <ul class="list-unstyled d-flex">
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
                <span class="hotel_card_money">
                  約 NT <span>2,400</span>TWD / 晚
                </span>
                <Button
                  variant="light"
                  className="hotel_room_slider_card_btn badge-pill"
                >
                  more
                </Button>
              </Card.Body>
            </Card>
          </Slider>
        </div>
      </div>
    )
  }
}

export default HotelRoomSlide
