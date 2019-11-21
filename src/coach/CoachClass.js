import React from 'react'
import '../css/coach_class.css'
import SlideCoach from './SlideCoach'
import SlideClass from './SlideClass'
// import '../css/card_carousels.css'
// import CoachCarousels from './CoachCarousels'
// import CoachCarousels2 from './CoachCarousels2'

class CoachClass extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      total: [],
    }
  }

  async componentWillMount() {
    try {
      await this.setState({ loading: true })

      // const response = await fetch('http://localhost:5000/try-db', {
      const response = await fetch(
        `http://localhost:3001/coach-class/${this.props.match.params.id}`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)

      const jsonObject = await response.json()

      await this.setState({ total: jsonObject }, function() {
        console.log(this.state.total)
      })
    } catch (e) {
      console.log(e)
    } finally {
      await setTimeout(() => this.setState({ loading: false }))
      // await this.setState({ loading: false })

      console.log(this.state.total)
    }
  }

  // 金額轉千分位
  thousandComma = number => {
    let num = number.toString()
    const pattern = /(-?\d+)(\d{3})/

    while (pattern.test(num)) {
      num = num.replace(pattern, '$1,$2')
    }
    return num
  }



  render() {
    return (
      <>
        {this.state.loading ? (
          <div>
            {/* <i className="fas fa-spinner fa-spin" /> */}
            資料載入中
          </div>
        ) : (
          <>
            <div className="coach_class_out">
              {/* part1 課程圖+介紹文字 */}
              <div className="d-flex coach_head">
                <div className="class_img">
                  <img
                    className="class_pic"
                    src={'/images/coach/' + this.state.total[0].class_pic}
                    alt=""
                  />
                </div>
                <div className="ski_class d-flex flex-column justify-content-around">
                  <div>
                    <h1>
                      {this.state.total[0].class_level}
                      {this.state.total[0].class_board}|
                      {this.state.total[0].class_name}
                    </h1>
                    <p className="language font-orange d-flex">
                      {this.state.total[0].class_lang_cha ? (
                        this.state.total[0].class_lang_cha == 1 ? (
                          <span>國語</span>
                        ) : (
                          ''
                        )
                      ) : (
                        ''
                      )}
                      {this.state.total[0].class_lang_eng ? (
                        this.state.total[0].class_lang_eng == 1 ? (
                          <span>英語</span>
                        ) : (
                          ''
                        )
                      ) : (
                        ''
                      )}
                      {this.state.total[0].class_lang_jap ? (
                        this.state.total[0].class_lang_jap == 1 ? (
                          <span>日語</span>
                        ) : (
                          ''
                        )
                      ) : (
                        ''
                      )}
                    </p>
                    <div className="price">
                      {this.state.total[0].class_field}{this.state.total[0].class_snow_field}雪場<br/>
                      單人NT
                      { this.thousandComma(this.state.total[0].class_price)}
                    </div>
                  </div>
                  <div className="class_introduce">
                    <p className="font-orange">課程時間：{this.state.total[0].class_time_start} ~ {this.state.total[0].class_time_end}</p>
                    
                    <p className="">
                    {this.state.total[0].class_intr}
                    </p>
                  </div>
                  <div className="notice">
                    注意事項：您所預約的課程成功與否將在48小時內收到回覆
                  </div>
                </div>
              </div>
              {/* part2 教練 */}
              <SlideCoach />
              

              {/* part3 推薦課程*/}
              <SlideClass/>

              {/* 最外層包css */}
            </div>
          </>
        )}
      </>
    )
  }
}

export default CoachClass
