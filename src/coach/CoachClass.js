import React from 'react'
import '../css/coach_class.css';
import CoachCarousels from './CoachCarousels'
import CoachCarousels2 from './CoachCarousels2'

class CoachClass extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
     return (
      <>

<div className="coach_class_out">
{/* part1 課程圖+介紹文字 */}
    <div className="d-flex coach_head">
      <div className="class_img">
        <img className="class_pic" src="./images/coach/coach.jpg" alt="" />
      </div>
      <div className="ski_class d-flex flex-column justify-content-around">
        <div>
          <h1>初級雙板滑雪 | 2小時課程</h1>
          <p className="language font-orange d-flex">
            <span>國語</span>
            <span>英語</span>
        </p>
          <div className="price">東京雪場 - NT16,000</div>
        </div>
        <div className="class_introduce">
          <p className="font-orange">課程時間：10：00 ~ 12：00</p>
          <p className="">
            專業講師開班，2小時的雙板滑雪體驗課程，教您最基礎的滑雪知識!

          </p>
        </div>
        <div className="notice">
          注意事項：您所預約的課程成功與否將在48小時內收到回覆
        </div>
      </div>
    </div>
    {/* part2 */}
    <CoachCarousels2/>
    {/* part3 */}
    <CoachCarousels/>

    {/* 最外層包css */}
    </div>
    
      </>
    )
  }
 
}

export default CoachClass