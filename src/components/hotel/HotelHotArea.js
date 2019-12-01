import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../css/hotel/HotelHotArea.css'
import { Row, Col, Card } from 'react-bootstrap'

class HotelHotArea extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <>
        <div className="container">
          <div class="text-center mt-5">
            <h1>熱門地區</h1>
          </div>
          <div className="px-5">
            <Row className="mt-4">
              <Col md={3}>
                <Card
                  style={{ cursor: 'pointer', border: 'none' }}
                  className="hot_area_slide-up"
                >
                  <Card.Body className="hot_area_card">
                    <Card.Img
                      className="hot_area_card"
                      variant="top"
                      src="/images/hotel/hotel_hot_area/Japan.jpg"
                      alt=" Card image"
                    />
                    <div className="card-img-overlay text_overlay text-center">
                      <p className="btn hot_area_title">北海道</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card
                  style={{ cursor: 'pointer', border: 'none' }}
                  className="hot_area_slide-up"
                >
                  <Card.Body className="hot_area_card">
                    <Card.Img
                      className="hot_area_card"
                      variant="top"
                      src="/images/hotel/hotel_hot_area/US.jpg"
                      alt=" Card image"
                    />
                    <div className="card-img-overlay text_overlay text-center">
                      <p className="btn hot_area_title">關西</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card
                  style={{ cursor: 'pointer', border: 'none' }}
                  className="hot_area_slide-up"
                >
                  <Card.Body className="hot_area_card">
                    <Card.Img
                      className="hot_area_card"
                      variant="top"
                      src="/images/hotel/hotel_hot_area/Korea.jpg"
                      alt=" Card image"
                    />
                    <div className="card-img-overlay text_overlay text-center">
                      <p className="btn hot_area_title">關東</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card
                  style={{ cursor: 'pointer', border: 'none' }}
                  className="hot_area_slide-up"
                >
                  <Card.Body className="hot_area_card">
                    <Card.Img
                      className="hot_area_card"
                      variant="top"
                      src="/images/hotel/hotel_hot_area/France.jpg"
                      alt=" Card image"
                    />
                    <div className="card-img-overlay text_overlay text-center">
                      <p className="btn hot_area_title">長野</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4 mb-5">
              <Col md={3}>
                <Card
                  style={{ cursor: 'pointer', border: 'none' }}
                  className="hot_area_slide-up"
                >
                  <Card.Body className="hot_area_card">
                    <Card.Img
                      className="hot_area_card"
                      variant="top"
                      src="/images/hotel/hotel_hot_area/Canada.jpg"
                      alt=" Card image"
                    />
                    <div className="card-img-overlay text_overlay text-center">
                      <p className="btn hot_area_title">新瀉</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card
                  style={{ cursor: 'pointer', border: 'none' }}
                  className="hot_area_slide-up"
                >
                  <Card.Body className="hot_area_card">
                    <Card.Img
                      className="hot_area_card"
                      variant="top"
                      src="/images/hotel/hotel_hot_area/Uk.jpg"
                      alt=" Card image"
                    />
                    <div className="card-img-overlay text_overlay text-center">
                      <p className="btn hot_area_title">群馬</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card
                  style={{ cursor: 'pointer', border: 'none' }}
                  className="hot_area_slide-up"
                >
                  <Card.Body className="hot_area_card">
                    <Card.Img
                      className="hot_area_card"
                      variant="top"
                      src="/images/hotel/hotel_hot_area/Australia.jpg"
                      alt=" Card image"
                    />
                    <div className="card-img-overlay text_overlay text-center">
                      <p className="btn hot_area_title">岩手</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card
                  style={{ cursor: 'pointer', border: 'none' }}
                  className="hot_area_slide-up"
                >
                  <Card.Body className="hot_area_card">
                    <Card.Img
                      className="hot_area_card"
                      variant="top"
                      src="/images/hotel/hotel_hot_area/Switzerland.jpg"
                      alt=" Card image"
                    />
                    <div className="card-img-overlay text_overlay text-center">
                      <p className="btn hot_area_title">山梨</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </>
    )
  }
}

export default HotelHotArea
