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
        <div className="lesson_card">
            <a href="#">
                <div className="lesson_img">
                    <img className="coach_img_pic" src='./images/coach/coach.jpg' alt=""/>
                </div>
                <div className="lesson_card_word">
                    <p className="lesson_name">初級雙板|2小時上手</p>
                    <p className="language font-orange d-flex">
                        <span>國語</span>
                        <span>英語</span>
                        <span>日語</span>
                    </p>
                    <p className="people">北海道-XX雪場</p>
                    
                    <div className="d-flex justify-content-end align-items-center">
                        <p>NT</p><p className="price">16,000</p>
                    </div>
                    <div className="font-blue d-flex justify-content-center">
                    <p>販售時間 : 即日起~2020.2.3</p>
                    </div>
                </div>
            </a>
        </div>
      </>
    )
  }
 
}

export default CoachCarouselCard