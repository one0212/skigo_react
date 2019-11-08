import React from 'react';


class ClassCard extends React.Component {
    constructor() {
      super()
      this.state = {
        test:[
          {id:1 , text:'i am 1'},
          {id:2 , text:'i am 2'}
        ]
      }
    }
  
    // 元件 "已經 Did" 呈現在網頁上
    async componentWillMount() {
      try {
        await this.setState({ loading: true })
  
        const response = await fetch('http://localhost:5555/coach', {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        })

        if(response){
          console.log('get data!');
        }
  
        if (!response.ok) throw new Error(response.statusText)
  
        const jsonObject = await response.json()
  
        await this.setState({ total: jsonObject} , function(){console.log(this.state.total.class_board)} )
      } catch (e) {
        console.log(e)
      } finally {
        await setTimeout(() => this.setState({ loading: false }), 1 * 1000)
        // await this.setState({ loading: false })
        console.log(this.state.total)
      }
    }
  
  
    render() {
      return (
        <>
          {this.state.loading ? (
            <div className="fa-2x">
              <i className="fas fa-spinner fa-spin" />
              {/* {console.log('loading is true ' +this.state.loading)} */}
              資料載入中
            </div>
          ) : (
            <>
            {/* {console.log('loading is false ' +this.state.loading)} */}

            {this.state.total.map((value,index)=>{
              return <div className="coach-card">
              <div className="hot_img">
                <img
                  className="coach_img_pic"
                  src={require('../images/coach/coach.jpg')}
                  alt=""
                />
              </div>
              <div className="hot_card_word">
                <p>{value.class_level}{value.class_board}滑雪|{value.class_name}</p>
                <p className="language font-orange d-flex">
                 
                  <span>英語</span>
                  <span>日語</span>
                  <span>國語</span>
                </p>
                <p>{value.snow_field}-{value.field_name}</p>
                <div className="d-flex justify-content-end">
                  <p className="price">NT16,000</p>
                </div>
                <div className="font-blue d-flex justify-content-center">
                  <p>{value.class_sell_start}~{value.class_sell_end}</p>
                </div>
              </div>
            </div> 
              
            })}

            
            
  
            </>
          )}
        </>
      )
    }
  }
  
  export default ClassCard