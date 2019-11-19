import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard"

class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      // centerPadding: "80px",
      slidesToShow: 4,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            // 
          }
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            // 
          }
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <ProductCard/>
          </div>
          <div>
          <ProductCard/>
          </div>
          <div>
          <ProductCard/>
          </div>
          <div>
          <ProductCard/>
          </div>
          <div>
          <ProductCard/>
          </div>
          <div>
          <ProductCard/>
          </div>
        </Slider>
      </div>
    );
  }
}
export default SwipeToSlide