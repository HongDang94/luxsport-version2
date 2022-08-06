jQuery(document).ready(function ($) {
  "use strict";

  var swiper = new Swiper(".mySwiper", {
     spaceBetween: 8,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    autoHeight: true,
    effect: "fade",
    observer: true,
    observeParents: true,
    thumbs: {
      swiper: swiper,
    },
  });
  swiper2.on("slideChange", function () {
    var idx = swiper2.activeIndex;
    swiper.slideTo(idx, 500);
  });
});
