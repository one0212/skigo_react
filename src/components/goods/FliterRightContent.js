import React from 'react'

class FliterRightContent extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
     return (
      <>
        <div id="right" className="content-rwd d-flex  right_content bg_white ">
                            {/* card1  */}
                            <div className="coach-card">
                                <div className="hot_img">
                                    <img className="coach_img_pic" src={require('../../images/coach/coach.jpg')} alt=""/>
                                </div>
                                <div className="hot_card_word">
                                    <p>初級雙板滑雪 | 2小時課程</p>
                                    <p>東京雪場</p>
                                        <div className="d-flex justify-content-end">
                                            <p className="price">NT16,000</p>
                                        </div>
                                    <div className="font-blue d-flex justify-content-center">
                                        <p>販售時間 : 即日起~2020.2.3</p>
                                    </div>
                                </div>
                            </div>
                            {/* card2  */}
                            <div className="coach-card">
                                <div className="hot_img">
                                    <img className="coach_img_pic" src={require('../../images/coach/coach.jpg')} alt=""/>
                                </div>
                                <div className="hot_card_word">
                                    <p>初級雙板滑雪 | 2小時課程</p>
                                    <p>東京雪場</p>
                                        <div className="d-flex justify-content-end">
                                            <p className="price">NT16,000</p>
                                        </div>
                                    <div className="font-blue d-flex justify-content-center">
                                        <p>販售時間 : 即日起~2020.2.3</p>
                                    </div>
                                </div>
                            </div>
                            {/* card3  */}
                            <div className="coach-card">
                                <div className="hot_img">
                                    <img className="coach_img_pic" src={require('../../images/coach/coach.jpg')} alt=""/>
                                </div>
                                <div className="hot_card_word">
                                    <p>初級雙板滑雪 | 2小時課程</p>
                                    <p>東京雪場</p>
                                        <div className="d-flex justify-content-end">
                                            <p className="price">NT16,000</p>
                                        </div>
                                    <div className="font-blue d-flex justify-content-center">
                                        <p>販售時間 : 即日起~2020.2.3</p>
                                    </div>
                                </div>
                            </div>
                            {/* card4  */}
                            <div className="coach-card">
                                <div className="hot_img">
                                    <img className="coach_img_pic" src={require('../../images/coach/coach.jpg')} alt=""/>
                                </div>
                                <div className="hot_card_word">
                                    <p>初級雙板滑雪 | 2小時課程</p>
                                    <p>東京雪場</p>
                                        <div className="d-flex justify-content-end">
                                            <p className="price">NT16,000</p>
                                        </div>
                                    <div className="font-blue d-flex justify-content-center">
                                        <p>販售時間 : 即日起~2020.2.3</p>
                                    </div>
                                </div>
                            </div>
                            
    
                </div>
      </>
    )
  }
 
}

export default FliterRightContent