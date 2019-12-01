import React from 'react'
import BannerAnim from 'rc-banner-anim'
// import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one'
import '../../../node_modules/rc-banner-anim/assets/index.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../css/hotel/HotelRoomCarousel.css'

const { Element, Thumb } = BannerAnim
const BgElement = Element.BgElement
class HotelRoomCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.imgArray = [
      'https://www.thesharehotels.com/rakuro/img/gallery/pic_gallery23.jpg',
      'https://www.thesharehotels.com/rakuro/img/gallery/pic_gallery17.jpg',
      'https://www.thesharehotels.com/rakuro/img/gallery/pic_gallery21.jpg',
      'https://www.thesharehotels.com/rakuro/img/gallery/pic_gallery24.jpg',
      'https://www.thesharehotels.com/rakuro/img/gallery/pic_gallery25.jpg',
      'https://www.thesharehotels.com/rakuro/img/gallery/pic_gallery28.jpg',
    ]
    this.state = {
      enter: false,
    }
  }

  onMouseEnter = () => {
    this.setState({
      enter: true,
    })
  }

  onMouseLeave = () => {
    this.setState({
      enter: false,
    })
  }

  render() {
    const thumbChildren = this.imgArray.map((img, i) => (
      <span key={i}>
        <i style={{ backgroundImage: `url(${img})` }} />
      </span>
    ))
    return (
      <BannerAnim
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <Element key="aaa" prefixCls="banner-user-elem">
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(${this.imgArray[0]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* <QueueAnim key="1" name="QueueAnim">
            <h1 key="h1">Ant Motion Demo</h1>
            <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
          </QueueAnim>
          <TweenOne
            animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }}
            key="2"
            name="TweenOne"
          >
            Ant Motion Demo.Ant Motion Demo
          </TweenOne> */}
        </Element>
        <Element key="bbb" prefixCls="banner-user-elem">
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(${this.imgArray[1]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Element>
        <Element key="ccc" prefixCls="banner-user-elem">
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(${this.imgArray[2]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Element>
        <Element key="ccc" prefixCls="banner-user-elem">
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(${this.imgArray[3]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Element>
        <Element key="ccc" prefixCls="banner-user-elem">
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(${this.imgArray[4]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Element>
        <Element key="ccc" prefixCls="banner-user-elem">
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(${this.imgArray[5]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Element>

        <Thumb
          prefixCls="user-thumb"
          key="thumb"
          component={TweenOne}
          animation={{ bottom: this.state.enter ? 0 : -110 }}
        >
          {thumbChildren}
        </Thumb>
      </BannerAnim>
    )
  }
}
export default HotelRoomCarousel
