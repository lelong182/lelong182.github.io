(function ($) {

  "use strict";

  $(document).ready(function () {

    CSSPlugin.defaultTransformPerspective = 500;

    /* =================================
     ===  Handle load background  ====
     =================================== */
    backgroundLoaded('slide-1', function () {
      handleSlide1Animation(false, 0.2);
    });


    /* =================================
     ===  Menu  ====
     =================================== */
    $(this).on('click', '.menu-btn', function () {
      if ($(this).hasClass('opened')) {
        $(this).removeClass('opened');
        $('.menu').removeClass('open');
      } else {
        $(this).addClass('opened');
        $('.menu').addClass('open');
      }
    });
    handleMainMenu();
    handleMenu();


    /* =================================
     ===  Handle Scroll  ====
     =================================== */
    document.body.addEventListener('wheel', handleScroll);

    /* =================================
     ===  Content  ====
     =================================== */
    handleToHome();

  });

})(window.jQuery);

/* =======  Common variables  ======= */
var completed = true;
var defaultZIndex = 0;

/* =======  Slide 1 variables  ======= */
var slide1Txt1 = $('.slide-1 .txt-1');
var slide1Txt2 = $('.slide-1 .txt-2');
var slide1TL = new TimelineMax();
var slide1Txt1Split = new SplitText(slide1Txt1, {type: 'words'});
var slide1Txt2Split = new SplitText(slide1Txt2, {type: 'words'});

/* =======  Slide 2 variables  ======= */
var slide2Txt1 = $('.slide-2 .txt-1');
var slide2Txt2 = $('.slide-2 .txt-2');
var slide2Card = $('.slide-2 .card');
var slide2Hand = $('.slide-2 .hand');
var slide2TL = new TimelineMax();
var slide2Txt1Split = new SplitText(slide2Txt1, {type: 'words'});
var slide2Txt2Split = new SplitText(slide2Txt2, {type: 'words'});

/* =======  Slide 3 variables  ======= */
var slide3Txt1 = $('.slide-3 .txt-1');
var slide3Img = $('.slide-3 .img');
var slide3Women = $('.slide-3 .women');
var slide3TL = new TimelineMax();
var slide3Txt1Split = new SplitText(slide3Txt1, {type: 'words'});

/* =======  Slide 4 variables  ======= */
var slide4Txt1 = $('.slide-4 .txt-1');
var slide4Txt2 = $('.slide-4 .txt-2');
var slide4Person1 = $('.slide-4 .person-1');
var slide4Person2 = $('.slide-4 .person-2');
var slide4Person3 = $('.slide-4 .person-3');
var slide4TL = new TimelineMax();
var slide4Txt1Split = new SplitText(slide4Txt1, {type: 'words'});
var slide4Txt2Split = new SplitText(slide4Txt2, {type: 'words'});

/* =======  Slide 5 variables  ======= */
var slide5Txt1 = $('.slide-5 .txt-1');
var slide5Txt2 = $('.slide-5 .txt-2');
var slide5Hand2 = $('.slide-5 .hand-2');
var slide5TL = new TimelineMax();
var slide5Txt1Split = new SplitText(slide5Txt1, {type: 'words'});
var slide5Txt2Split = new SplitText(slide5Txt2, {type: 'words'});

/* =======  Slide 6 variables  ======= */
var slide6Txt = $('.slide-6 .txt');
var slide6Polygon = $('.slide-6 .polygon');
var slide6TL = new TimelineMax();
var slide6TxtSplit = new SplitText(slide6Txt, {type: 'words'});

/* =======  Slide 7 variables  ======= */
var slide7Txt1 = $('.slide-7 .txt-1');
var slide7Txt2 = $('.slide-7 .txt-2');
var slide7Polygon = $('.slide-7 .polygon');
var slide7TL = new TimelineMax();
var slide7Txt1Split = new SplitText(slide7Txt1, {type: 'words'});
var slide7Txt2Split = new SplitText(slide7Txt2, {type: 'words'});

/* =======  Slide 7-2 variables  ======= */
var slide72Txt1 = $('.slide-72 .txt-1');
var slide72Txt2 = $('.slide-72 .txt-2');
var slide72Polygon = $('.slide-72 .polygon');
var slide72TL = new TimelineMax();
var slide72Txt1Split = new SplitText(slide72Txt1, {type: 'words'});
var slide72Txt2Split = new SplitText(slide72Txt2, {type: 'words'});

/* =======  Slide 8 variables  ======= */
var slide8Txt1 = $('.slide-8 .txt-1');
var slide8Txt2 = $('.slide-8 .txt-2');
var slide8Img = $('.slide-8 .img');
var slide8TL = new TimelineMax();
var slide8Txt1Split = new SplitText(slide8Txt1, {type: 'words'});
var slide8Txt2Split = new SplitText(slide8Txt2, {type: 'words'});

