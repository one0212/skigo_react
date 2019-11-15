import React from 'react'

class CoachCarouselCard extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
     return (
      <>
        {/* <!-- lesson1 --> */}
        <div className="coach ">
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
        </div>
      </>
    )
  }
 
}

export default CoachCarouselCard