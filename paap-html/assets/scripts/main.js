(function ($) {

  "use strict";

  $.fn.customAnimate = function (effect, callback) {
    this.addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass(effect + ' animated');
      if (typeof callback === 'function') {
        callback.call(this);
      }
    });
  };

  $(document).ready(function () {

    /* =================================
     ===  Minimal Menu                 ====
     =================================== */
    $('.minimal-menu').before('<label class=\"minimal-menu-button\" for=\"mobile-nav\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></label><input class=\"minimal-menu-button\" type=\"checkbox\" id=\"mobile-nav\" name=\"mobile-nav\" />');
    $('.minimal-menu').find('ul.sub-menu').parent().addClass('submenu');
    $('.minimal-menu').find('div.menu-wrapper').parent().addClass('megamenu submenu');
    $(this).on('mouseup', 'body', function (event) {
      if (!$('.minimal-menu').is(event.target) && $('.minimal-menu').has(event.target).length === 0 && !$(event.target).hasClass('minimal-menu-button')) {
        $('.minimal-menu-button[type="checkbox"]').prop('checked', false);
      }
    });
    if (Modernizr.mq('(max-width: 991px)')) {
      $(this).on('click', '.menu > .submenu > a', function () {
        if ($(this).hasClass('opened')) {
          $(this).removeClass('opened');
        } else {
          $('.menu > .submenu > a').removeClass('opened');
          $(this).addClass('opened');
        }
      });
    }


    /* =================================
     ===  Login page                 ====
     =================================== */
    $(this).on('click', '.paap-login .login-form .register-btn', function () {
      $('.paap-login .register-form').removeClass('hidden');
      $('.paap-login .login-form').addClass('hidden');
      return false;
    });


    /* =================================
     ===  Map Vietnam                 ====
     =================================== */
    $(this).on('click', '.wrap-active-area .map .land', function () {
      var id = $(this).attr('id');
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.wrap-area-chk input[id="' + id + '-chk"]').prop('checked', false);
      } else {
        $(this).addClass('active');
        $('.wrap-area-chk input[id="' + id + '-chk"]').prop('checked', true);
      }
      return false;
    });
    $(this).on('click', '.wrap-active-area .wrap-area-chk input[type="checkbox"]', function () {
      var id_arr = $(this).attr('id').split('-');
      id_arr.splice(-1, 1);
      var id = id_arr.join('-');
      if (this.checked) {
        switch (id) {
          case 'TBB':
            handleLand(['VN-01', 'VN-02', 'VN-05', 'VN-06', 'VN-14', 'VN-71'], 'add');
            break;
          case 'DBB':
            handleLand(['VN-03', 'VN-04', 'VN-07', 'VN-09', 'VN-13', 'VN-53', 'VN-54', 'VN-68', 'VN-69'], 'add');
            break;
          case 'DBSH':
            handleLand(['VN-15', 'VN-18', 'VN-20', 'VN-56', 'VN-61', 'VN-63', 'VN-66', 'VN-67', 'VN-70', 'VN-HP', 'VN-HN'], 'add');
            break;
          case 'BTB':
            handleLand(['VN-21', 'VN-22', 'VN-23', 'VN-24', 'VN-25', 'VN-26'], 'add');
            break;
          case 'NTB':
            handleLand(['VN-27', 'VN-29', 'VN-31', 'VN-32', 'VN-34', 'VN-36', 'VN-40', 'VN-DN'], 'add');
            break;
          case 'TN':
            handleLand(['VN-28', 'VN-30', 'VN-33', 'VN-35', 'VN-72'], 'add');
            break;
          case 'DNB':
            handleLand(['VN-37', 'VN-39', 'VN-43', 'VN-57', 'VN-58', 'VN-SG'], 'add');
            break;
          case 'TNB':
            handleLand(['VN-41', 'VN-44', 'VN-45', 'VN-46', 'VN-47', 'VN-49', 'VN-50', 'VN-51', 'VN-52', 'VN-55', 'VN-59', 'VN-73', 'VN-CT'], 'add');
            break;
          case 'ALL':
            $(".wrap-active-area .map .land[id^='VN-']").addClass('active');
            $('.wrap-area-chk input[type="checkbox"]').prop('checked', true);
            break;
        }
        $('.wrap-active-area .map #' + id).addClass('active');
      } else {
        switch (id) {
          case 'TBB':
            handleLand(['VN-01', 'VN-02', 'VN-05', 'VN-06', 'VN-14', 'VN-71'], 'remove');
            break;
          case 'DBB':
            handleLand(['VN-03', 'VN-04', 'VN-07', 'VN-09', 'VN-13', 'VN-53', 'VN-54', 'VN-68', 'VN-69'], 'remove');
            break;
          case 'DBSH':
            handleLand(['VN-15', 'VN-18', 'VN-20', 'VN-56', 'VN-61', 'VN-63', 'VN-66', 'VN-67', 'VN-70', 'VN-HP', 'VN-HN'], 'remove');
            break;
          case 'BTB':
            handleLand(['VN-21', 'VN-22', 'VN-23', 'VN-24', 'VN-25', 'VN-26'], 'remove');
            break;
          case 'NTB':
            handleLand(['VN-27', 'VN-29', 'VN-31', 'VN-32', 'VN-34', 'VN-36', 'VN-40', 'VN-DN'], 'remove');
            break;
          case 'TN':
            handleLand(['VN-28', 'VN-30', 'VN-33', 'VN-35', 'VN-72'], 'remove');
            break;
          case 'DNB':
            handleLand(['VN-37', 'VN-39', 'VN-43', 'VN-57', 'VN-58', 'VN-SG'], 'remove');
            break;
          case 'TNB':
            handleLand(['VN-41', 'VN-44', 'VN-45', 'VN-46', 'VN-47', 'VN-49', 'VN-50', 'VN-51', 'VN-52', 'VN-55', 'VN-59', 'VN-73', 'VN-CT'], 'remove');
            break;
          case 'ALL':
            $(".wrap-active-area .map .land[id^='VN-']").removeClass('active');
            $('.wrap-area-chk input[type="checkbox"]').prop('checked', false);
            break;
        }
        $('.wrap-active-area .map #' + id).removeClass('active');
      }
    });


    /* =================================
     ===  Popup Chat                 ====
     =================================== */
    $(this).on('click', '.creator .chat-btn', function () {
      $('.chat-header .up-icon').removeClass().addClass('down-icon');
      $('.popup-chat').addClass('visible open');
    });
    $(this).on('click', '.popup-chat .up-icon', function () {
      $(this).closest('.popup-chat').addClass('open');
      $(this).removeClass().addClass('down-icon');
    });
    $(this).on('click', '.popup-chat .down-icon', function () {
      $(this).closest('.popup-chat').removeClass('open');
      $(this).removeClass().addClass('up-icon');
    });
    $(this).on('click', '.popup-chat .close-icon', function () {
      $(this).closest('.popup-chat').removeClass('visible open');
      $('.chat-header .down-icon').removeClass().addClass('up-icon');
    });

  });

})(window.jQuery);

function customSelect() {
  $('.custom-select').select2();
  $('.custom-select.no-search').select2({
    minimumResultsForSearch: -1
  });
}

function homeClients() {
  $('.main .clients').not('.slick-initialized').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
}

function handleLand(arr, act) {
  $.each(arr, function (i, val) {
    if (act === 'add') {
      $('.wrap-active-area .map .land[id="' + val + '"]').addClass('active');
      $('.wrap-area-chk input[id="' + val + '-chk"]').prop('checked', true);
    } else if (act === 'remove') {
      $('.wrap-active-area .map .land[id="' + val + '"]').removeClass('active');
      $('.wrap-area-chk input[id="' + val + '-chk"]').prop('checked', false);
    }
  });
}