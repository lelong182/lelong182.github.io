(function ($) {

  'use strict'

  $(document).ready(function () {

    setTimeout(function () {
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
    }, 100)

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
      if (nextSlide === 4) {
        var $prevClone = $('.slick-current').prev('.slick-cloned')
        setTimeout(function () {
          $prevClone.addClass('slick-current')
        })
      }
    })

  })

})(window.jQuery)