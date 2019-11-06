


// 上方排序選擇互動
$('.coach-arrange a').click((e)=>{
    e.currentTarget.css('border-bottom', '2px solid  #FD702D').siblings().css('border-bottom', '2px solid transparent');
  });
  // rwd-排序選擇互動
  $('.rwd-drop-style').click((e) => {
    e.currentTarget.css('border-left', '2px solid  #FD702D').siblings().css('border-left', '2px solid transparent');
  });
  
  // 左方側欄動畫
  let move = true;
  
  $('#menu_active').click((e) => {
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
  
//   // 左方側欄手風琴上下
  
//   let up_down_icon = true;
  
//   $('.fa-angle-up').show();
//   $('.fa-angle-down').hide();
  
//   $('.coach-select').click((e) => {
//     if (up_down_icon == true) {
//       e.currentTarget.find('.fa-angle-up').hide();
//       e.currentTarget.find('.fa-angle-down').show();
//       up_down_icon = false;
//     } else {
//       e.currentTarget.find('.fa-angle-up').show();
//       e.currentTarget.find('.fa-angle-down').hide();
//       up_down_icon = true;
//     }
//   });
  
//   // rwd 上方選單*2
//   let coach_rwd_btn_state = true;
//   $('.coach-rwd-sort').hide();
  
  
//   $('#coach-btn-rwd1').click((e) => {
//     if (coach_rwd_btn_state == false) {
//       $('#coach-btn-rwd1-1').hide();
//       coach_rwd_btn_state = true;
//     } else {
//       $('#coach-btn-rwd1-1').show();
//       coach_rwd_btn_state = false;
//     }
//     console.log(coach_rwd_btn_state);
//   });
  
//   $('#coach-btn-rwd2').click((e) => {
//     if (coach_rwd_btn_state == false) {
//       $('#coach-btn-rwd2-1').hide();
//       coach_rwd_btn_state = true;
//     } else {
//       $('#coach-btn-rwd2-1').show();
//       coach_rwd_btn_state = false;
//     }
//   });