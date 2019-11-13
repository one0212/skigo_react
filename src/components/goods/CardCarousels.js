import React from 'react'

class CardCarousels extends React.Component{
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
                    <img className="coach_img_pic" src={require('../../images/coach/coach.jpg')} alt=""/>
                </div>
                <div className="lesson_card_word">
                    <p className="lesson_name">初級雙板滑雪</p>
                    <p className="people">2小時課程</p>
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

export default CardCarousels