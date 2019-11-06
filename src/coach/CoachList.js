import React from 'react';
import {Container ,row , Accordion , Card} from 'react-bootstrap'
import '../css/coach_list.css';
// import './coach_list.js'
import $ from 'jquery'


class CoachList extends React.Component{
    constructor(){
      super()
      this.state = {}
    }

    componentDidMount (){
        // 上方排序選擇互動
        $('.coach-arrange a').click(function(){
            $(this).css('border-bottom', '2px solid  #FD702D').siblings().css('border-bottom', '2px solid transparent');
        });

        // rwd-排序選擇互動
        // $('.rwd-drop-style').click(function(){
        //     $(this).css('border-left', '2px solid  #FD702D').siblings().css('border-left', '2px solid transparent');
        // });

        //左方側欄動畫
          let move = true;
  
        $('#menu_active').click(function(){
            if (move === true) {
            $('#left').css({
                width: '0%',
                transform: 'translateX(-240px)',
            });
            $('.right_content').css('width', '100%');
            $('.hot_img').css('height', '200px');
            move = false;
            } else {
            $('#left').css({
                width: '25%',
                transform: 'translateX(0px)',
            });
            $('.right_content').css('width', '75%');
            $('.hot_img').css('height', '150px');
            move = true;
            }
        
            const img_width = $('.coach-card').width();
            console.log(img_width);
            const img_height = 150 * 4 / 3;
        });
        // 左方側欄手風琴上下
          let up_down_icon = true;
        
          $('.fa-angle-up').show();
          $('.fa-angle-down').hide();
        
          $('.coach-select').click((e) => {
            if (up_down_icon == true) {
              e.currentTarget.find('.fa-angle-up').hide();
              e.currentTarget.find('.fa-angle-down').show();
              up_down_icon = false;
            } else {
              e.currentTarget.find('.fa-angle-up').show();
              e.currentTarget.find('.fa-angle-down').hide();
              up_down_icon = true;
            }
          });

    }
  
