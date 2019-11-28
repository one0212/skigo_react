import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from 'react-icons/ti'
import { IoIosCar } from 'react-icons/io'
import { FiCoffee } from 'react-icons/fi'
import UseAnimations from 'react-useanimations'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../css/hotel/HotelIntroductionContent.css'
import HotelIntroductionCarousel from './HotelIntroductionCarousel'
import HotelIntroductionContentCard from './HotelIntroductionContentCard'

class HotelIntroductionContent extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props)
    this.state = {
      // hotel_rooms: '',
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
    //     // console.log(this.state.hotel_rooms)
    //   })
    // fetch(`http://localhost:3001/japi/hotels?id=${this.props.hotelId}`, {
    //   method: 'GET',
    // })
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(json => {
    //     this.setState({ hotels: json })
    //     console.log(json)
    //   })
    const id = this.props.location.pathname.split('/')[3]
    console.log(id)
    fetch(`http://localhost:3001/japi/hotels?id=${id}`, {
      method: 'GET',
    })
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({ hotels: json[0] })
        console.log(this.state.hotels)
      })
  }

  render() {
    return (
      <>
        {console.log(this.state.hotels)}
        <HotelIntroductionCarousel hotelInt={this.state.hotels} />
        <div className="container">
          <section>
            <Row className="justify-content-between hotel_title_name">
              <Col md={8}>
                <h1>{this.state.hotels.name}</h1>
              </Col>
              <Col md={3}>
                <ul class="list-unstyled d-flex title_star">
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
                  <li>
                    <span>2000</span>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <ul className="list-unstyled d-flex">
                  <li className="mr-5">
                    <p>{this.state.hotels.address}</p>
                  </li>
                  <li>
                    <p>電話:{this.state.hotels.phone}</p>
                  </li>
                </ul>
              </Col>
            </Row>
            <div>
              <p class="lead">{this.state.hotels.text}</p>
            </div>
          </section>
          <section className="hotel_icon_area">
            <Row className="justify-content-around">
              <Col className="col-md-auto hotel_icon d-flex align-items-center justify-content-center">
                <ul className="list-unstyled text-center">
                  <li>
                    <span>
                      <IoIosCar />
                    </span>
                  </li>
                  <li>
                    <p class="mb-0">距離大眾運輸210公尺</p>
                  </li>
                </ul>
              </Col>
              <Col className="col-md-auto hotel_icon d-flex align-items-center justify-content-center">
                <ul className="list-unstyled text-center">
                  <li>
                    <span>
                      <IoIosCar />
                    </span>
                  </li>
                  <li>
                    <p class="mb-0">距離大眾運輸210公尺</p>
                  </li>
                </ul>
              </Col>
              <Col className="col-md-auto hotel_icon d-flex align-items-center justify-content-center">
                <ul className="list-unstyled text-center">
                  <li>
                    <span>
                      <IoIosCar />
                    </span>
                  </li>
                  <li>
                    <p class="mb-0">距離大眾運輸210公尺</p>
                  </li>
                </ul>
              </Col>
              <Col className="col-md-auto hotel_icon d-flex align-items-center justify-content-center">
                <ul className="list-unstyled text-center">
                  <li>
                    <span>
                      <IoIosCar />
                    </span>
                  </li>
                  <li>
                    <p class="mb-0">距離大眾運輸210公尺</p>
                  </li>
                </ul>
              </Col>
              <Col className="col-md-auto hotel_icon d-flex align-items-center justify-content-center">
                <ul className="list-unstyled text-center">
                  <li>
                    <span>
                      <IoIosCar />
                    </span>
                  </li>
                  <li>
                    <p class="mb-0">距離大眾運輸210公尺</p>
                  </li>
                </ul>
              </Col>
            </Row>
          </section>
          <section class="facility_area mt-5">
            <Row>
              <Col md={2}>
                <p className="h5">服務設施</p>
              </Col>
              <Col md>
                <Row className="mb-5">
                  <Col md={1}>
                    <div>
                      <p className="h5 facility_icon">
                        <FiCoffee />
                      </p>
                    </div>
                  </Col>
                  <Col md={10} className="facility_items">
                    <p className="font-weight-bold">可使用語言:</p>
                    <ul className="list-unstyled">
                      <li>
                        <span>中文</span>
                      </li>
                      <li>
                        <span>英文</span>
                      </li>
                      <li>
                        <span>韓文</span>
                      </li>
                      <li>
                        <span>法文</span>
                      </li>
                      <li>
                        <span>中文</span>
                      </li>
                      <li>
                        <span>英文</span>
                      </li>
                      <li>
                        <span>韓文</span>
                      </li>
                      <li>
                        <span>法文</span>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row className="mb-5">
                  <Col md={1}>
                    <div>
                      <p className="h5 facility_icon">
                        <FiCoffee />
                      </p>
                    </div>
                  </Col>
                  <Col md={10} className="facility_items">
                    <p className="font-weight-bold">網路服務:</p>
                    <ul className="list-unstyled">
                      <li>
                        <span>公共區域wi-fi</span>
                      </li>
                      <li>
                        <span>房內免費wi-fi</span>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row className="mb-5">
                  <Col md={1}>
                    <div>
                      <p className="h5 facility_icon">
                        <FiCoffee />
                      </p>
                    </div>
                  </Col>
                  <Col md={10} className="facility_items">
                    <p className="font-weight-bold">休閒娛樂設施:</p>
                    <ul className="list-unstyled">
                      <li>
                        <span>spa</span>
                      </li>
                      <li>
                        <span>按摩</span>
                      </li>
                      <li>
                        <span>健身房</span>
                      </li>
                      <li>
                        <span>票券售後服</span>
                      </li>
                      <li>
                        <span>旅遊行程</span>
                      </li>
                      <li>
                        <span>泳池(室內)</span>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row className="mb-5">
                  <Col md={1}>
                    <div>
                      <p className="h5 facility_icon">
                        <FiCoffee />
                      </p>
                    </div>
                  </Col>
                  <Col md={10} className="facility_items">
                    <p className="font-weight-bold">餐飲服務:</p>
                    <ul className="list-unstyled">
                      <li>
                        <span>餐廳</span>
                      </li>
                      <li>
                        <span>咖啡店</span>
                      </li>
                      <li>
                        <span>酒吧</span>
                      </li>
                      <li>
                        <span>池畔酒吧</span>
                      </li>
                      <li>
                        <span>24小時送餐服務</span>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row className="mb-5">
                  <div class="col-md-1">
                    <div>
                      <p className="h5 facility_icon">
                        <FiCoffee />
                      </p>
                    </div>
                  </div>
                  <Col md={10} className="facility_items">
                    <p className="font-weight-bold">服務與便利設施:</p>
                    <ul className="list-unstyled">
                      <li>
                        <span>可寄放行李</span>
                      </li>
                      <li>
                        <span>外幣兌換</span>
                      </li>
                      <li>
                        <span>提款機</span>
                      </li>
                      <li>
                        <span>保險箱</span>
                      </li>
                      <li>
                        <span>禮賓服務</span>
                      </li>
                      <li>
                        <span>吸菸區</span>
                      </li>
                      <li>
                        <span>送洗服務</span>
                      </li>
                      <li>
                        <span>乾洗服務</span>
                      </li>
                      <li>
                        <span>每日房客清潔服務</span>
                      </li>
                      <li>
                        <span>Morning call服務</span>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col md>
                <Row className="mb-5">
                  <Col md={1}>
                    <div>
                      <p className="h5 facility_icon">
                        <FiCoffee />
                      </p>
                    </div>
                  </Col>
                  <Col md={10} className="facility_items">
                    <p className="font-weight-bold">接待設施:</p>
                    <ul className="list-unstyled">
                      <li>
                        <span>24小時保全</span>
                      </li>
                      <li>
                        <span>24小時櫃台服務</span>
                      </li>
                      <li>
                        <span>無障礙友善設施</span>
                      </li>
                      <li>
                        <span>24小時皆可入住</span>
                      </li>
                      <li>
                        <span>可帶寵物電梯</span>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row className="mb-5">
                  <Col md={1}>
                    <div>
                      <p className="h5 facility_icon">
                        <FiCoffee />
                      </p>
                    </div>
                  </Col>
                  <Col md={10} className="facility_items">
                    <p className="font-weight-bold">可使用語言:</p>
                    <ul className="list-unstyled">
                      <li>
                        <span>中文</span>
                      </li>
                      <li>
                        <span>英文</span>
                      </li>
                      <li>
                        <span>韓文</span>
                      </li>
                      <li>
                        <span>法文</span>
                      </li>
                      <li>
                        <span>中文</span>
                      </li>
                      <li>
                        <span>英文</span>
                      </li>
                      <li>
                        <span>韓文</span>
                      </li>
                      <li>
                        <span>法文</span>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row className="mb-5">
                  <Col md={1}>
                    <div>
                      <p className="h5 facility_icon">
                        <FiCoffee />
                      </p>
                    </div>
                  </Col>
                  <Col md={10} className="facility_items">
                    <p className="font-weight-bold">可使用語言:</p>
                    <ul className="list-unstyled">
                      <li>
                        <span>中文</span>
                      </li>
                      <li>
                        <span>英文</span>
                      </li>
                      <li>
                        <span>韓文</span>
                      </li>
                      <li>
                        <span>法文</span>
                      </li>
                      <li>
                        <span>中文</span>
                      </li>
                      <li>
                        <span>英文</span>
                      </li>
                      <li>
                        <span>韓文</span>
                      </li>
                      <li>
                        <span>法文</span>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </section>
          <section className="mt-5">
            <p
              className="h3"
              style={{ color: '#8DAEC1', letterSpacing: '5px' }}
            >
              鉑爾曼倫的可預訂房型
            </p>
            <Row className="d-flex">
              {this.state.hotels !== ''
                ? this.state.hotels.rooms.map((rooms, index) => {
                    return (
                      <>
                        <HotelIntroductionContentCard hotelIntCard={rooms} />
                      </>
                    )
                  })
                : ''}
              {/* <HotelIntroductionContentCard
                hotelIntCard={hotel.rooms}
              /> */}
              {/* {this.state.hotels !== ''
                ? this.state.hotels.map((hotel, index) => {
                    return (
                      <>
                        <HotelListCard key={index} hotelData={hotel} />
                      </>
                    )
                  })
                : ''} */}
              {/* <Card className="hotel_introduction_card">
              <Card.Img
                variant="top"
                src="/image/hotel/hotel_slider/hotel_4.jpg"
                alt="..."
                className="hotel_slider_img"
              />
              <Card.Body>
                <Card.Title>
                  <h6>【鉑爾曼倫】敦聖潘克拉斯飯店(鉑爾曼)</h6>
                </Card.Title>
                <Card.Text className="hotel_introduction_card_text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                      size={15}
                      style={{ color: 'red' }}
                    />
                  </span>
                </div>
                <span class="hotel_introduction_money">
                  約 $<span>2,400</span>TWD / 晚
                </span>
                <Button
                  variant="light"
                  className="badge-pill hotel_introduction_card_btn"
                >
                  more
                </Button>
              </Card.Body>
            </Card>
            <Card className="hotel_introduction_card">
              <Card.Img
                variant="top"
                src="/image/hotel/hotel_slider/hotel_4.jpg"
                alt="..."
                className="hotel_slider_img"
              />
              <Card.Body>
                <Card.Title>
                  <h6>【鉑爾曼倫】敦聖潘克拉斯飯店(鉑爾曼)</h6>
                </Card.Title>
                <Card.Text className="hotel_introduction_card_text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                      size={15}
                      style={{ color: 'red' }}
                    />
                  </span>
                </div>
                <span class="hotel_introduction_money">
                  約 $<span>2,400</span>TWD / 晚
                </span>
                <Button
                  variant="light"
                  className="badge-pill hotel_introduction_card_btn"
                >
                  more
                </Button>
              </Card.Body>
            </Card>
            <Card className="hotel_introduction_card">
              <Card.Img
                variant="top"
                src="/image/hotel/hotel_slider/hotel_4.jpg"
                alt="..."
                className="hotel_slider_img"
              />
              <Card.Body>
                <Card.Title>
                  <h6>【鉑爾曼倫】敦聖潘克拉斯飯店(鉑爾曼)</h6>
                </Card.Title>
                <Card.Text className="hotel_introduction_card_text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                      size={15}
                      style={{ color: 'red' }}
                    />
                  </span>
                </div>
                <span class="hotel_introduction_money">
                  約 $<span>2,400</span>TWD / 晚
                </span>
                <Button
                  variant="light"
                  className="badge-pill hotel_introduction_card_btn"
                >
                  more
                </Button>
              </Card.Body>
            </Card>

            <Card className="hotel_introduction_card">
              <Card.Img
                variant="top"
                src="/image/hotel/hotel_slider/hotel_4.jpg"
                alt="..."
                className="hotel_slider_img"
              />
              <Card.Body>
                <Card.Title>
                  <h6>【鉑爾曼倫】敦聖潘克拉斯飯店(鉑爾曼)</h6>
                </Card.Title>
                <Card.Text className="hotel_introduction_card_text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                      size={15}
                      style={{ color: 'red' }}
                    />
                  </span>
                </div>
                <span class="hotel_introduction_money">
                  約 $<span>2,400</span>TWD / 晚
                </span>
                <Button
                  variant="light"
                  className="badge-pill hotel_introduction_card_btn"
                >
                  more
                </Button>
              </Card.Body>
            </Card>
            <Card className="hotel_introduction_card">
              <Card.Img
                variant="top"
                src="/image/hotel/hotel_slider/hotel_4.jpg"
                alt="..."
                className="hotel_slider_img"
              />
              <Card.Body>
                <Card.Title>
                  <h6>【鉑爾曼倫】敦聖潘克拉斯飯店(鉑爾曼)</h6>
                </Card.Title>
                <Card.Text className="hotel_introduction_card_text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                      size={15}
                      style={{ color: 'red' }}
                    />
                  </span>
                </div>
                <span class="hotel_introduction_money">
                  約 $<span>2,400</span>TWD / 晚
                </span>
                <Button
                  variant="light"
                  className="badge-pill hotel_introduction_card_btn"
                >
                  more
                </Button>
              </Card.Body>
            </Card>
            <Card className="hotel_introduction_card">
              <Card.Img
                variant="top"
                src="/image/hotel/hotel_slider/hotel_4.jpg"
                alt="..."
                className="hotel_slider_img"
              />
              <Card.Body>
                <Card.Title>
                  <h6>【鉑爾曼倫】敦聖潘克拉斯飯店(鉑爾曼)</h6>
                </Card.Title>
                <Card.Text className="hotel_introduction_card_text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                      size={15}
                      style={{ color: 'red' }}
                    />
                  </span>
                </div>
                <span class="hotel_introduction_money">
                  約 $<span>2,400</span>TWD / 晚
                </span>
                <Button
                  variant="light"
                  className="badge-pill hotel_introduction_card_btn"
                >
                  more
                </Button>
              </Card.Body>
            </Card>
            <Card className="hotel_introduction_card">
              <Card.Img
                variant="top"
                src="/image/hotel/hotel_slider/hotel_4.jpg"
                alt="..."
                className="hotel_slider_img"
              />
              <Card.Body>
                <Card.Title>
                  <h6>【鉑爾曼倫】敦聖潘克拉斯飯店(鉑爾曼)</h6>
                </Card.Title>
                <Card.Text className="hotel_introduction_card_text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                      size={15}
                      style={{ color: 'red' }}
                    />
                  </span>
                </div>
                <span class="hotel_introduction_money">
                  約 $<span>2,400</span>TWD / 晚
                </span>
                <Button
                  variant="light"
                  className="badge-pill hotel_introduction_card_btn"
                >
                  more
                </Button>
              </Card.Body>
            </Card>
            <Card className="hotel_introduction_card">
              <Card.Img
                variant="top"
                src="/image/hotel/hotel_slider/hotel_4.jpg"
                alt="..."
                className="hotel_slider_img"
              />
              <Card.Body>
                <Card.Title>
                  <h6>【鉑爾曼倫】敦聖潘克拉斯飯店(鉑爾曼)</h6>
                </Card.Title>
                <Card.Text className="hotel_introduction_card_text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                      size={15}
                      style={{ color: 'red' }}
                    />
                  </span>
                </div>
                <span class="hotel_introduction_money">
                  約 $<span>2,400</span>TWD / 晚
                </span>
                <Button
                  variant="light"
                  className="badge-pill hotel_introduction_card_btn"
                >
                  more
                </Button>
              </Card.Body>
            </Card> */}
            </Row>
          </section>
        </div>
      </>
    )
  }
}

export default HotelIntroductionContent
