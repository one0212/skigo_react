import React   from 'react';
import {Container ,row , Accordion , Card} from 'react-bootstrap'
import '../css/coach_list.css';
import $ from 'jquery'
import FilterBread from '../components/goods/FilterBread';
import FilterLeftMenu from '../components/goods/FilterLeftMenu';
import FilterSortWeb from '../components/goods/FilterSortWeb'
import ClassCard from './ClassCard'


class CoachList extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        name:[false,false,false,false,false,false,false,false,false,false,false,false]
      }
      this.changeName=this.changeName.bind(this)
    }
    // JQ動畫
    componentDidMount(){
        //PC選單 
        $('.coach-arrange a').click((e) => {
            $(e.currentTarget).css('border-bottom', '2px solid  #FD702D').siblings().css('border-bottom', '2px solid transparent');
          });
        // rwd 上方選單*2
            let coach_rwd_btn_state = true;
            $('.coach-rwd-sort').hide();


            $('#coach-btn-rwd1').click((e) => {
            if (coach_rwd_btn_state === false) {
                $('#coach-btn-rwd1-1').hide();
                coach_rwd_btn_state = true;
            } else {
                $('#coach-btn-rwd1-1').show();
                coach_rwd_btn_state = false;
            }
            console.log(coach_rwd_btn_state);
            });

            $('#coach-btn-rwd2').click((e) => {
                if (coach_rwd_btn_state === false) {
                  $('#coach-btn-rwd2-1').hide();
                  coach_rwd_btn_state = true;
                } else {
                  $('#coach-btn-rwd2-1').show();
                  coach_rwd_btn_state = false;
                }
              });

            //左方側欄動畫
            let move = true;
      
            $('#menu_active').click((e)=>{
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


            $('.coach-select').click((e)=>{
                if (up_down_icon === false) {
                up_down_icon = true; 
                $(e.currentTarget).find('.fa-angle-up').show();
                $(e.currentTarget).find('.fa-angle-down').hide(); 
                } else {
                $(e.currentTarget).find('.fa-angle-up').hide();
                $(e.currentTarget).find('.fa-angle-down').show();
                  up_down_icon = false; 
                }
              });
    }
    // 
    changeName=(pos, value)=>{
        const newName = [...this.state.name]
        newName[pos-1] = value
   
       this.setState({
         name:newName
         })
   
     }
  
    render(){
        return (
            <>
            {console.log('中文 :' + this.state.name)}
                <div className="container">
                    {/* part1 麵包屑 */}
                    <FilterBread/>                    
                    
                    {/* part2 篩選btn + 排列選擇 + 總項目欄位 */}
                    <FilterSortWeb/>
                    {/*  rwd 最上方搜尋 bar */}
                    <div className="coach-rwd-search d-flex">
                        {/* btn1 */}
                        <div className="coach-btn-rwd">
                            <div id="coach-btn-rwd1" className="btn coach-btn-rwd-logo"><i  className="fas fa-list"></i>篩選</div>
                            <div id="coach-btn-rwd1-1" className="accordion coach-rwd-sort">
                            <FilterLeftMenu partentfc={this.changeName}/>
                            </div>
                        </div>
                    
                    
                        {/* btn2  */}
                        <div className="coach-btn-rwd">
                        <div id="coach-btn-rwd2" className="btn coach-btn-rwd-logo"><i className="fas fa-sort-amount-down-alt"></i>排序</div>
                        <div id="coach-btn-rwd2-1" className="coach-rwd-sort"> 
                        <Accordion  defaultActiveKey="0">
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
    
                    </div>
                    {/* 左邊篩選列 + 右邊內容頁 */}
                    <div className="coach-all-content d-flex justify-content-end ">
                        {/* 左邊篩選列 */}
                        <div id="left" className=" left_menu ">
                        <FilterLeftMenu partentfc={this.changeName} />
                        </div>
                        {/* 右邊內容列 */}
                        <div id="right" className="content-rwd d-flex  right_content bg_white ">
                        <ClassCard filter={this.state.name}/>
                        </div>
                        {/* 右邊內容列END */}
                    </div>
                    {/* container-end */}
                </div>
   
            </>
        )
    }
   
  }


  



export default CoachList;