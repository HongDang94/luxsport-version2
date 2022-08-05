
(function (win, $) {
  'use strict';

  var openMenu = function () {
      $('.btn_menu').on('click', function () {
          $('.gnb').show();
          $('body').addClass('show_menu');
          $('.gnb').stop().animate({left:'0'}, 600, 'easeInOutExpo',function(){});
      });
  };

  var closeMenu = function () {
      $('.btn_close').on('click', function () {
          $('body').removeClass('show_menu');
          $('.gnb').stop().animate({left:'-100%'}, 600, 'easeInOutExpo',function(){
              //scrollLock(false);
              $('.gnb').hide();
          });
      });
  };



  
    openMenu();
    closeMenu();
    openNavGame();
    closeNavGame();
    openSettingPlayer();
    closeSettingPlayer();
    accordionList('.lst_accordion .btn_accordion');
    accordionSingle('.model_box .btn_accord');
    clearDialog();
    showOptionSelect(); // Trigger option select in toolbar
    checkDeviceIos(); // Detect device Ios
  });
})(window, window.jQuery);