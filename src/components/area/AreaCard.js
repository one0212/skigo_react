import React from 'react'
import { Link } from 'react-router-dom'

class AreaCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      total: [],
    }
  }

  // 元件 "已經 Did" 呈現在網頁上
  async componentDidMount() {
    this.setState({ total: this.props.filter ? this.props.filter : '' }, () => {
      this.setState({ loading: false })
    })
  }
  // async componentDidUpdate(prevProps) {

  //   if (this.props.filter !== prevProps.props.filter) {
  //     // this.setState({ total: this.props.filter })
  //     console.log('上次不等於這次')
  //   }
  // }
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
        {console.log('123')}
        {console.log(this.props.filter)}
        {/* { if( this.props.filter == true ){} } */}
        {this.state.loading ? (
          <div>
            {/* <i className="fas fa-spinner fa-spin" /> */}
            資料載入中
          </div>
        ) : (
          <>
            {this.props.filter.map((value, index) => {
              console.log('ticket_sid:', value.ticket_sid, value.area_sid)
              //if (!value) return <></>

              //return `<h2>${value.ticket_sid}</h2>`
              return (
                <Link
                  className="coach-card ticket-card"
                  key={value.ticket_sid}
                  to={'/ticketarea/' + value.area_sid}
                >
                  <div className="hot_img" data-ticket_sid={value.ticket_sid}>
                    <img
                      className="coach_img_pic ticket_img_pic"
                      src={'/images/areas/' + value.ticket_pic}
                      alt=""
                    />
                  </div>
                  <div className="hot_card_word">
                    <p>{value.area_name}</p>
                    <p className="language font-orange d-flex">
                      {/* {value.ticket_type === 1 ? <span>天然雪</span> : ''} */}
                      <span>{value.ticket_age}</span>
                    </p>
                    <p>
                      {value.ticket_use_day}|{value.ticket_type}
                    </p>
                    <div className="d-flex justify-content-end">
                      <p
                        className="price"
                        style={{ color: '#fd702d', fontSize: '1.5rem' }}
                      >
                        NT {this.thousandComma(value.ticket_price)}
                      </p>
                    </div>
                    <div className="font-blue d-flex justify-content-center">
                      <p>
                        {value.ticket_start_date} ~ {value.ticket_end_date}
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

export default AreaCard
