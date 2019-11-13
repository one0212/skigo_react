import React from 'react'
import '../css/card_carousels.css';
import CoachCarouselCard from './CoachCarouselCard'
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
      <div>
      <section className="area_lesson">
        <div className="container">
                <div className="lesson_title">
                    <div className="d-flex"><div className="title_sign"></div><h4>課程</h4></div>
                </div>
                <hr/>
        <div id="carouselExampleControls1" className="carousel slide lesson_slide d-flex justify-content-center" data-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="lesson d-flex justify-content-center">
                <CoachCarouselCard />
                <CoachCarouselCard />
                <CoachCarouselCard />
                </div>
            </div>
            <div className="carousel-item">
                <div className="lesson d-flex justify-content-center">
                    {/* <!-- lesson1 --> */}
                    <CoachCarouselCard />
                    {/* <!-- lesson2 --> */}
                    <CardCarouselsCopy/>
                    {/* <!-- lesson3 --> */}
                    <CardCarouselsCopy/>
                </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                <i className="fas fa-chevron-left icon-style"></i>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
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