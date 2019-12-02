import React from 'react'
import '../../css/area_home.css'
import { Carousel, Form } from 'react-bootstrap'
import SlideTicket from './SlideTicket'
import SlideClass from './SlideClass'
import SlideHotel from './SlideHotel'

class TicketAreas extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      total: [],
      scenery: '',
      snow: '',
      novice: '',
      activity: '',
      activeIndex: 0,
    }
  }

  async componentWillMount() {
    try {
      await this.setState({ loading: true })

      // const response = await fetch('http://localhost:5000/try-db', {
      const response = await fetch(
        `http://localhost:3001/ticket-area/${this.props.match.params.areaid}`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)

      const jsonObject = await response.json()

      await this.setState({ total: jsonObject }, function() {
        console.log(this.state.total)
      })
    } catch (e) {
      console.log(e)
    } finally {
      await setTimeout(() => this.setState({ loading: false }))
      // await this.setState({ loading: false })

      console.log(this.state.total)
    }

    //雪場特色狀態
    if (
      this.state.total &&
      this.state.total[0] &&
      this.state.total[0].area_scenery
    ) {
      console.log(this.state.total)
      this.setState({
        scenery: 'flex',
      })
    } else {
      this.setState({
        scenery: 'none',
      })
    }
    if (
      this.state.total &&
      this.state.total[0] &&
      this.state.total[0].area_snow
    ) {
      console.log(this.state.total)
      this.setState({
        snow: 'flex',
      })
    } else {
      this.setState({
        snow: 'none',
      })
    }
    if (
      this.state.total &&
      this.state.total[0] &&
      this.state.total[0].area_novice
    ) {
      console.log(this.state.total)
      this.setState({
        novice: 'flex',
      })
    } else {
      this.setState({
        novice: 'none',
      })
    }
    if (
      this.state.total &&
      this.state.total[0] &&
      this.state.total[0].area_activity
    ) {
      console.log(this.state.total)
      this.setState({
        activity: 'flex',
      })
    } else {
      this.setState({
        activity: 'none',
      })
    }
  }

  // 金額轉千分位
  thousandComma = number => {
    let num = number.toString()
    const pattern = /(-?\d+)(\d{3})/

    while (pattern.test(num)) {
      num = num.replace(pattern, '$1,$2')
    }
    return num
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <div>
            {/* <i className="fas fa-spinner fa-spin" /> */}
            資料載入中
          </div>
        ) : (
          <>
            <div className="wrap">
              <div className="area_header rwd-p">
                <div className="container-fluid area_slider">
                  <div className="row">
                    <div className="col-xl-9 col-lg-12">
                      <div className="area_carousel">
                        <Carousel
                          onSelect={(ek, d, e) => {
                            this.setState({ activeIndex: ek })
                          }}
                        >
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={
                                '/images/areas/' + this.state.total[0].area_pic1
                              }
                              alt="First slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={
                                '/images/areas/' + this.state.total[0].area_pic2
                              }
                              alt="First slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={
                                '/images/areas/' + this.state.total[0].area_pic3
                              }
                              alt="First slide"
                            />
                          </Carousel.Item>
                        </Carousel>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      {/* <div className="weather">
                        <img
                          src={require('../../images/areas/weather.svg')}
                          className="weather_img"
                          alt=""
                        />
                        <div className="d-flex">
                          <p>-10</p>
                          <img
                            src={require('../../images/areas/circle-outline.svg')}
                            className="circle"
                            alt=""
                          />
                          <p className="tem">C</p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="introduction">
                    <div className="d-flex">
                      <h5>{this.state.total[0].area_addr}</h5>
                      <h1>{this.state.total[0].area_name}</h1>
                      <p className="article">
                        {this.state.total[0].area_description}
                      </p>
                      {/* {console.log('des: ' +this.state.total[0].area_description)} */}
                    </div>
                    <div className="number_box">
                      <p className="slider_number">
                        {/* {this.state.total[0].area_pic2 ? '02' : ''} */}0
                        {this.state.activeIndex + 1}
                      </p>
                      <p className="symbol">/</p>
                      <p className="total_number">03</p>
                    </div>
                  </div>
                </div>
                <div className="container introduction2">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex area_title">
                      <h5>{this.state.total[0].area_addr}</h5>
                      <h1>{this.state.total[0].area_name}</h1>
                    </div>
                    {/* <div className="weather">
                      <img
                        src={require('../../images/areas/weather.svg')}
                        className="weather_img"
                        alt=""
                      />
                      <div className="d-flex">
                        <p>-10</p>
                        <img
                          src={require('../../images/areas/circle-outline.svg')}
                          className="circle"
                          alt=""
                        />
                        <p className="tem">C</p>
                      </div>
                    </div> */}
                  </div>
                  <div>
                    <p className="article">
                      {this.state.total[0].area_description}
                    </p>
                  </div>
                </div>
              </div>

              <section className="rwd-p">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-md-12">
                      <div className="area_icon d-flex justify-content-center">
                        <div>
                          <img
                            className="number"
                            src={require('../../images/areas/05.svg')}
                            alt=""
                          />
                          <p className="img_p">滑雪道</p>
                          <p className="img_number">
                            {this.state.total[0].area_number_ski}
                          </p>
                        </div>
                        <div>
                          <img
                            className="longest"
                            src={require('../../images/areas/01.svg')}
                            alt=""
                          />
                          <p className="img_p">最長距離</p>
                          <p className="img_number">
                            {this.state.total[0].area_longest_run}
                          </p>
                        </div>
                        <div>
                          <img
                            className="gradient"
                            src={require('../../images/areas/04.svg')}
                            alt=""
                          />
                          <p className="img_p">最大斜度</p>
                          <p className="img_number">
                            {this.state.total[0].area_slop_gradient}
                          </p>
                        </div>
                        <div>
                          <img
                            className="lifts"
                            src={require('../../images/areas/06.svg')}
                            alt=""
                          />
                          <p className="img_p">纜車</p>
                          <p className="img_number">
                            {this.state.total[0].area_cable_car}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 area_info">
                      <div className="d-flex">
                        <div className="title_sign"></div>
                        <h4>滑雪場資訊</h4>
                      </div>
                      <div className="row date">
                        <div className="col-5">
                          <p>營業期間</p>
                        </div>
                        <div className="col-7">
                          <div className="time">
                            <p>{this.state.total[0].area_start_date}</p>
                            <p>&nbsp;-&nbsp;</p>
                            <p>{this.state.total[0].area_end_date}</p>
                          </div>
                        </div>
                      </div>
                      <div className="row date">
                        <div className="col-5">
                          <p>營業時間</p>
                        </div>
                        <div className="col-7">
                          <div className="time">
                            <p>{this.state.total[0].area_start_time}</p>
                            <p>&nbsp;-&nbsp;</p>
                            <p>{this.state.total[0].area_end_time}</p>
                          </div>
                        </div>
                      </div>
                      <p className="address">
                        {this.state.total[0].area_address}
                      </p>
                      <a className="ski_map" href="#notice1">
                        <img
                          className="icon_map"
                          src={require('../../images/areas/map.svg')}
                          alt=""
                        />
                        滑雪場地圖
                      </a>
                      <div className="lightbox-target" id="notice1">
                        <img
                          src={'/images/areas/' + this.state.total[0].area_img}
                          alt=""
                        />
                        <a className="lightbox-close" href="#"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <img src="/images/areas/ski-map.jpg" alt="" /> */}
              <section className="rwd-p">
                <div className="container">
                  <div className="area_characteristic">
                    <div className="d-flex">
                      <div
                        className="box"
                        style={{ display: this.state.scenery }}
                      >
                        <img src="/images/areas/mountains.svg" alt="" />
                        <p>{this.state.total[0].area_scenery}</p>
                      </div>

                      <div className="box" style={{ display: this.state.snow }}>
                        <img src="/images/areas/snowflake.svg" alt="" />
                        <p>{this.state.total[0].area_snow}</p>
                      </div>
                      <div
                        className="box"
                        style={{ display: this.state.novice }}
                      >
                        <img src="/images/areas/ice-skating.svg" alt="" />
                        <p>{this.state.total[0].area_novice}</p>
                      </div>
                      <div
                        className="box"
                        style={{ display: this.state.activity }}
                      >
                        <img src="/images/areas/snowmobile.svg" alt="" />
                        <p>{this.state.total[0].area_activity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <SlideTicket />
              <SlideClass />
              <SlideHotel />

              <section className="area_access">
                <div className="container">
                  <div className="access_title">
                    <div className="d-flex">
                      <div className="title_sign"></div>
                      <h4>交通路線</h4>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-center">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11607.988663140555!2d142.33874033325841!3d43.335248371799736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f73525ef98cb63d%3A0x9020eebf4f63234b!2z5a-M6Imv6YeO5ruR6Zuq5aC0!5e0!3m2!1szh-TW!2stw!4v1572185752833!5m2!1szh-TW!2stw"
                    frameborder="0"
                    style={{ border: '0', width: '100%', height: '600px' }}
                  />
                  </div>
                </div>
              </section>
            </div>
          </>
        )}
      </>
    )
  }
}

export default TicketAreas
