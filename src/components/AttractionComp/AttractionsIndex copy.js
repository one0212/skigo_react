import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../css/AttractionsIndex_css.css';

import ReactDOM from 'react-dom';
// 掛載輪播套件
import { Carousel } from 'react-responsive-carousel';


class AttractionsIndex extends Component {
  render() {
    return (
      <>
        
        <div className="ABoxImgPosition">
          <img src={require('../../images/AttractionsImg/earth3-right.png')} alt="" className="ABoxImgPositionImg" />
          {/* <div className="AGlobal AGlobalIconPositionFu"><img src={require('../images/AttractionsImg/AmapMarker.svg')} alt="" /></div> */}
          <div className="AGlobal AGlobalIconPositionJ"><img src={require('../../images/AttractionsImg/AmapMarker.svg')} alt="" /></div>
          <div className="AGlobal AGlobalIconPositionSum"><img src={require('../../images/AttractionsImg/AmapMarker.svg')} alt="" /></div>
          {/* <div className="AGlobal AGlobalIconPositionMia"><img src={require('../images/AttractionsImg/AmapMarker.svg')} alt="" /></div> */}
          {/* <div className="AGlobal AGlobalIconPositionMia2"><img src={require('../images/AttractionsImg/AmapMarker.svg')} alt="" /></div> */}
          <div className="AGlobal AGlobalIconPositionZun"><img src={require('../../images/AttractionsImg/AmapMarker.svg')} alt="" /></div>
          {/* <div className="AGlobal AGlobalIconPositionBa"><img src={require('../images/AttractionsImg/AmapMarker.svg')} alt="" /></div> */}
        </div>
        <div className="Acloud"> </div>

        <div className="AsliderBox">
          
          <Carousel infiniteLoop={true} showStatus={false} showArrows={true} showThumbs={true}>

            {/* 第一張輪播圖片開始 */}
            <div className="Aview">
            
              <img src={'images/AttractionsImg/ZunF0001.jpg'} />
              <div className="Amask">
                <h1>三五郎小屋</h1>
                <div className="Ah1div">
                  「藏王御釜」（お釜）地理位置在日本東北宮城縣的刈田郡蔵王町以及柴田郡川崎町的境界間，
                  五色岳西側間的爆火山口所形成的火山湖，被五色岳、熊野岳、刈田岳圍繞著，像是一釜鍋而得名。之前在陳綺貞的歌曲《殘缺的彩虹 Imperfect Rainbow》MV一開始見到藏王御釜，很是感動。
                    <a href="/Attractionslist.js">點我開始排程</a>
                </div>
              </div>
            </div>
               {/* 第一張輪播圖片結束 */}
          

           {/* 第2張輪播圖片開始 */}
           <div className="Aview">
              <img src={require('../../images/AttractionsImg/ZunF0002.jpg')} />
              <div className="Amask">
                <h1>牛角 山形櫻田店</h1>
                <div className="Ah1div">
                「藏王御釜」（お釜）地理位置在日本東北宮城縣的刈田郡蔵王町以及柴田郡川崎町的境界間，
                  五色岳西側間的爆火山口所形成的火山湖，被五色岳、熊野岳、刈田岳圍繞著，像是一釜鍋而得名。之前在陳綺貞的歌曲《殘缺的彩虹 Imperfect Rainbow》MV一開始見到藏王御釜，很是感動。


                    <a href="/Attractionslist.js">點我開始排程</a>
                </div>
              </div>
            </div>
               {/* 第2張輪播圖片結束 */}

             {/* 第3張輪播圖片開始 */}
             <div className="Aview">
              <img src={require('../../images/AttractionsImg/ZunP0001.jpg')} />
              <div className="Amask">
                <h1>LINA WORLD</h1>
                <div className="Ah1div">
                「藏王御釜」（お釜）地理位置在日本東北宮城縣的刈田郡蔵王町以及柴田郡川崎町的境界間，
                  五色岳西側間的爆火山口所形成的火山湖，被五色岳、熊野岳、刈田岳圍繞著，像是一釜鍋而得名。之前在陳綺貞的歌曲《殘缺的彩虹 Imperfect Rainbow》MV一開始見到藏王御釜，很是感動。


                    <a href="/Attractionslist.js">點我開始排程</a>
                </div>
              </div>
            </div>
               {/* 第3張輪播圖片結束 */}

             {/* 第4張輪播圖片開始 */}
             <div className="Aview">
              <img src={require('../../images/AttractionsImg/ZunA0001.jpg')} />
              <div className="Amask">
                <h1>御釜</h1>
                <div className="Ah1div">
                「藏王御釜」（お釜）地理位置在日本東北宮城縣的刈田郡蔵王町以及柴田郡川崎町的境界間，
                  五色岳西側間的爆火山口所形成的火山湖，被五色岳、熊野岳、刈田岳圍繞著，像是一釜鍋而得名。之前在陳綺貞的歌曲《殘缺的彩虹 Imperfect Rainbow》MV一開始見到藏王御釜，很是感動。


                    <a href="/Attractionslist.js">點我開始排程</a>
                </div>
              </div>
            </div>
               {/* 第4張輪播圖片結束 */}


            {/* 第5張輪播圖片開始 */}
            <div className="Aview">
              <img src={require('../../images/AttractionsImg/SunF0002.jpg')} />
              <div className="Amask">
                <h1>城內食堂  武火文火</h1>
                <div className="Ah1div">
                「藏王御釜」（お釜）地理位置在日本東北宮城縣的刈田郡蔵王町以及柴田郡川崎町的境界間，
                  五色岳西側間的爆火山口所形成的火山湖，被五色岳、熊野岳、刈田岳圍繞著，像是一釜鍋而得名。之前在陳綺貞的歌曲《殘缺的彩虹 Imperfect Rainbow》MV一開始見到藏王御釜，很是感動。


                    <a href="/Attractionslist.js">點我開始排程</a>
                </div>
              </div>
            </div>
               {/* 第5張輪播圖片結束 */}


            {/* 第6張輪播圖片開始 */}
            <div className="Aview">
              <img src={require('../../images/AttractionsImg/SunA0003.jpg')} />
              <div className="Amask">
                <h1>草津溫泉</h1>
                <div className="Ah1div">
                「藏王御釜」（お釜）地理位置在日本東北宮城縣的刈田郡蔵王町以及柴田郡川崎町的境界間，
                  五色岳西側間的爆火山口所形成的火山湖，被五色岳、熊野岳、刈田岳圍繞著，像是一釜鍋而得名。之前在陳綺貞的歌曲《殘缺的彩虹 Imperfect Rainbow》MV一開始見到藏王御釜，很是感動。


                    <a href="/Attractionslist.js">點我開始排程</a>
                </div>
              </div>
            </div>
               {/* 第6張輪播圖片結束 */}


            {/* 第7張輪播圖片開始 */}
            <div className="Aview">
              <img src={require('../../images/AttractionsImg/SunA0004.jpg')} />
              <div className="Amask">
                <h1>松本城</h1>
                <div className="Ah1div">
                「藏王御釜」（お釜）地理位置在日本東北宮城縣的刈田郡蔵王町以及柴田郡川崎町的境界間，
                  五色岳西側間的爆火山口所形成的火山湖，被五色岳、熊野岳、刈田岳圍繞著，像是一釜鍋而得名。之前在陳綺貞的歌曲《殘缺的彩虹 Imperfect Rainbow》MV一開始見到藏王御釜，很是感動。


                    <a href="/Attractionslist.js">點我開始排程</a>
                </div>
              </div>
            </div>
               {/* 第7張輪播圖片結束 */}

            {/* 第8張輪播圖片開始 */}
            <div className="Aview">
              <img src={require('../../images/AttractionsImg/SunB0001.jpg')} />
              <div className="Amask">
                <h1>Souvenir store</h1>
                <div className="Ah1div">
                「藏王御釜」（お釜）地理位置在日本東北宮城縣的刈田郡蔵王町以及柴田郡川崎町的境界間，
                  五色岳西側間的爆火山口所形成的火山湖，被五色岳、熊野岳、刈田岳圍繞著，像是一釜鍋而得名。之前在陳綺貞的歌曲《殘缺的彩虹 Imperfect Rainbow》MV一開始見到藏王御釜，很是感動。


                    <a href="/Attractionslist.js">點我開始排程</a>
                </div>
              </div>
            </div>
               {/* 第8張輪播圖片結束 */}

            {/* 第9張輪播圖片開始 */}
            <div className="Aview">
              <img src={require('../../images/AttractionsImg/JF0002.jpg')} />
              <div className="Amask">
                <h1>Elm Garden</h1>
                <div className="Ah1div">
                「藏王御釜」（お釜）地理位置在日本東北宮城縣的刈田郡蔵王町以及柴田郡川崎町的境界間，
                  五色岳西側間的爆火山口所形成的火山湖，被五色岳、熊野岳、刈田岳圍繞著，像是一釜鍋而得名。之前在陳綺貞的歌曲《殘缺的彩虹 Imperfect Rainbow》MV一開始見到藏王御釜，很是感動。


                    <a href="/Attractionslist.js">點我開始排程</a>
                </div>
              </div>
            </div>
               {/* 第9張輪播圖片結束 */}

            {/* 第10張輪播圖片開始 */}
            <div className="Aview">
              <img src={require('../../images/AttractionsImg/JA0004.jpg')} />
              <div className="Amask">
                <h1>大通公園</h1>
                <div className="Ah1div">
                「藏王御釜」（お釜）地理位置在日本東北宮城縣的刈田郡蔵王町以及柴田郡川崎町的境界間，
                  五色岳西側間的爆火山口所形成的火山湖，被五色岳、熊野岳、刈田岳圍繞著，像是一釜鍋而得名。之前在陳綺貞的歌曲《殘缺的彩虹 Imperfect Rainbow》MV一開始見到藏王御釜，很是感動。


                    <a href="/Attractionslist.js">點我開始排程</a>
                </div>
              </div>
            </div>
               {/* 第10張輪播圖片結束 */}

          {/* 11張輪播圖片開始 */}
          <div className="Aview">
              <img src={require('../../images/AttractionsImg/JP0002.jpg')} />
              <div className="Amask">
                <h1>白色戀人</h1>
                <div className="Ah1div">
                「藏王御釜」（お釜）地理位置在日本東北宮城縣的刈田郡蔵王町以及柴田郡川崎町的境界間，
                  五色岳西側間的爆火山口所形成的火山湖，被五色岳、熊野岳、刈田岳圍繞著，像是一釜鍋而得名。之前在陳綺貞的歌曲《殘缺的彩虹 Imperfect Rainbow》MV一開始見到藏王御釜，很是感動。


                    <a href="/Attractionslist.js">點我開始排程</a>
                </div>
              </div>
            </div>
               {/* 第11張輪播圖片結束 */}

            {/* 第12張輪播圖片開始 */}
            <div className="Aview">
              <img src={require('../../images/AttractionsImg/JA0001.jpg')} />
              <div className="Amask">
                <h1>小樽運河</h1>
                <div className="Ah1div">
                「藏王御釜」（お釜）地理位置在日本東北宮城縣的刈田郡蔵王町以及柴田郡川崎町的境界間，
                  五色岳西側間的爆火山口所形成的火山湖，被五色岳、熊野岳、刈田岳圍繞著，像是一釜鍋而得名。之前在陳綺貞的歌曲《殘缺的彩虹 Imperfect Rainbow》MV一開始見到藏王御釜，很是感動。


                    <a href="/Attractionslist.js">點我開始排程</a>
                </div>
              </div>
            </div>
               {/* 第12張輪播圖片結束 */}
            
          </Carousel>
        </div>
      </>
    );
  }
}

export default AttractionsIndex;