/* =======  Slide 9 variables  ======= */
var logo = $('.logo');
TweenMax.set(logo, {autoAlpha: 0});
var slide9Txt1 = $('.slide-9 .txt-1');
var slide9Txt2 = $('.slide-9 .txt-2');
var slide9Txt3 = $('.slide-9 .txt-3');
var slide9TL = new TimelineMax();
var slide9Txt1Split = new SplitText(slide9Txt1, {type: 'words'});
var slide9Txt2Split = new SplitText(slide9Txt2, {type: 'words'});

function getBgUrl(el) {
  var bg = "";
  if (el.currentStyle) { // IE
    bg = el.currentStyle.backgroundImage;
  } else if (document.defaultView && document.defaultView.getComputedStyle) {
    bg = document.defaultView.getComputedStyle(el, "").backgroundImage;
  } else {
    bg = el.style.backgroundImage;
  }
  return bg.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
}

function backgroundLoaded(content, callback) {
  var listImages = {
    'slide-1': root + '/images/slide-1.jpg',
    'slide-2': root + '/images/slide-2.jpg',
    'slide-3': root + '/images/slide-3.jpg',
    'slide-4': root + '/images/slide-4.jpg',
    'slide-5': root + '/images/slide-5.jpg',
    'slide-6': root + '/images/slide-6.jpg',
    'slide-7': root + '/images/slide-7.jpg',
    'slide-72': root + '/images/slide-7.jpg',
    'slide-8': root + '/images/slide-8.jpg',
    'slide-9': root + '/images/slide-9.jpg'
  };
  $('.menu-text .wrap > div').removeClass('open');
  $('.menu li').removeClass('active');
  switch (content) {
    case 'slide-2':
      $('.menu li[data-anchor="menu-1"]').addClass('active');
      $('.menu-text .text-menu-1').addClass('open');
      break;
    case 'slide-3':
      $('.menu li[data-anchor="menu-1"]').addClass('active');
      $('.menu-text .text-menu-1').addClass('open');
      break;
    case 'slide-4':
      $('.menu li[data-anchor="menu-1"]').addClass('active');
      $('.menu-text .text-menu-1').addClass('open');
      break;
    case 'slide-5':
      $('.menu li[data-anchor="menu-1"]').addClass('active');
      $('.menu-text .text-menu-1').addClass('open');
      break;
    case 'slide-6':
      $('.menu li[data-anchor="menu-1"]').addClass('active');
      $('.menu-text .text-menu-1').addClass('open');
      break;
    case 'slide-7':
      $('.menu li[data-anchor="menu-2"]').addClass('active');
      $('.menu-text .text-menu-2').addClass('open');
      break;
    case 'slide-72':
      $('.menu li[data-anchor="menu-2"]').addClass('active');
      $('.menu-text .text-menu-2').addClass('open');
      break;
    case 'slide-8':
      $('.menu li[data-anchor="menu-3"]').addClass('active');
      $('.menu-text .text-menu-3').addClass('open');
      break;
    case 'slide-9':
      $('.menu li[data-anchor="menu-4"]').addClass('active');
      $('.menu-text .text-menu-4').addClass('open');
      break;
  }
  if ($('.content .' + content + ' .main-bg').css('background-image') === 'none') {
    var firstLoad = false;
    $('.content .' + content + ' .main-bg').css('background-image', 'url(' + listImages[content] + ')');
    var image = document.createElement('img');
    image.src = getBgUrl(document.getElementById(content + '-bg'));
    image.onload = function () {
      if (content === 'slide-1') {
        TweenMax.to($('.content .' + content), 0.5, {opacity: 1, ease: Power2.easeOut});
        firstLoad = true;
      }
      activeAnimation(content, callback, firstLoad);
    };
  } else {
    activeAnimation(content, callback);
  }

  function activeAnimation(content, callback, firstLoad) {
    firstLoad = firstLoad || false;
    if (!firstLoad) {
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      var currentContent = $('.content li.active').attr("class").split(" ")[0];
      var $content = $('.content .' + content);
      var type = $content.data('type');
      $('.content li').removeClass('active');
      switch (currentContent) {
        case 'slide-1':
          handleSlide1Animation(true);
          break;
        case 'slide-2':
          handleSlide2Animation(true);
          break;
        case 'slide-3':
          handleSlide3Animation(true);
          break;
        case 'slide-4':
          handleSlide4Animation(true);
          break;
        case 'slide-5':
          handleSlide5Animation(true);
          break;
        case 'slide-6':
          handleSlide6Animation(true);
          break;
        case 'slide-7':
          handleSlide7Animation(true);
          break;
        case 'slide-72':
          handleSlide72Animation(true);
          break;
        case 'slide-8':
          handleSlide8Animation(true);
          break;
        case 'slide-9':
          handleSlide9Animation(true);
          break;
      }
      switch (type) {
        case 'bottom':
          TweenMax.fromTo($content, 1,
            {
              y: windowHeight,
              opacity: 1,
              zIndex: ++defaultZIndex
            }, {
              y: 0,
              ease: Power3.easeIn,
              delay: 0.3
            });
          break;
        case 'right':
          TweenMax.fromTo($content, 1,
            {
              x: windowWidth,
              opacity: 1,
              zIndex: ++defaultZIndex
            }, {
              x: 0,
              ease: Power3.easeIn,
              delay: 0.3
            });
          break;
        case 'scale':
          TweenMax.fromTo($content, 1,
            {
              opacity: 0,
              zIndex: ++defaultZIndex
            }, {
              opacity: 1,
              ease: Power3.easeIn
            });
          TweenMax.fromTo($content.find('.main-bg'), 10,
            {
              scale: 1.4
            }, {
              scale: 1,
              ease: Power0.easeNone,
              delay: 0.3
            });
          break;
      }
    }
    if (typeof callback === "function") {
      callback();
    }
  }
}

