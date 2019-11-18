import React from 'react'
// import '../css/card_carousels.css'
import Slider from 'react-slick'


class CoachCarousels2 extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  async componentWillMount() {
    try {
      await this.setState({ loading: true })

      // const response = await fetch('http://localhost:5000/try-db', {
      const response = await fetch('http://localhost:5000/coach-class', {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

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
      console.log(this.state.total.length)
    }
  }
  // {for (var i=0 ; i<this.state.total.length ; i++ ){
  //     coachnum = coachnum +1;
  //   }}

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
        <>
          {console.log(this.props.filter)}
          {/* { if( this.props.filter == true ){

        } } */}

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
                      <h4>教練</h4>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="container lesson">
                  <Slider {...settings}>
                    {this.state.total.map((value, index) => {
                      if (!value) return <></>
                      console.log(value.class_sid)
                      return (
                        <div>
                          <div className="card" style={{ width: '18rem' }}>
                            <img
                              className="home_img"
                              src="./images/coach/coach.jpg"
                              alt=""
                            />
                            <div className="card-body">
                              <h5 className="card-title">富良野滑雪場1</h5>
                              <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                              <a href="#" className="btn btn-primary">
                                Go somewhere
                              </a>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </Slider>
                </div>
              </section>
            </>
          )}
        </>
      </>
    )
  }
}

export default CoachCarousels2
