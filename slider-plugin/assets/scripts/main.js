(function ($) {

  'use strict'

  $(document).ready(function () {

    var countItem2 = 0

    // setTimeout(function () {
    //   $('.wrap-slider .style-1').slick({
    //     variableWidth: true,
    //     arrows: false,
    //     dots: true,
    //     centerMode: true,
    //     slidesToShow: 3
    //   })
    //
    //   $('.wrap-slider .style-2').slick({
    //     variableWidth: true,
    //     arrows: false,
    //     slidesToShow: 3
    //   })
    //
    //   countItem2 = $('.wrap-slider .style-2 .slick-slide:not(.slick-cloned)').length
    // }, 100)

    $(window).on('load', function () {
      $('.wrap-slider .style-1').slick({
        variableWidth: true,
        arrows: false,
        dots: true,
        centerMode: true,
        slidesToShow: 3
      })

      $('.wrap-slider .style-2').slick({
        variableWidth: true,
        arrows: false,
        slidesToShow: 3
      })

      countItem2 = $('.wrap-slider .style-2 .slick-slide:not(.slick-cloned)').length
    })

    setTimeout(function () {
      $('.wrap-slider').removeClass('hidden')
    }, 150)

    $('.wrap-slider .style-2').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      if (nextSlide === 0) {
        var $nextClone = $('.slick-current').next('.slick-cloned')
        setTimeout(function () {
          $nextClone.addClass('slick-current')
        })
      }
      if (nextSlide === countItem2 - 1) {
        var $prevClone = $('.slick-current').prev('.slick-cloned')
        setTimeout(function () {
          $prevClone.addClass('slick-current')
        })
      }
    })

  })

})(window.jQuery)