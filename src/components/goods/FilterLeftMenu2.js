import React from 'react'
import { Accordion, Card } from 'react-bootstrap'

class FilterLeftMenu2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      class1: false,
      class2: false,
      class3: false,
      class4: false,
      class5: false,
      class6: false,
      class7: false,
      class8: false,
      class9: false,
      class10: false,
      class11: false,
      class12: false,
      class13: false,
    }
  }
  // changeNme(newName) {
  //   this.props.partentfc(newName)

  //   console.log("我是Chilren");
  // }

  // checkbox抓取
  changeBox = pos => event => {
    const target = event.target
    const value = target.checked

    // if( this.state.v4 === true ){
    //   this.setState({v5:false})
    //   console.log('v4 is true')

    // }else if(this.state.v5 === true){
    //   this.setState({v4:false})
    //   console.log('v5 is true')
    // }

    const name = 'class' + pos
    this.setState({
      [name]: value,
    })

    this.props.partentfc(pos, value)
  }

  render() {
    return (
      <>
        <Accordion className="left-accordion" defaultActiveKey="0">
          <Card>
            <div className="coach-select">
              <Accordion.Toggle
                as={Card.Header}
                eventKey="6"
                style={{ background: '#F5F5F5' }}
              >
                <div className="coach-react-item d-flex justify-content-between">
                  <div>地區</div>
                  <i className="fas fa-angle-up"></i>
                  <i className="fas fa-angle-down"></i>
                </div>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="6" style={{ background: '#F5F5F5' }}>
              <Card.Body>
              <div className="d-flex" style={{ padding: '5px 5px 5px 25px' }}>
                  <input
                    onChange={this.changeBox(1)}
                    type="checkbox"
                    name="class"
                    checked={this.state.class1}
                    style={{ marginTop: '3px', marginRight: '20px' }}
                  />
                  <p>北海道</p>
                </div>
                <div className="d-flex" style={{ padding: '5px 5px 5px 25px' }}>
                  <input
                    onChange={this.changeBox(2)}
                    type="checkbox"
                    name="class"
                    checked={this.state.class2}
                    style={{ marginTop: '3px', marginRight: '20px' }}
                  />
                  <p>青森縣</p>
                </div>
                <div className="d-flex" style={{ padding: '5px 5px 5px 25px' }}>
                  <input
                    onChange={this.changeBox(3)}
                    type="checkbox"
                    name="class"
                    checked={this.state.class3}
                    style={{ marginTop: '3px', marginRight: '20px' }}
                  />
                  <p>山形縣</p>
                </div>
                <div className="d-flex" style={{ padding: '5px 5px 5px 25px' }}>
                  <input
                    onChange={this.changeBox(4)}
                    type="checkbox"
                    name="class"
                    checked={this.state.class4}
                    style={{ marginTop: '3px', marginRight: '20px' }}
                  />
                  <p>新瀉縣</p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <div className="coach-select">
              <Accordion.Toggle
                as={Card.Header}
                eventKey="1"
                style={{ background: '#F5F5F5' }}
              >
                <div className="coach-react-item d-flex justify-content-between ">
                  <div>商品</div>
                  <i className="fas fa-angle-up"></i>
                  <i className="fas fa-angle-down"></i>
                </div>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="1" style={{ background: '#F5F5F5' }}>
              <Card.Body>
              <div className="d-flex" style={{ padding: '5px 5px 5px 25px' }}>
                  <input
                    onChange={this.changeBox(5)}
                    type="checkbox"
                    name="class"
                    checked={this.state.class5}
                    style={{ marginTop: '3px', marginRight: '20px' }}
                  />
                  <p>纜車券</p>
                </div>
                <div className="d-flex" style={{ padding: '5px 5px 5px 25px' }}>
                  <input
                    onChange={this.changeBox(6)}
                    type="checkbox"
                    name="class"
                    checked={this.state.class6}
                    style={{ marginTop: '3px', marginRight: '20px' }}
                  />
                  <p>租借券</p>
                </div>
                <div className="d-flex" style={{ padding: '5px 5px 5px 25px' }}>
                  <input
                    onChange={this.changeBox(7)}
                    type="checkbox"
                    name="class"
                    checked={this.state.class7}
                    style={{ marginTop: '3px', marginRight: '20px' }}
                  />
                  <p>超值套票</p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <div className="coach-select">
              <Accordion.Toggle
                as={Card.Header}
                eventKey="2"
                style={{ background: '#F5F5F5' }}
              >
                <div className="coach-react-item d-flex justify-content-between">
                  <div>票種</div>
                  <i className="fas fa-angle-up"></i>
                  <i className="fas fa-angle-down"></i>
                </div>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="2" style={{ background: '#F5F5F5' }}>
              <Card.Body>
              <div className="d-flex" style={{ padding: '5px 5px 5px 25px' }}>
                  <input
                    onChange={this.changeBox(8)}
                    type="checkbox"
                    name="class_board"
                    checked={this.state.class8}
                    style={{ marginTop: '3px', marginRight: '20px' }}
                  />
                  <p>成人</p>
                </div>
                <div className="d-flex" style={{ padding: '5px 5px 5px 25px' }}>
                  <input
                    onChange={this.changeBox(9)}
                    type="checkbox"
                    name="class_board"
                    checked={this.state.class9}
                    style={{ marginTop: '3px', marginRight: '20px' }}
                  />
                  <p>兒童</p>
                </div>
                <div className="d-flex" style={{ padding: '5px 5px 5px 25px' }}>
                  <input
                    onChange={this.changeBox(10)}
                    type="checkbox"
                    name="class_board"
                    checked={this.state.class10}
                    style={{ marginTop: '3px', marginRight: '20px' }}
                  />
                  <p>敬老</p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <div className="coach-select">
              <Accordion.Toggle
                as={Card.Header}
                eventKey="3"
                style={{ background: '#F5F5F5' }}
              >
                <div className="coach-react-item d-flex justify-content-between ">
                  <div>使用天數</div>
                  <i className="fas fa-angle-up"></i>
                  <i className="fas fa-angle-down"></i>
                </div>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="3" style={{ background: '#F5F5F5' }}>
              <Card.Body>
                <div className="d-flex" style={{ padding: '5px 5px 5px 25px' }}>
                  <input
                    onChange={this.changeBox(11)}
                    type="checkbox"
                    name="class_language"
                    checked={this.state.class11}
                    style={{ marginTop: '3px', marginRight: '20px' }}
                  />{' '}
                  <p>一日</p>
                </div>
                <div className="d-flex" style={{ padding: '5px 5px 5px 25px' }}>
                  <input
                    onChange={this.changeBox(12)}
                    type="checkbox"
                    name="class_language"
                    checked={this.state.class12}
                    style={{ marginTop: '3px', marginRight: '20px' }}
                  />{' '}
                  <p>二日</p>
                </div>
                <div className="d-flex" style={{ padding: '5px 5px 5px 25px' }}>
                  <input
                    onChange={this.changeBox(13)}
                    type="checkbox"
                    name="class_language"
                    checked={this.state.class13}
                    style={{ marginTop: '3px', marginRight: '20px' }}
                  />{' '}
                  <p>三日</p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    )
  }
}

export default FilterLeftMenu2
