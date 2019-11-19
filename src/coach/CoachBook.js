import React from 'react'
import '../css/coach_book.css'
import CoachDate from './CoachDate'
import CoachCarousels from './CoachCarousels'
import $ from 'jquery'

// import pickers from '@material-ui/pickers';

class CoachBook extends React.Component {
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
        `http://localhost:5000/coach-book/${this.props.match.params.id2}`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (response) {
        console.log('get data!')
      }

      if (!response.ok) throw new Error(response.statusText)

      const jsonObject = await response.json()

      await this.setState({ total: jsonObject }, function() {
        
      })
    } catch (e) {
      console.log(e)
    } finally {
      await setTimeout(() => this.setState({ loading: false }))
      // await this.setState({ loading: false })
      console.log('看我')
      console.log(this.state.total[0].class_level)
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
                  <h1>{this.state.total[0].class_level}{this.state.total[0].class_board} | {this.state.total[0].class_name}</h1>
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
                  <div className="coach-snowfield">東京OO雪場</div>
                  <div className="coach-snowfield d-flex align-items-center">
                    {' '}
                    <span>單人 NT</span> <span className="coach-price">{this.state.total[0].class_price }</span>{' '}
                    <span className="coach-price-discount"> </span>{' '}
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                    <div className="coach-book">
                      <div className="coach-book-style">
                        人數 ：
                        <input
                          id="coach-book-num"
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
                          className="coach_book_num"
                          type="number"
                        />
                      </div>
                      <p className="font-orange coach-book-num-js"> </p>
                    </div>
                  </div>
                  <div className="coach-book-date">
                    <CoachDate />
                    {/* <a href="#">
                            <i className="far fa-calendar-alt"></i> 預約日期
                        </a>  */}
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <button className="btn">
                    <i className="fas fa-shopping-cart"></i> 放入購物車
                  </button>
                  <button className="btn">
                    <i className="far fa-heart"></i> 收藏商品
                  </button>
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
            {/* part3 評論 */}

            {/* part4 課程 */}
            {/* <CoachCarousels /> */}
          </div>
        )}
      </>
    )
  }
}

export default CoachBook
