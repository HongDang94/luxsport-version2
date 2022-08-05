jQuery(document).ready(function ($) {
  "use strict";
  var slides_count = document.getElementsByClassName("swiper-slide");
  var swiper = new Swiper(".slider-thumb", {
    spaceBetween: 16,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    on: {
      slideChange: function () {
        var offer = document.querySelector("#numberSlides");
        offer.innerHTML =
          this.activeIndex + 1 + "/" + slides_count.length + "Offers";
      },
    },
  });

  var swiper2 = new Swiper(".detail-product-slider", {
    spaceBetween: 10,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
  var tabContent = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: tabTit,
    },
  });
  tabContent.on("slideChange", function () {
    var idx = tabContent.activeIndex;
    tabTit.slideTo(idx, 500);
  });
  $(".btn-scroll-swiper .swiper-wrapper a").click(function () {
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
  });

  var tabTit = new Swiper(".btn-scroll-swiper", {
    spaceBetween: 8,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
  });

  var swiperVideoDetail = new Swiper(".video-slider-detail", {
    slidesPerView: "auto",
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination.pagination-video-detail",
      clickable: true,
    },
  });

  function SrollTab() {
    $('.btn-scroll-swiper .swiper-wrapper a[href*="#"]').on(
      "click",
      function () {
        var $href = $(this).attr("href");
        var $anchor = $($href).offset();
        $("html,body").animate(
          {
            scrollTop: $anchor.top - 74,
          },
          50
        );
      }
    );
  }


  SrollTab();


  //XZoom
  $(".xzoom, .xzoom-gallery").xzoom({tint: '#006699', Xoffset: 15});
	   
  //Integration with hammer.js
  var isTouchSupported = 'ontouchstart' in window;
  
  if (isTouchSupported) {
    $('.xzoom').each(function() {
      var xzoom = $(this).data('xzoom');
      $(this).hammer().on("tap", function(event) {
        event.pageX = event.gesture.center.pageX;
        event.pageY = event.gesture.center.pageY;
        var s = 1, ls;

        xzoom.eventmove = function(element) {
          element.hammer().on('drag', function(event) {
            event.pageX = event.gesture.center.pageX;
            event.pageY = event.gesture.center.pageY;
            xzoom.movezoom(event);
            event.gesture.preventDefault();
          });
        }

        var counter = 0;
        xzoom.eventclick = function(element) {
          element.hammer().on('tap', function() {
            counter++;
            if (counter == 1) setTimeout(openfancy,300);
            event.gesture.preventDefault();
          });
        }

        function openfancy() {
          if (counter == 2) {
            xzoom.closezoom();
            $.fancybox.open(xzoom.gallery().cgallery);
          } else {
            xzoom.closezoom();
          }
          counter = 0;
        }
        
        xzoom.openzoom(event);
      });
    });					
  }
  else {
    $('#xzoom-fancy').bind('click', function(event) {
      var xzoom = $(this).data('xzoom');
      xzoom.closezoom();
      $.fancybox.open(xzoom.gallery().cgallery, {padding: 0, helpers: {overlay: {locked: false}}});
      event.preventDefault();
    });
  }
  
  $("#fist-thumb").trigger('click')
});
