(function ($) {

  'use strict'

  $(document).ready(function () {

    var timer

    setTimeout(function () {
      $('.wrap-floater').removeClass('hidden')
    }, 100)

    timer = setInterval(function () {
      textFloater()
    }, 3000)

    $('.content li')
      .mouseover(function () {
        clearInterval(timer)
      })
      .mouseout(function () {
        timer = setInterval(function () {
          textFloater()
        }, 3000)
      })

  })

})(window.jQuery)

function textFloater () {
  var $current = $('.content li.active')
  var $next = $current.next()
  $current.addClass('close')
  setTimeout(function () {
    $next.addClass('active')
  }, 100)
  if ($next.index() === -1) {
    $('.content li:first').addClass('active')
  }

  setTimeout(function () {
    $('.content li.close').removeClass()
  }, 700)
}