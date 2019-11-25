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
  async componentWillMount() {
    // try {
    //   await this.setState({ loading: true })

      // const response = await fetch('http://localhost:5000/try-db', {
    //   const response = await fetch('http://localhost:5000/ticket-list', {
    //     method: 'GET',
    //     headers: new Headers({
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     }),
    //   })

    //   if (response) {
    //     console.log('get data!')
    //   }

    //   if (!response.ok) throw new Error(response.statusText)

    //   const jsonObject = await response.json()

    //   await this.setState({ total: jsonObject }, function() {
    //   })
    // } catch (e) {
    //   console.log(e)
    // } finally {
    //   await setTimeout(() => this.setState({ loading: false }))
    //   // await this.setState({ loading: false })
    //   console.log(this.state.total)
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
        {console.log(this.props.filter)}
        {/* { if( this.props.filter == true ){} } */}
        {false ? (
          <div>
            {/* <i className="fas fa-spinner fa-spin" /> */}
            資料載入中
          </div>
        ) : (
          <>
            {this.props.filter.map((value, index) => {
              if (!value) return <></>
              console.log(value.area_sid)
              return (
                <Link
                  className="coach-card ticket-card"
                  key={value.area_sid}
                  to={'/ticketarea/' + value.area_sid}
                >
                  <div className="hot_img">
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
                    <p>{value.ticket_use_day}|{value.ticket_type}</p>
                    <div className="d-flex justify-content-end">
                      <p className="price" style={{color:"#fd702d",fontSize:"1.5rem"}}>
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
