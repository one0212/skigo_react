import React from 'react'
import '../../css/comment.css';
import Message from './Message';

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
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
            </div>
        </section>
      </>
    )
  }
 
}

export default Comment