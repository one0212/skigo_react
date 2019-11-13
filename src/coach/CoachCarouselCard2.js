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
        <div class="coach ">
        <a href="#">
            <div class="coach_img">
                <img class="coach_img_pic" src="./images/coach/coach.jpg" alt="" />
            </div>
            <div>
                <h3>叉叉圈教練</h3>
                  <p class="coach_introduce">
                      專業講師開班，2小時的雙板滑雪體驗課程，教您最基礎的滑雪知識!
                  </p>
            <button class="btn">預約教練</button>
            </div>
        </a>
        </div>
      </>
    )
  }
 
}

export default CoachCarouselCard