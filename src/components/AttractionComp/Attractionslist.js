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


class Attractionslist extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      latX: [],
      lngY: [],
      Name: [],
      markers: [],
      // 加入景點的陣列
      inputlocation: [],
      addDay: [],
      dayclick: 1,
      dayStart: 1,
      // inputday:"12/04",
      // 篩選的預設值
      select: null,
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      slectstate: [],
      total: [],

      array: [],

    }
    // this.clearleft = this.clearleft.bind(this);
  }

  // 選擇天數 - >選取目前的天數
  dayClick = e => {
    let day = e.target.innerHTML.split("DAY")[1];
    this.setState({ dayclick: day }, () => {
      console.log("選擇目前天數 : " + day);
    });
  };

  handler(e) {
    const inputday = e.target.inputday
    // ({第一個是state的inputday},第2個是上面定義的inputday)
    this.setState({ inputday: inputday })
    console.log(inputday)
  }

  // GototimeC(event){
  //   const gotime=event.target.gotime
  //   this.setState({gotime:gotime})
  //   console.log(event)
  // }


  // 按下按鈕新增資料開始
  // joinleft1(e){
  //   // getAttribute获取链接的 target 属性值
  //   let locationName = e.target.getAttribute('value')

  //   this.setState({inputlocation:[...this.state.inputlocation,locationName]},()=>{
  //     console.log(this.state.inputlocation);
  //   })
  // }

  //動態增加行程
  joinleft(e) {
    if (this.state.dayclick == 1) {
      console.log('第一天行程')
      let locationName = e.target.getAttribute('value');
      this.setState({ inputlocation: [...this.state.inputlocation, locationName] }, () => {
        console.log(this.state.inputlocation);
      })

    } else {
      let addDay = this.state.dayclick - 2;
      // getAttribute获取链接的 target 属性值
      // console.log("加入的card : " + addDay);
      // console.log(this.state.addDay[addDay]);
      // console.log(this.state.addDay);
      console.log(e.target);
      let locationName = [];
      let timeHr = [];
      let timeMin = [];
      let alltime = [];
      locationName.push(...this.state.addDay[addDay].location, e.target.getAttribute("value"));
      timeHr.push(...this.state.addDay[addDay].timeHr, 0);
      timeMin.push(...this.state.addDay[addDay].timeMin, 0);
      console.log(this.state.addDay[addDay].startHr)
      console.log(this.state.addDay[addDay].startMin)

      if (this.state.addDay[addDay].startHr !== 0 && this.state.addDay[addDay].startMin !== 0) {
        console.log('2都有')
        alltime.push(...this.state.addDay[addDay].alltime, this.state.addDay[addDay].startHr + ':' + this.state.addDay[addDay].startMin)
      }
      else if (this.state.addDay[addDay].startHr !== 0 && this.state.addDay[addDay].startMin == 0) {
        console.log('有HR')
        alltime.push(...this.state.addDay[addDay].alltime, this.state.addDay[addDay].startHr + ':00')
      }
      else if (this.state.addDay[addDay].startHr == 0 && this.state.addDay[addDay].startMin !== 0) {
        console.log('有MIn')
        alltime.push(...this.state.addDay[addDay].alltime, '0:' + this.state.addDay[addDay].startMin)
      }
      else if (this.state.addDay[addDay].startHr == 0 && this.state.addDay[addDay].startMin == 0) {
        console.log('2都無')
        alltime.push(...this.state.addDay[addDay].alltime, "0:00")
      }

      console.log(addDay);
      let array = JSON.parse(JSON.stringify(this.state.addDay));
      array[addDay].location = locationName;
      array[addDay].timeHr = timeHr;
      array[addDay].timeMin = timeMin;
      array[addDay].alltime = alltime;

      console.log(array);
      // setState({ arrary: [...this.state.array, newItem] });
      this.setState(
        {
          addDay: array
        },
        () => {
          console.log("a");
          console.log(this.state.addDay);
        }
      );
    }
  }
  // 行程時間加總
  // addtime=(e)=>{
  //   console.log('加總時間')
  //   console.log(e)
  // }
  //輸入行程時間 -hr2(動態)
  startHr2 = (e) => {
    console.log(e.target)
    let addDay = e.target.getAttribute("data-hr2")
    let Day = e.target.getAttribute("data-day")
    Day = Day - 2
    console.log(addDay)
    console.log(e.target.value)
    let array = JSON.parse(JSON.stringify(this.state.addDay));
    // let timeHrNew = [];
    // console.log(this.state.addDay[addDay].timeHr)
    // timeHrNew.push(...this.state.addDay[addDay].timeHr,e.target.value)
    array[Day].timeHr[addDay] = e.target.value;
    console.log(array)

    this.setState({ addDay: array }, () => {
      let length = this.state.addDay[Day].timeHr.length;
      let currentTime = parseInt(JSON.parse(JSON.stringify(this.state.addDay[Day].startHr)))
      // console.log(typeof(currentTime))
      let allTimeNew = [];
      let arraytimeNew = JSON.parse(JSON.stringify(this.state.addDay));

      for (var i = 0; i < length; i++) {
        let arraytime = JSON.parse(JSON.stringify(this.state.addDay));
        // console.log(typeof(arraytime))
        let addhr = parseInt(JSON.parse(JSON.stringify(this.state.addDay[Day].timeHr[i])))

        currentTime = currentTime + addhr
        console.log(currentTime + ":00")
        allTimeNew.push(currentTime + ":00")
        // arraytime[Day].alltime[i]= currentTime+ ":00"
        // console.log(arraytime)
        // this.setState({addDay:arraytime},()=>{console.log(this.state.addDay)})
        // console.log(this.state.addDay[Day].timeHr[i])
        // let currentTime =JSON.parse(JSON.stringify(this.state.addDay[Day].alltime[i].split(":")[0]))
        console.log('我要加總')
      }

      // console.log(allTimeNew)
      arraytimeNew[Day].alltime = allTimeNew
      // console.log(arraytimeNew)
      this.setState({ addDay: arraytimeNew }, () => { console.log(this.state.addDay) })
    })
    // array[addDay].timeHr = timeHr
    // console.log(array)
  }
  //輸入行程時間 -min2(動態)
  startMin2 = (e) => {
    console.log(e.target)
    let addDay = e.target.getAttribute("data-min2")
    let Day = e.target.getAttribute("data-day")
    Day = Day - 2
    console.log(addDay)
    console.log(e.target.value)
    let array = JSON.parse(JSON.stringify(this.state.addDay));
    // let timeHrNew = [];
    // console.log(this.state.addDay[addDay].timeHr)
    // timeHrNew.push(...this.state.addDay[addDay].timeHr,e.target.value)
    array[Day].timeMin[addDay] = e.target.value;
    console.log(array)

    this.setState({ addDay: array }, this.addtime(Day))
    // array[addDay].timeHr = timeHr
    // console.log(array)
  }

  // 動態刪除形成
  clearleftnew = (e) => {
    console.log(e)
    let addDay = this.state.dayclick - 2;
    console.log("刪除的card : " + addDay);
    console.log(this.state.addDay[addDay]);
    let newState = this.state.addDay[addDay].location
    newState.splice(e, 1)
    console.log(newState);
    let array = JSON.parse(JSON.stringify(this.state.addDay));
    console.log(array);
    this.setState(
      {
        addDay: array
      },
      () => {
        console.log("a");
        console.log(this.state.addDay);
      }
    );
  }

  // 按下按鈕刪除天數
  clearDay = e => {
    console.log(e);
    let newDay = this.state.addDay;
    newDay.splice(e, 1);
    this.setState({ addDay: newDay }, () => {
      {
        console.log(this.state.addDay);
      }
    });
  };

  // 按下增加天數
  addDay = () => {
    // console.log('增加天數')

    let addDay = this.state.dayStart + 1;
    this.setState({ dayStart: addDay }, this.allDay);
  };

  //按下增加天數 - 總天數
  allDay = () => {
    let addnew = this.state.dayStart;
    let params = { id: addnew, startHr: 0, startMin: 0, timeHr: [], timeMin: [], location: [], alltime: [] };
    this.setState({ addDay: [...this.state.addDay, params] }, () => {
      console.log(this.state.addDay);
    });
  };

  // 輸入出發時間-Hr(動態)
  startHr = (e) => {
    console.log(' 出發時間-Hr')
    let day = e.target.getAttribute("data-hr")
    let newhr = e.target.value;
    console.log(newhr)
    console.log(day)
    let array = JSON.parse(JSON.stringify(this.state.addDay));
    array[day].startHr = newhr;
    console.log(array);
    this.setState(
      {
        addDay: array
      },
      () => {
        console.log("a");
        console.log(this.state.addDay);
      }
    );
  }

  // 輸入出發時間-Min(動態)
  startMin = (e) => {
    console.log(' 出發時間-Min')
    let day = e.target.getAttribute("data-min");
    let newmin = e.target.value;
    let array = JSON.parse(JSON.stringify(this.state.addDay));
    array[day].startMin = newmin;
    console.log(array);
    this.setState(
      {
        addDay: array
      },
      () => {
        console.log("a");
        console.log(this.state.addDay);
      }
    );
  }

  //清除當筆排程資料 
  clearleft(e) {
    console.log(e);
    let newState = this.state.inputlocation
    newState.splice(e, 1)
    this.setState({ inputlocation: newState }, () => { { console.log(this.state.inputlocation) } });
  }

  // 偵測選雪場的值 單
  snowfilter = (e) => {
    let value = e.target.value
    // console.log(value)
    this.setState({ select: value }, this.filterfetch)
    // console.log(this.state.select)
  }


  // 偵測篩選的checkbox現在狀態 複
  onChangeBox = pos => event => {
    const target = event.target
    const value = target.checked
    console.log('' + value)

    const name = 'checkbox' + pos
    this.setState({
      [name]: value,
    },
      () => {
        let newarray = [this.state.checkbox1, this.state.checkbox2, this.state.checkbox3, this.state.checkbox4]
        this.setState({ slectstate: newarray }, this.filterfetch)
      })

    console.log(name)
  }

  // fetch
  filterfetch = () => {
    console.log('click function')
    let filterparams = {
      select: this.state.select,
      slectstate: this.state.slectstate
    }
    console.log(filterparams)

    const response2 = fetch('http://localhost:3001/attraction-text', {
      body: JSON.stringify(filterparams), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json',
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
    })
      .then(response => response.json())
      .then(json => {

        this.setState({
          total: json,
        }, () => { console.log(this.state.total) })
      })
  }


  async componentDidMount() {
    try {
      await this.setState({ loading: true })

      this.filterfetch()
    } catch (e) {
      console.log(e)
    } finally {
      await setTimeout(() => this.setState({ loading: false }))
      // console.log('total：' + JSON.stringify(this.state.total.length))
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
          defaultZoom={4}
          defaultCenter={{ lat: 37.197975, lng: 139.632960 }}
        >



          <MarkerClusterer
            averageCenter
            enableRetinaIcons
            // 合併附近的單位
            gridSize={10}
          >
            {this.state.total.map(marker => {
              // console.log(marker)
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
    // console.log(this.state)
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
                <div className="row  box no-gutters ">
                  {/* <!--顯示左邊區塊 --> */}
                  <div className="col-md-5">
                    <div className="outer-list-card-first overflow-auto">
                      <Accordion>
                        {/* 第一個手風琴 */}
                        <Card>
                          <Card.Header style={{background:'#ccc'}}>
                            {/* 手風琴head開始 */}
                            <div className="d-flex justify-content-between ">
                              <div className="d-flex CardHeaderFrame align-self-center justify-content-between">

                                <div className="CardHearderBox" onClick={this.dayClick}  style={{cursor:'pointer'}} >
                                  <div className="CardHearderBoxOrange" ></div>
                                  DAY1
                                </div>


                                <div className="CardHearderBox">
                                  <InputGroup size="sm" >
                                    <InputGroup.Prepend>
                                      <InputGroup.Text id="inputGroup-sizing-sm"><img className="CardHearderBoxicon" src={require('../../images/AttractionsImg/AClock.svg')} /></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="出發時間" />
                                  </InputGroup>
                                </div>
                                <div className="CardHearderDown">
                                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <img src={require('../../images/AttractionsImg/Aup.svg')} alt="" className="Aup "></img>
                                  </Accordion.Toggle>
                                </div>
                              </div>
                            </div>
                          </Card.Header>
                          {/* 手風琴head結束 */}

                          {/* 手風琴body開始 */}
                          <Accordion.Collapse eventKey="0">
                          <Card.Body style={{background:'#F2F2F2'}}>
                              {/* <!-- 第一個地點的區塊 --> */}
                              <div className="CardHeaderFrame d-flex align-items-center ">

                                <div className="d-flex align-items-center" style={{ width: '60%' }}>

                                  <div className="d-flex flex-column align-items-center">

                                    <img src={require('../../images/AttractionsImg/Alocation.svg')} className="CardbodyBoxImg" alt="" />
                                    {/* 動態下面時間 */}
                                    <div>
                                      13:00
                                      </div>
                                  </div>

                                  <div>
                                    富良野滑雪場
                      </div>

                                </div>

                                <div style={{ width: '33%' }}>
                                  <InputGroup size="sm" >
                                    <InputGroup.Prepend>
                                      <InputGroup.Text id="inputGroup-sizing-sm"><img className="CardHearderBoxicon" src={require('../../images/AttractionsImg/Ahourglass.svg')} /></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="停留時間" />
                                  </InputGroup>
                                </div>
                              </div>
                              {/* <!-- 第一個地點區塊結束 --> */}

                              {/* <!--動態生成第二個加入的地點開始 --> */}
                              {this.state.inputlocation.map((locateName, index) => {
                                console.log(index)
                                return (

                                  <>
                                    <div className="CardHeaderFrame d-flex align-items-center justify-content-between">
                                      <div className="d-flex align-items-center">

                                        <div className="d-flex flex-column align-items-center">
                                          <div style={{ width: '65px' }}>
                                            <div className="VerticalLine"></div>
                                          </div>
                                        </div>


                                      </div>
                                    </div>

                                    <div>
                                      <div className="CardHeaderFrame d-flex align-items-center ">

                                        <div className="d-flex align-items-center" style={{ width: '60%' }}>


                                          <div className="d-flex flex-column align-items-center">
                                            {/* 上面時間 */}
                                            <div>
                                              8:00
                                     </div>
                                            <img src={require('../../images/AttractionsImg/Alocation.svg')} className="CardbodyBoxImg" alt="" />
                                            {/* 下面時間 */}
                                            <div>
                                              1:00
                                      </div>
                                          </div>

                                          <div>
                                            {locateName}
                                          </div>

                                        </div>

                                        <div style={{ width: '33%' }}>
                                          <InputGroup size="sm" >
                                            <InputGroup.Prepend>
                                              <InputGroup.Text id="inputGroup-sizing-sm"><img className="CardHearderBoxicon" src={require('../../images/AttractionsImg/Ahourglass.svg')} /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="停留時間" />
                                          </InputGroup>
                                        </div>

                                        <div className="CardBodyBox">
                                          <a href="javascript:void(0);" className="btn " onClick={() => this.clearleft(index)} > <img src={require('../../images/AttractionsImg/Agarbage.svg')} alt="" className="CardbodyBoxImg ml-2" /></a>
                                        </div>

                                      </div>
                                    </div>
                                  </>
                                )
                              }
                              )}
                              {/* <!-- 動態生成第二個加入的地點結束  -->*/}



                            </Card.Body>
                          </Accordion.Collapse>
                          {/* 手風琴body結束 */}
                        </Card>
                        {/* 第一個手風琴結束 */}


                        {/* 第2個手風琴-天數 MAP */}
                        {this.state.addDay.map((day, index) => {
                          {
                            /* console.log(index) */
                          }

                          return (
                            <>
                              <Card style={{borderStyle:'1px solide black'}}>
                                <Card.Header style={{background:'#cccccc',borderStyle:'5px,solide,black'}}>
                                  {/* 手風琴head開始 */}
                                  <div className="d-flex justify-content-between ">
                                    <div className="d-flex CardHeaderFrame align-self-center justify-content-between">
                                      <div
                                        className="CardHearderBox"
                                        onClick={this.dayClick}
                                        style={{cursor:'pointer'}}
                                      >
                                        <div className="CardHearderBoxOrange" ></div>
                                        DAY{index + 2}
                                      </div>




                                      <div className="CardHearderBox" style={{ display: 'flex' }}>
                                        <InputGroup size="sm">
                                          <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">
                                              <img
                                                className="CardHearderBoxicon"
                                                src={require("../../images/AttractionsImg/AClock.svg")}
                                              />
                                            </InputGroup.Text>

                                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="時" data-hr={index} onChange={this.startHr}/>
                                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="分"  data-min={index} onChange={this.startMin}/>
                                          </InputGroup.Prepend>
                                          {/* <input
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                            placeholder="時"
                                            data-hr={index}
                                            onChange={this.startHr}
                                          />
                                          <input
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                            placeholder="分"
                                            data-min={index}
                                            onChange={this.startMin}
                                          /> */}
                                        </InputGroup>
                                      </div>


                                      {/* 動態天數的垃圾桶 */}
                                      <div className="CardHearderBox">
                                        {/* <div
                                          className="btn"
                                          onClick={() => this.clearDay(index)}
                                        >
                                          刪除我
                                      </div> */}
                                        <a
                                          style={{ cursor: 'pointer',marginLeft:'60%' }}
                                          className="btn"
                                          onClick={() => this.clearDay(index)}>
                                          <img
                                            src={require("../../images/AttractionsImg/Agarbage.svg")}
                                            alt=""
                                            className="CardbodyBoxImg ml-2" />
                                        </a>
                                      </div>
                                      {/* 動態天數的垃圾桶結束 */}




                                      <div className="CardHearderDown">
                                        <Accordion.Toggle
                                          as={Button}
                                          variant="link"
                                          eventKey={index + 2}
                                        >
                                          <img
                                            src={require("../../images/AttractionsImg/Aup.svg")}
                                            alt=""
                                            className="Aup "
                                          ></img>
                                        </Accordion.Toggle>
                                      </div>
                                    </div>
                                  </div>
                                </Card.Header>
                                {/* 手風琴head結束 */}

                                {/* 手風琴body開始 */}
                                <Accordion.Collapse eventKey={index + 2}>
                                  <Card.Body style={{background:'#F2F2F2'}}>
                                    {/* <!-- 第一個地點的區塊 --> */}
                                    <div className="CardHeaderFrame d-flex align-items-center ">
                                      <div
                                        style={{ width: "12%",textAlign:'center'}}
                                      >
                                          {day.startHr}:{day.startMin}
                                      </div>
                                    </div>
                                    {/* <!-- 第一個地點區塊結束 --> */}

                                    {/* <!--動態生成第二個加入的地點開始 --> */}
                                    {day.location.map((locateName, index) => {
                                      // console.log("每天的行程 : " + index);
                                      return (
                                        <>
                                          <div className="CardHeaderFrame d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center"style={{ width: "12%",paddingBottom:'5px'}}>
                                              <div className="d-flex flex-column align-items-center"></div>
                                               <div className="VerticalLine"></div>
                                            </div>
                                          </div>

                                          <div>
                                            <div className="CardHeaderFrame d-flex align-items-center ">
                                              <div
                                                className="d-flex align-items-center"
                                                style={{ width: "60%" }}
                                              >
                                                <div className="d-flex flex-column align-items-center" style={{width:'20%'}}>
                                                  
                                                  <img
                                                    src={require("../../images/AttractionsImg/Alocation.svg")}
                                                    className="CardbodyBoxImg"
                                                    alt=""
                                                  />
                                                  <div >{day.alltime[index]}</div>
                                                </div>

                                                <div>{locateName}</div>
                                              </div>

                                              {/* 動態增加行程時間 */}
                                              <div style={{ width: "33%" }}>
                                                <InputGroup size="sm">
                                                  <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroup-sizing-sm">
                                                      <img
                                                        className="CardHearderBoxicon"
                                                        src={require("../../images/AttractionsImg/Ahourglass.svg")}
                                                      />
                                                    </InputGroup.Text>
                                                  </InputGroup.Prepend>

                                                  <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="時" data-hr2={index} data-day={JSON.stringify(day.id)}  onChange={this.startHr2}/>
                                                   <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="分"  data-min2={index}  data-day={JSON.stringify(day.id)}  onChange={this.startMin2}/>
                                                  {/* <input
                                                    aria-label="Small"
                                                    aria-describedby="inputGroup-sizing-sm"
                                                    placeholder="時"
                                                    data-hr2={index}
                                                    data-day={JSON.stringify(day.id)}
                                                    onChange={this.startHr2}
                                                  />
                                                  <input
                                                    aria-label="Small"
                                                    aria-describedby="inputGroup-sizing-sm"
                                                    placeholder="分"
                                                    data-min2={index}
                                                    data-day={JSON.stringify(day.id)}
                                                    onChange={this.startMin2}
                                                  /> */}
                                                </InputGroup>
                                              </div>
                                                 {/* 動態增加行程時間結束 */}


                                              <div className="CardBodyBox">
                                                <a
                                                  href="javascript:void(0);"
                                                  className="btn "
                                                  onClick={() =>
                                                    this.clearleftnew(index)
                                                  }
                                                >
                                                  {" "}
                                                  <img
                                                    src={require("../../images/AttractionsImg/Agarbage.svg")}
                                                    alt=""
                                                    className="CardbodyBoxImg ml-2"
                                                  />
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </>
                                      );
                                    })}
                                    {/* <!-- 動態生成第二個加入的地點結束  -->*/}
                                  </Card.Body>
                                </Accordion.Collapse>
                                {/* 手風琴body結束 */}
                              </Card>
                            </>
                          );
                        })}

                        {/* 第2個手風琴結束 */}
                      </Accordion>
                    </div>
                    <button className="btn btn-primary" onClick={this.addDay}>
                      新增天數
                    </button>

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
                            {/* onChange={this.textselect.bind(this)} */}
                            <select className="form-control form-control-sm" onChange={this.snowfilter}  >
                              <option value="" disabled selected hidden>選擇雪場</option>
                              <option value="1">藏王溫泉滑雪場</option>
                              <option value="2">上越國際滑雪場</option>
                              <option value="3">札幌國際滑雪場</option>
                            </select>
                          </div>

                        </div>
                      </div>

                      <div className="AselectTwoWidth">
                        <div className="d-flex justify-content-around">
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked={this.state.checkbox1} onChange={this.onChangeBox(1)} />
                            <label className="form-check-label" htmlform="inlineCheckbox1">景點</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" checked={this.state.checkbox2} onChange={this.onChangeBox(2)} />
                            <label className="form-check-label" htmlform="inlineCheckbox2" >美食</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" checked={this.state.checkbox3} onChange={this.onChangeBox(3)} />
                            <label className="form-check-label" htmlform="inlineCheckbox3">購物</label>
                          </div>

                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4" checked={this.state.checkbox4} onChange={this.onChangeBox(4)} />
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

                                    <a href="javascript:void(0);" className="btn btn-primary" onClick={this.joinleft.bind(this)} value={value.Name}>加入我的排程</a>

                                  </div>
                                </div>
                                <div className="AcardBodyBottom"></div>
                              </>
                            )
                          })}
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

export default Attractionslist;



