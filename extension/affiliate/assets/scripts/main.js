(function ($) {

  'use strict'

  $(document).ready(function () {

    var appIdWrapper = '#shopee-aff-ext '

    $('.promotions-inner').niceScroll({
      cursorcolor: '#ff531d',
      cursorwidth: '3px',
      background: '#cccccc',
      cursorborder: 'none'
    })

    $(this).on('click', appIdWrapper + '.header .tabs li', function () {
      var type = $(this).data('type')
      $('.header .tabs li').removeClass('active')
      $('.main .tab-content').addClass('hidden')
      if (!$(this).hasClass('active')) {
        $(this).addClass('active')
        $('.main .tab-content.' + type).removeClass('hidden')
        if (type === 'promotions') {
          $('.promotions-inner').getNiceScroll().resize()
        }
        if (type === 'tracking-links') {
          $('.created-links').addClass('hidden')
        }
      }
    })

    $(this).on('click', appIdWrapper + '.tab-content .add-src-link', function () {
      var $listSrcInputs = $('.list-src-inputs')
      if ($listSrcInputs.hasClass('hidden')) {
        $listSrcInputs.removeClass('hidden')
      } else {
        $listSrcInputs.addClass('hidden')
      }
      return false
    })

    $(this).on('click', appIdWrapper + '.top-promotions .cat-btn', function () {
      if (!$('.top-promotions .list-cat').hasClass('open')) {
        $('.wrapper').append('<div class="dark-overlay"></div>')
        $('.dark-overlay').hide().fadeIn()
        $('.top-promotions .list-cat').addClass('open')
      }
      return false
    })

    $(this).on('click', appIdWrapper + '.dark-overlay', function () {
      $('.top-promotions .list-cat').removeClass('open')
      $('.dark-overlay').fadeOut(200, function () {
        $(this).remove()
      })
    })

    $(this).on('click', appIdWrapper + '.list-promotions .item .create-btn', function () {
      $('.created-links').addClass('hidden')
      $(this).closest('.item').find('.created-links').removeClass('hidden')
      $('.promotions-inner').getNiceScroll().resize()
    })

    $(this).on('click', appIdWrapper + '.tracking-links-table .add-src-link', function () {
      var key = $(this).data('key')
      var $rowWithKey = $('.src-link-row[data-key="' + key + '"]')
      if ($rowWithKey.hasClass('hidden')) {
        $rowWithKey.removeClass('hidden')
      } else {
        $rowWithKey.addClass('hidden')
      }
      return false
    })

  })

})(window.jQuery)