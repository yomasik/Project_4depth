//211117 수정(s)
$('.acc_dt').on('click', function () {

  function slideDown(target) {
    slideUp();
    $(target).addClass('on').next().slideDown(500);
  }

  function slideUp() {
    $('.acc_dt').removeClass('on').next().slideUp(500);
  };
  $(this).hasClass('on') ? slideUp() : slideDown($(this));

})
//211117 수정(e)

// 모달창 추가
$(".layer_open_btn").click(function () {
  $(".popToolTip").attr("style", "display:block");
});

$("#layer_close_btn").click(function () {
  $(".popToolTip").attr("style", "display:none");
});



//211206(s) 팝업창 
$(function () {
  setPop();
});
function setPop() {
  var popOpenBtn = $('.popOpenBtn');

  popOpenBtn.on('click', function () {
    var clickNum = $(this).attr('data-num');
    $('html, body').css({ 'overflow': 'hidden', 'height': '100%' });
    $('#element').on('scroll touchmove mousewheel', function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
    $('#popUp_' + clickNum).fadeIn(200);
  })


  $('.popBg, .popCloseBtn, .popClose, .tipClose').on('click', function () {
    var clickNum = $(this).attr('data-num');
    $('html, body').css({ 'overflow': 'auto', 'height': '100%' });
    $('#element').off('scroll touchmove mousewheel');
    $('#popUp_' + clickNum).fadeOut(200);
  })
}
//211206(e) 팝업창 


//211117(s)  탭
$('.tabs li').click(function () {
  var tab_id = $(this).attr('data-tab');

  $('.tabs li').removeClass('on');
  $('.contentTab').removeClass('on');

  $(this).addClass('on');
  $("#" + tab_id).addClass('on');
})
//211117(e)  탭


//211121 아코디언
$(function () {
  $(".accordionTitle").click(function (e) {
    var accordionitem = $(this).attr("data-tab");
    $("#" + accordionitem).slideToggle().parent().siblings().find(".accordionContent").slideUp();

    $(this).toggleClass("activeTitle");
    $("#" + accordionitem).parent().siblings().find(".accordionTitle").removeClass("activeTitle");

    $(".rotateDown", this).toggleClass("rotateUp");
    $("#" + accordionitem).parent().siblings().find(".accordionTitle .rotateDown").removeClass("rotateUp");
  });

  //211209(s) 테이블 아코디언
  $(function () {
    $(".resultTbl tr:odd").addClass("odd");
    $(".resultTbl tr:not(.odd)").hide();
    $(".resultTbl tr:first-child").show();

    $(".resultTbl tr.odd").click(function () {
      $(this).next("tr").toggle();
      $(this).find(".arrow").toggleClass("up");

    });
  });
  //211209(e)
});
