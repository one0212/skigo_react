import React, { Component } from 'react';
import '../../css/Accordion_css.css'
import { Button, Card, Accordion, InputGroup, FormControl } from 'react-bootstrap'


class AlistLeft extends Component {
    render() {
        return (
            
                 <Accordion>
                  {/* 第一個手風琴 */}
                  <Card>
                    <Card.Header>
                      {/* 手風琴head開始 */}
                      <div className="d-flex justify-content-between ">
                        <div className="d-flex CardHeaderFrame align-self-center justify-content-between">

                          <div className="CardHearderBox">
                            <div className="CardHearderBoxOrange"></div>
                            DAY1
                          </div>

                          <div className="CardHearderBox">

                            <InputGroup size="sm" >
                              <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm"><img className="CardHearderBoxicon" src={require('../../images/AttractionsImg/Acalendar.svg')} /></InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="出發日期" />
                            </InputGroup>

                          </div>

                          <div className="CardHearderBox">

                            <InputGroup size="sm" >
                              <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm"><img className="CardHearderBoxicon" src={require('../../images/AttractionsImg/AClock.svg')} /></InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="出發時間" />
                            </InputGroup>

                          </div>

                          <div className="CardHearderDown">
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                              <img src={require('../../images/AttractionsImg/Aup.svg')} alt="" className="Aup "></img>
                            </Accordion.Toggle>
                          </div>

                        </div>
                      </div>
                    </Card.Header>
                    {/* 手風琴head結束 */}

                    {/* 手風琴body開始 */}
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        {/* <!-- 第一個地點的區塊 --> */}
                        <div className="CardHeaderFrame d-flex align-items-center ">

                          <div className="d-flex align-items-center" style={{ width: '60%' }}>

                            <div className="d-flex flex-column align-items-center">
                              <div>
                                上午8:00
                        </div>
                              <img src={require('../../images/AttractionsImg/Alocation.svg')} className="CardbodyBoxImg" alt="" />
                              <div>
                                下午1:00
                        </div>
                            </div>

                            <div>
                              富良野滑雪場
                      </div>

                          </div>

                          <div style={{ width: '33%' }}>
                            <InputGroup size="sm" >
                              <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm"><img className="CardHearderBoxicon" src={require('../../images/AttractionsImg/Ahourglass.svg')} /></InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="停留時間" />
                            </InputGroup>
                          </div>
                        </div>
                        {/* <!-- 第一個地點區塊結束 --> */}


                        {/* <!--動態生成第二個加入的地點開始 --> */}
                        <div className="CardHeaderFrame d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">

                            <div className="d-flex flex-column align-items-center">
                              <div style={{ width: '65px' }}>
                                <div className="VerticalLine"></div>
                              </div>
                            </div>

                            <div className="">
                              <img src={require('../../images/AttractionsImg/AdotCircle.svg')} className="CardbodyBoxImg" alt="" /> 選擇交通方案
                      </div>
                          </div>
                        </div>

                        <div>
                          <div className="CardHeaderFrame d-flex align-items-center ">

                            <div className="d-flex align-items-center" style={{ width: '60%' }}>

                              <div className="d-flex flex-column align-items-center">
                                <div>
                                  上午8:00
                          </div>
                                <img src={require('../../images/AttractionsImg/Alocation.svg')} className="CardbodyBoxImg" alt="" />
                                <div>
                                  下午1:00
                          </div>
                              </div>

                              <div>
                                富良野滑雪場
                        </div>

                            </div>

                            <div style={{ width: '33%' }}>
                              <InputGroup size="sm" >
                                <InputGroup.Prepend>
                                  <InputGroup.Text id="inputGroup-sizing-sm"><img className="CardHearderBoxicon" src={require('../../images/AttractionsImg/Ahourglass.svg')} /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="停留時間" />
                              </InputGroup>
                            </div>

                            <div className="CardBodyBox">
                              <img src={require('../../images/AttractionsImg/Agarbage.svg')} alt="" className="CardbodyBoxImg ml-2" />

                            </div>

                          </div>
                        </div>
                        {/* <!-- 動態生成第二個加入的地點結束  -->*/}



                      </Card.Body>
                    </Accordion.Collapse>
                    {/* 手風琴body結束 */}
                  </Card>
                  {/* 第一個手風琴結束 */}


                  {/* 第二個手風琴 */}
                  <Card>
                    <Card.Header>

                      <div className="d-flex justify-content-between ">
                        <div className="d-flex CardHeaderFrame align-self-center d-flex justify-content-start">

                          <div className="CardHearderBox2 CardHearderBox2-W1">
                            <div className="CardHearderBoxOrange"></div>
                            DAY1
                    </div>

                          <div className="CardHearderBox2 CardHearderBox2-W2">
                            <img src={require('../../images/AttractionsImg/Acalendar.svg')} alt="" className="CardHearderBoxicon" />出發日期+1
                    </div>

                          <div className="CardHearderBox2 CardHearderBox2-W3 ">
                            <InputGroup size="sm" >
                              <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm"><img className="CardHearderBoxicon" src={require('../../images/AttractionsImg/AClock.svg')} /></InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="出發時間" />
                            </InputGroup>
                          </div>
                        </div>



                        <div className="d-flex justify-content-end CardHearderBox2-W4">

                          <img src={require('../../images/AttractionsImg/Agarbage.svg')} alt="" className="CardHearderBoxicon" />


                          <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <img src={require('../../images/AttractionsImg/Aup.svg')} alt="" className="Aup" />
                          </Accordion.Toggle>
                        </div>

                      </div>

                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        {/* <!-- 第一個地點的區塊 --> */}
                        <div className="CardHeaderFrame d-flex align-items-center ">

                          <div className="d-flex align-items-center" style={{ width: '60%' }}>

                            <div className="d-flex flex-column align-items-center">
                              <div>
                                上午8:00
    </div>
                              <img src={require('../../images/AttractionsImg/Alocation.svg')} className="CardbodyBoxImg" alt="" />
                              <div>
                                下午1:00
    </div>
                            </div>

                            <div>
                              富良野滑雪場
  </div>

                          </div>

                          <div style={{ width: '33%' }}>
                            <InputGroup size="sm" >
                              <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm"><img className="CardHearderBoxicon" src={require('../../images/AttractionsImg/Ahourglass.svg')} /></InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="停留時間" />
                            </InputGroup>
                          </div>
                        </div>
                        {/* <!-- 第一個地點區塊結束 --> */}


                        {/* <!--動態生成第二個加入的地點開始 --> */}
                        <div className="CardHeaderFrame d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">

                            <div className="d-flex flex-column align-items-center">
                              <div style={{ width: '65px' }}>
                                <div className="VerticalLine"></div>
                              </div>
                            </div>

                            <div className="">
                              <img src={require('../../images/AttractionsImg/AdotCircle.svg')} className="CardbodyBoxImg" alt="" /> 選擇交通方案
  </div>
                          </div>
                        </div>

                        <div>
                          <div className="CardHeaderFrame d-flex align-items-center ">

                            <div className="d-flex align-items-center" style={{ width: '60%' }}>

                              <div className="d-flex flex-column align-items-center">
                                <div>
                                  上午8:00
      </div>
                                <img src={require('../../images/AttractionsImg/Alocation.svg')} className="CardbodyBoxImg" alt="" />
                                <div>
                                  下午1:00
      </div>
                              </div>

                              <div>
                                富良野滑雪場
    </div>

                            </div>

                            <div style={{ width: '33%' }}>
                              <InputGroup size="sm" >
                                <InputGroup.Prepend>
                                  <InputGroup.Text id="inputGroup-sizing-sm"><img className="CardHearderBoxicon" src={require('../../images/AttractionsImg/Ahourglass.svg')} /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="停留時間" />
                              </InputGroup>
                            </div>

                            <div className="CardBodyBox">
                              <img src={require('../../images/AttractionsImg/Agarbage.svg')} alt="" className="CardbodyBoxImg ml-2" />

                            </div>

                          </div>
                        </div>
                        {/* <!-- 動態生成第二個加入的地點結束  -->*/}


                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
            
        );
    }
}

export default AlistLeft;