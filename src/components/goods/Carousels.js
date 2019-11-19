import React from 'react'
import '../../css/card_carousels.css'
import Slider from 'react-slick'

class Carousels extends React.Component {
  constructor() {
    super()
    this.state = {}
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
        <section className="area_lesson">
          <div className="container">
            <div className="lesson_title">
              <div className="d-flex">
                <div className="title_sign"></div>
                <h4>課程</h4>
              </div>
            </div>
            <hr />
          </div>
          <div className="container lesson">
            <Slider {...settings}>
            {/* data1 */}
              <div>
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    className="home_img"
                    src={require('../../images/coach/coach.jpg')}
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">富良野滑雪場1</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            {/* data2 */}
              <div>
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    className="home_img"
                    src={require('../../images/coach/coach.jpg')}
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">富良野滑雪場2</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              {/* data3 */}
              <div>
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    className="home_img"
                    src={require('../../images/coach/coach.jpg')}
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">富良野滑雪場3</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              {/* data4 */}
              <div>
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    className="home_img"
                    src={require('../../images/coach/coach.jpg')}
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">富良野滑雪場4</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              {/* data5 */}
              <div>
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    className="home_img"
                    src={require('../../images/coach/coach.jpg')}
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">富良野滑雪場5</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              {/* card end */}
            
            </Slider>
          </div>
        </section>
      </>
    )
  }
}

export default Carousels
