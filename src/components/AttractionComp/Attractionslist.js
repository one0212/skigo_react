import React, { Component } from 'react';
import '../../css/Accordion_css.css'
import $ from 'jquery';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker,withStateHandlers } from "react-google-maps"
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";
import { Button, Card, Accordion, InputGroup, FormControl } from 'react-bootstrap'
import AlistLeft from './AlistLeft';
import { thisExpression } from '@babel/types';


class AttractionsIndex extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      latX: [],
      lngY: [],
      markers: [],
    }
  }


  async componentDidMount() {
    try {
      await this.setState({ loading: true })

      // const response = await fetch('http://localhost:5000/try-db', {
      const response = await fetch(
        `http://localhost:3001/attraction-text`,
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



      // 我的total是json的物件
      await this.setState({ total: jsonObject }, function () { })
      for (var i = 0; i < this.state.total.length; i++) {

        this.setState({ latX: [...this.state.latX, this.state.total[i].latX] })
        this.setState({ lngY: [...this.state.lngY, this.state.total[i].lngY] })

        // console.log(this.state.latX)
      }

    } catch (e) {
      console.log(e)
    } finally {
      await setTimeout(() => this.setState({ loading: false }))
      // await this.setState({ loading: false })
      console.log('看我')
      console.log(this.state.latX)
      console.log(this.state.lngY)



    }


    // -----------------------------JQ---------------------
    $(function () {
      $('#MapMode').click(function () {
        $('.MapModeOnOFF').toggle();
        $('.outer-list-cardOnOFF').toggle();

      })
    })
    // -----------------------------JQ---------------------
  }



  render() {

    // google map

    const MyMapComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkLaeqaaq2bMHoGOh0OWGybycknBq-phk&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),

    

      withScriptjs,
      withGoogleMap
    )
      ((props) =>
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat: 38.1705625, lng: 140.40168749999998 }}
        >



          <MarkerClusterer
            averageCenter
            enableRetinaIcons
            // 合併附近的單位
            gridSize={10}
          >
            {this.state.total.map(marker => {
              console.log(marker)
              return (
                <Marker
                  key={marker.sid}
                  // 裡面的類型需要是數字
                  position={{ lat: parseFloat(marker.latX), lng: parseFloat(marker.lngY) }}
                />
              )

            })}
          </MarkerClusterer>



        </GoogleMap>
      )



    return (
      <>

        {this.state.loading ? (
          <div>
            {/* <i className="fas fa-spinner fa-spin" /> */}
            資料載入中
          </div>
        ) : (
            <>
              
              <div style={{ weight: '100%', height: '35px' }}></div>


              <div className="ski-container">


                {/* <!--關掉ROW間距no-gutters--> */}
                <div className="row  Abox no-gutters ">
                  {/* <!--顯示左邊區塊 --> */}
                  <div className="col-md-5">
                    <div className="outer-list-card-first overflow-auto">
                      <AlistLeft />
                    </div>
                  </div>
                  {/* <!--顯示左邊區塊結束 --> */}



                  {/* <!--顯示右邊區塊 --> */}
                  <div className="col-md-7 " style={{ height: '600px' }}>

                    <div className=" d-flex text-align-center align-items-center justify-content-between" style={{ width: '100%' }}>
                      <div className="AselectOneWidth">
                        <div className="d-flex align-items-center AselectUnderline text-align-center">
                          <div style={{ width: '30%', height: '20px' }}>
                            <p style={{ margin: '0px' }}>雪場:</p>
                          </div>
                          <div style={{ widows: '70%' }}>
                            <select className="form-control form-control-sm " >
                              <option value="藏王溫泉滑雪場">藏王溫泉滑雪場</option>
                              <option value="上越國際滑雪場">上越國際滑雪場</option>
                              <option value="札幌國際滑雪場">札幌國際滑雪場</option>
                            </select>
                          </div>

                        </div>
                      </div>

                      <div className="AselectTwoWidth">
                        <div className="d-flex justify-content-around">
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label className="form-check-label" htmlform="inlineCheckbox1">景點</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label className="form-check-label" htmlform="inlineCheckbox2">美食</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label className="form-check-label" htmlform="inlineCheckbox3">購物</label>
                          </div>

                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4" />
                            <label className="form-check-label" htmlform="inlineCheckbox4">遊樂園</label>
                          </div>
                        </div>
                      </div>

                      <div className="AselectThreeWidth" id="MapMode"  >
                        <button type="button" className="btn  btn-sm AmapButton MapModeOnOFF" ><img src={require('../../images/AttractionsImg/Amap.svg')}
                          className="AmapImg" />地圖模式</button>

                        <button type="button" className="btn  btn-sm AmapButton MapModeOnOFF" style={{ display: 'none' }}><img src={require('../../images/AttractionsImg/Alist.svg')}
                          className="AmapImg" />卡片模式</button>
                      </div>
                    </div>

                    {/* CARD模式開始 */}
                    <div className="outer-list-card outer-list-cardOnOFF" >

                      <div className="overflow-auto inner-list-card">

                        <div className="flex-wrap d-flex align-items-start">


                          {this.state.total.map((value, index) => {
                            return (
                              <>
                                <div className="AcardBodyTop"></div>
                                <div className="card Acard" style={{ height: '400pX' }}>
                                  <img src={require('../../images/AttractionsImg/' + value.ImageName + '.jpg')} className="card-img-top AcardBodyImg" />
                                  <div className="card-body">
                                    <h5 className="card-title">{value.Name} </h5>
                                    <div className="AcardBody">
                                      <img src={require('../../images/AttractionsImg/AmapMarker.svg')} alt="" />
                                      {value.address}
                                    </div>
                                    <div className="AcardBody">
                                      <img src={require('../../images/AttractionsImg/Aphone.svg')} alt="" />
                                      {value.phone}
                                    </div>
                                    <div className="AcardBody">

                                  
                                      <img src={require('../../images/AttractionsImg/AClock.svg')} alt="" />
                                      {value.BusinessHours}
                                    </div>
                                    <a href="#" className="btn btn-primary">加入我的排程</a>

                                  </div>
                                </div>
                                <div className="AcardBodyBottom"></div>
                              </>
                            )
                          })}



                          {/* <!-- 顯示景點第一個card --> */}
                          <>
                            <div className="AcardBodyTop"></div>
                            <div className="card Acard" style={{ height: '400pX' }}>
                              <img src={require('../../images/AttractionsImg/Naruto1.png')} className="card-img-top AcardBodyImg" />
                              <div className="card-body">
                                <h5 className="card-title">北海道大學 銀杏並本</h5>
                                <div className="AcardBody">
                                  <img src={require('../../images/AttractionsImg/AmapMarker.svg')} alt="" />
                                  新潟県南魚沼市長森415
                </div>
                                <div className="AcardBody">
                                  <img src={require('../../images/AttractionsImg/Aphone.svg')} alt="" />
                                  +81 134-32-7575
                </div>

              
                                <div className="AcardBody">
                                  <img src={require('../../images/AttractionsImg/AClock.svg')} alt="" />
                                  12:00-100
                </div>
                                <a href="#" className="btn btn-primary">加入我的排程</a>

                              </div>
                            </div>
                            <div className="AcardBodyBottom"></div>
                          </>
                          {/* <!-- 顯示景點第第一個card結束 --> */}
                        </div>

                      </div>

                    </div>
                    {/* CARD模式 結束*/}


                    {/* 地圖模式開始 */}
                    <div className="outer-list-cardOnOFF" style={{ display: 'none' }}>
                      <div className="AGoogleMaps">

                        {/* 寫地圖邏輯 */}
                        <MyMapComponent />


                      </div>
                    </div>
                    {/*地圖模式結束 */}

                  </div>
                  {/* <!--顯示右邊區塊結束 --> */}
                </div>
              </div>
            </>
          )}

      </>
    );
  }
}

export default AttractionsIndex;



