import React, { Component } from 'react';
// 掛載header元件
// import Header from '../components/Header';
// 掛載景點css
import '../../css/AttractionsIndex_css.css';



class AttractionsIndex extends Component {
  render() {
    return (
      <>
      {/* <Header/> */}
      <div className="ABoxImgPosition">
            <img src={require('../../images/AttractionsImg/earth3-right.png')} alt="" className="ABoxImgPositionImg"/>
            {/* <div className="AGlobal AGlobalIconPositionFu"><img src={require('../images/AttractionsImg/AmapMarker.svg')} alt="" /></div> */}
            <div className="AGlobal AGlobalIconPositionJ"><img src={require('../../images/AttractionsImg/AmapMarker.svg')} alt="" /></div>
            <div className="AGlobal AGlobalIconPositionSum"><img src={require('../../images/AttractionsImg/AmapMarker.svg')} alt="" /></div>
            {/* <div className="AGlobal AGlobalIconPositionMia"><img src={require('../images/AttractionsImg/AmapMarker.svg')} alt="" /></div> */}
            {/* <div className="AGlobal AGlobalIconPositionMia2"><img src={require('../images/AttractionsImg/AmapMarker.svg')} alt="" /></div> */}
            <div className="AGlobal AGlobalIconPositionZun"><img src={require('../../images/AttractionsImg/AmapMarker.svg')} alt="" /></div>
            {/* <div className="AGlobal AGlobalIconPositionBa"><img src={require('../images/AttractionsImg/AmapMarker.svg')} alt="" /></div> */}
        </div>

        <div className="Acloud"> </div>
     
      </>
    );
  }
}

export default AttractionsIndex;