import React, { Component } from 'react'
import Slider from 'react-slick'
import ProductCard2 from './ProductCard2'

class SwipeToSlide extends Component {
  constructor() {
    super()

    this.state = {
      products: ''
    }
  }

  componentWillMount() {
    fetch(`http://localhost:3001/japi/products`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then(response => {
        return response.json()
      })
      .then(json => {
        const uniqueNo = []
        const uniqueProd = []
        json.map(prod => {
          if (uniqueNo.indexOf(prod.No) === -1) {
            uniqueNo.push(prod.No)
            uniqueProd.push(prod)
          }
        })
        console.log(uniqueNo)
        this.setState({ products: uniqueProd })
        console.log(this.state.products)
      })
      .catch(error => {
        'error'
      })
  }

  render() {
    const settings = {
      className: 'center',
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
          },
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            //
          },
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div>
        <Slider {...settings}>
          <div>
            <ProductCard2 />
          </div>
          <div>
            <ProductCard2 />
          </div>
          <div>
            <ProductCard2 />
          </div>
          <div>
            <ProductCard2 />
          </div>
          <div>
            <ProductCard2 />
          </div>
          <div>
            <ProductCard2 />
          </div>
        </Slider>
      </div>
    )
  }
}
export default SwipeToSlide
