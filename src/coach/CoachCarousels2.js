import React from 'react'


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
                          
                          {/* this.state.total.length
                            {this.state.map((value, index) => {
                              if(){

                              }
                              
                            })} */}

                            

                            {this.state.total.map((value, index) => {
                              if (!value) return <></>
                              console.log(value.class_sid)
                              {/* if(this.state.total.length%3 == 1){
                                return (<div className="carousel-item active">
                                  <div className="lesson d-flex justify-content-center">)
                              } */}
                              return (
                                <div className="coach ">
                                  <a href="#">
                                    <div className="coach_img">
                                      <img
                                        className="coach_img_pic"
                                        src={'/images/coach/' + value.coach_pic}
                                        alt=""
                                      />
                                    </div>
                                    <div>
                                      <h3>{value.coach_name}</h3>
                                      <p className="coach_introduce">
                                        {value.coach_intr}
                                      </p>
                                      <button className="btn">預約教練</button>
                                    </div>
                                  </a>
                                </div>
                              )

                              {/* if(this.state.total.length%3 == 0){
                                return </div></div>
                              } */}
                            })}
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
            </>
          )}
        </>

        {/* <div className="coach ">
        <a href="#">
            <div className="coach_img">
                <img className="coach_img_pic" src="./images/coach/coach.jpg" alt="" />
            </div>
            <div>
                <h3>叉叉圈教練</h3>
                  <p className="coach_introduce">
                      專業講師開班，2小時的雙板滑雪體驗課程，教您最基礎的滑雪知識!
                  </p>
            <button className="btn">預約教練</button>
            </div>
        </a>
        </div> */}
      </>
    )
  }
}

export default CoachCarousels2
