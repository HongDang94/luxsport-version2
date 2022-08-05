jQuery(document).ready(function ($) {
    "use strict";
  
    var openMenu = function () {
      $(".btn_menu").on("click", function () {
        $(".gnb").show();
        $("body").addClass("show_menu");
        $(".gnb")
          .stop()
          .animate({ left: "0" }, 600, "easeInOutExpo", function () {});
      });
    };
  
    var closeMenu = function () {
      $(".btn_close").on("click", function () {
        $("body").removeClass("show_menu");
        $(".gnb")
          .stop()
          .animate({ left: "-100%" }, 600, "easeInOutExpo", function () {
            //scrollLock(false);
            $(".gnb").hide();
          });
      });
    };

    // var openSearch = function() {
    //   $("#btn-search-mo").on("click", function () {
    //     $(".dropdown-menu-search").show();
    //     $("body").addClass("show_menu");
    //     $(".dropdown-menu-search")
    //       .stop()
    //       .animate({ left: "0" }, 600, "easeInOutExpo", function () {});
    //   });
    // }
  
    openMenu();
    closeMenu();
    // openSearch();
  });
  