function handleSlide1Animation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  if (hide) {
    slide1TL.clear().time(0);
    slide1Txt1Split.revert();
    slide1Txt2Split.revert();
    slide1Txt1Split = slide1Txt1Split.split({type: 'lines'});
    slide1Txt2Split = slide1Txt2Split.split({type: 'lines'});
    TweenMax.staggerTo(slide1Txt1Split.lines, 0.5,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeIn
      }, 0.1);
    TweenMax.staggerTo(slide1Txt2Split.lines, 0.5,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeIn,
        delay: 0.1
      }, 0.1);
    setTimeout(function () {
      $('.slide-1 .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.slide-1 .group-text').css('visibility', 'visible');
    $('.content .slide-1').addClass('active');
    slide1Txt1Split = slide1Txt1Split.split({type: 'chars'});
    slide1Txt2Split = slide1Txt2Split.split({type: 'lines'});
    slide1TL
      .staggerFrom(slide1Txt1Split.chars, 0.8,
        {
          autoAlpha: 0,
          scale: 0,
          y: 80,
          rotationX: 180,
          transformOrigin: "0% 50% -50",
          ease: Back.easeOut
        }, 0.01, '+' + delay)
      .staggerFrom(slide1Txt2Split.lines, 0.6,
        {
          autoAlpha: 0,
          x: '+=100',
          ease: Back.easeOut
        }, 0.15, '-=0.6');
  }
}

function handleSlide2Animation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  if (hide) {
    slide2TL.clear().time(0);
    slide2Txt1Split.revert();
    slide2Txt2Split.revert();
    slide2Txt1Split = slide2Txt1Split.split({type: 'lines'});
    slide2Txt2Split = slide2Txt2Split.split({type: 'lines'});
    TweenMax.staggerTo(slide2Txt1Split.lines, 0.5,
      {
        autoAlpha: 0,
        x: '-=100',
        ease: Back.easeIn
      }, 0.1);
    TweenMax.staggerTo(slide2Txt2Split.lines, 0.5,
      {
        autoAlpha: 0,
        x: '-=100',
        ease: Back.easeIn,
        delay: 0.1
      }, 0.1);
    TweenMax.to(slide2Card, 0.8,
      {
        autoAlpha: 0,
        x: '-=300',
        y: '+=50',
        ease: Back.easeIn
      });
    TweenMax.to(slide2Hand, 0.8,
      {
        autoAlpha: 0,
        x: '+=50',
        y: '+=200',
        ease: Back.easeIn
      });
    setTimeout(function () {
      $('.slide-2 .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.slide-2 .group-text').css('visibility', 'visible');
    $('.content .slide-2').addClass('active');
    TweenMax.set(slide2Card, {autoAlpha: 1, x: 0, y: 0});
    TweenMax.set(slide2Hand, {autoAlpha: 1, x: 0, y: 0});
    slide2Txt1Split = slide2Txt1Split.split({type: 'chars'});
    slide2Txt2Split = slide2Txt2Split.split({type: 'lines'});
    slide2TL
      .staggerFrom(slide2Txt1Split.chars, 0.8,
        {
          autoAlpha: 0,
          scale: 0,
          y: 80,
          rotationX: 180,
          transformOrigin: "0% 50% -50",
          ease: Back.easeOut
        }, 0.01, '+' + delay)
      .staggerFrom(slide2Txt2Split.lines, 0.6,
        {
          autoAlpha: 0,
          x: '-=100',
          ease: Back.easeOut
        }, 0.15, '-=0.7')
      .from(slide2Card, 0.8,
        {
          autoAlpha: 0,
          x: '-=300',
          y: '+=50',
          ease: Back.easeOut
        }, '-=1')
      .from(slide2Hand, 0.8,
        {
          autoAlpha: 0,
          x: '+=50',
          y: '+=200',
          ease: Power2.easeOut
        }, '-=0.7');
  }
}

function handleSlide3Animation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  if (hide) {
    slide3TL.clear().time(0);
    slide3Txt1Split.revert();
    slide3Txt1Split = slide3Txt1Split.split({type: 'lines'});
    TweenMax.staggerTo(slide3Txt1Split.lines, 0.5,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeIn
      }, 0.1);
    TweenMax.to(slide3Img, 0.8,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Power3.easeIn
      });
    TweenMax.to(slide3Women, 0.8,
      {
        x: '-=200',
        autoAlpha: 0,
        ease: Back.easeIn
      });
    setTimeout(function () {
      $('.slide-3 .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.slide-3 .group-text').css('visibility', 'visible');
    $('.content .slide-3').addClass('active');
    TweenMax.set(slide3Img, {autoAlpha: 1, x: 0});
    TweenMax.set(slide3Women, {autoAlpha: 1, x: 0});
    slide3Txt1Split = slide3Txt1Split.split({type: 'chars'});
    slide3TL
      .staggerFrom(slide3Txt1Split.chars, 0.8,
        {
          autoAlpha: 0,
          scale: 0,
          y: 80,
          rotationX: 180,
          transformOrigin: "0% 50% -50",
          ease: Back.easeOut
        }, 0.01, '+' + delay)
      .from(slide3Img, 0.8,
        {
          autoAlpha: 0,
          x: '+=100',
          ease: Power2.easeOut
        }, '-=0.7')
      .fromTo(slide3Women, 1,
        {
          autoAlpha: 0,
          xPercent: -70
        },
        {
          autoAlpha: 1,
          xPercent: -50,
          ease: Back.easeOut
        }, '-=0.6');
  }
}

