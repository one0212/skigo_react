import React from 'react'
import '../css/comment.css';

class Comment extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
     return (
      <>
        <section className="area_comment">
            <div className="container">
                <div className="comment_title">
                    <div className="d-flex"><div className="title_sign"></div><h4>評價</h4></div>
                </div>
                <hr/>
                <div className="message_content">                
                    <div className="message">
                        <img className="avatar" src={require('../images/comment/eskimo.svg')} alt=""/>
                        <div className="message_all">
                            <div className="d-flex">
                                <p className="message_info">25歲~29歲</p>
                                <p className="message_info">|</p>
                                <p className="message_info">2019-06-03</p>
                                <p className="score">4.7</p>
                                <img className="star" src={require('../images/comment/star.svg')} alt=""/>
                                <img className="star" src={require('../images/comment/star.svg')} alt=""/>
                                <img className="star" src={require('../images/comment/star.svg')} alt=""/>
                                <img className="star" src={require('../images/comment/star.svg')} alt=""/>
                                <img className="star" src={require('../images/comment/star0.svg')} alt=""/>
                            </div>
                            <div className="message_text">
                                <p>雪場規劃完善，根據不同難度、對象設置區域，對於不會滑雪的人來說，是非常好的選擇。</p>
                            </div>
                        </div>
                    </div>
                    <div className="message">
                        <img className="avatar" src={require('../images/comment/eskimo.svg')} alt=""/>
                        <div className="message_all">
                            <div className="d-flex">
                                <p className="message_info">30歲~35歲</p>
                                <p className="message_info">|</p>
                                <p className="message_info">2019-08-23</p>
                                <p className="score">4.5</p>
                                <img className="star" src={require('../images/comment/star.svg')} alt=""/>
                                <img className="star" src={require('../images/comment/star.svg')} alt=""/>
                                <img className="star" src={require('../images/comment/star.svg')} alt=""/>
                                <img className="star" src={require('../images/comment/star.svg')} alt=""/>
                                <img className="star" src={require('../images/comment/star0.svg')} alt=""/>
                            </div>
                            <div className="message_text">
                                <p>很棒的回憶!</p>
                            </div>
                        </div>
                    </div>
                    <div className="message">
                        <img className="avatar" src={require('../images/comment/eskimo.svg')} alt=""/>
                        <div className="message_all">
                            <div className="d-flex">
                                <p className="message_info">25歲~29歲</p>
                                <p className="message_info">|</p>
                                <p className="message_info">2019-08-25</p>
                                <p className="score">4.6</p>
                                <img className="star" src={require('../images/comment/star.svg')} alt=""/>
                                <img className="star" src={require('../images/comment/star.svg')} alt=""/>
                                <img className="star" src={require('../images/comment/star.svg')} alt=""/>
                                <img className="star" src={require('../images/comment/star.svg')} alt=""/>
                                <img className="star" src={require('../images/comment/star0.svg')} alt=""/>
                            </div>
                            <div className="message_text">
                                <p>非常棒的體驗，下次還要再來玩。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }
 
}

export default Comment