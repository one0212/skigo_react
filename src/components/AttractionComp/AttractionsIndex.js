import React, { Component } from 'react';
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
            <div style={{ borderWidth: 0 }}>
              <Iframe url="http://localhost:3000/attractions/"
                position="absolute"
                width="100%"
                id="myId"
                className="myClassname"
                height="100%"
                styles={{ borderWidth: '0' }}
                scrolling="no"
              />
            </div>
      </>
    );
  }
}

export default AttractionsIndex;