function handleSlide4Animation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  if (hide) {
    slide4TL.clear().time(0);
    slide4Txt1Split.revert();
    slide4Txt2Split.revert();
    slide4Txt1Split = slide4Txt1Split.split({type: 'lines'});
    slide4Txt2Split = slide4Txt2Split.split({type: 'lines'});
    TweenMax.staggerTo(slide4Txt1Split.lines, 0.5,
      {
        autoAlpha: 0,
        y: '-=50',
        ease: Back.easeIn
      }, 0.1);
    TweenMax.staggerTo(slide4Txt2Split.lines, 0.5,
      {
        autoAlpha: 0,
        y: '-=50',
        ease: Back.easeIn,
        delay: 0.1
      }, 0.1);
    TweenMax.to(slide4Person1, 0.8,
      {
        autoAlpha: 0,
        ease: Power3.easeIn
      });
    TweenMax.to(slide4Person2, 0.8,
      {
        autoAlpha: 0,
        ease: Power3.easeIn
      });
    TweenMax.to(slide4Person3, 0.8,
      {
        autoAlpha: 0,
        ease: Power3.easeIn
      });
    setTimeout(function () {
      $('.slide-4 .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.slide-4 .group-text').css('visibility', 'visible');
    $('.content .slide-4').addClass('active');
    TweenMax.set(slide4Person1, {autoAlpha: 1});
    TweenMax.set(slide4Person2, {autoAlpha: 1});
    TweenMax.set(slide4Person3, {autoAlpha: 1});
    slide4Txt1Split = slide4Txt1Split.split({type: 'chars'});
    slide4Txt2Split = slide4Txt2Split.split({type: 'lines'});
    slide4TL
      .staggerFrom(slide4Txt1Split.chars, 0.8,
        {
          autoAlpha: 0,
          scale: 0,
          y: 80,
          rotationX: 180,
          transformOrigin: "0% 50% -50",
          ease: Back.easeOut
        }, 0.01, '+' + delay)
      .staggerFrom(slide4Txt2Split.lines, 0.6,
        {
          autoAlpha: 0,
          y: '+=50',
          ease: Back.easeOut
        }, 0.15, '-=0.6')
      .from(slide4Person1, 1.2,
        {
          autoAlpha: 0,
          ease: Power2.easeOut
        }, '-=0.7')
      .from(slide4Person2, 0.8,
        {
          autoAlpha: 0,
          xPercent: -35,
          ease: Power2.easeOut
        }, '-=1')
      .from(slide4Person3, 0.8,
        {
          autoAlpha: 0,
          xPercent: 35,
          ease: Power2.easeOut
        }, '-=1');
  }
}

function handleSlide5Animation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  if (hide) {
    slide5TL.clear().time(0);
    slide5Txt1Split.revert();
    slide5Txt2Split.revert();
    slide5Txt1Split = slide5Txt1Split.split({type: 'lines'});
    slide5Txt2Split = slide5Txt2Split.split({type: 'lines'});
    TweenMax.staggerTo(slide5Txt1Split.lines, 0.5,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeIn
      }, 0.1);
    TweenMax.staggerTo(slide5Txt2Split.lines, 0.5,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeIn,
        delay: 0.1
      }, 0.1);
    TweenMax.to(slide5Hand2, 0.8,
      {
        autoAlpha: 0,
        x: '+=200',
        y: '+=50',
        ease: Power3.easeIn
      });
    setTimeout(function () {
      $('.slide-5 .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.slide-5 .group-text').css('visibility', 'visible');
    $('.content .slide-5').addClass('active');
    TweenMax.set(slide5Hand2, {autoAlpha: 1, x: 0, y: 0});
    slide5Txt1Split = slide5Txt1Split.split({type: 'chars'});
    slide5Txt2Split = slide5Txt2Split.split({type: 'lines'});
    slide5TL
      .staggerFrom(slide5Txt1Split.chars, 0.8,
        {
          autoAlpha: 0,
          scale: 0,
          y: 80,
          rotationX: 180,
          transformOrigin: "0% 50% -50",
          ease: Back.easeOut
        }, 0.01, '+' + delay)
      .staggerFrom(slide5Txt2Split.lines, 0.6,
        {
          autoAlpha: 0,
          x: '+=100',
          ease: Back.easeOut
        }, 0.15, '-=0.6')
      .from(slide5Hand2, 0.8,
        {
          autoAlpha: 0,
          x: '+=200',
          y: '+=50',
          ease: Power2.easeOut
        }, '-=0.6');
  }
}

