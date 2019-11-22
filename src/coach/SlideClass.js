import React from 'react'
import '../css/card_carousels.css'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

class SlideCoach extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      filter: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    }
  }

  async componentDidMount() {
    try {
      await this.setState({ loading: true })
      let filterparams = {
        sort: null,
        name: this.state.filter,
      }
      // const response = await fetch('http://localhost:5000/try-db', {
      const response = await fetch('http://localhost:3001/coach-random', {
        method: 'POST',
        body: JSON.stringify(filterparams),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      if (!response.ok) throw new Error(response.statusText)

      const jsonObject = await response.json()

      await this.setState({ total: jsonObject }, function() {
        // console.log(this.state.total.class_board)
      })
    } catch (e) {
      console.log(e)
    } finally {
      await setTimeout(() => this.setState({ loading: false }))
      // await this.setState({ loading: false })
      // console.log(this.state.total)
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
          <>
            <section className="area_lesson">
              <div className="container">
                <div className="lesson_title">
                  <div className="d-flex">
                    <div className="title_sign"></div>
                    <h4>推薦課程</h4>
                  </div>
                </div>
                <hr />
              </div>
              <div className="container lesson slideClass">
                <Slider {...settings}>
                  {this.state.total.map((value, index) => {
                    if (!value) return <></>

                    return (
                      <Link to={'/CoachClass/' + value.class_sid}>
                        <div className="card" style={{ width: '18rem' }}>
                          <img
                            className="home_img"
                            src={'/images/coach/' + value.class_pic}
                            alt=""
                          />
                          <div className="card-body">
                            <h5 className="card-title">
                              {value.class_level}
                              {value.class_board} | {value.class_name}
                            </h5>
                            <p className="language font-orange d-flex">
                              {value.class_lang_cha === 1 ? (
                                <span>國語</span>
                              ) : (
                                ''
                              )}
                              {value.class_lang_eng === 1 ? (
                                <span>英語</span>
                              ) : (
                                ''
                              )}
                              {value.class_lang_jap === 1 ? (
                                <span>日語</span>
                              ) : (
                                ''
                              )}
                            </p>
                            {value.class_field}-{value.class_snow_field}雪場
                            <p className="price">
                              NT {this.thousandComma(value.class_price)}
                            </p>
                            <div className="font-blue d-flex justify-content-center">
                              <p>
                                {value.class_sell_start} ~{' '}
                                {value.class_sell_end}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </Slider>
              </div>
            </section>
          </>
        )}
      </>
    )
  }
}

export default SlideCoach
