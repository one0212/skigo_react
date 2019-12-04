import React, { Component } from 'react';
import $ from 'jquery';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../css/AttractionsIndex_css.css';

import ReactDOM from 'react-dom';
// 掛載輪播套件
import { Carousel } from 'react-responsive-carousel';

import Iframe from 'react-iframe'

class AttractionsIndex extends Component {



  render() {


    return (
      <>
            <div >
              <Iframe url="http://localhost:3001/attractions/"
                position="absolute"
                width="100%"
                id="myId"
                height="100%"
                className="myClassname"
                scrolling="no"
              />
            </div>
      </>
    );
  }
}

export default AttractionsIndex;