function handleSlide6Animation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  if (hide) {
    slide6TL.clear().time(0);
    slide6TxtSplit.revert();
    slide6TxtSplit = slide6TxtSplit.split({type: 'lines'});
    TweenMax.staggerTo(slide6Polygon, 0.5,
      {
        autoAlpha: 0,
        scale: 0,
        ease: Back.easeIn
      }, 0.1);
    TweenMax.staggerTo(slide6TxtSplit.lines, 0.5,
      {
        autoAlpha: 0,
        y: '-=50',
        ease: Back.easeIn,
        delay: 0.1
      }, 0.1);
    setTimeout(function () {
      $('.slide-6 .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.slide-6 .group-text').css('visibility', 'visible');
    $('.content .slide-6').addClass('active');
    TweenMax.set(slide6Polygon, {autoAlpha: 1, scale: 1});
    slide6TxtSplit = slide6TxtSplit.split({type: 'lines'});
    slide6TL
      .staggerFrom(slide6Polygon, 0.7,
        {
          autoAlpha: 0,
          scale: 0,
          ease: Back.easeOut
        }, 0.35, '+' + delay)
      .staggerFrom(slide6TxtSplit.lines, 0.6,
        {
          autoAlpha: 0,
          y: '+=50',
          ease: Back.easeOut
        }, 0.15, '-=0.7');
  }
}

function handleSlide7Animation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  if (hide) {
    slide7TL.clear().time(0);
    slide7Txt1Split.revert();
    slide7Txt2Split.revert();
    slide7Txt1Split = slide7Txt1Split.split({type: 'lines'});
    slide7Txt2Split = slide7Txt2Split.split({type: 'lines'});
    TweenMax.staggerTo(slide7Txt1Split.lines, 0.5,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeIn
      }, 0.1);
    TweenMax.staggerTo(slide7Txt2Split.lines, 0.5,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeIn,
        delay: 0.1
      }, 0.1);
    TweenMax.to(slide7Polygon, 0.6,
      {
        autoAlpha: 0,
        scale: 0,
        transformOrigin: 'right bottom',
        ease: Power3.easeIn
      });
    setTimeout(function () {
      $('.slide-7 .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.slide-7 .group-text').css('visibility', 'visible');
    $('.content .slide-7').addClass('active');
    TweenMax.set(slide7Polygon, {autoAlpha: 1, scale: 1});
    slide7Txt1Split = slide7Txt1Split.split({type: 'chars'});
    slide7Txt2Split = slide7Txt2Split.split({type: 'lines'});
    slide7TL
      .staggerFrom(slide7Txt1Split.chars, 0.8,
        {
          autoAlpha: 0,
          scale: 0,
          y: 80,
          rotationX: 180,
          transformOrigin: "0% 50% -50",
          ease: Back.easeOut
        }, 0.01, '+' + delay)
      .staggerFrom(slide7Txt2Split.lines, 0.6,
        {
          autoAlpha: 0,
          x: '+=100',
          ease: Back.easeOut
        }, 0.15, '-=0.6')
      .from(slide7Polygon, 0.7,
        {
          autoAlpha: 0,
          scale: 0,
          transformOrigin: 'right bottom',
          ease: Power2.easeOut
        }, '-=0.8');
  }
}

