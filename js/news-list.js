jQuery(document).ready(function ($) {
  "use strict";

  var tabTit = new Swiper(".slider-thumb", {
    spaceBetween: 8,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
  });
  var tabContent = new Swiper(".news-list", {
    spaceBetween: 10,
    autoHeight: true,
    effect: "fade",
    observer: true,
    observeParents: true,
    thumbs: {
      swiper: tabTit,
    },
  });
  tabContent.on("slideChange", function () {
    var idx = tabContent.activeIndex;
    tabTit.slideTo(idx, 500);
  });
  $(".slider-thumb .swiper-wrapper a").click(function () {
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
  });
});
