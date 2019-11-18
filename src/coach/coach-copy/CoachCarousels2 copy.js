import React from 'react'
import '../css/card_carousels.css'
import CoachCarouselCard2 from './CoachCarouselCard2'
// import ClassCard from '../../coach/ClassCard';
// import CardCarousels from './CardCarousels';
import CardCarouselsCopy from '../components/goods/CardCarouselsCopy'

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
    return (
      <>
        <div className="">
                <section className="area_lesson">
                  <div className="container">
                    <div className="lesson_title">
                      <div className="d-flex">
                        <div className="title_sign"></div>
                        <h4>教練</h4>
                      </div>
                    </div>
                    <hr />
                    <div
                      id="carouselExampleControls2"
                      className="carousel slide lesson_slide d-flex justify-content-center"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                      <div className="carousel-item active">
                      <div className="lesson d-flex justify-content-center">
                      <CoachCarouselCard2 />
                      <CoachCarouselCard2 />
                      <CoachCarouselCard2 />
                      </div>
                      </div>
                        <a
                          className="carousel-control-prev"
                          href="#carouselExampleControls2"
                          role="button"
                          data-slide="prev"
                        >
                          <i className="fas fa-chevron-left icon-style"></i>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carouselExampleControls2"
                          role="button"
                          data-slide="next"
                        >
                          <i className="fas fa-chevron-right icon-style"></i>
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
          
       
        {/* <div className="carousel-item">
                <div className="lesson d-flex justify-content-center">
                    
                    <CoachCarouselCard2 />
                    
                    <CardCarouselsCopy/>
                    
                    <CardCarouselsCopy/>
                </div>
            </div> */}
      </>
    )
  }
}

export default CoachCarousels2
