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
                  <h4>【希爾頓飯店】 (Hilton Niseko Village)</h4>
                </Card.Title>
                <Card.Text className="hotel_slider_card_text">
                  在這裡，旅客可輕鬆前往市區內各大旅遊、購物、餐飲地點。
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
                  <h4>【京王飯店】 (KEIO PRELIA SAPPORO)</h4>
                </Card.Title>
                <Card.Text className="hotel_slider_card_text">
                  無論您是來札幌出差還是休閒旅遊，都可以在此得到滿意的服務。
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
                  <h4>【元町全景公寓】(Panoramique Motomachi)</h4>
                </Card.Title>
                <Card.Text className="hotel_slider_card_text">
                  位於中島公園的Vessel
                  Inn札幌中島公園是您旅遊探索札幌和其周邊地區的最佳選擇。
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
                  <h4>【二世谷村希爾頓飯店】(Hilton Niseko Village)</h4>
                </Card.Title>
                <Card.Text className="hotel_slider_card_text">
                  您將能真切地感受到下川溫之宿飯店的特有的氛圍，它體現在每一間精心規劃的客房中。
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
