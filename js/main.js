jQuery(document).ready(function ($) {
  "use strict";
  var swiperBanner = new Swiper(".bannerSlider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiperAdvertisSlider = new Swiper(".advertisSlider", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: false,
    breakpoints: {
      320: {
        spaceBetween: 12,
        touchRatio: 0,
      },
      1024: {
        spaceBetween: 24,
        touchRatio: 0,
      },
    },
  });

  var swiperBlogSlider = new Swiper(".blog-slider", {
    slidesPerView: "auto",
    spaceBetween: 18,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next.btn-blog",
      prevEl: ".swiper-button-prev.btn-blog",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiperProductSlider = new Swiper("#sproduct-best-seller", {
    slidesPerView: 5,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next.next-btn",
      prevEl: ".swiper-button-prev.prev-btn",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1656: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });

  var swiperProductSlider = new Swiper("#sproduct-new", {
    slidesPerView: 5,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next.next-btn-news",
      prevEl: ".swiper-button-prev.prev-btn-news",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1656: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });

  var swiperCategorySliderChair = new Swiper("#category-chair", {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next.next-category-chair",
      prevEl: ".swiper-button-prev.prev-category-chair",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1656: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });

  var swiperCategorySlider = new Swiper("#category-sport", {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next.next-category-sport",
      prevEl: ".swiper-button-prev.prev-category-sport",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1656: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });

  var swiperVideo = new Swiper(".video-slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".swiper-pagination.pagination-video",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1654: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  var swiperBlogNews = new Swiper(".blog-news-slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1654: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  $(window).on('load', function() {
    $('.modal-gift').addClass('d-block');
    $('.modal-backdrop').addClass('show');
  });

  $(".closeGift").click(function () {
    $('.modal-gift').removeClass('d-block');
    $('.modal-backdrop').removeClass('show');
  });

  $('.gift-col button').on('click', function() {
    $('.modal-myGiftAnimation').addClass('d-block');
    setTimeout(() => {
      $('.modal-myGiftAnimation').removeClass('d-block');
      $('.modal-myValueGift').addClass('d-block');
    }, 3000);
    
    $('.modal-backdrop').addClass('show');
    $('.modal-gift').removeClass('d-block');
  });
  $('.btn-recevie').on('click', function() {
    $('.modal-myValueGift').removeClass('d-block');
    $('.modal-backdrop').removeClass('show');
  });
});
