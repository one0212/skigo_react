import React from 'react'
import '../../css/ticket_carousels2.css'
import Slider from 'react-slick'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

class SlideTicket2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: [],
    }
  }

  componentDidMount() {
    const sameticket = { ticket: this.props.sameticket }
    fetch('http://localhost:3001/ticket-same', {
      body: JSON.stringify(sameticket), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json',
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
    })
      .then(response => response.json()) // 輸出成 json
      .then(json => {
        this.setState({ total: json }, () => {
          console.log(this.state.total)
        })
      })
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
    const settings = {
      className: 'center',
      infinite: true,
      centerPadding: '45px',
      slidesToShow: 3, //一次顯示4個
      slidesToScroll: 1, //切換下一頁時移動1個
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1300, // RWD在1024寬度時切換顯示數量
          settings: {
            slidesToShow: 2, //一次顯示3個
            slidesToScroll: 1, //切換下一頁時移動3個
          },
        },
        {
          breakpoint: 896, // RWD在600寬度時切換顯示數量
          settings: {
            slidesToShow: 1, //一次顯示2個
            slidesToScroll: 1, //切換下一頁時移動2個
          },
        },
      ],
    }
    return (
      <>
        <section className="area_slide2 rwd-p">
          <div
            className="container"
            style={{ paddingRight: '0', paddingLeft: '0' }}
          >
            <div className="slide_title">
              <div className="d-flex">
                <div className="title_sign"></div>
                <h4>其他相關票券</h4>
              </div>
            </div>
            <hr />
          </div>
          <div className="container slide">
            <Slider {...settings}>
              {/* card */}
              {this.state.total.map((value, index) => {
                if (!value) return <></>
                console.log('ok')
                console.log(value.length)
                return (
                  <div>
                    <div className="card" style={{ width: '100%' }}>
                      <img
                        className="home_img"
                        src={'/images/areas/' + value.ticket_pic}
                        alt=""
                      />
                      <div className="card-body">
                        <h5 className="card-title">{value.area_name}</h5>
                        <p className="card-text">
                          {value.ticket_name} | {value.ticket_age}
                        </p>
                        <p className="card-text">
                          NT {this.thousandComma(value.ticket_price)}
                        </p>
                        <Link
                          to={'/ticketpage/' + value.ticket_sid}
                          className="btn btn-primary"
                        >
                          查看商品
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        </section>
      </>
    )
  }
}

export default withRouter(SlideTicket2)
