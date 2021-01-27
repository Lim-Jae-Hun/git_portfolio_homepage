//배너 이미지 슬라이드 - swiper
var mySwiper = new Swiper('.swiper-container', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable : true,
	},
	autoplay: {
		delay: 3000,
	},
});
  
//영화차트 이미지 슬라이드
var mySwiper = new Swiper('.swiper-container2', {
	slidesPerView: 4,
	spaceBetween: 24,
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	autoplay: {
		delay: 5000,
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 4,
			spaceBetween: 40
		}
	}
});
  
//영화차트 탭 메뉴
var movBtn = $('.movie_title > ul > li'); 
var movCont = $('.movie_chart > div');

movCont.hide().eq(0).show();
  
movBtn.click(function(e){
	e.preventDefault();
	var target = $(this);
	var index = target.index();
	movBtn.removeClass("active");
	target.addClass("active");
	movCont.css("display","none");
	movCont.css("display","none");
	movCont.eq(index).css("display","block");
});




