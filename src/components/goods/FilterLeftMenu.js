import React from 'react'
import {Accordion , Card} from 'react-bootstrap'

function FilterLeftMenu() {
    return (
      <>
         <Accordion className="left-accordion" defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle  as={Card.Header} eventKey="0">
                                        <div className="coach-react-item d-flex justify-content-between coach-select">
                                            <div>地區</div> 
                                            <i className="fas fa-angle-up"></i>
                                            <i className="fas fa-angle-down"></i>
                                        </div> 
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <input type="checkbox" name="vehicle1" value="Bike"/>北海道<br/>
                                        <input type="checkbox" name="vehicle1" value="Bike"/>本洲<br/>
                                        <input type="checkbox" name="vehicle1" value="Bike"/>四國<br/>
                                        <input type="checkbox" name="vehicle1" value="Bike"/>北海道<br/>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                    <div className="coach-react-item d-flex justify-content-between coach-select">
                                            <div>等級</div> 
                                            <i className="fas fa-angle-up"></i>
                                            <i className="fas fa-angle-down"></i>
                                    </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <input type="radio" name="class_level" value="Bike"/>初級<br/>
                                        <input type="radio" name="class_level" value="Car" />中級<br/>
                                        <input type="radio" name="class_level" value="Boat" />高級<br/>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                    <div className="coach-react-item d-flex justify-content-between coach-select">
                                        <div>單雙板</div> 
                                        <i className="fas fa-angle-up"></i>
                                        <i className="fas fa-angle-down"></i>
                                    </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <input type="radio" name="vehicle" value="Bike"/>單板<br/>
                                        <input type="radio" name="vehicle" value="Car" />雙板<br/>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                    <div className="coach-react-item d-flex justify-content-between coach-select">
                                        <div>語言</div> 
                                        <i className="fas fa-angle-up"></i>
                                        <i className="fas fa-angle-down"></i>
                                    </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        <input type="checkbox" name="vehicle1" value="Bike"/> 中文<br/>
                                        <input type="checkbox" name="vehicle2" value="Car" /> 英文<br/>
                                        <input type="checkbox" name="vehicle3" value="Boat" /> 日文<br/>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
      </>
    )
  }



export default FilterLeftMenu