function handleSlide72Animation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  if (hide) {
    slide72TL.clear().time(0);
    slide72Txt1Split.revert();
    slide72Txt2Split.revert();
    slide72Txt1Split = slide72Txt1Split.split({type: 'lines'});
    slide72Txt2Split = slide72Txt2Split.split({type: 'lines'});
    TweenMax.staggerTo(slide72Txt1Split.lines, 0.5,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeIn
      }, 0.1);
    TweenMax.staggerTo(slide72Txt2Split.lines, 0.5,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeIn,
        delay: 0.1
      }, 0.1);
    TweenMax.to(slide72Polygon, 0.6,
      {
        autoAlpha: 0,
        scale: 0,
        transformOrigin: 'right bottom',
        ease: Power3.easeIn
      });
    setTimeout(function () {
      $('.slide-72 .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.slide-72 .group-text').css('visibility', 'visible');
    $('.content .slide-72').addClass('active');
    TweenMax.set(slide72Polygon, {autoAlpha: 1, scale: 1});
    slide72Txt1Split = slide72Txt1Split.split({type: 'chars'});
    slide72Txt2Split = slide72Txt2Split.split({type: 'lines'});
    slide7TL
      .staggerFrom(slide72Txt1Split.chars, 0.8,
        {
          autoAlpha: 0,
          scale: 0,
          y: 80,
          rotationX: 180,
          transformOrigin: "0% 50% -50",
          ease: Back.easeOut
        }, 0.01, '+' + delay)
      .staggerFrom(slide72Txt2Split.lines, 0.6,
        {
          autoAlpha: 0,
          x: '+=100',
          ease: Back.easeOut
        }, 0.15, '-=0.6')
      .from(slide72Polygon, 0.7,
        {
          autoAlpha: 0,
          scale: 0,
          transformOrigin: 'right bottom',
          ease: Power2.easeOut
        }, '-=0.8');
  }
}

function handleSlide8Animation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  if (hide) {
    slide8TL.clear().time(0);
    slide8Txt1Split.revert();
    slide8Txt2Split.revert();
    slide8Txt1Split = slide8Txt1Split.split({type: 'lines'});
    slide8Txt2Split = slide8Txt2Split.split({type: 'lines'});
    TweenMax.staggerTo(slide8Txt1Split.lines, 0.5,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeIn
      }, 0.1);
    TweenMax.staggerTo(slide8Txt2Split.lines, 0.5,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeIn,
        delay: 0.1
      }, 0.1);
    TweenMax.to(slide8Img, 0.8,
      {
        autoAlpha: 0,
        x: '-=100',
        ease: Power3.easeIn
      });
    setTimeout(function () {
      $('.slide-8 .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.slide-8 .group-text').css('visibility', 'visible');
    $('.content .slide-8').addClass('active');
    TweenMax.set(slide8Img, {autoAlpha: 1, x: 0});
    slide8Txt1Split = slide8Txt1Split.split({type: 'chars'});
    slide8Txt2Split = slide8Txt2Split.split({type: 'lines'});
    slide8TL
      .staggerFrom(slide8Txt1Split.chars, 0.8,
        {
          autoAlpha: 0,
          scale: 0,
          y: 80,
          rotationX: 180,
          transformOrigin: "0% 50% -50",
          ease: Back.easeOut
        }, 0.01, '+' + delay)
      .staggerFrom(slide8Txt2Split.lines, 0.6,
        {
          autoAlpha: 0,
          x: '+=100',
          ease: Back.easeOut
        }, 0.15, '-=0.6')
      .from(slide8Img, 0.8,
        {
          autoAlpha: 0,
          x: '-=100',
          ease: Power2.easeOut
        }, '-=0.8');
  }
}

