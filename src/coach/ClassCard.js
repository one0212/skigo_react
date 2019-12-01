import React from 'react'
import { Link } from 'react-router-dom'

class ClassCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      total: [],
    }
  }

  // 元件 "已經 Did" 呈現在網頁上
  async componentDidMount() {
    // try {
    //   await this.setState({ loading: true })
    //   // const response = await fetch('http://localhost:5000/try-db', {
    //   const response = await fetch('http://localhost:5000/coach-list', {
    //     method: 'POST',
    //     body: JSON.stringify(this.props.filter),
    //     headers: new Headers({
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     }),
    //   })
    //   if (!response.ok) throw new Error(response.statusText)
    //   const jsonObject = await response.json()
    //   await this.setState({ total: jsonObject }, function() {
    //     // console.log(this.state.total.class_board)
    //   })
    // } catch (e) {
    //   console.log(e)
    // } finally {
    //   await setTimeout(() => this.setState({ loading: false }))
    //   // await this.setState({ loading: false })
    // }
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
        {/* {console.log('filter：' + JSON.stringify(this.props.filter))} */}
        {false ? (
          <div>
            {/* <i className="fas fa-spinner fa-spin" /> */}
            資料載入中
          </div>
        ) : (
          <>
            {this.props.filter.map((value, index) => {
              if (!value) return <></>
              {/* console.log(value.class_sid) */}
              return (
                <Link
                  className="coach-card"
                  key={value.class_sid}
                  to={'/CoachClass/' + value.class_sid}
                >
                  <div className="hot_img">
                    <img
                      className="coach_img_pic"
                      src={'/images/coach/' + value.class_pic}
                      alt=""
                    />
                  </div>
                  <div className="hot_card_word">
                    <p>
                      {value.class_level}
                      {value.class_board} | {value.class_name}
                    </p>
                    <p className="language font-orange d-flex">
                      {value.class_lang_cha === 1 ? <span>國語</span> : ''}
                      {value.class_lang_eng === 1 ? <span>英語</span> : ''}
                      {value.class_lang_jap === 1 ? <span>日語</span> : ''}
                    </p>
                    <p>
                      {value.class_field}-{value.class_snow_field}雪場
                    </p>
                    <div className="d-flex justify-content-end">
                      <p className="price">
                        NT {this.thousandComma(value.class_price)}
                      </p>
                    </div>
                    <div className="font-blue d-flex justify-content-center">
                      <p>
                        {value.class_sell_start} ~ {value.class_sell_end}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </>
        )}
      </>
    )
  }
}

export default ClassCard
