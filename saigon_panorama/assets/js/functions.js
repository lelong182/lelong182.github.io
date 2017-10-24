var player;

function onCallVideo() {
  var scriptTag = $('<script />');
  scriptTag.attr('id', 'youtube-api');
  scriptTag.attr('type', 'text/javascript');
  scriptTag.attr('src', 'https://www.youtube.com/iframe_api');
  $('head').append(scriptTag);
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 1,
      showinfo: 0,
      autohide: 1,
      modestbranding: 1,
      vq: 'hd1080'
    },
    videoId: 'pRkwIVwxceY',
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function initMap() {
  var location = {lat: 10.768566, lng: 106.701877};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: location
  });
  new google.maps.Marker({
    position: location,
    map: map
  });
}

function loadGoogleMaps(key) {
  var scriptTag = $('<script />');
  scriptTag.attr('id', 'google-map-api');
  scriptTag.attr('type', 'text/javascript');
  scriptTag.attr('src', 'https://maps.googleapis.com/maps/api/js?key=' + key + '&callback=initMap');
  $('head').append(scriptTag);
}

function handleSlides(opts) {
  if (opts.type === null || typeof opts.type == 'undefined') {
    opts.type = 'fade';
  }
  if (opts.autoPlay === null || typeof opts.autoPlay == 'undefined') {
    opts.autoPlay = false;
  }
  var slideInterval;
  var activeSlide = 0;
  var totalSlides = $(opts.container + ' .slides-content .slide').length;

  function autoPlay() {
    return setInterval(function () {
      $(opts.container + ' .section-2 .slides-control .next-btn').trigger('click');
    }, ((opts.autoPlayTime ? opts.autoPlayTime : 3) * 1000));
  }

  if (opts.autoPlay) {
    slideInterval = autoPlay();
  }
  switch (opts.type) {
    case 'fade':
      $(opts.container + ' .wrap-slides').addClass('fade-effect');
      $(opts.container + ' .slides-content .slide').eq(0).addClass('open');
      $(opts.container).on('click', '.section-2 .slides-control a', function () {
        clearInterval(slideInterval);
        slideInterval = autoPlay();
        var currentSlide = $(opts.container + ' .slides-content .slide.open').index();
        $(opts.container + ' .slides-content .slide').removeClass('open');
        if ($(this).hasClass('next-btn')) {
          if (currentSlide + 1 === totalSlides) {
            activeSlide = 0;
          } else {
            activeSlide = currentSlide + 1;
          }
        } else {
          if (currentSlide === 0) {
            activeSlide = totalSlides - 1;
          } else {
            activeSlide = currentSlide - 1;
          }
        }
        $(opts.container + ' .slides-content .slide').eq(activeSlide).addClass('open');
      });
      break;
    case 'slide':
      $(opts.container + ' .wrap-slides').addClass('slide-effect');
      $(opts.container + ' .slides-content .slide').eq(0).addClass('active');
      $(opts.container + ' .slides-content .slide').eq(1).addClass('next');
      $(opts.container + ' .slides-content .slide').eq(totalSlides - 1).addClass('prev');
      $(opts.container).on('click', '.section-2 .slides-control a', function () {
        clearInterval(slideInterval);
        slideInterval = autoPlay();
        var currentSlide = $(opts.container + ' .slides-content .slide.active').index();
        $(opts.container + ' .slides-content .slide').removeClass('active next prev');
        if ($(this).hasClass('next-btn')) {
          $(opts.container + ' .slides-content .slide').eq(currentSlide).addClass('prev');
          $(opts.container + ' .slides-content .slide').eq(currentSlide + 1).addClass('active');
          if (currentSlide + 1 === totalSlides) {
            $(opts.container + ' .slides-content .slide').eq(0).addClass('active');
            $(opts.container + ' .slides-content .slide').eq(1).addClass('next');
          } else if (currentSlide + 2 === totalSlides) {
            $(opts.container + ' .slides-content .slide').eq(0).addClass('next');
          } else {
            $(opts.container + ' .slides-content .slide').eq(currentSlide + 2).addClass('next');
          }
        } else {
          $(opts.container + ' .slides-content .slide').eq(currentSlide).addClass('next');
          $(opts.container + ' .slides-content .slide').eq(currentSlide - 1).addClass('active');
          $(opts.container + ' .slides-content .slide').eq(currentSlide - 2).addClass('prev');
        }
      });
      break;
  }
}

function handleTabs(opts) {
  $(opts.container).on('click', '.section-3 li a', function () {
    var thisLi = $(this).closest('li');
    var contentId = thisLi.data('content');
    if (contentId === 2) {
      if ($('#youtube-api').length) {
        onYouTubeIframeAPIReady();
      } else {
        onCallVideo();
      }
    } else {
      $('.video').html('<div id="player"></div>');
    }
    if (contentId === 4 && $('#google-map-api').length === 0) {
      loadGoogleMaps(opts.googleMapKey);
    }
    $(opts.container + ' .section-3 li').removeClass('active');
    thisLi.addClass('active');
    $(opts.container + ' .section-2 div[class^="content"]').removeClass('open');
    $(opts.container + ' .content-' + contentId).addClass('open');
    return false;
  });
}

function handleForm(container) {
  $(container).on('submit', '.section-2 .register-form', function (e) {
    e.preventDefault();
    var fullname = $('.register-form input[name="fullname"]').val();
    var email = $('.register-form input[name="email"]').val();
    var phone = $('.register-form input[name="phone"]').val();
    $('.register-form button[type="submit"]').text('Đang xử lý...');
    setTimeout(function () {
      $('.successfully-content').addClass('open');
      $('.register-form').addClass('done');
    }, 1000);
  });
}