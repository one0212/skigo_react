import React from 'react';


class ClassCard extends React.Component{
    constructor(){
      super()
      this.state = {
        //   total: null
      }
    }

    async componentDidMount() {
        try {
          await this.setState({ loading: true })
    
          const response = await fetch('http://localhost:5555/coach/1', {
            method: 'GET',
            headers: new Headers({
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }),
          })

        //   if(response){
        //       console.log('goodjob!!')
        //   }
    
          if (!response.ok) throw new Error(response.statusText)
          const jsonObject = await response.json()
        //   console.log(jsonObject)
          await this.setState({ total: jsonObject }, function(){
              console.log(this.state.total.class_board)
          })
        } catch (e) {
          console.log(e)
        } finally {
            console.log('nonono')
          await setTimeout(() => this.setState({ loading: false }),1*1000)
        }
      }
  
    render(){
       return (
        <>
        {this.state.loading ? (
          <div className="fa-2x">
            <i className="fas fa-spinner fa-spin" />
            資料載入中
          </div>
        ) : (
          <>
            <div className="coach-card">
              <div className="hot_img">
                <img
                  className="coach_img_pic"
                  src={require('../images/coach/coach.jpg')}
                  alt=""
                />
              </div>
              <div className="hot_card_word">
                {/* <p>{this.state.total.class_board}滑雪 | 2小時課程</p> */}
                <p className="language font-orange d-flex">
                  <span>英語</span> <span>日語</span>
                </p>
                <p>東京-XX雪場</p>
                <div className="d-flex justify-content-end">
                  <p className="price">NT16,000</p>
                </div>
                <div className="font-blue d-flex justify-content-center">
                  <p>販售時間 : 即日起~2020.2.3</p>
                </div>
              </div>
            </div>
          </>
        )}
      </>
      )
    }
   
  }


export default ClassCard