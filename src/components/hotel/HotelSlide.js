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
import '../../css/hotel/HotelSlide.css'

class HotelSlider extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    const settings = {
      //   dots: true,
      infinite: true,
      slidesToShow: 3,
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
                src="/images/hotel/hotel_slider/hotel_1.jpg"
                alt="..."
                className="hotel_slider_img"
              />
              <Card.Body>
                <Card.Title>
                  <h4>【鉑爾曼倫】敦聖潘克拉斯飯店(鉑爾曼)</h4>
                </Card.Title>
                <Card.Text className="hotel_slider_card_text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="hotel_slider_star">
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
                </div>
                <Button variant="light" className="slider_card_btn badge-pill">
                  more
                </Button>
              </Card.Body>
            </Card>
            <Card className="hotel_slider_card">
              <Card.Img
                variant="top"
                src="/images/hotel/hotel_slider/hotel_2.jpg"
                alt="..."
                className="hotel_slider_img"
              />
              <Card.Body>
                <Card.Title>
                  <h4>【鉑爾曼倫】敦聖潘克拉斯飯店(鉑爾曼)</h4>
                </Card.Title>
                <Card.Text className="hotel_slider_card_text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="hotel_slider_star">
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
                </div>
                <Button variant="light" className="slider_card_btn badge-pill">
                  more
                </Button>
              </Card.Body>
            </Card>
            <Card className="hotel_slider_card">
              <Card.Img
                variant="top"
                src="/images/hotel/hotel_slider/hotel_3.jpg"
                alt="..."
                className="hotel_slider_img"
              />
              <Card.Body>
                <Card.Title>
                  <h4>【鉑爾曼倫】敦聖潘克拉斯飯店(鉑爾曼)</h4>
                </Card.Title>
                <Card.Text className="hotel_slider_card_text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="hotel_slider_star">
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
                </div>
                <Button variant="light" className="slider_card_btn badge-pill">
                  more
                </Button>
              </Card.Body>
            </Card>
            <Card className="hotel_slider_card">
              <Card.Img
                variant="top"
                src="/images/hotel/hotel_slider/hotel_4.jpg"
                alt="..."
                className="hotel_slider_img"
              />
              <Card.Body>
                <Card.Title>
                  <h4>【鉑爾曼倫】敦聖潘克拉斯飯店(鉑爾曼)</h4>
                </Card.Title>
                <Card.Text className="hotel_slider_card_text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="hotel_slider_star">
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
                </div>
                <Button variant="light" className="slider_card_btn badge-pill">
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

export default HotelSlider
