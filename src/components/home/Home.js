import React from "react";
import  '../../css/home.css'
import  '../../css/home2.css'
import $ from 'jquery'
import Slider from "react-slick";
// import { FaMapMarkerAlt,FiMapPin,  } from "react-icons/fa";
import Footer from '../Footer'


class Home extends React.Component {
  constructor(){
    super()
    this.state = {}
  }
  componentDidMount(){
    const $window = $(window);
    const $body = $('body');
    
    class Slideshow {
        constructor (userOptions = {}) {
        const defaultOptions = {
          $el: $('.slideshow'),
          showArrows: false,
          showPagination: true,
          duration: 10000,
          autoplay: true
        }
        
        let options = Object.assign({}, defaultOptions, userOptions);
        
            this.$el = options.$el;
            this.maxSlide = this.$el.find($('.js-slider-home-slide')).length;
        this.showArrows = this.maxSlide > 1 ? options.showArrows : false;
        this.showPagination = options.showPagination;
            this.currentSlide = 1;
            this.isAnimating = false;
            this.animationDuration = 1200;
            this.autoplaySpeed = options.duration;
            // this.interval;
            this.$controls = this.$el.find('.js-slider-home-button');
        this.autoplay = this.maxSlide > 1 ? options.autoplay : false;
    
            this.$el.on('click', '.js-slider-home-next', (event) => this.nextSlide());
            this.$el.on('click', '.js-slider-home-prev', (event) => this.prevSlide());
        this.$el.on('click', '.js-pagination-item', event => {
          if (!this.isAnimating) {
            this.preventClick();
      this.goToSlide(event.target.dataset.slide);
          }
        });
    
            this.init();
        }
      
      init() {
        this.goToSlide(1);
        if (this.autoplay) {
          this.startAutoplay();
        }
        
        if (this.showPagination) {
          let paginationNumber = this.maxSlide;
          let pagination = '<div class="pagination"><div class="container">';
          
          for (let i = 0; i < this.maxSlide; i++) {
            let item = `<span class="pagination__item js-pagination-item ${ i === 0 ? 'is-current' : ''}" data-slide=${i + 1}>${i + 1}</span>`;
            pagination  = pagination + item;
          }
          
          pagination = pagination + '</div></div>';
          
          this.$el.append(pagination);
        }
      }
      
      preventClick() {
            this.isAnimating = true;
            this.$controls.prop('disabled', true);
            clearInterval(this.interval);
    
            setTimeout(() => {
                this.isAnimating = false;
                this.$controls.prop('disabled', false);
          if (this.autoplay) {
                  this.startAutoplay();
          }
            }, this.animationDuration);
        }
    
        goToSlide(index) {    
        this.currentSlide = parseInt(index);
        
        if (this.currentSlide > this.maxSlide) {
          this.currentSlide = 1;
        }
        
        if (this.currentSlide === 0) {
          this.currentSlide = this.maxSlide;
        }
        
        const newCurrent = this.$el.find('.js-slider-home-slide[data-slide="'+ this.currentSlide +'"]');
        const newPrev = this.currentSlide === 1 ? this.$el.find('.js-slider-home-slide').last() : newCurrent.prev('.js-slider-home-slide');
        const newNext = this.currentSlide === this.maxSlide ? this.$el.find('.js-slider-home-slide').first() : newCurrent.next('.js-slider-home-slide');
        
        this.$el.find('.js-slider-home-slide').removeClass('is-prev is-next is-current');
        this.$el.find('.js-pagination-item').removeClass('is-current');
        
            if (this.maxSlide > 1) {
          newPrev.addClass('is-prev');
          newNext.addClass('is-next');
        }
        
        newCurrent.addClass('is-current');
        this.$el.find('.js-pagination-item[data-slide="'+this.currentSlide+'"]').addClass('is-current');
      }
      
      nextSlide() {
        this.preventClick();
        this.goToSlide(this.currentSlide + 1);
        }
       
        prevSlide() {
        this.preventClick();
        this.goToSlide(this.currentSlide - 1);
        }
    
        startAutoplay() {
            this.interval = setInterval(() => {
                if (!this.isAnimating) {
                    this.nextSlide();
                }
            }, this.autoplaySpeed);
        }
    
        destroy() {
            this.$el.off();
        }
    }
    
    (function() {
        let loaded = false;
        let maxLoad = 3000;  
      
        function load() {
            const options = {
          showPagination: true
        };
    
        let slideShow = new Slideshow(options);
        }
      
        function addLoadClass() {
            $body.addClass('is-loaded');
    
            setTimeout(function() {
                $body.addClass('is-animated');
            }, 600);
        }
      
        $window.on('load', function() {
            if(!loaded) {
                loaded = true;
                load();
            }
        });
      
        setTimeout(function() {
            if(!loaded) {
                loaded = true;
                load();
            }
        }, maxLoad);
    
        addLoadClass();
    })();
    
  }
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "45px",
      slidesToShow: 3, //一次顯示4個
      slidesToScroll: 1, //切換下一頁時移動1個
      swipeToSlide: true,
      responsive: [
        {
            breakpoint: 1300, // RWD在1024寬度時切換顯示數量
            settings: {
                slidesToShow: 2, //一次顯示3個
                slidesToScroll: 1,//切換下一頁時移動3個
           }
       },{
            breakpoint: 896,// RWD在600寬度時切換顯示數量
            settings: {
                slidesToShow: 1,//一次顯示2個
                slidesToScroll: 1,//切換下一頁時移動2個
           }
       },
      ]
    };
  return (
    <>
      <div className="slideshow" id="js-header">
            
            <div className="slideshow__slide js-slider-home-slide is-current" data-slide="1">
                <div className="slideshow__slide-background-parallax background-absolute js-parallax" data-speed="-1" data-position="top" data-target="#js-header">
                    <div className="slideshow__slide-background-load-wrap background-absolute">
                        <div className="slideshow__slide-background-load background-absolute">
                            <div className="slideshow__slide-background-wrap background-absolute">
                                <div className="slideshow__slide-background background-absolute">
                                    <div className="slideshow__slide-image-wrap background-absolute">
                                        <div className="slideshow__slide-image background-absolute" style={{backgroundImage: "url('./images/home/gabriel-santiago.jpg')"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slideshow__slide-caption">
                    <div className="slideshow__slide-caption-text">
                        <div className="container js-parallax" data-speed="2" data-position="top" data-target="#js-header">
                            <h1 className="slideshow__slide-caption-title">札幌國際滑雪場</h1>
                            <a className="slideshow__slide-caption-subtitle -load o-hsub -link" href="#">
                                <span className="slideshow__slide-caption-subtitle-label">Know more about</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="slideshow__slide js-slider-home-slide is-next" data-slide="2">
                <div className="slideshow__slide-background-parallax background-absolute js-parallax" data-speed="-1" data-position="top" data-target="#js-header">
                    <div className="slideshow__slide-background-load-wrap background-absolute">
                        <div className="slideshow__slide-background-load background-absolute">
                            <div className="slideshow__slide-background-wrap background-absolute">
                                <div className="slideshow__slide-background background-absolute">
                                    <div className="slideshow__slide-image-wrap background-absolute">
                                        <div className="slideshow__slide-image background-absolute" style={{backgroundImage: "url('./images/home/thomas-beckett.jpg')"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slideshow__slide-caption">
                    <div className="slideshow__slide-caption-text">
                        <div className="container js-parallax" data-speed="2" data-position="top" data-target="#js-header">
                            <h1 className="slideshow__slide-caption-title">上越國際滑雪場</h1>
                            <a className="slideshow__slide-caption-subtitle -load o-hsub -link" href="#">
                                <span className="slideshow__slide-caption-subtitle-label">Know more about</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="slideshow__slide js-slider-home-slide is-prev" data-slide="3">
                <div className="slideshow__slide-background-parallax background-absolute js-parallax" data-speed="-1" data-position="top" data-target="#js-header">
                    <div className="slideshow__slide-background-load-wrap background-absolute">
                        <div className="slideshow__slide-background-load background-absolute">
                            <div className="slideshow__slide-background-wrap background-absolute">
                                <div className="slideshow__slide-background background-absolute">
                                    <div className="slideshow__slide-image-wrap background-absolute">
                                        <div className="slideshow__slide-image background-absolute" style={{backgroundImage: "url('./images/home/pietro-de-grandi.jpg')"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slideshow__slide-caption">
                    <div className="slideshow__slide-caption-text">
                        <div className="container js-parallax" data-speed="2" data-position="top" data-target="#js-header">
                            <h1 className="slideshow__slide-caption-title">富良野滑雪場</h1>
                            <a className="slideshow__slide-caption-subtitle -load o-hsub -link" href="#">
                                <span className="slideshow__slide-caption-subtitle-label">Know more about</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="c-header-home_footer">
                <div className="o-container">
                    <div className="c-header-home_controls -nomobile o-button-group">
                        <div className="js-parallax is-inview" data-speed="1" data-position="top" data-target="#js-header">
                            <button className="o-button -white -square -left js-slider-home-button js-slider-home-prev" type="button">
                                <span className="o-button_label">
                                    {/* <img className="o-button_icon" src="./images/home/back.svg" alt=""/> */}
                                    <svg className="o-button_icon" role="img"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#arrow-prev"></use></svg>
                                </span>
                            </button>
                            <button className="o-button -white -square js-slider-home-button js-slider-home-next" type="button">
                                <span className="o-button_label">
                                    {/* <img className="o-button_icon" src="./images/home/next.svg" alt=""/> */}
                                    <svg className="o-button_icon" role="img"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#arrow-next"></use></svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg">
                <symbol viewBox="0 0 18 18" id="arrow-next">
                    <path id="arrow-next-arrow.svg" d="M12.6,9L4,17.3L4.7,18l8.5-8.3l0,0L14,9l0,0l-0.7-0.7l0,0L4.7,0L4,0.7L12.6,9z"/>
                </symbol>
                <symbol viewBox="0 0 18 18" id="arrow-prev">
                    <path id="arrow-prev-arrow.svg" d="M14,0.7L13.3,0L4.7,8.3l0,0L4,9l0,0l0.7,0.7l0,0l8.5,8.3l0.7-0.7L5.4,9L14,0.7z"/>
                </symbol>
            </svg>
      </div>
      <div className="home_second">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-12">
                      <div className="home_areas">
                          <div className="d-flex areas_main">
                              <div className="areas_title">
                                  <h4>Popularity</h4>
                                  <h4 className="h640">Ski Area</h4>
                                  <p className="line_s">|</p>
                                  <p>熱門雪場</p>
                              </div>
                              <div className="areas_slide">
                              <Slider {...settings}>
                                <div>
                                    <div className="card" style={{width: "18rem"}}>
                                        <img className="home_img" src="./images/home/toa-heftiba.jpg" alt=""/>
                                        <div className="card-body">
                                            <h5 className="card-title">富良野滑雪場</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card" style={{width: "18rem"}}>
                                        <img className="home_img" src="./images/home/toa-heftiba.jpg" alt=""/>
                                        <div className="card-body">
                                            <h5 className="card-title">富良野滑雪場</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card" style={{width: "18rem"}}>
                                        <img className="home_img" src="./images/home/toa-heftiba.jpg" alt=""/>
                                        <div className="card-body">
                                            <h5 className="card-title">富良野滑雪場</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card" style={{width: "18rem"}}>
                                        <img className="home_img" src="./images/home/toa-heftiba.jpg" alt=""/>
                                        <div className="card-body">
                                            <h5 className="card-title">富良野滑雪場</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card" style={{width: "18rem"}}>
                                        <img className="home_img" src="./images/home/toa-heftiba.jpg" alt=""/>
                                        <div className="card-body">
                                            <h5 className="card-title">富良野滑雪場</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card" style={{width: "18rem"}}>
                                        <img className="home_img" src="./images/home/toa-heftiba.jpg" alt=""/>
                                        <div className="card-body">
                                            <h5 className="card-title">富良野滑雪場</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                </Slider>
                              </div>
                          </div>
                          <div className="bg-areas"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>   
      <div className="home_third">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12"></div>
                </div>
                <div className="home_skiing d-flex">
                    <p>SKIING</p>
                    <p>RIDICULOUSLY</p>
                    <p>GOOD</p>
                    <p>WORKOUT</p>
                </div>
            </div>
        </div>
        <div className="home_fourth">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="home_featured">
                            <div className="d-flex featured_main">
                                <div className="featured_title">
                                    <p>精選課程</p>
                                    <p className="line_s">|</p>
                                    <h4>Featured Course</h4>
                                </div>
                                <div className="featured_slide">
                                    <div className="d-flex justify-content-start">
                                        <div className="d-flex">
                                            {/* <!-- featured1 --> */}
                                            <div className="featured_card">
                                                <a href="#">
                                                    <div className="featured_img">
                                                        <img className="home_img_pic" src="./images/home/toa-heftiba.jpg" alt=""/>
                                                    </div>
                                                    <div className="featured_card_word">
                                                        <p className="areas">初級雙板滑雪</p>
                                                        <div className="d-flex">
                                                            <img src="./images/home/clock.svg" alt=""/>&nbsp;&nbsp;
                                                            <p>2小時課程</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* <!-- featured2 --> */}
                                            <div className="featured_card featured2">
                                                <a href="#">
                                                    <div className="featured_img">
                                                        <img className="home_img_pic" src="./images/home/nicolai-berntsen.jpg" alt=""/>
                                                    </div>
                                                    <div className="featured_card_word">
                                                        <p className="areas">初級雙板滑雪</p>
                                                        <div className="d-flex">
                                                            <img src="./images/home/clock.svg" alt=""/>&nbsp;&nbsp;
                                                            <p>2小時課程</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="explore justify-content-center align-items-center" href="">Explore More</a>
                                    </div>   
                                </div>
                            </div>
                            <div className="bg-lesson"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        <div className="home_fifth">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="home_recommend">
                            <div className="d-flex recommend_main">
                                <div className="recommend_title">
                                    <h4>Recommend</h4><h4 className="h640"> Hotel</h4>
                                    <p className="line_s">|</p>
                                    <p>推薦飯店</p>
                                </div>
                                <div className="recommend_slide">
                                    <div className="d-flex justify-content-start">
                                        <div className="d-flex">
                                            {/* <!-- recommend1 --> */}
                                            <div className="recommend_card">
                                                <a href="#">
                                                    <div className="recommend_img">
                                                        <img className="home_img_pic" src="./images/home/toa-heftiba.jpg" alt=""/>
                                                    </div>
                                                    <div className="recommend_card_word">
                                                        <p className="areas">富良野滑雪場飯店</p>
                                                        <div className="d-flex">
                                                            <img src="./images/home/placeholder0.svg" alt=""/>
                                                            <p>北海道</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* <!-- recommend2 --> */}
                                            <div className="recommend_card recommend2">
                                                <a href="#">
                                                    <div className="recommend_img">
                                                        <img className="home_img_pic" src="./images/home/nicolai-berntsen.jpg" alt=""/>
                                                    </div>
                                                    <div className="recommend_card_word">
                                                        <p className="areas">富良野滑雪場飯店</p>
                                                        <div className="d-flex">
                                                            <img src="./images/home/placeholder0.svg" alt=""/>
                                                            <p>北海道</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="explore justify-content-center align-items-center" href="">Explore More</a>
                                    </div>   
                                </div>
                            </div>
                            <div className="bg-hotel"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      <Footer/>
    </>
  );
  }
};

export default Home;
