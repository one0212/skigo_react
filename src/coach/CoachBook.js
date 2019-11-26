import React from 'react'
import '../css/coach_book.css'
import CoachDate from './CoachDate'
import CoachCarousels from './CoachCarousels'
import CoachSame from './CoachSame'
import $ from 'jquery'
import { exportDefaultSpecifier } from '@babel/types'
import SlideClass from './SlideClass'
import { Link } from 'react-router-dom'

// import pickers from '@material-ui/pickers';

class CoachBook extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      total: [],
      people: 0,
      day: 0,
      pay: 0,
      changeDate: 2019 - 11 - 22,
      loveClick: false,
      loveNum: null,
    }
  }

  async componentWillMount() {
    try {
      await this.setState({ loading: true })

      // const response = await fetch('http://localhost:5000/try-db', {
      const response = await fetch(
        `http://localhost:3001/coach-book/${this.props.match.params.id2}`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      // if (response) {
      //   console.log('get data!')
      // }

      if (!response.ok) throw new Error(response.statusText)

      const jsonObject = await response.json()

      await this.setState({ total: jsonObject }, function() {})
    } catch (e) {
      console.log(e)
    } finally {
      await setTimeout(() => this.setState({ loading: false }))
      // 加到最愛
      await this.setState({ loveNum: this.state.total[0].coach_love })
      console.log('look at me!!')
      console.log(this.state.total[0].coach_name)
    }
  }

  changepeople = event => {
    // 處理人數<0
    let target = event.target.value
    if (target < 0) {
      this.setState({ people: 0 })
    } else {
      if (target > this.state.total[0].class_maxnum) {
        console.log('我已經到人數上限')
        var coachBookNumJs = document.querySelector('.coach-book-num-js')
        coachBookNumJs.style.display = 'block'
        target = this.state.total[0].class_maxnum
      } else if (target >= this.state.total[0].class_discount_num) {
        var coachBookNumJs = document.querySelector('.coach-book-num-js')
        coachBookNumJs.style.display = 'none'
        var coachPrice = document.querySelector('.coach-price')
        coachPrice.style.textDecoration = 'line-through'
        var coachPriceDiscount = document.querySelector('.coach-price-discount')
        coachPriceDiscount.style.display = 'block'
        var classdiscount =
          this.state.total[0].class_price *
          this.state.total[0].class_discount_off
        coachPriceDiscount.innerHTML = classdiscount
        console.log('我可以打折')
      } else if (this.state.total[0].class_discount_num > target) {
        var coachPriceDiscount = document.querySelector('.coach-price-discount')
        coachPriceDiscount.style.display = 'none'
      }
      this.setState({ people: target })
    }
    this.setState({
      pay:
        this.state.total[0].class_price *
        this.state.total[0].class_discount_off,
    })
  }
  // 處理天數<0
  changeday = event => {
    const target = event.target.value
    if (target < 0) {
      this.setState({ day: 0 })
    } else {
      this.setState({ day: target })
    }
  }

  // 日期由子元件傳父元件

  changeDate = date => {
    console.log(typeof date)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    console.log('date', year + ' ' + month + ' ' + day)

    date = JSON.stringify(date)
    console.log(date)

    // const dateDeal = date.slice(0,3)
    // console.log('dateDeal!! : ' + dateDeal[1])

    this.setState({ changeDate: date }, () => {
      console.log('現在時間2 : ' + this.state.changeDate)
    })
  }

  // 進入購物車
  CoachCart = () => {
    let coachcart = {
      prodId: this.state.total[0].coach_sid, //這邊放資料庫的商品id
      prodType: 'coach', //這邊放資料庫的商品類型 例如飯店傳hotel,
      qty: this.state.people, //商品數量 不需用字串
    }

    // console.log(coachcart)

    fetch('http://localhost:3001/api/cart/items', {
      body: JSON.stringify(coachcart), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json',
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
    })
      .then(response => {
        console.log(response)
        console.log('hihihi')
        //   if (response.status === 200) {
        //   // 所以可以用此判斷, 後續要做的事情就是放這邊
        //   console.log('商品加入成功')
        // }
      }) // 輸出成 json
      .then(json => {})
  }

  //加入最愛樣式
  addLove = () => {
    // console.log('加入最愛')
    let noLove = document.querySelector('#no-love')
    let haveLove = document.querySelector('#have-love')
    let loveClick = this.state.loveClick
    let loveActive = {
      loveNum: this.state.loveNum,
      loveState: loveClick,
      coachSid: this.state.total[0].coach_sid,
    }

    fetch('http://localhost:3001/coach-love', {
      body: JSON.stringify(loveActive), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json',
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
    }).then(response => response.json())

    // console.log(loveClick)
    if (loveClick == false) {
      this.setState({ loveClick: true })
      // loveClick = true;
      noLove.style.display = 'none'
      haveLove.style.display = 'inline-block'
      console.log('加到最愛')
      let loveChangeadd = this.state.loveNum + 1
      this.setState({ loveNum: loveChangeadd })
    } else {
      this.setState({ loveClick: false })
      noLove.style.display = 'inline-block'
      haveLove.style.display = 'none'
      console.log('移除最愛')
      let loveChangedel = this.state.loveNum - 1
      this.setState({ loveNum: loveChangedel })
    }
  }

  componentDidMount() {
    // 該課程人數上限
    const booknumlimit = 5
    // 該課程人數折價標準
    const booknumdiscount = 3
    // 該課程是否特價判斷
    let discountok = false
    // 課程原價
    const coachprice = 2000
    // 課程打幾折
    const coachoff = 0.8
    // 課程打折後價錢
    let coachdiscount = coachprice

    // 價錢千分位處理
    const thousandComma = number => {
      let num = number.toString()
      const pattern = /(-?\d+)(\d{3})/

      while (pattern.test(num)) {
        num = num.replace(pattern, '$1,$2')
      }
      return num
    }

    // const Test=()=>{
    //   console.log('change')
    // }

    // 當人數達到特價條件之判斷式
    function discountokJudge() {
      if (discountok === true) {
        // 有特價
        coachdiscount = coachprice * coachoff
        $('.coach-price').css('text-decoration', 'line-through')
        $('.coach-price-discount').css('display', 'inline')
        $('.coach-price-discount').html(`特價${thousandComma(coachdiscount)}`)
      } else {
        // 沒特價
        coachdiscount = coachprice * 1
        $('.coach-price').css('text-decoration', 'none')
        $('.coach-price-discount').css('display', 'none')
      }
    }

    // 課程人數超過上限 & 人數<0處理
    $('#coach-book-num').change(e => {
      // let bookNum = $(this).val();
      // console.log('我變了')
      let bookNum = e.currentTarget.value
      if (bookNum < 0) {
        bookNum = 0
      } else if (bookNum < booknumdiscount) {
        discountok = false
        discountokJudge()
      } else if (bookNum >= booknumdiscount && bookNum <= booknumlimit) {
        discountok = true
        discountokJudge()
        $('.coach-book-num-js').css('display', 'none')
      } else if (bookNum > booknumlimit) {
        bookNum = booknumlimit
        $('.coach-book-num-js').css('display', 'block')
      } else {
        $('.coach-book-num-js').css('display', 'none')
      }
      // 將數字打入input
      e.currentTarget.value = bookNum
      console.log(discountok)
    })

    // 課程天數<0處理
    $('#coach-book-days').change(e => {
      // let bookNum = $(this).val();
      let bookNum = e.currentTarget.value
      if (bookNum < 0) {
        bookNum = 0
      }
      // 將數字打入input
      e.currentTarget.value = bookNum
    })
    // 原價錢
    $('.coach-price').html(thousandComma(coachprice))
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
          <div className="coach_book_out">
            <div className="container d-flex">
              <p>首頁</p>
              <p> > </p>
              <p className="bread">
                <Link to={'/CoachClass/' + this.state.total[0].class_sid}>
                  課程： {this.state.total[0].class_name}
                </Link>{' '}
              </p>
              <p> > </p>
              <p> 教練： {this.state.total[0].coach_name}</p>
            </div>
            {/* part1 */}
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
                    {this.state.total[0].class_board} |{' '}
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
                  <div className="coach-snowfield">
                    {this.state.total[0].class_field}
                    {this.state.total[0].class_snow_field}雪場
                  </div>
                  <div className="coach-snowfield d-flex align-items-center">
                    {' '}
                    <span>單人 NT</span>{' '}
                    <span className="coach-price">
                      {this.state.total[0].class_price}
                    </span>{' '}
                    <span className="coach-price-discount"> </span>{' '}
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                    <div className="coach-book">
                      <div className="coach-book-style">
                        人數 ：
                        <input
                          id="people"
                          value={this.state.people}
                          onChange={this.changepeople}
                          name="people"
                          className="coach_book_num"
                          type="number"
                        />
                      </div>
                      <p className="font-orange coach-book-num-js">
                        人數已達上限
                      </p>
                    </div>
                    <div className="coach-book-center"></div>
                    <div className="coach-book">
                      <div className="coach-book-style">
                        天數 ：
                        <input
                          id="coach-book-days"
                          value={this.state.day}
                          onChange={this.changeday}
                          className="coach_book_num"
                          type="number"
                        />
                      </div>
                      <p
                        id="coach-book-num-js"
                        className="font-orange coach-book-num-js"
                      >
                        {' '}
                      </p>
                    </div>
                  </div>
                  <div className="coach-book-date">
                    <CoachDate changeDate={this.changeDate} />
                    {/* <a href="#">
                            <i className="far fa-calendar-alt"></i> 預約日期
                        </a>  */}
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <button className="btn" onClick={this.CoachCart}>
                    <i className="fas fa-shopping-cart"></i> 放入購物車
                  </button>
                  <button className="btn" onClick={this.addLove}>
                    <i id="no-love" className="far fa-heart"></i>
                    <i id="have-love" class="fas fa-heart"></i> 收藏商品
                  </button>
                </div>
                <div className="d-flex justify-content-end">
                  共{this.state.loveNum}人收藏
                </div>
              </div>
            </div>
            {/* part2 教練介紹*/}
            <div className="container">
              <div className=" d-flex part2 align-items-center">
                <div className="coach_img">
                  <img
                    className="coach_img_pic"
                    src={'/images/coach/' + this.state.total[0].coach_pic}
                    alt=""
                  />
                </div>
                <div className="coach-style">
                  <h3>{this.state.total[0].coach_name}</h3>
                  <p className="coach_introduce">
                    {this.state.total[0].coach_intr}
                  </p>
                </div>
              </div>
            </div>

            {/* part3 同教練的其他課程 */}
            <CoachSame samecoach={this.state.total[0].coach_name}/>
            {/* part4 推薦課程 */}
            <SlideClass />
          </div>
        )}
      </>
    )
  }
}

export default CoachBook
