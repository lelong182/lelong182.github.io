(function ($) {

  'use strict'

  $(document).ready(function () {

    var countdown = getAllUrlParams().countdown ? getAllUrlParams().countdown : 1

    var title = getAllUrlParams().title ? decodeURIComponent(getAllUrlParams().title) : 'Chương trình sẽ bắt đầu sau'
    var updatedTitle = title.charAt(0).toUpperCase() + title.substr(1)
    $('.title').text(updatedTitle)

    var bg = getAllUrlParams().bg ? getAllUrlParams().bg : '242424'
    if (bg === 'none') {
      $('.wrap-countdown').css('background-color', 'transparent')
    } else {
      $('.wrap-countdown').css('background-color', '#' + bg)
    }

    var color = getAllUrlParams().color ? getAllUrlParams().color : 'ffffff'
    $('.wrap-countdown').css('color', '#' + color)

    var highlight = getAllUrlParams().highlight ? getAllUrlParams().highlight : 'fdd835'
    $('.wrap-countdown .time').css('color', '#' + highlight)

    var end = getAllUrlParams().end
    var endDate = end ? new Date(end * 1000) : new Date()

    var day = endDate.getDate()
    var month = endDate.getMonth() + 1
    var year = endDate.getFullYear()
    var hour = endDate.getHours()
    var minute = endDate.getMinutes()
    var second = endDate.getSeconds()
    var endTime = month + '/' + day + '/' + year + ' ' + hour + ':' + minute + ':' + second

    if (countdown == 1) {
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
    }
    if (countdown == 2) {
      $('.countdown').timeTo({
        fontFamily: null,
        fontSize: 26,
        timeTo: endDate,
        displayDays: 0,
        captionSize: 14
      })

      var bg2 = getAllUrlParams().bg2 ? getAllUrlParams().bg2 : '45484d'
      if (bg2 === 'none') {
        $('.wrap-countdown.style-2 .timeTo div').css('background-color', 'transparent')
      } else {
        $('.wrap-countdown.style-2 .timeTo div').css('background-color', '#' + bg2)
      }

      var color2 = getAllUrlParams().color2 ? getAllUrlParams().color2 : 'fdd835'
      $('.wrap-countdown.style-2 .timeTo div').css('color', '#' + color2)
    }

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
      // paramValue = paramValue.toLowerCase()

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
