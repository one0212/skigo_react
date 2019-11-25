import React from 'react'
import '../../css/ticket_carousels.css'
import Slider from 'react-slick'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

class SlideTicket extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      total: [],
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

      if (response) {
        console.log('get data!')
      }

      if (!response.ok) throw new Error(response.statusText)

      const jsonObject = await response.json()

      await this.setState({ total: jsonObject }, function() {
        console.log(this.state.total.class_board)
      })
    } catch (e) {
      console.log(e)
    } finally {
      await setTimeout(() => this.setState({ loading: false }))
      // await this.setState({ loading: false })
      // console.log('看我')
      console.log('slideticket : ')
      console.log(this.state.total)
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
        {this.state.loading ? (
          <div>
            {/* <i className="fas fa-spinner fa-spin" /> */}
            資料載入中
          </div>
        ) : (
          <section className="area_lesson">
            <div className="container">
              <div className="lesson_title">
                <div className="d-flex">
                  <div className="title_sign"></div>
                  <h4>票券</h4>
                </div>
              </div>
              <hr />
            </div>
            <div className="container lesson">
              <Slider {...settings}>
                {/* card */}
                {this.state.total.map((value, index) => {
                  if (!value) return <></>
                  console.log('ok')
                  console.log(value.length)
                  return (
                    <div>
                      <div className="card" style={{ width: '18rem' }}>
                        <img
                          className="home_img"
                          src={'/images/areas/' + value.ticket_pic}
                          alt=""
                        />
                        <div className="card-body">
                          <h5 className="card-title">{value.area_name}</h5>
                          <p className="card-text">
                            {value.ticket_name}|{value.ticket_age}
                          </p>
                          <p className="card-text">NT {this.thousandComma(value.ticket_price)}</p>
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
        )}
      </>
    )
  }
}

export default withRouter(SlideTicket)
