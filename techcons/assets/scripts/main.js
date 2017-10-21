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

  window.loading_screen = window.pleaseWait({
    logo: "dist/images/logo.png",
    backgroundColor: '#fff',
    loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
  });

  $(window).on('load', function () {
    window.loading_screen.finish();
    $('#slider').nivoSlider({
      animSpeed: 800,
      pauseTime: 5000,
      controlNav: false,
      afterLoad: function () {
        $('.nivo-caption').addClass('show');
      },
      // beforeChange: function () {
      //   $('.nivo-caption').removeClass('show');
      // },
      afterChange: function () {
        $('.nivo-caption').addClass('show');
      }
    });
    $('body').css('opacity', 1);
  });

  $(document).ready(function () {

    /* =================================
     ===  Minimal Menu                 ====
     =================================== */
    $('.minimal-menu').before('<label class=\"minimal-menu-button\" for=\"mobile-nav\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></label><input class=\"minimal-menu-button\" type=\"checkbox\" id=\"mobile-nav\" name=\"mobile-nav\" />');
    $('.minimal-menu').find('ul.sub-menu').parent().addClass('menu-item-has-children');
    $('.minimal-menu').find('div.menu-wrapper').parent().addClass('megamenu menu-item-has-children');
    $(this).on('mouseup', 'body', function (event) {
      if (!$('.minimal-menu').is(event.target) && $('.minimal-menu').has(event.target).length === 0 && !$('label.minimal-menu-button').is(event.target)) {
        $('.minimal-menu-button[type="checkbox"]').prop('checked', false);
        $('label.minimal-menu-button').removeClass('opened');
      }
    });
    if (Modernizr.mq('(max-width: 857px)')) {
      $(this).on('click', '.menu > .menu-item-has-children > a', function () {
        if ($(this).hasClass('opened')) {
          $(this).removeClass('opened');
        } else {
          $('.menu > .menu-item-has-children > a').removeClass('opened');
          $(this).addClass('opened');
        }
      });
      $(this).on('click', 'label.minimal-menu-button', function () {
        if ($(this).hasClass('opened')) {
          $(this).removeClass('opened');
        } else {
          $(this).addClass('opened');
        }
      });
    }

    /* =================================
     ===  Parallax Background                 ====
     =================================== */
    $('.jarallax').jarallax({
      speed: 0.2
    });

    /* =================================
     ===  Partners Carousel                 ====
     =================================== */
    $('.list-partners').slick({
      infinite: true,
      speed: 1200,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 992,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            arrows: false
          }
        }
      ]
    });

    /* =================================
     ===  Back to top                 ====
     =================================== */
    $(this).on('click', '.back-to-top', function () {
      $('html, body').animate({scrollTop: 0}, 1000);
      return false;
    });

    /* =================================
     ===  Fixed menu                 ====
     =================================== */
    var fixedMenu = $('.fixed-menu');
    var fixedMenuTop = fixedMenu.offset().top;
    var moveTo = new MoveTo({duration: 1200});
    var triggers = document.getElementsByClassName('fixed-menu-link');
    var fixedMenuHeight = fixedMenu.height();
    var activeLineHeight = Math.ceil((fixedMenuHeight + 8) / $('.fixed-menu li').length);
    $('.active-line').css('height', activeLineHeight);
    $('.decorate-item').each(function () {
      $(this).waypoint({
        handler: function (direction) {
          var number = $(this.element).data('number');
          $('.fixed-menu li').removeClass('active');
          if (direction === 'down') {
            $('.fixed-menu li').eq(number - 1).addClass('active');
            $('.active-line').css('height', activeLineHeight * number);
          }
          if (direction === 'up') {
            if(number === 1) {
              $('.fixed-menu li').eq(0).addClass('active');
              $('.active-line').css('height', activeLineHeight);
            } else {
              $('.fixed-menu li').eq(number - 2).addClass('active');
              $('.active-line').css('height', activeLineHeight * (number - 1));
            }
          }
        },
        offset: 80
      });
    });
    $(window).on('scroll', function () {
      if ($(window).scrollTop() >= fixedMenuTop) {
        fixedMenu.addClass('fixed');
      } else {
        fixedMenu.removeClass('fixed');
      }
    });
    for (var i = 0; i < triggers.length; i++) {
      moveTo.registerTrigger(triggers[i]);
    }

  });

})(window.jQuery);