function handleSlide9Animation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  if (hide) {
    slide9TL.clear().time(0);
    slide9Txt1Split.revert();
    slide9Txt2Split.revert();
    slide9Txt1Split = slide9Txt1Split.split({type: 'lines'});
    slide9Txt2Split = slide9Txt2Split.split({type: 'lines'});
    TweenMax.staggerTo(slide9Txt1Split.lines, 0.5,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeIn
      }, 0.1);
    TweenMax.staggerTo(slide9Txt2Split.lines, 0.5,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeIn,
        delay: 0.1
      }, 0.1);
    TweenMax.to(logo, 0.5,
      {
        autoAlpha: 0,
        y: '-=50',
        ease: Back.easeIn
      });
    TweenMax.to(slide9Txt3, 0.4,
      {
        autoAlpha: 0,
        scale: 2,
        ease: Back.easeIn,
        delay: 0.3
      });
    setTimeout(function () {
      $('.slide-9 .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.slide-9 .group-text').css('visibility', 'visible');
    $('.content .slide-9').addClass('active');
    TweenMax.set(logo, {autoAlpha: 1, y: 0});
    TweenMax.set(slide9Txt3, {autoAlpha: 1, scale: 1});
    slide9Txt1Split = slide9Txt1Split.split({type: 'chars'});
    slide9Txt2Split = slide9Txt2Split.split({type: 'lines'});
    slide9TL
      .staggerFrom(slide9Txt1Split.chars, 0.8,
        {
          autoAlpha: 0,
          scale: 0,
          y: 80,
          rotationX: 180,
          transformOrigin: "0% 50% -50",
          ease: Back.easeOut
        }, 0.01, '+' + delay)
      .staggerFrom(slide9Txt2Split.lines, 0.6,
        {
          autoAlpha: 0,
          x: '+=100',
          ease: Back.easeOut
        }, 0.15, '-=0.6')
      .from(logo, 0.6,
        {
          autoAlpha: 0,
          y: '-=80',
          ease: Back.easeOut
        }, '-=1.5')
      .from(slide9Txt3, 0.7,
        {
          autoAlpha: 0,
          scale: 2,
          ease: Back.easeOut
        }, '-=0.7');
  }
}

function handleScroll(event) {
  if (completed) {
    completed = false;
    var delta;
    var activeMenu = $('.menu-dots li.active');
    var nextAnchor = activeMenu.next().data('anchor');
    var prevAnchor = activeMenu.prev().data('anchor');
    $('.menu-dots li').removeClass('active');
    if (nextAnchor === undefined) {
      nextAnchor = 'slide-1';
    }
    if (prevAnchor === undefined) {
      prevAnchor = 'slide-9';
    }
    if (event.wheelDelta) {
      delta = event.wheelDelta;
    } else {
      delta = -1 * event.deltaY;
    }
    TweenMax.killAll();
    if (delta < 0) {
      $('.menu-dots li[data-anchor="' + nextAnchor + '"]').addClass('active');
      switch (nextAnchor) {
        case 'slide-1':
          backgroundLoaded('slide-1', function () {
            handleSlide1Animation(false, 1.2);
            setTimeout(function () {
              TweenMax.set($('.content li'), {zIndex: 0});
              defaultZIndex = 1;
              TweenMax.set($('.content .slide-1'), {zIndex: 1});
            }, 1200);
          });
          break;
        case 'slide-2':
          backgroundLoaded('slide-2', function () {
            handleSlide2Animation(false, 1.2);
          });
          break;
        case 'slide-3':
          backgroundLoaded('slide-3', function () {
            handleSlide3Animation(false, 1.2);
          });
          break;
        case 'slide-4':
          backgroundLoaded('slide-4', function () {
            handleSlide4Animation(false, 1.2);
          });
          break;
        case 'slide-5':
          backgroundLoaded('slide-5', function () {
            handleSlide5Animation(false, 1.2);
          });
          break;
        case 'slide-6':
          backgroundLoaded('slide-6', function () {
            handleSlide6Animation(false, 1.2);
          });
          break;
        case 'slide-7':
          backgroundLoaded('slide-7', function () {
            handleSlide7Animation(false, 1.2);
          });
          break;
        case 'slide-72':
          backgroundLoaded('slide-72', function () {
            handleSlide72Animation(false, 1.2);
          });
          break;
        case 'slide-8':
          backgroundLoaded('slide-8', function () {
            handleSlide8Animation(false, 1.2);
          });
          break;
        case 'slide-9':
          backgroundLoaded('slide-9', function () {
            handleSlide9Animation(false, 1.2);
          });
          break;
      }
    } else if (delta > 0) {
      $('.menu-dots li[data-anchor="' + prevAnchor + '"]').addClass('active');
      switch (prevAnchor) {
        case 'slide-1':
          backgroundLoaded('slide-1', function () {
            handleSlide1Animation(false, 1.2);
            setTimeout(function () {
              TweenMax.set($('.content li'), {zIndex: 0});
              defaultZIndex = 1;
              TweenMax.set($('.content .slide-1'), {zIndex: 1});
            }, 1200);
          });
          break;
        case 'slide-2':
          backgroundLoaded('slide-2', function () {
            handleSlide2Animation(false, 1.2);
          });
          break;
        case 'slide-3':
          backgroundLoaded('slide-3', function () {
            handleSlide3Animation(false, 1.2);
          });
          break;
        case 'slide-4':
          backgroundLoaded('slide-4', function () {
            handleSlide4Animation(false, 1.2);
          });
          break;
        case 'slide-5':
          backgroundLoaded('slide-5', function () {
            handleSlide5Animation(false, 1.2);
          });
          break;
        case 'slide-6':
          backgroundLoaded('slide-6', function () {
            handleSlide6Animation(false, 1.2);
          });
          break;
        case 'slide-7':
          backgroundLoaded('slide-7', function () {
            handleSlide7Animation(false, 1.2);
          });
          break;
        case 'slide-72':
          backgroundLoaded('slide-72', function () {
            handleSlide72Animation(false, 1.2);
          });
          break;
        case 'slide-8':
          backgroundLoaded('slide-8', function () {
            handleSlide8Animation(false, 1.2);
          });
          break;
        case 'slide-9':
          backgroundLoaded('slide-9', function () {
            handleSlide9Animation(false, 1.2);
          });
          break;
      }
    }
    setTimeout(function () {
      completed = true;
    }, 2500);
  }
}

