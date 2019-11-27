import React from 'react'
import '../css/coachsame.css'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

class CoachSame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: [],
    }
  }
  componentDidMount() {
    const samecoach = { coach: this.props.samecoach }
    fetch('http://localhost:3001/coach-same', {
      body: JSON.stringify(samecoach), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json',
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
    })
      .then(response => response.json()) // 輸出成 json
      .then(json => {
        this.setState({ total: json }, () => {
          console.log(this.state.total)
        })
      })
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
        {console.log('同樣的老師 : ' + this.props.samecoach)}
        <div className="container coachsame">
          <div className="">
            <div className="d-flex">
              <div className="title_sign"></div>
              <h4>
                <i class="fas fa-caret-right"></i> 教練的其他課程
              </h4>
            </div>
            <div className="d-flex  coachsameCardAll">
              {this.state.total.map((value, index) => {
                if (!value) return <></>
                console.log(value.class_sid)
                return (
                  <Link
                    key={value.class_sid}
                    to={'/CoachClass/' + value.class_sid}
                    className="coachsameCard"
                  >
                    <div className="coachsameImg">
                      <img src={'/images/coach/' + value.class_pic} alt="" />
                    </div>
                    <div>
                      <div>
                        {value.class_level ? value.class_level : ''}
                        {value.class_board ? value.class_board : ''} |{' '}
                        {value.class_name ? value.class_name : ''}
                      </div>
                      <div>
                        {value.class_field ? value.class_field : ''}-
                        {value.class_snow_field ? value.class_snow_field : ''}
                      </div>
                      <div className="d-flex justify-content-end">
                        NT{' '}
                        {value.class_price
                          ? this.thousandComma(value.class_price)
                          : ''}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CoachSame
