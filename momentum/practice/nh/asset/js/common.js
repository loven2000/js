//슬라이드
var main = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
  //비율유지 박스
  $(window).resize(function(){
    var winWidth = $(window).width();
    var boxWidth = $('.visual').width();
    //max-width값인 500px아래서만 작동
    if(winWidth <= 0){
    	//1.681:1
        $('.visual').height(boxWidth*0.681);
    }
});