function handleMenu() {
  $(document).on('click', '.menu-dots li:not(.active) a', function () {
    TweenMax.killAll();
    var thisParent = $(this).parent();
    $('.menu-dots li').removeClass('active');
    thisParent.addClass('active');
    switch (thisParent.data('anchor')) {
      case 'slide-1':
        backgroundLoaded('slide-1', function () {
          handleSlide1Animation(false, 1.2);
          setTimeout(function () {
            TweenMax.set($('.content li'), {zIndex: 0});
            defaultZIndex = 1;
            TweenMax.set($('.content .slide-1'), {zIndex: 1});
          }, 1200);
        });
        break;
      case 'slide-2':
        backgroundLoaded('slide-2', function () {
          handleSlide2Animation(false, 1.2);
        });
        break;
      case 'slide-3':
        backgroundLoaded('slide-3', function () {
          handleSlide3Animation(false, 1.2);
        });
        break;
      case 'slide-4':
        backgroundLoaded('slide-4', function () {
          handleSlide4Animation(false, 1.2);
        });
        break;
      case 'slide-5':
        backgroundLoaded('slide-5', function () {
          handleSlide5Animation(false, 1.2);
        });
        break;
      case 'slide-6':
        backgroundLoaded('slide-6', function () {
          handleSlide6Animation(false, 1.2);
        });
        break;
      case 'slide-7':
        backgroundLoaded('slide-7', function () {
          handleSlide7Animation(false, 1.2);
        });
        break;
      case 'slide-72':
        backgroundLoaded('slide-72', function () {
          handleSlide72Animation(false, 1.2);
        });
        break;
      case 'slide-8':
        backgroundLoaded('slide-8', function () {
          handleSlide8Animation(false, 1.2);
        });
        break;
      case 'slide-9':
        backgroundLoaded('slide-9', function () {
          handleSlide9Animation(false, 1.2);
        });
        break;
    }
  });
}

function handleMainMenu() {
  $(document).on('click', '.menu li:not(.active) a', function () {
    TweenMax.killAll();
    var thisParent = $(this).parent();
    $('.menu-dots li').removeClass('active');
    $('.menu li').removeClass('active');
    thisParent.addClass('active');
    switch (thisParent.data('anchor')) {
      case 'menu-1':
        backgroundLoaded('slide-2', function () {
          handleSlide2Animation(false, 1.2);
        });
        $('.menu-dots li[data-anchor="slide-2"]').addClass('active');
        break;
      case 'menu-2':
        backgroundLoaded('slide-7', function () {
          handleSlide7Animation(false, 1.2);
        });
        $('.menu-dots li[data-anchor="slide-7"]').addClass('active');
        break;
      case 'menu-3':
        backgroundLoaded('slide-8', function () {
          handleSlide8Animation(false, 1.2);
        });
        $('.menu-dots li[data-anchor="slide-8"]').addClass('active');
        break;
      case 'menu-4':
        backgroundLoaded('slide-9', function () {
          handleSlide9Animation(false, 1.2);
        });
        $('.menu-dots li[data-anchor="slide-9"]').addClass('active');
        break;
    }
  });
}

function handleToHome() {
  $(document).on('click', '.logo a', function () {
    TweenMax.killAll();
    if ($('.content li.active').attr("class").split(" ")[0] === 'slide-1') {
      return false;
    }
    $('.menu-dots li').removeClass('active');
    $('.menu-dots li[data-anchor="slide-1"]').addClass('active');
    backgroundLoaded('slide-1', function () {
      handleSlide1Animation(false, 1.5);
      setTimeout(function () {
        TweenMax.set($('.content li'), {zIndex: 0});
        defaultZIndex = 1;
        TweenMax.set($('.content .slide-1'), {zIndex: 1});
      }, 1200);
    });
  });
}