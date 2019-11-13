import React from 'react'
import '../css/card_carousels.css';
import CoachCarouselCard2 from './CoachCarouselCard2'
// import ClassCard from '../../coach/ClassCard';
// import CardCarousels from './CardCarousels';
import CardCarouselsCopy from '../components/goods/CardCarouselsCopy';

class CoachCarousels extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
     return (
      <>
      <div className="">
      <section className="area_lesson">
        <div className="container">
                <div className="lesson_title">
                    <div className="d-flex"><div className="title_sign"></div><h4>教練</h4></div>
                </div>
                <hr/>
        <div id="carouselExampleControls2" className="carousel slide lesson_slide d-flex justify-content-center" data-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="lesson d-flex justify-content-center">
                <CoachCarouselCard2 />
                <CoachCarouselCard2 />
                <CoachCarouselCard2 />
                </div>
            </div>
            <div className="carousel-item">
                <div className="lesson d-flex justify-content-center">
                    {/* <!-- lesson1 --> */}
                    <CoachCarouselCard2 />
                    {/* <!-- lesson2 --> */}
                    <CardCarouselsCopy/>
                    {/* <!-- lesson3 --> */}
                    <CardCarouselsCopy/>
                </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                <i className="fas fa-chevron-left icon-style"></i>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                <i className="fas fa-chevron-right icon-style"></i>
                <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
        </div>
        </section>
        
      </div>
    </>
    )
  }
 
}

export default CoachCarousels