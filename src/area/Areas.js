import React from 'react'
import '../css/area_home.css';
import { Carousel } from 'react-bootstrap';
import Carousels from '../components/goods/Carousels';
import Comment from '../components/goods/Comment';

class Areas extends React.Component{
    constructor(){
      super()
      this.state = {}
    }
  
    render(){
       return (
        <>
            <div className="wrap">
            <div className="area_header">
        {/* src={require('../images/areas/scenery-1.jpg')} */}
                <div className="container-fluid area_slider">
                    <div className="row">
                        <div className="col-xl-9 col-lg-12">
                            <div className="area_carousel">
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src={require('../images/areas/scenery-1.jpg')}
                                        alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src={require('../images/areas/scenery-2.jpg')}
                                        alt="Third slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src={require('../images/areas/scenery-3.jpg')}
                                        alt="Third slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="weather">
                                <img src={require('../images/areas/weather.svg')} className="weather_img" alt=""/>
                                <div className="d-flex">
                                    <p>-10</p><img src={require('../images/areas/circle-outline.svg')} className="circle" alt=""/><p className="tem">C</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="introduction">
                        <div className="d-flex">
                            <h5>北海道</h5>
                            <h1>富良野滑雪場</h1>
                            <p className="article">富良野滑雪度假中心是王子滑雪度假中心中最北邊的一個。富良野滑雪場分為富良野和北之峰2大區域，總共有23條滑雪道，您可乘坐能同時容納101位旅客的富良野箱型纜車，直接抵達山頂，眺望大雪山的絕美景致。2間可滑雪進出的王子大飯店分別位於各區域的山腳下，方便您滑雪後休息享樂。滑雪場的附近就有溫泉，也可以逛逛富良野的市區，這將給您留下美好的回憶。</p>
                        </div>
                        <div className="number_box">
                            <p className="slider_number">01</p><p className="symbol">/</p><p className="total_number">03</p>
                        </div>
                    </div>
                </div>
                <div className="container introduction2">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex area_title">
                            <h5>北海道</h5>
                            <h1>富良野滑雪場</h1>   
                        </div>
                        <div className="weather">
                            <img src={require('../images/areas/weather.svg')} className="weather_img" alt=""/>
                            <div className="d-flex">
                                <p>-10</p><img src={require('../images/areas/circle-outline.svg')} className="circle" alt=""/><p className="tem">C</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="article">富良野滑雪度假中心是王子滑雪度假中心中最北邊的一個。富良野滑雪場分為富良野和北之峰2大區域，總共有23條滑雪道，您可乘坐能同時容納101位旅客的富良野箱型纜車，直接抵達山頂，眺望大雪山的絕美景致。2間可滑雪進出的王子大飯店分別位於各區域的山腳下，方便您滑雪後休息享樂。滑雪場的附近就有溫泉，也可以逛逛富良野的市區，這將給您留下美好的回憶。</p>
                    </div>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="area_icon d-flex justify-content-center">
                                <div><img className="number" src={require('../images/areas/05.svg')} alt=""/><p className="img_p">滑雪道</p><p className="img_number">23</p></div>
                                <div><img className="longest" src={require('../images/areas/01.svg')} alt=""/><p className="img_p">雪道最長距離</p><p className="img_number">4,000m</p></div>
                                <div><img className="gradient" src={require('../images/areas/04.svg')} alt=""/><p className="img_p">最大斜度</p><p className="img_number">35</p></div>
                                <div><img className="lifts" src={require('../images/areas/06.svg')} alt=""/><p className="img_p">纜車</p><p className="img_number">8</p></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 area_info">
                            <div className="d-flex"><div className="title_sign"></div><h4>滑雪場資訊</h4></div>
                            <div className="row date">
                                <div className="col-5">
                                    <p>營業期間</p>
                                </div>
                                <div className="col-7">
                                    <div className="time">
                                        <p>12月14日</p>
                                        <p>&nbsp;-&nbsp;</p>
                                        <p>5月6日</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row date">
                                <div className="col-5">
                                    <p>營業時間</p>
                                </div>
                                <div className="col-7">
                                    <div className="time">
                                        <p>09:00</p>
                                        <p>&nbsp;-&nbsp;</p>
                                        <p>18:00</p>
                                    </div>
                                </div>
                            </div>
                            <p className="address">〒076-8511 北海道富良野市字中御料</p>
                            <a className="ski_map" href="#"><img className="icon_map" src={require('../images/areas/map.svg')} alt=""/>滑雪場地圖</a>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="area_characteristic">
                        <div className="d-flex">
                            <div className="box"><img src={require('../images/areas/mountains.svg')} alt=""/><p>美麗風景</p></div>
                            <div className="box"><img src={require('../images/areas/snowflake.svg')} alt=""/><p>天然雪</p></div>
                            <div className="box"><img src={require('../images/areas/ice-skating.svg')} alt=""/><p>適合初學者</p></div>
                            <div className="box"><img src={require('../images/areas/signals-set.svg')} alt=""/><p>餐廳</p></div>
                            <div className="box"><img src={require('../images/areas/snowmobile.svg')} alt=""/><p>戶外活動充實</p></div>
                            <div className="box"><img src={require('../images/areas/bus.svg')} alt=""/><p>交通便利</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <Carousels/>
            <Carousels/>
            <Comment/>
            <section className="area_access">
                <div className="container">
                    <div className="access_title">
                        <div className="d-flex"><div className="title_sign"></div><h4>交通路線</h4></div>
                    </div>
                    <hr/>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11607.988663140555!2d142.33874033325841!3d43.335248371799736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f73525ef98cb63d%3A0x9020eebf4f63234b!2z5a-M6Imv6YeO5ruR6Zuq5aC0!5e0!3m2!1szh-TW!2stw!4v1572185752833!5m2!1szh-TW!2stw" frameborder="0" style={{border:"0",width:"100%",height:"600"}}/>
                </div>
            </section> 
            </div>
        </>
    )
  }
 
}

export default Areas
 


