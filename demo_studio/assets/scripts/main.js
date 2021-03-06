(function ($) {

  "use strict";

  $(document).ready(function () {

    /* =================================
     ===  Load Profolio Items  ====
     =================================== */
    var listImages = {
      'portfolio-1': root + '/images/slide-portfolio-one.jpg',
      'portfolio-2': root + '/images/slide-portfolio-two.jpg',
      'portfolio-3': root + '/images/slide-portfolio-three.jpg',
      'portfolio-4': root + '/images/slide-portfolio-four.jpg',
      'portfolio-5': root + '/images/slide-portfolio-five.jpg',
      'portfolio-6': root + '/images/slide-portfolio-six.jpg'
    };
    $('.list-portfolio .portfolio-item').each(function () {
      var value = $(this).data('value');
      $(this).html('<img src="' + listImages[value] + '" alt="img" />');
    });


    /* =================================
     ===  Handle load background  ====
     =================================== */
    backgroundLoaded('home', function () {
      handleHomeAnimation(false, 0.4);
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
    handleMenu();


    /* =================================
     ===  Handle Scroll  ====
     =================================== */
    document.body.addEventListener('wheel', handleScroll);


    /* =================================
     ===  Portfolio  ====
     =================================== */
    $(this).on('mouseover', '.list-portfolio .portfolio-item', function () {
      $(this).addClass('hover');
    }).on('mouseout', '.list-portfolio .portfolio-item', function () {
      $('.list-portfolio .portfolio-item').removeClass('hover');
    });
    handleListPortfolio();
    handleBackToOverview();


    /* =================================
     ===  Content  ====
     =================================== */
    handleToHome();
    handleToPortfolio();

  });

})(window.jQuery);

var completed = true;
var defaultZIndex = 0;

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
    'home': root + '/images/photography-slide-one.jpg',
    'portfolio': root + '/images/portfolio-slide-two.jpg',
    'portfolio-1': root + '/images/slide-portfolio-one.jpg',
    'portfolio-2': root + '/images/slide-portfolio-two.jpg',
    'portfolio-3': root + '/images/slide-portfolio-three.jpg',
    'portfolio-4': root + '/images/slide-portfolio-four.jpg',
    'portfolio-5': root + '/images/slide-portfolio-five.jpg',
    'portfolio-6': root + '/images/slide-portfolio-six.jpg',
    'about': root + '/images/ABOUT-SLIDE-IMAGE.jpg',
    'contact': root + '/images/CONTACT-SLIDE-IMAGE.jpg'
  };
  if (content.indexOf('portfolio-') >= 0) {
    $('.list-portfolio-mini .portfolio-item').each(function () {
      var value = $(this).data('value');
      $(this).html('<img src="' + listImages[value] + '" alt="img" />');
    });
  }
  if ($('.content .' + content + ' .main-bg').css('background-image') === 'none') {
    var firstLoad = false;
    $('.content .' + content + ' .main-bg').css('background-image', 'url(' + listImages[content] + ')');
    var image = document.createElement('img');
    image.src = getBgUrl(document.getElementById(content + '-bg'));
    image.onload = function () {
      if (content === 'home') {
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
        case 'home':
          handleHomeAnimation(true);
          break;
        case 'portfolio':
          handlePortfolioAnimation(true);
          break;
        case 'portfolio-1':
          handlePortfolio1Animation(true);
          break;
        case 'portfolio-2':
          handlePortfolio2Animation(true);
          break;
        case 'portfolio-3':
          handlePortfolio3Animation(true);
          break;
        case 'portfolio-4':
          handlePortfolio4Animation(true);
          break;
        case 'portfolio-5':
          handlePortfolio5Animation(true);
          break;
        case 'portfolio-6':
          handlePortfolio6Animation(true);
          break;
        case 'about':
          handleAboutAnimation(true);
          break;
        case 'contact':
          handleContactAnimation(true);
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

function handleHomeAnimation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  var homeText1 = $('.home .wrap .gray-text');
  var homeText2 = $('.home .wrap .white-text');
  var homeText3 = $('.home .wrap .primary-text');
  var homeText4 = $('.home .wrap .primary-btn');

  if (hide) {
    TweenMax.fromTo(homeText1, 1,
      {
        scaleY: 1
      }, {
        scaleY: 0,
        ease: Power3.easeIn
      });
    TweenMax.fromTo(homeText2, 1,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(homeText3, 1,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(homeText4, 1,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    setTimeout(function () {
      $('.home .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.home .group-text').css('visibility', 'visible');
    $('.content .home').addClass('active');

    var homeTL = new TimelineMax();
    // var mySplitText = new SplitText(homeText1, {type: "words,chars"});
    // var chars = mySplitText.chars;
    // TweenLite.set(homeText1, {perspective: 400, scaleY: 1});

    homeTL
      // .staggerFrom(chars, 0.8,
      //   {
      //     opacity: 0,
      //     scale: 0,
      //     y: 80,
      //     rotationX: 180,
      //     transformOrigin: "0% 50% -50",
      //     ease: Back.easeOut
      //   }, 0.01, '+' + delay)
      .fromTo(homeText1, 0.8,
        {
          scaleY: 0
        }, {
          scaleY: 1,
          ease: Power4.easeOut
        }, '+' + delay)
      .fromTo(homeText2, 1.2,
        {
          top: '+=150',
          autoAlpha: 0
        }, {
          top: 0,
          autoAlpha: 1,
          ease: Power4.easeOut
        }, '-=1.2')
      .fromTo(homeText3, 1.2,
        {
          top: '+=150',
          autoAlpha: 0
        }, {
          top: 0,
          autoAlpha: 1,
          ease: Power4.easeOut
        }, '-=1')
      .fromTo(homeText4, 1.5,
        {
          top: '+=100'
        }, {
          top: 0,
          ease: Power4.easeOut
        }, '-=1.8');
  }
}

function handlePortfolioAnimation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  var portfolioText1 = $('.portfolio .wrap .size-2');
  var portfolioText2 = $('.portfolio .wrap .size-1');
  var portfolioItemImg = $('.portfolio .portfolio-item img');

  if (hide) {
    TweenMax.fromTo(portfolioText1, 1,
      {
        top: 0
      }, {
        top: '+=150',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolioText2, 1,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolioItemImg, 1,
      {
        y: 0
      }, {
        y: '+=200',
        ease: Power3.easeIn
      });
    setTimeout(function () {
      $('.portfolio .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.portfolio .group-text').css('visibility', 'visible');
    $('.content .portfolio').addClass('active');
    var portfolioTL = new TimelineMax();
    portfolioTL
      .fromTo(portfolioText1, 1.2,
        {
          top: '+=150',
          autoAlpha: 0
        }, {
          top: 0,
          autoAlpha: 1,
          ease: Power4.easeOut
        }, '+' + delay)
      .fromTo(portfolioText2, 1,
        {
          top: '+=100'
        }, {
          top: 0,
          ease: Power4.easeOut
        }, '-=1')
      .staggerFromTo(portfolioItemImg, 0.8,
        {
          y: '+=200',
          autoAlpha: 0
        }, {
          y: 0,
          autoAlpha: 1,
          ease: Power4.easeOut
        }, 0.2, '-=1');
  }
}

function handlePortfolio1Animation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  var portfolio1Text1 = $('.portfolio-1 .wrap .size-2');
  var portfolio1Text2 = $('.portfolio-1 .wrap .size-1');
  var portfolio1Text3 = $('.portfolio-1 .wrap .size-3');
  var portfolio1Text4 = $('.portfolio-1 .wrap .primary-btn');

  if (hide) {
    TweenMax.fromTo(portfolio1Text1, 1,
      {
        top: 0
      }, {
        top: '+=150',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolio1Text2, 1,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolio1Text3, 1,
      {
        xPercent: 0
      }, {
        xPercent: -100,
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolio1Text4, 0.8,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    setTimeout(function () {
      $('.portfolio-1 .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.portfolio-1 .group-text').css('visibility', 'visible');
    $('.content .portfolio-1').addClass('active');
    var portfolio1TL = new TimelineMax();
    portfolio1TL
      .fromTo(portfolio1Text1, 1.2,
        {
          top: '+=150',
          autoAlpha: 0
        }, {
          top: 0,
          autoAlpha: 1,
          ease: Power4.easeOut
        }, '+' + delay)
      .fromTo(portfolio1Text2, 1,
        {
          top: '+=100'
        }, {
          top: 0,
          ease: Power4.easeOut
        }, '-=1')
      .fromTo(portfolio1Text3, 1.5,
        {
          xPercent: -100
        }, {
          xPercent: 0,
          ease: Power4.easeOut
        }, '-=.8')
      .fromTo(portfolio1Text4, 1.4,
        {
          top: '+=100'
        }, {
          top: 0,
          ease: Power4.easeOut
        }, '-=2');
  }
}

function handlePortfolio2Animation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  var portfolio2Text1 = $('.portfolio-2 .wrap .size-2');
  var portfolio2Text2 = $('.portfolio-2 .wrap .size-1');
  var portfolio2Text3 = $('.portfolio-2 .wrap .size-3');
  var portfolio2Text4 = $('.portfolio-2 .wrap .primary-btn');

  if (hide) {
    TweenMax.fromTo(portfolio2Text1, 1,
      {
        top: 0
      }, {
        top: '+=150',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolio2Text2, 1,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolio2Text3, 1,
      {
        xPercent: 0
      }, {
        xPercent: -100,
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolio2Text4, 0.8,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    setTimeout(function () {
      $('.portfolio-2 .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.portfolio-2 .group-text').css('visibility', 'visible');
    $('.content .portfolio-2').addClass('active');
    var portfolio2TL = new TimelineMax();
    portfolio2TL
      .fromTo(portfolio2Text1, 1.2,
        {
          top: '+=150',
          autoAlpha: 0
        }, {
          top: 0,
          autoAlpha: 1,
          ease: Power4.easeOut
        }, '+' + delay)
      .fromTo(portfolio2Text2, 1,
        {
          top: '+=100'
        }, {
          top: 0,
          ease: Power4.easeOut
        }, '-=1')
      .fromTo(portfolio2Text3, 1.5,
        {
          xPercent: -100
        }, {
          xPercent: 0,
          ease: Power4.easeOut
        }, '-=.8')
      .fromTo(portfolio2Text4, 1.4,
        {
          top: '+=100'
        }, {
          top: 0,
          ease: Power4.easeOut
        }, '-=2');
  }
}

function handlePortfolio3Animation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  var portfolio3Text1 = $('.portfolio-3 .wrap .size-2');
  var portfolio3Text2 = $('.portfolio-3 .wrap .size-1');
  var portfolio3Text3 = $('.portfolio-3 .wrap .size-3');
  var portfolio3Text4 = $('.portfolio-3 .wrap .primary-btn');

  if (hide) {
    TweenMax.fromTo(portfolio3Text1, 1,
      {
        top: 0
      }, {
        top: '+=150',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolio3Text2, 1,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolio3Text3, 1,
      {
        xPercent: 0
      }, {
        xPercent: -100,
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolio3Text4, 0.8,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    setTimeout(function () {
      $('.portfolio-3 .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.portfolio-3 .group-text').css('visibility', 'visible');
    $('.content .portfolio-3').addClass('active');
    var portfolio3TL = new TimelineMax();
    portfolio3TL
      .fromTo(portfolio3Text1, 1.2,
        {
          top: '+=150',
          autoAlpha: 0
        }, {
          top: 0,
          autoAlpha: 1,
          ease: Power4.easeOut
        }, '+' + delay)
      .fromTo(portfolio3Text2, 1,
        {
          top: '+=100'
        }, {
          top: 0,
          ease: Power4.easeOut
        }, '-=1')
      .fromTo(portfolio3Text3, 1.5,
        {
          xPercent: -100
        }, {
          xPercent: 0,
          ease: Power4.easeOut
        }, '-=.8')
      .fromTo(portfolio3Text4, 1.4,
        {
          top: '+=100'
        }, {
          top: 0,
          ease: Power4.easeOut
        }, '-=2');
  }
}

function handlePortfolio4Animation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  var portfolio4Text1 = $('.portfolio-4 .wrap .size-2');
  var portfolio4Text2 = $('.portfolio-4 .wrap .size-1');
  var portfolio4Text3 = $('.portfolio-4 .wrap .size-3');
  var portfolio4Text4 = $('.portfolio-4 .wrap .primary-btn');

  if (hide) {
    TweenMax.fromTo(portfolio4Text1, 1,
      {
        top: 0
      }, {
        top: '+=150',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolio4Text2, 1,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolio4Text3, 1,
      {
        xPercent: 0
      }, {
        xPercent: -100,
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolio4Text4, 0.8,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    setTimeout(function () {
      $('.portfolio-4 .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.portfolio-4 .group-text').css('visibility', 'visible');
    $('.content .portfolio-4').addClass('active');
    var portfolio4TL = new TimelineMax();
    portfolio4TL
      .fromTo(portfolio4Text1, 1.2,
        {
          top: '+=150',
          autoAlpha: 0
        }, {
          top: 0,
          autoAlpha: 1,
          ease: Power4.easeOut
        }, '+' + delay)
      .fromTo(portfolio4Text2, 1,
        {
          top: '+=100'
        }, {
          top: 0,
          ease: Power4.easeOut
        }, '-=1')
      .fromTo(portfolio4Text3, 1.5,
        {
          xPercent: -100
        }, {
          xPercent: 0,
          ease: Power4.easeOut
        }, '-=.8')
      .fromTo(portfolio4Text4, 1.4,
        {
          top: '+=100'
        }, {
          top: 0,
          ease: Power4.easeOut
        }, '-=2');
  }
}

function handlePortfolio5Animation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  var portfolio5Text1 = $('.portfolio-5 .wrap .size-2');
  var portfolio5Text2 = $('.portfolio-5 .wrap .size-1');
  var portfolio5Text3 = $('.portfolio-5 .wrap .size-3');
  var portfolio5Text4 = $('.portfolio-5 .wrap .primary-btn');

  if (hide) {
    TweenMax.fromTo(portfolio5Text1, 1,
      {
        top: 0
      }, {
        top: '+=150',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolio5Text2, 1,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolio5Text3, 1,
      {
        xPercent: 0
      }, {
        xPercent: -100,
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolio5Text4, 0.8,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    setTimeout(function () {
      $('.portfolio-5 .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.portfolio-5 .group-text').css('visibility', 'visible');
    $('.content .portfolio-5').addClass('active');
    var portfolio5TL = new TimelineMax();
    portfolio5TL
      .fromTo(portfolio5Text1, 1.2,
        {
          top: '+=150',
          autoAlpha: 0
        }, {
          top: 0,
          autoAlpha: 1,
          ease: Power4.easeOut
        }, '+' + delay)
      .fromTo(portfolio5Text2, 1,
        {
          top: '+=100'
        }, {
          top: 0,
          ease: Power4.easeOut
        }, '-=1')
      .fromTo(portfolio5Text3, 1.5,
        {
          xPercent: -100
        }, {
          xPercent: 0,
          ease: Power4.easeOut
        }, '-=.8')
      .fromTo(portfolio5Text4, 1.4,
        {
          top: '+=100'
        }, {
          top: 0,
          ease: Power4.easeOut
        }, '-=2');
  }
}

function handlePortfolio6Animation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  var portfolio6Text1 = $('.portfolio-6 .wrap .size-2');
  var portfolio6Text2 = $('.portfolio-6 .wrap .size-1');
  var portfolio6Text3 = $('.portfolio-6 .wrap .size-3');
  var portfolio6Text4 = $('.portfolio-6 .wrap .primary-btn');

  if (hide) {
    TweenMax.fromTo(portfolio6Text1, 1,
      {
        top: 0
      }, {
        top: '+=150',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolio6Text2, 1,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolio6Text3, 1,
      {
        yPercent: 0
      }, {
        yPercent: -100,
        ease: Power3.easeIn
      });
    TweenMax.fromTo(portfolio6Text4, 0.8,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    setTimeout(function () {
      $('.portfolio-6 .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.portfolio-6 .group-text').css('visibility', 'visible');
    $('.content .portfolio-6').addClass('active');
    var portfolio6TL = new TimelineMax();
    portfolio6TL
      .fromTo(portfolio6Text1, 1.2,
        {
          top: '+=150',
          autoAlpha: 0
        }, {
          top: 0,
          autoAlpha: 1,
          ease: Power4.easeOut
        }, '+' + delay)
      .fromTo(portfolio6Text2, 1,
        {
          top: '+=100'
        }, {
          top: 0,
          ease: Power4.easeOut
        }, '-=1')
      .fromTo(portfolio6Text3, 1.5,
        {
          yPercent: -100
        }, {
          yPercent: 0,
          ease: Power4.easeOut
        }, '-=.8')
      .fromTo(portfolio6Text4, 1.4,
        {
          top: '+=100'
        }, {
          top: 0,
          ease: Power4.easeOut
        }, '-=2');
  }
}

function handleAboutAnimation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  var aboutText1 = $('.about .wrap .text-1');
  var aboutText2 = $('.about .wrap .text-2');
  var aboutText3 = $('.about .wrap .text-3');
  var aboutText4 = $('.about .wrap .text-4');
  var aboutText5 = $('.about .wrap .primary-btn');

  if (hide) {
    TweenMax.fromTo(aboutText1, 1,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(aboutText2, 1,
      {
        top: 0
      }, {
        top: '+=150',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(aboutText3, 1,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(aboutText4, 1,
      {
        xPercent: 0
      }, {
        xPercent: -100,
        ease: Power3.easeIn
      });
    TweenMax.fromTo(aboutText5, 0.8,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    setTimeout(function () {
      $('.about .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.about .group-text').css('visibility', 'visible');
    $('.content .about').addClass('active');
    var aboutTL = new TimelineMax();
    aboutTL
      .fromTo(aboutText1, 1,
        {
          top: '+=100'
        }, {
          top: 0,
          ease: Power4.easeOut
        }, '+' + delay)
      .fromTo(aboutText2, 1.2,
        {
          top: '+=150',
          autoAlpha: 0
        }, {
          top: 0,
          autoAlpha: 1,
          ease: Power4.easeOut
        }, '-=.8')
      .fromTo(aboutText3, 1,
        {
          top: '+=100'
        }, {
          top: 0,
          ease: Power4.easeOut
        }, '-=1')
      .fromTo(aboutText4, 1.5,
        {
          xPercent: -100
        }, {
          xPercent: 0,
          ease: Power4.easeOut
        }, '-=.8')
      .fromTo(aboutText5, 1.4,
        {
          top: '+=100'
        }, {
          top: 0,
          ease: Power4.easeOut
        }, '-=2');
  }
}

function handleContactAnimation(hide, delay) {
  hide = hide || false;
  delay = delay || 0;
  var contactText1 = $('.contact .wrap .size-1');
  var contactText2 = $('.contact .wrap .size-2');
  var contactText3 = $('.contact .wrap .size-3');
  var contactInfoItem = $('.contact .info li');

  if (hide) {
    TweenMax.fromTo(contactText1, 1,
      {
        top: 0
      }, {
        top: '+=100',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(contactText2, 1,
      {
        top: 0
      }, {
        top: '+=150',
        ease: Power3.easeIn
      });
    TweenMax.fromTo(contactText3, 1,
      {
        xPercent: 0
      }, {
        xPercent: -100,
        ease: Power3.easeIn
      });
    TweenMax.fromTo(contactInfoItem, 1,
      {
        xPercent: 0
      }, {
        xPercent: -100,
        ease: Power3.easeIn
      });
    setTimeout(function () {
      $('.contact .group-text').css('visibility', 'hidden');
    }, 1200);
  } else {
    $('.contact .group-text').css('visibility', 'visible');
    $('.content .contact').addClass('active');
    TweenMax.set(contactInfoItem, {xPercent: 0});
    var contactTL = new TimelineMax();
    contactTL
      .fromTo(contactText1, 1,
        {
          top: '+=100'
        }, {
          top: 0,
          ease: Power4.easeOut
        }, '+' + delay)
      .fromTo(contactText2, 1.2,
        {
          top: '+=150',
          autoAlpha: 0
        }, {
          top: 0,
          autoAlpha: 1,
          ease: Power4.easeOut
        }, '-=.8')
      .fromTo(contactText3, 1.5,
        {
          autoAlpha: 0,
          xPercent: -100
        }, {
          autoAlpha: 1,
          xPercent: 0,
          ease: Power4.easeOut
        }, '-=.8')
      .staggerFromTo(contactInfoItem, 0.8,
        {
          x: '+=100',
          autoAlpha: 0
        }, {
          x: 0,
          autoAlpha: 1,
          ease: Power4.easeOut
        }, 0.2, '-=1.5');
  }
}

function handlePortfolioMini(hide) {
  hide = hide || false;
  var portfolioMini = $('.list-portfolio-mini');
  var portfolioMiniImg = $('.list-portfolio-mini .portfolio-item img');
  if (hide) {
    TweenMax.to(portfolioMini, 1,
      {
        autoAlpha: 0,
        ease: Power3.easeIn
      });
  } else {
    var portfolioMiniTL = new TimelineMax();
    portfolioMiniTL
      .fromTo(portfolioMini, 1,
        {
          autoAlpha: 0,
          scaleY: 0.5
        }, {
          autoAlpha: 1,
          scaleY: 1,
          ease: Power4.easeOut
        }, '+1.2')
      .staggerFromTo(portfolioMiniImg, 0.6,
        {
          y: '+=50',
          autoAlpha: 0
        }, {
          y: 0,
          autoAlpha: 1,
          ease: Power4.easeOut
        }, 0.1, '-=.8');
  }
}

function handleScroll(event) {
  if (completed) {
    completed = false;
    var delta;
    var activeMenu = $('.menu li.active');
    var currentAnchor = activeMenu.data('anchor');
    var nextAnchor = activeMenu.next().data('anchor');
    var prevAnchor = activeMenu.prev().data('anchor');
    var portfolioMenu = $('.menu li[data-anchor="portfolio"]');
    var portfolioId = parseInt(portfolioMenu.attr('data-details'));
    $('.menu li').removeClass('active');
    if (nextAnchor === undefined) {
      nextAnchor = 'home';
    }
    if (prevAnchor === undefined) {
      prevAnchor = 'contact';
    }
    if (event.wheelDelta) {
      delta = event.wheelDelta;
    } else {
      delta = -1 * event.deltaY;
    }
    TweenMax.killAll();
    if (delta < 0) {
      if (currentAnchor === 'portfolio') {
        var nextPortfolio = 'portfolio-' + ++portfolioId;
        if ($('.content .' + nextPortfolio).length) {
          nextAnchor = nextPortfolio;
          portfolioMenu.attr('data-details', portfolioId).addClass('active');
        } else {
          $('.menu li[data-anchor="' + nextAnchor + '"]').addClass('active');
        }
      } else {
        $('.menu li[data-anchor="' + nextAnchor + '"]').addClass('active');
      }
      switch (nextAnchor) {
        case 'home':
          backgroundLoaded('home', function () {
            handleHomeAnimation(false, 1.5);
            setTimeout(function () {
              TweenMax.set($('.content li'), {zIndex: 0});
              defaultZIndex = 1;
              TweenMax.set($('.content .home'), {zIndex: 1});
            }, 1200);
          });
          break;
        case 'portfolio':
          backgroundLoaded('portfolio', function () {
            handlePortfolioAnimation(false, 1.2);
            $('.menu li[data-anchor="portfolio"]').attr('data-details', 0);
          });
          break;
        case 'portfolio-1':
          backgroundLoaded('portfolio-1', function () {
            handlePortfolio1Animation(false, 1.2);
            handlePortfolioMini();
          });
          break;
        case 'portfolio-2':
          backgroundLoaded('portfolio-2', function () {
            handlePortfolio2Animation(false, 1.2);
          });
          break;
        case 'portfolio-3':
          backgroundLoaded('portfolio-3', function () {
            handlePortfolio3Animation(false, 1.2);
          });
          break;
        case 'portfolio-4':
          backgroundLoaded('portfolio-4', function () {
            handlePortfolio4Animation(false, 1.2);
          });
          break;
        case 'portfolio-5':
          backgroundLoaded('portfolio-5', function () {
            handlePortfolio5Animation(false, 1.2);
          });
          break;
        case 'portfolio-6':
          backgroundLoaded('portfolio-6', function () {
            handlePortfolio6Animation(false, 1.2);
          });
          break;
        case 'about':
          backgroundLoaded('about', function () {
            handleAboutAnimation(false, 1);
            handlePortfolioMini(true);
          });
          break;
        case 'contact':
          backgroundLoaded('contact', function () {
            handleContactAnimation(false, 0.5);
          });
          break;
      }
    } else if (delta > 0) {
      if (prevAnchor === 'portfolio') {
        prevAnchor = 'portfolio-' + portfolioId;
        portfolioMenu.addClass('active');
      }
      if (currentAnchor === 'portfolio') {
        if (portfolioId === 0) {
          $('.menu li[data-anchor="' + prevAnchor + '"]').addClass('active');
        } else {
          if (portfolioId - 1 === 0) {
            prevAnchor = 'portfolio';
            portfolioMenu.attr('data-details', 0).addClass('active');
          } else {
            var prevPortfolio = 'portfolio-' + --portfolioId;
            prevAnchor = prevPortfolio;
            portfolioMenu.attr('data-details', portfolioId).addClass('active');
          }
        }
      } else {
        $('.menu li[data-anchor="' + prevAnchor + '"]').addClass('active');
      }
      switch (prevAnchor) {
        case 'home':
          backgroundLoaded('home', function () {
            handleHomeAnimation(false, 1.5);
            setTimeout(function () {
              TweenMax.set($('.content li'), {zIndex: 0});
              defaultZIndex = 1;
              TweenMax.set($('.content .home'), {zIndex: 1});
            }, 1200);
          });
          break;
        case 'portfolio':
          backgroundLoaded('portfolio', function () {
            handlePortfolioAnimation(false, 0.8);
            handlePortfolioMini(true);
          });
          break;
        case 'portfolio-1':
          backgroundLoaded('portfolio-1', function () {
            handlePortfolio1Animation(false, 0.8);
          });
          break;
        case 'portfolio-2':
          backgroundLoaded('portfolio-2', function () {
            handlePortfolio2Animation(false, 0.8);
          });
          break;
        case 'portfolio-3':
          backgroundLoaded('portfolio-3', function () {
            handlePortfolio3Animation(false, 0.8);
          });
          break;
        case 'portfolio-4':
          backgroundLoaded('portfolio-4', function () {
            handlePortfolio4Animation(false, 0.8);
          });
          break;
        case 'portfolio-5':
          backgroundLoaded('portfolio-5', function () {
            handlePortfolio5Animation(false, 0.8);
          });
          break;
        case 'portfolio-6':
          backgroundLoaded('portfolio-6', function () {
            handlePortfolio6Animation(false, 0.8);
            handlePortfolioMini();
          });
          break;
        case 'about':
          backgroundLoaded('about', function () {
            handleAboutAnimation(false, 0.8);
            $('.menu li[data-anchor="portfolio"]').attr('data-details', 6);
          });
          break;
        case 'contact':
          backgroundLoaded('contact', function () {
            handleContactAnimation(false, 0.5);
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
  $(document).on('click', '.menu li:not(.active) a', function () {
    TweenMax.killAll();
    var thisParent = $(this).parent();
    $('.menu li').removeClass('active');
    thisParent.addClass('active');
    switch (thisParent.data('anchor')) {
      case 'home':
        backgroundLoaded('home', function () {
          handleHomeAnimation(false, 1.5);
          handlePortfolioMini(true);
          setTimeout(function () {
            TweenMax.set($('.content li'), {zIndex: 0});
            defaultZIndex = 1;
            TweenMax.set($('.content .home'), {zIndex: 1});
          }, 1200);
        });
        break;
      case 'portfolio':
        backgroundLoaded('portfolio', function () {
          handlePortfolioAnimation(false, 1.2);
          $('.menu li[data-anchor="portfolio"]').attr('data-details', 0);
        });
        break;
      case 'about':
        backgroundLoaded('about', function () {
          handleAboutAnimation(false, 1);
          handlePortfolioMini(true);
          $('.menu li[data-anchor="portfolio"]').attr('data-details', 6);
        });
        break;
      case 'contact':
        backgroundLoaded('contact', function () {
          handleContactAnimation(false, 0.5);
          handlePortfolioMini(true);
        });
        break;
    }
  });
}

function handleListPortfolio() {
  $(document).on('click', '.list-portfolio .portfolio-item, .list-portfolio-mini .portfolio-item', function () {
    TweenMax.killAll();
    var anchor = $(this).data('value');
    switch (anchor) {
      case 'portfolio-1':
        backgroundLoaded('portfolio-1', function () {
          handlePortfolio1Animation(false, 1.2);
          $('.menu li[data-anchor="portfolio"]').attr('data-details', 1);
        });
        break;
      case 'portfolio-2':
        backgroundLoaded('portfolio-2', function () {
          handlePortfolio2Animation(false, 1.2);
          $('.menu li[data-anchor="portfolio"]').attr('data-details', 2);
        });
        break;
      case 'portfolio-3':
        backgroundLoaded('portfolio-3', function () {
          handlePortfolio3Animation(false, 1.2);
          $('.menu li[data-anchor="portfolio"]').attr('data-details', 3);
        });
        break;
      case 'portfolio-4':
        backgroundLoaded('portfolio-4', function () {
          handlePortfolio4Animation(false, 1.2);
          $('.menu li[data-anchor="portfolio"]').attr('data-details', 4);
        });
        break;
      case 'portfolio-5':
        backgroundLoaded('portfolio-5', function () {
          handlePortfolio5Animation(false, 1.2);
          $('.menu li[data-anchor="portfolio"]').attr('data-details', 5);
        });
        break;
      case 'portfolio-6':
        backgroundLoaded('portfolio-6', function () {
          handlePortfolio6Animation(false, 1.2);
          $('.menu li[data-anchor="portfolio"]').attr('data-details', 6);
        });
        break;
    }
    if ($('.list-portfolio-mini').css('visibility') == 'hidden') {
      handlePortfolioMini();
    }
  });
}

function handleToPortfolio() {
  $(document).on('click', '.to-portfolio', function () {
    TweenMax.killAll();
    $('.menu li').removeClass('active');
    $('.menu li[data-anchor="portfolio"]').addClass('active');
    backgroundLoaded('portfolio', function () {
      handlePortfolioAnimation(false, 1.2);
      $('.menu li[data-anchor="portfolio"]').attr('data-details', 0);
    });
  });
}

function handleBackToOverview() {
  $(document).on('click', '.back-to-overview', function () {
    TweenMax.killAll();
    backgroundLoaded('portfolio', function () {
      handlePortfolioAnimation(false, 1.2);
      handlePortfolioMini(true);
      $('.menu li[data-anchor="portfolio"]').attr('data-details', 0);
    });
  });
}

function handleToHome() {
  $(document).on('click', '.logo a', function () {
    TweenMax.killAll();
    if ($('.content li.active').attr("class").split(" ")[0] === 'home') {
      return false;
    }
    $('.menu li').removeClass('active');
    $('.menu li[data-anchor="home"]').addClass('active');
    backgroundLoaded('home', function () {
      handleHomeAnimation(false, 1.5);
      handlePortfolioMini(true);
      setTimeout(function () {
        TweenMax.set($('.content li'), {zIndex: 0});
        defaultZIndex = 1;
        TweenMax.set($('.content .home'), {zIndex: 1});
      }, 1200);
    });
  });
}