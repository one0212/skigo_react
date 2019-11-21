import React from 'react'
import '../css/card_carousels.css'
import Slider from 'react-slick'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

class SlideCoach extends React.Component {
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
        `http://localhost:3001/coach-class/${this.props.match.params.id}`,
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
      //console.log(this.state.total.length)
    }
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
                  <h4>教練</h4>
                </div>
              </div>
              <hr />
            </div>
            <div className="container lesson">
              <Slider {...settings}>
                {this.state.total.map((value, index) => {
                  if (!value) return <></>
                  console.log("ok")
                  console.log(value.length)
                  return (
                    <div>
                      <div className="card" style={{ width: '18rem' }}>
                        <img
                          className="home_img"
                          src={'/images/coach/' + value.coach_pic}
                          alt=""
                        />
                        <div className="card-body">
                          <h5 className="card-title">{value.coach_name}</h5>
                          <p className="coach_introduce">{value.coach_intr}</p>
                          <Link to={'/CoachBook/' + value.coach_sid} className="btn">預約教練</Link>
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

export default withRouter(SlideCoach)
