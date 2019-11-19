import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import '../css/asnavfor.css'



 class ProductAsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (

        <div className="product-carousel">
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          arrows={false}
          className="pro-img1"
        >
          <div>
            <img src="/images/Product/10707106000150_1.png"/>
          </div>
          <div  >
          <img src="/images/Product/10707106000150_2.png"/>
          </div>
          <div  >
          <img src="/images/Product/10707106000150_3.png"/>
          </div>
          <div  >
          <img src="/images/Product/10707106000150_4.png"/>
          </div>
          <div  >
          <img src="/images/Product/10707106000150_5.png"/>
          </div>
          <div  >
          <img src="/images/Product/10707106000150_6.png"/>
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}

          className="pro-img2"

        >
          <div >
          <img src="/images/Product/10707106000150_1.png"/>
          </div>
          <div>
          <img src="/images/Product/10707106000150_2.png"/>
          </div>
          <div>
          <img src="/images/Product/10707106000150_3.png"/>
          </div>
          <div>
          <img src="/images/Product/10707106000150_4.png"/>
          </div>
          <div>
          <img src="/images/Product/10707106000150_5.png"/>
          </div>
          <div>
          <img src="/images/Product/10707106000150_6.png"/>
          </div>
        </Slider>
      </div>

    );
  }
}

export default ProductAsNavFor