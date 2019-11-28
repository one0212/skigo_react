import React from 'react'
// import { Badge } from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import BannerAnim from 'rc-banner-anim'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import '../../../node_modules/rc-banner-anim/assets/index.css'
import '../../css/hotel/HotelIntroductionCarousel.css'

const { Element } = BannerAnim
const BgElement = Element.BgElement
class HotelIntroductionCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      delay: 0,
    }
    this.openSlide = false
  }

  onChange = (e, int) => {
    // 在切换到下一个后把延时改掉。
    if (int === 1 && e === 'after' && !this.openSlide) {
      this.setState({
        delay: 600,
      })
      this.openSlide = true
    }
  }

  onClick = () => {
    this.banner.slickGoTo(1)
  }

  render() {
    return (
      <>
        {console.log(this.props.hotelInt)}
        <div>
          {/* <a onClick={this.onClick}>点击跳到第二块</a> */}
          <BannerAnim
            prefixCls="banner-user"
            type="across"
            onChange={this.onChange}
            duration={1000}
            ease="easeInOutExpo"
            sync
            ref={c => {
              this.banner = c
            }}
            // autoPlay
          >
            <Element key="aaa" prefixCls="banner-user-elem" leaveChildHide>
              <BgElement key="bg" className="bg hotel_introduction_bg" />
              <QueueAnim
                name="QueueAnim"
                className="banner-user-title"
                key="1"
                delay={[600, 0]}
              >
                <h1 key="h1">{this.props.hotelInt.name}</h1>
              </QueueAnim>
              <TweenOne
                className="banner-user-title_p"
                animation={{ y: 50, opacity: 0, type: 'from', delay: 800 }}
                key="2"
              >
                {this.props.hotelInt.slogan}
              </TweenOne>
            </Element>
            <Element key="aaa" prefixCls="banner-user-elem" leaveChildHide>
              <BgElement key="bg" className="bg hotel_introduction_bg" />
              <QueueAnim
                name="QueueAnim"
                className="banner-user-title"
                key="1"
                delay={[600, 0]}
              >
                <h1 key="h1">{this.props.hotelInt.name}</h1>
              </QueueAnim>
              <TweenOne
                className="banner-user-title_p"
                animation={{ y: 50, opacity: 0, type: 'from', delay: 800 }}
                key="2"
              >
                {this.props.hotelInt.slogan}
              </TweenOne>
            </Element>
            <Element key="aaa" prefixCls="banner-user-elem" leaveChildHide>
              <BgElement key="bg" className="bg hotel_introduction_bg" />
              <QueueAnim
                name="QueueAnim"
                className="banner-user-title"
                key="1"
                delay={[600, 0]}
              >
                <h1 key="h1">{this.props.hotelInt.name}</h1>
              </QueueAnim>
              <TweenOne
                className="banner-user-title_p"
                animation={{ y: 50, opacity: 0, type: 'from', delay: 800 }}
                key="2"
              >
                {this.props.hotelInt.slogan}
              </TweenOne>
            </Element>
          </BannerAnim>
        </div>
      </>
    )
  }
}

export default HotelIntroductionCarousel
