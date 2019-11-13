import React from 'react'

class Message extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
     return (
      <>         
        <div className="message">
            <img className="avatar" src={require('../../images/comment/eskimo.svg')} alt=""/>
            <div className="message_all">
                <div className="d-flex">
                    <p className="message_info">25歲~29歲</p>
                    <p className="message_info">|</p>
                    <p className="message_info">2019-06-03</p>
                    <p className="score">4.7</p>
                    <img className="star" src={require('../../images/comment/star.svg')} alt=""/>
                    <img className="star" src={require('../../images/comment/star.svg')} alt=""/>
                    <img className="star" src={require('../../images/comment/star.svg')} alt=""/>
                    <img className="star" src={require('../../images/comment/star.svg')} alt=""/>
                    <img className="star" src={require('../../images/comment/star0.svg')} alt=""/>
                </div>
                <div className="message_text">
                    <p>雪場規劃完善，根據不同難度、對象設置區域，對於不會滑雪的人來說，是非常好的選擇。</p>
                </div>
            </div>
        </div>
      </>
    )
  }
 
}

export default Message