    render(){
        return(
            <>
                <div className="container">
                    {/* part1 麵包屑 */}
                        <div className="row">
                        <div className="col-3"> </div>
                        <div className="col-9">
                        {/* 麵包屑 */}
                            首頁 > 滑雪課程
                        </div>  
                        </div>
                    {/* part2 篩選btn + 排列選擇 + 總項目欄位 */}
                    <div className="row coach-rwd-active">
                        <div className="col-3">
                            <button id="menu_active" className="btn coach-btn-active"><i  className="fas fa-list"></i> 顯示篩選列</button>
                        </div>
                        <div className="coach-arrange col-9 d-flex justify-content-between">
                            <a href="#">熱門商品</a>
                            <a href="#">價格 ： 從高到低</a>
                            <a href="#">價格 ： 從低到高</a>
                            <span className="coach-item-num">10項目</span>
                        </div>
                    </div>
                    {/*  rwd 最上方搜尋 bar */}
                    <div className="coach-rwd-search d-flex">
                        {/* btn1 */}
                        <div className="coach-btn-rwd">
                            <div id="coach-btn-rwd1" className="btn coach-btn-rwd-logo"><i  className="fas fa-list"></i>篩選</div>
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                    地區
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
                                    等級
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <input type="checkbox" name="vehicle1" value="Bike"/> 初級<br/>
                                        <input type="checkbox" name="vehicle2" value="Car" />中級<br/>
                                        <input type="checkbox" name="vehicle3" value="Boat" />中高級<br/>
                                        <input type="checkbox" name="vehicle3" value="Boat" /> 高級<br/>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                    單雙板
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
                                    語言
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
                        </div>
                    
                    
                        {/* btn2  */}
                        <div className="coach-btn-rwd">
                        <div id="coach-btn-rwd2" className="btn coach-btn-rwd-logo"><i className="fas fa-sort-amount-down-alt"></i>排序</div>
                        <Accordion defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                    人氣
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <input type="checkbox" name="vehicle1" value="Bike"/>收藏數<br/>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                    價錢
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <input type="checkbox" name="vehicle1" value="Bike"/>從高到低<br/>
                                        <input type="checkbox" name="vehicle1" value="Bike"/>從低到高<br/>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                        </Accordion>
                    </div>
    
                    </div>
                    {/* 左邊篩選列 + 右邊內容頁 */}
                    <div className="coach-all-content d-flex justify-content-end ">
                        {/* 左邊篩選列 */}
                        <div id="left" className=" left_menu ">
                        <Accordion className="left-accordion" defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle  as={Card.Header} eventKey="0">
                                        <div className="coach-react-item d-flex justify-content-between">
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
                                    <div className="coach-react-item d-flex justify-content-between">
                                            <div>等級</div> 
                                            <i className="fas fa-angle-up"></i>
                                            <i className="fas fa-angle-down"></i>
                                    </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <input type="checkbox" name="vehicle1" value="Bike"/> 初級<br/>
                                        <input type="checkbox" name="vehicle2" value="Car" />中級<br/>
                                        <input type="checkbox" name="vehicle3" value="Boat" />中高級<br/>
                                        <input type="checkbox" name="vehicle3" value="Boat" /> 高級<br/>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                    <div className="coach-react-item d-flex justify-content-between">
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
                                    <div className="coach-react-item d-flex justify-content-between">
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
    
                        </div>
                        {/* 右邊內容列 */}
                        <div id="right" className="content-rwd d-flex  right_content bg_white ">
                            {/* card1  */}
                            <div className="coach-card">
                                <div className="hot_img">
                                    <img className="coach_img_pic" src={require('../images/coach/coach.jpg')} alt=""/>
                                </div>
                                <div className="hot_card_word">
                                    <p>初級雙板滑雪 | 2小時課程</p>
                                    <p>東京雪場</p>
                                        <div className="d-flex justify-content-end">
                                            <p className="price">NT16,000</p>
                                        </div>
                                    <div className="font-blue d-flex justify-content-center">
                                        <p>販售時間 : 即日起~2020.2.3</p>
                                    </div>
                                </div>
                            </div>
                            {/* card2  */}
                            <div className="coach-card">
                                <div className="hot_img">
                                    <img className="coach_img_pic" src={require('../images/coach/coach.jpg')} alt=""/>
                                </div>
                                <div className="hot_card_word">
                                    <p>初級雙板滑雪 | 2小時課程</p>
                                    <p>東京雪場</p>
                                        <div className="d-flex justify-content-end">
                                            <p className="price">NT16,000</p>
                                        </div>
                                    <div className="font-blue d-flex justify-content-center">
                                        <p>販售時間 : 即日起~2020.2.3</p>
                                    </div>
                                </div>
                            </div>
                            {/* card3  */}
                            <div className="coach-card">
                                <div className="hot_img">
                                    <img className="coach_img_pic" src={require('../images/coach/coach.jpg')} alt=""/>
                                </div>
                                <div className="hot_card_word">
                                    <p>初級雙板滑雪 | 2小時課程</p>
                                    <p>東京雪場</p>
                                        <div className="d-flex justify-content-end">
                                            <p className="price">NT16,000</p>
                                        </div>
                                    <div className="font-blue d-flex justify-content-center">
                                        <p>販售時間 : 即日起~2020.2.3</p>
                                    </div>
                                </div>
                            </div>
                            {/* card4  */}
                            <div className="coach-card">
                                <div className="hot_img">
                                    <img className="coach_img_pic" src={require('../images/coach/coach.jpg')} alt=""/>
                                </div>
                                <div className="hot_card_word">
                                    <p>初級雙板滑雪 | 2小時課程</p>
                                    <p>東京雪場</p>
                                        <div className="d-flex justify-content-end">
                                            <p className="price">NT16,000</p>
                                        </div>
                                    <div className="font-blue d-flex justify-content-center">
                                        <p>販售時間 : 即日起~2020.2.3</p>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                        {/* 右邊內容列END */}
                    </div>
                    {/* container-end */}
                </div>
    
                <div className="test123">
                    mmmmm
                </div>
    
            </>
        )
    }
   
  }


export default CoachList;