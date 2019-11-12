import React  from 'react';




class ClassCard extends React.Component {
    constructor() {
      super()
      this.state = {
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
// 金額轉千分位
    thousandComma = (number) => {
      let num = number.toString();
      const pattern = /(-?\d+)(\d{3})/;
    
      while (pattern.test(num)) {
        num = num.replace(pattern, '$1,$2');
      }
      return num;
    };


    render() {
      return (       
        <>
          {this.state.loading ? (
            <div className="fa-2x">
              <i className="fas fa-spinner fa-spin" />
              資料載入中
            </div>
          ) : (
            <>
            {this.state.total.map((value,index)=>{
              return <div className="coach-card">
              <div className="hot_img">
                <img
                  className="coach_img_pic"
                  src={value.class_pic} 
                  alt=""
                />
                
              </div>
              <div className="hot_card_word">
                <p>{value.class_level}{value.class_board}滑雪|{value.class_name}</p>
                <p className="language font-orange d-flex">
                 {(value.class_langu_cha === 1)?<span>國語</span>:""}
                 {(value.class_langu_eng === 1)?<span>英語</span>:""}
                 {(value.class_langu_jap === 1)?<span>日語</span>:""}
                </p>
                <p>{value.snow_field}-{value.field_name}</p>
                <div className="d-flex justify-content-end">
                  <p className="price">NT {this.thousandComma(value.class_price)}</p>
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