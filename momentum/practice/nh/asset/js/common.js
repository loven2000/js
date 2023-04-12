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

//gnb 열기, 닫기
$(document).ready(function(){
  $(".btn-menu").click(function(){
    $(".gnb").addClass("on");
    $("body").addClass("overflow-hidden")
  });

  $(".btn-close").click(function(){
    $(".gnb").removeClass("on");
    $("body").removeClass("overflow-hidden")
  });
});

// 메인 스크롤 헤더 
    const visual = document.querySelector('.visual');
		const scrollHeader = document.querySelector('.scroll-header');
		
		window.addEventListener('scroll', () => {
			if (window.scrollY > visual.scrollTop) {
				scrollHeader.style.display = 'block';
			} else {
				scrollHeader.style.display = 'none';
			}
		});

// 메인 tab 공지사항
const tabs = document.querySelectorAll('notice__tab-title li');
		const tabContents = document.querySelectorAll('.notice__list');

		tabs.forEach(tab => {
			tab.addEventListener('click', () => {
				// Remove active class from all tabs and contents
				tabs.forEach(t => t.classList.remove('active'));
				tabContents.forEach(tc => tc.classList.remove('active'));

				// Add active class to clicked tab and corresponding content
				tab.classList.add('active');
				const tabId = tab.dataset.tab;
				const tabContent = document.querySelector(`.notice__list[data-tab="${tabId}"]`);
				tabContent.classList.add('active');
			});
		});
// const menuTitles = document.querySelectorAll(".menu-tap__title > li");
// const menuSwipers = document.querySelectorAll(".menuSwiper .swiper-slide");

// menuTitles.forEach(function (title, index) {
//   title.addEventListener("click", function () {
//     menuSwipers.forEach(function (swiper, swiperIndex) {
//       if (index === swiperIndex) {
//         swiper.style.display = "block";
//       } else {
//         swiper.style.display = "none";
//       }
//     });
//   });
// });

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
