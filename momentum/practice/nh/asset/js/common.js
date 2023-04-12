//슬라이드
var main = new Swiper('.mainSwiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
var main = new Swiper('.menuSwiper', {
    pagination: {
      // el: '.swiper-pagination',
      clickable: true,
    },
  });
  
//메인페이지 메뉴이벤트1
const mainMenu1 = document.querySelectorAll(".menu-tap__title > li");

mainMenu1.forEach(function (mainMenu1) {
  mainMenu1.addEventListener("click", function () {
    mainMenu1.classList.toggle("on");
    const onElements = document.querySelectorAll(".menu-tap__title > li.on");
    onElements.forEach(function (onElement) {
      if (onElement !== mainMenu1) {
        onElement.classList.remove("on");
      }
    });
  });
});

  //비율유지 박스
//   $(window).resize(function(){
//     var winWidth = $(window).width();
//     var boxWidth = $('.visual').width();
//     //max-width값인 500px아래서만 작동
//     if(winWidth <= 0){
//     	//1.681:1
//         $('.visual').height(boxWidth*0.681);
//     }
// });

// var menuTapTitle = document.querySelectorAll("menu-tap__title li");
