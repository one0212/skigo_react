import React from 'react'
import { Badge } from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../css/hotel/HotelKeyword.css'

class HotelKeyword extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="slogan_font d-flex justify-content-center text-center">
            <span>“</span>
            <p>
              訂飯店、住度假村、睡青年旅館<br></br>
              包山包海超過200萬間國內外各類優惠住宿
            </p>
          </div>
          <div className="span_button text-center">
            <Badge pill variant="light">
              渡假村
            </Badge>
            <Badge pill variant="light">
              小木屋
            </Badge>
            <Badge pill variant="light">
              酒店
            </Badge>
            <Badge pill variant="light">
              購物商場
            </Badge>
            <Badge pill variant="light">
              溫泉
            </Badge>
            <Badge pill variant="light">
              周邊景點
            </Badge>
            <Badge pill variant="light">
              兒童遊憩
            </Badge>
            <Badge pill variant="light">
              懷石料理
            </Badge>
            <Badge pill variant="light">
              遊樂園
            </Badge>
          </div>
        </div>
      </>
    )
  }
}

export default HotelKeyword
