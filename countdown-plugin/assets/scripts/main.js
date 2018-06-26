(function ($) {

  'use strict'

  $(document).ready(function () {

    var $countdown = $('#countdown-ll')
    var html = '<div class="wrap-countdown"><span class="title"></span>:<span class="days time">00</span> <span class="days_text time_text">Ngày</span><span class="hours time">00</span> <span class="hours_text time_text">Giờ</span><span class="minutes time">00</span> <span class="minutes_text time_text">Phút</span><span class="seconds time">00</span> <span class="seconds_text time_text">Giây</span></div>'

    $.when($.get('https://lelong182.github.io/countdown-plugin/dist/styles/main.css')).done(function (response) {
      var $countdownStyle = $('<style />').text(response)
      $countdown.before($countdownStyle)
    })

    $countdown.html(html)

    // var title = getAllUrlParams().title ? decodeURIComponent(getAllUrlParams().title) : 'Chương trình sẽ bắt đầu sau'
    var title = $countdown.data('title') ? $countdown.data('title') : 'Chương trình sẽ bắt đầu sau'
    var updatedTitle = title.charAt(0).toUpperCase() + title.substr(1)
    $('.title').text(updatedTitle)

    var bg = $countdown.data('bg') ? $countdown.data('bg') : 242424
    $('.wrap-countdown').css('background-color', '#' + bg)

    var color = $countdown.data('color') ? $countdown.data('color') : 'ffffff'
    $('.wrap-countdown').css('color', '#' + color)

    var highlight = $countdown.data('highlight') ? $countdown.data('highlight') : 'fdd835'
    $('.wrap-countdown .time').css('color', '#' + highlight)

    var end = $countdown.data('end')
    var now = end ? new Date(end * 1000) : new Date()
    var day = now.getDate()
    var month = now.getMonth() + 1
    var year = now.getFullYear()
    var hour = now.getHours()
    var minute = now.getMinutes()
    var second = now.getSeconds()
    var endTime = month + '/' + day + '/' + year + ' ' + hour + ':' + minute + ':' + second

    $('.wrap-countdown').countdown({
      date: endTime,
      offset: +7,
      day: 'Ngày',
      days: 'Ngày',
      hour: 'Giờ',
      hours: 'Giờ',
      minute: 'Phút',
      minutes: 'Phút',
      second: 'Giây',
      seconds: 'Giây',
    })

  })

})(window.jQuery)

function getAllUrlParams (url) {
  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1)

  // we'll store the parameters here
  var obj = {}

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0]

    // split our query string into its component parts
    var arr = queryString.split('&')

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=')

      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined
      var paramName = a[0].replace(/\[\d*\]/, function (v) {
        paramNum = v.slice(1, -1)
        return ''
      })

      // set parameter value (use 'true' if empty)
      var paramValue = typeof(a[1]) === 'undefined' ? true : a[1]

      // (optional) keep case consistent
      paramName = paramName.toLowerCase()
      paramValue = paramValue.toLowerCase()

      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]]
        }
        // if no array index number specified...
        if (typeof paramNum === 'undefined') {
          // put the value on the end of the array
          obj[paramName].push(paramValue)
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue
      }
    }
  }
  return obj
}
