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
    $('body').css('opacity', 1);
  });

  $(document).ready(function () {

    /* =================================
     ===  Animation with GSAP and ScrollMagic  ====
     =================================== */
    CSSPlugin.defaultTransformPerspective = 800;
    var ctrl = new ScrollMagic.Controller({
      globalSceneOptions: {
        duration: '100%'
      }
    });

    $(window).on('load', function () {
      if (Modernizr.mq('(min-width: 480px)')) {
        desktopVersion(ctrl);
      }
      if (Modernizr.mq('(max-width: 479px)')) {
        mobileVersion(ctrl);
      }
    });

  });

})(window.jQuery);

function desktopVersion(ctrl) {
  var heroSectionTL = new TimelineMax({
      paused: true,
      yoyo: true
    }),
    populationSectionTL = new TimelineMax({
      yoyo: true
    }),
    fieldWorkSectionTL = new TimelineMax({
      yoyo: true
    }),
    currentPlaceSectionTL = new TimelineMax({
      yoyo: true
    }),
    buyReasonSectionContent1TL = new TimelineMax({
      yoyo: true
    }),
    buyReasonSectionContent2TL = new TimelineMax({
      yoyo: true
    }),
    chooseReasonSectionContent1TL = new TimelineMax({
      yoyo: true
    }),
    chooseReasonSectionContent2TL = new TimelineMax({
      yoyo: true
    }),
    chooseReasonSectionContent3TL = new TimelineMax({
      yoyo: true
    });

  heroSectionAnimation(heroSectionTL);
  populationSectionAnimation(populationSectionTL);
  fieldWorkSectionAnimation(fieldWorkSectionTL);
  currentPlaceSectionAnimation(currentPlaceSectionTL);
  buyReasonSectionContent1Animation(buyReasonSectionContent1TL);
  buyReasonSectionContent2Animation(buyReasonSectionContent2TL);
  chooseReasonSectionContent1Animation(chooseReasonSectionContent1TL);
  chooseReasonSectionContent2Animation(chooseReasonSectionContent2TL);
  chooseReasonSectionContent3Animation(chooseReasonSectionContent3TL);

  $('.hero-section').waypoint({
    handler: function (direction) {
      if (direction === 'up') {
        heroSectionTL.restart();
      }
    }
  });
  new ScrollMagic.Scene({
    triggerElement: $('.population-section')[0],
    triggerHook: 0.6
  })
    .setTween(populationSectionTL)
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: $('.field-work-section')[0],
    triggerHook: 0.6
  })
    .setTween(fieldWorkSectionTL)
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: $('.current-place-section')[0],
    triggerHook: 0.7
  })
    .setTween(currentPlaceSectionTL)
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: $('.buy-reason-section .content-1')[0],
    triggerHook: 1
  })
    .setTween(buyReasonSectionContent1TL)
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: $('.buy-reason-section .content-2')[0],
    triggerHook: 1
  })
    .setTween(buyReasonSectionContent2TL)
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: $('.choose-reason-section .content-1')[0],
    triggerHook: 0.8
  })
    .setTween(chooseReasonSectionContent1TL)
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: $('.choose-reason-section .content-2')[0],
    triggerHook: 0.9
  })
    .setTween(chooseReasonSectionContent2TL)
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: $('.choose-reason-section .content-3')[0],
    triggerHook: 1
  })
    .setTween(chooseReasonSectionContent3TL)
    .addTo(ctrl);

  setTimeout(function () {
    heroSectionTL.play();
  }, 1000);
}

function mobileVersion(ctrl) {
  var heroSectionTL = new TimelineMax({
      paused: true,
      yoyo: true
    }),
    populationSectionTL = new TimelineMax({
      yoyo: true
    }),
    fieldWorkSectionTL = new TimelineMax({
      yoyo: true
    }),
    currentPlaceSectionTL = new TimelineMax({
      yoyo: true
    }),
    currentPlaceSectionTxtTL = new TimelineMax({
      yoyo: true
    }),
    buyReasonSectionContent1TL = new TimelineMax({
      yoyo: true
    }),
    buyReasonSectionContent2TL = new TimelineMax({
      yoyo: true
    }),
    chooseReasonSectionContent1TL = new TimelineMax({
      yoyo: true
    }),
    chooseReasonSectionContent2TL = new TimelineMax({
      yoyo: true
    }),
    chooseReasonSectionContent3TL = new TimelineMax({
      yoyo: true
    });

  heroSectionAnimation(heroSectionTL);
  populationSectionAnimationMobile(populationSectionTL);
  fieldWorkSectionAnimationMobile(fieldWorkSectionTL);
  currentPlaceSectionAnimationMobile(currentPlaceSectionTL);
  buyReasonSectionContent1AnimationMobile(buyReasonSectionContent1TL);
  buyReasonSectionContent2AnimationMobile(buyReasonSectionContent2TL);
  chooseReasonSectionContent1AnimationMobile(chooseReasonSectionContent1TL);
  chooseReasonSectionContent2AnimationMobile(chooseReasonSectionContent2TL);
  chooseReasonSectionContent3AnimationMobile(chooseReasonSectionContent3TL);

  new ScrollMagic.Scene({
    triggerElement: $('.population-section')[0],
    triggerHook: 0.8
  })
    .setTween(populationSectionTL)
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: $('.field-work-section')[0],
    triggerHook: 0.8
  })
    .setTween(fieldWorkSectionTL)
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: $('.current-place-section')[0],
    triggerHook: 0.6
  })
    .setTween(currentPlaceSectionTL)
    .addTo(ctrl);
  var $currentPlaceSection_percentTxt3 = $('.current-place-section .percent-txt-3'),
    $currentPlaceSection_percentTxt4 = $('.current-place-section .percent-txt-4');
  currentPlaceSectionTxtTL
    .fromTo($currentPlaceSection_percentTxt4, 0.8,
      {
        x: '+=100',
        autoAlpha: 0
      },
      {
        x: 0,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, '-=1.5')
    .fromTo($currentPlaceSection_percentTxt3, 0.8,
      {
        x: '-=100',
        autoAlpha: 0
      },
      {
        x: 0,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, '-=1.2');
  new ScrollMagic.Scene({
    triggerElement: $('.current-place-section .percent-txt-4')[0],
    triggerHook: 1
  })
    .setTween(currentPlaceSectionTxtTL)
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: $('.buy-reason-section .content-1')[0],
    triggerHook: 1
  })
    .setTween(buyReasonSectionContent1TL)
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: $('.buy-reason-section .content-2')[0],
    triggerHook: 0.8
  })
    .setTween(buyReasonSectionContent2TL)
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: $('.choose-reason-section .content-1')[0],
    triggerHook: 0.9
  })
    .setTween(chooseReasonSectionContent1TL)
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: $('.choose-reason-section .content-2')[0],
    triggerHook: 0.8
  })
    .setTween(chooseReasonSectionContent2TL)
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: $('.choose-reason-section .content-3')[0],
    triggerHook: 1
  })
    .setTween(chooseReasonSectionContent3TL)
    .addTo(ctrl);

  $('.hero-section').waypoint({
    handler: function (direction) {
      if (direction === 'up') {
        heroSectionTL.restart();
      }
    }
  });

  setTimeout(function () {
    heroSectionTL.play();
  }, 1000);
}

function heroSectionAnimation(heroSectionTL) {
  var $heroSection_Txt1 = $('.hero-section .txt-1'),
    $heroSection_Txt2 = $('.hero-section .txt-2'),
    $heroSection_Txt3 = $('.hero-section .txt-3');

  heroSectionTL
    .fromTo($heroSection_Txt1, 1,
      {
        rotationX: -720,
        scale: 0,
        autoAlpha: 0
      }, {
        rotationX: 0,
        scale: 1,
        autoAlpha: 1,
        ease: Power0.easeNone
      })
    .fromTo($heroSection_Txt2, 1,
      {
        x: '-=200',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.5)
      }, '-=0.3')
    .fromTo($heroSection_Txt3, 0.8,
      {
        scale: 2,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power2.easeOut
      }, '-=0.8');
}

function populationSectionAnimation(populationSectionTL) {
  var $populationSection_Caption = $('.population-section .caption'),
    $populationSection_PercentImg = $('.population-section .percent-img'),
    $populationSection_populationPercent_PercentTxt = $('.population-section .population-percent .percent-txt'),
    $populationSection_PercentLabel = $('.population-section .percent-label'),
    $populationSection_populationRange_percentImg3 = $('.population-section .population-range .percent-img-3'),
    $populationSection_populationRange_wrapText = $('.population-section .population-range .wrap-text');

  populationSectionTL
    .fromTo($populationSection_Caption, 1.5,
      {
        x: '-=200',
        skewX: -30,
        autoAlpha: 0
      }, {
        x: 0,
        skewX: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.5)
      })
    .staggerFromTo($populationSection_PercentImg, 1.6,
      {
        rotationY: 180,
        autoAlpha: 0
      },
      {
        rotationY: 0,
        autoAlpha: 1,
        ease: Power4.easeOut
      }, 0.8, '-=0.5')
    .staggerFromTo($populationSection_populationPercent_PercentTxt, 0.8,
      {
        scale: 1.5,
        autoAlpha: 0
      },
      {
        scale: 1,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, 0.4, '-=1.2')
    .staggerFromTo($populationSection_PercentLabel, 1,
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1,
        ease: Power2.easeOut
      }, 0.5, '-=1.2')
    .fromTo($populationSection_populationRange_percentImg3, 0.8,
      {
        rotation: -720,
        scale: 0,
        autoAlpha: 0
      }, {
        rotation: 0,
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, '-=0.8')
    .fromTo($populationSection_populationRange_wrapText, 1,
      {
        skewY: 30,
        x: '+=100',
        autoAlpha: 0
      }, {
        skewY: 0,
        x: 0,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.5');
}

function populationSectionAnimationMobile(populationSectionTL) {
  var $populationSection_Caption = $('.population-section .caption'),
    $populationSection_PercentImg = $('.population-section .percent-img'),
    $populationSection_populationPercent_PercentTxt = $('.population-section .population-percent .percent-txt'),
    $populationSection_PercentLabel = $('.population-section .percent-label'),
    $populationSection_populationRange_percentImg3 = $('.population-section .population-range .percent-img-3'),
    $populationSection_populationRange_wrapText = $('.population-section .population-range .wrap-text');

  populationSectionTL
    .fromTo($populationSection_Caption, 1.5,
      {
        x: '-=100',
        skewX: -30,
        autoAlpha: 0
      }, {
        x: 0,
        skewX: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.5)
      })
    .staggerFromTo($populationSection_PercentImg, 1.6,
      {
        rotationY: 180,
        autoAlpha: 0
      },
      {
        rotationY: 0,
        autoAlpha: 1,
        ease: Power4.easeOut
      }, 0.8, '-=0.5')
    .staggerFromTo($populationSection_populationPercent_PercentTxt, 0.8,
      {
        scale: 1.5,
        autoAlpha: 0
      },
      {
        scale: 1,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, 0.4, '-=1.2')
    .staggerFromTo($populationSection_PercentLabel, 1,
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1,
        ease: Power2.easeOut
      }, 0.5, '-=1.2')
    .fromTo($populationSection_populationRange_percentImg3, 0.8,
      {
        rotation: -720,
        scale: 0,
        autoAlpha: 0
      }, {
        rotation: 0,
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, '-=0.8')
    .fromTo($populationSection_populationRange_wrapText, 1,
      {
        skewY: 30,
        x: '+=100',
        autoAlpha: 0
      }, {
        skewY: 0,
        x: 0,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.5');
}

function fieldWorkSectionAnimation(fieldWorkSectionTL) {
  var $fieldWorkSection_Caption = $('.field-work-section .caption'),
    $fieldWorkSection_wrapChart = $('.field-work-section .wrap-chart'),
    $fieldWorkSection_percentTxt1 = $('.field-work-section .percent-txt-1'),
    $fieldWorkSection_percentTxt2 = $('.field-work-section .percent-txt-2'),
    $fieldWorkSection_percentTxt3 = $('.field-work-section .percent-txt-3'),
    $fieldWorkSection_percentTxt1_detailsBox = $('.field-work-section .percent-txt-1 .details-box');

  fieldWorkSectionTL
    .fromTo($fieldWorkSection_Caption, 1.5,
      {
        x: '-=200',
        skewX: -30,
        autoAlpha: 0
      }, {
        x: 0,
        skewX: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.5)
      })
    .fromTo($fieldWorkSection_wrapChart, 1.5,
      {
        scale: 1.5,
        autoAlpha: 0
      },
      {
        scale: 1,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, '-=0.3')
    .fromTo($fieldWorkSection_percentTxt1, 0.8,
      {
        x: '-=200',
        autoAlpha: 0
      },
      {
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, '-=1')
    .fromTo($fieldWorkSection_percentTxt1_detailsBox, 0.8,
      {
        y: '-=50',
        scale: 0.8,
        autoAlpha: 0
      },
      {
        y: 0,
        scale: 1,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, '-=0.6')
    .fromTo($fieldWorkSection_percentTxt2, 0.8,
      {
        x: '+=200',
        autoAlpha: 0
      },
      {
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, '-=0.6')
    .fromTo($fieldWorkSection_percentTxt3, 0.8,
      {
        x: '-=100',
        y: '+=50',
        autoAlpha: 0
      },
      {
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, '-=0.6');
}

function fieldWorkSectionAnimationMobile(fieldWorkSectionTL) {
  var $fieldWorkSection_Caption = $('.field-work-section .caption'),
    $fieldWorkSection_wrapChart = $('.field-work-section .wrap-chart'),
    $fieldWorkSection_percentTxt1 = $('.field-work-section .percent-txt-1'),
    $fieldWorkSection_percentTxt2 = $('.field-work-section .percent-txt-2'),
    $fieldWorkSection_percentTxt3 = $('.field-work-section .percent-txt-3'),
    $fieldWorkSection_percentTxt1_detailsBox = $('.field-work-section .percent-txt-1 .details-box');

  fieldWorkSectionTL
    .fromTo($fieldWorkSection_Caption, 1.5,
      {
        x: '-=100',
        skewX: -30,
        autoAlpha: 0
      }, {
        x: 0,
        skewX: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.5)
      })
    .fromTo($fieldWorkSection_wrapChart, 1.5,
      {
        scale: 1.5,
        autoAlpha: 0
      },
      {
        scale: 1,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, '-=0.3')
    .fromTo($fieldWorkSection_percentTxt3, 0.8,
      {
        x: '-=100',
        y: '+=50',
        autoAlpha: 0
      },
      {
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, '-=1')
    .fromTo($fieldWorkSection_percentTxt2, 0.8,
      {
        x: '+=200',
        autoAlpha: 0
      },
      {
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, '-=0.6')
    .fromTo($fieldWorkSection_percentTxt1, 0.8,
      {
        x: '-=200',
        autoAlpha: 0
      },
      {
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, '-=0.6')
    .fromTo($fieldWorkSection_percentTxt1_detailsBox, 0.8,
      {
        y: '-=50',
        scale: 0.8,
        autoAlpha: 0
      },
      {
        y: 0,
        scale: 1,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, '-=0.6');
}

function currentPlaceSectionAnimation(currentPlaceSectionTL) {
  var $currentPlaceSection_Caption = $('.current-place-section .caption'),
    $currentPlaceSection_wrapMap = $('.current-place-section .wrap-map'),
    $currentPlaceSection_percentTxt1 = $('.current-place-section .percent-txt-1'),
    $currentPlaceSection_percentTxt2 = $('.current-place-section .percent-txt-2'),
    $currentPlaceSection_percentTxt3 = $('.current-place-section .percent-txt-3'),
    $currentPlaceSection_percentTxt4 = $('.current-place-section .percent-txt-4'),
    $currentPlaceSection_percentTxt5 = $('.current-place-section .percent-txt-5'),
    $currentPlaceSection_percentTxt5_detailsBox = $('.current-place-section .percent-txt-5 .details-box');

  currentPlaceSectionTL
    .fromTo($currentPlaceSection_Caption, 1.5,
      {
        x: '-=200',
        skewX: -30,
        autoAlpha: 0
      }, {
        x: 0,
        skewX: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.5)
      })
    .fromTo($currentPlaceSection_wrapMap, 1.2,
      {
        scale: 0.5,
        autoAlpha: 0
      },
      {
        scale: 1,
        autoAlpha: 1,
        ease: Elastic.easeOut.config(1, 0.75)
      }, '-=0.2')
    .fromTo($currentPlaceSection_percentTxt1, 0.8,
      {
        x: '+=150',
        autoAlpha: 0
      },
      {
        x: 0,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, '-=0.2')
    .fromTo($currentPlaceSection_percentTxt2, 0.8,
      {
        x: '+=150',
        autoAlpha: 0
      },
      {
        x: 0,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, '-=0.2')
    .fromTo($currentPlaceSection_percentTxt5, 0.8,
      {
        x: '+=150',
        autoAlpha: 0
      },
      {
        x: 0,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, '-=0.6')
    .fromTo($currentPlaceSection_percentTxt5_detailsBox, 0.8,
      {
        y: '-=50',
        scale: 0.8,
        autoAlpha: 0
      },
      {
        y: 0,
        scale: 1,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, '-=0.2')
    .fromTo($currentPlaceSection_percentTxt4, 0.8,
      {
        x: '-=150',
        autoAlpha: 0
      },
      {
        x: 0,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, '+=0.2')
    .fromTo($currentPlaceSection_percentTxt3, 0.8,
      {
        x: '-=150',
        autoAlpha: 0
      },
      {
        x: 0,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, '-=0.2');
}

function currentPlaceSectionAnimationMobile(currentPlaceSectionTL) {
  var $currentPlaceSection_Caption = $('.current-place-section .caption'),
    $currentPlaceSection_Mapq1q3 = $('.current-place-section .map-q1q3'),
    $currentPlaceSection_Mapq7 = $('.current-place-section .map-q7'),
    $currentPlaceSection_Mapq = $('.current-place-section .map-q'),
    $currentPlaceSection_percentTxt1 = $('.current-place-section .percent-txt-1'),
    $currentPlaceSection_percentTxt2 = $('.current-place-section .percent-txt-2'),
    $currentPlaceSection_percentTxt5 = $('.current-place-section .percent-txt-5'),
    $currentPlaceSection_percentTxt5_detailsBox = $('.current-place-section .percent-txt-5 .details-box');

  currentPlaceSectionTL
    .fromTo($currentPlaceSection_Caption, 1.5,
      {
        x: '-=100',
        skewX: -30,
        autoAlpha: 0
      }, {
        x: 0,
        skewX: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.5)
      })
    .fromTo($currentPlaceSection_Mapq1q3, 1.5,
      {
        scale: 0.7,
        autoAlpha: 0
      },
      {
        scale: 1,
        autoAlpha: 1,
        ease: Elastic.easeOut.config(1, 0.75)
      })
    .fromTo($currentPlaceSection_percentTxt1, 0.8,
      {
        x: '+=100',
        autoAlpha: 0
      },
      {
        x: 0,
        autoAlpha: 1,
        ease: Sine.easeOut
      })
    .fromTo($currentPlaceSection_percentTxt2, 0.8,
      {
        x: '-=100',
        autoAlpha: 0
      },
      {
        x: 0,
        autoAlpha: 1,
        ease: Sine.easeOut
      })
    .fromTo($currentPlaceSection_Mapq7, 1.5,
      {
        scale: 0.7,
        autoAlpha: 0
      },
      {
        scale: 1,
        autoAlpha: 1,
        ease: Elastic.easeOut.config(1, 0.75)
      })
    .fromTo($currentPlaceSection_percentTxt5, 0.8,
      {
        x: '-=100',
        autoAlpha: 0
      },
      {
        x: 0,
        autoAlpha: 1,
        ease: Sine.easeOut
      })
    .fromTo($currentPlaceSection_percentTxt5_detailsBox, 0.8,
      {
        y: '-=50',
        scale: 0.8,
        autoAlpha: 0
      },
      {
        y: 0,
        scale: 1,
        autoAlpha: 1,
        ease: Sine.easeOut
      })
    .fromTo($currentPlaceSection_Mapq, 1.5,
      {
        scale: 0.7,
        autoAlpha: 0
      },
      {
        scale: 1,
        autoAlpha: 1,
        ease: Elastic.easeOut.config(1, 0.75)
      });
}

function buyReasonSectionContent1Animation(buyReasonSectionContent1TL) {
  var $buyReasonSection_Content1_Caption = $('.buy-reason-section .content-1 .caption'),
    $buyReasonSection_Content1List_Img = $('.buy-reason-section .content-1-list .img'),
    $buyReasonSection_Content1List_WrapText = $('.buy-reason-section .content-1-list .wrap-text');

  buyReasonSectionContent1TL
    .fromTo($buyReasonSection_Content1_Caption, 1.5,
      {
        x: '-=200',
        skewX: -30,
        autoAlpha: 0
      }, {
        x: 0,
        skewX: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.5)
      })
    .staggerFromTo($buyReasonSection_Content1List_Img, 0.6,
      {
        rotation: -360,
        scale: 0,
        autoAlpha: 0
      }, {
        rotation: 0,
        scale: 1,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, 0.3, '-=1.2')
    .staggerFromTo($buyReasonSection_Content1List_WrapText, 0.6,
      {
        x: '+=200',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Sine.easeIn
      }, 0.3, '-=1.2');
}

function buyReasonSectionContent1AnimationMobile(buyReasonSectionContent1TL) {
  var $buyReasonSection_Content1_Caption = $('.buy-reason-section .content-1 .caption'),
    $buyReasonSection_Content1List_Img = $('.buy-reason-section .content-1-list .img'),
    $buyReasonSection_Content1List_WrapText = $('.buy-reason-section .content-1-list .wrap-text');

  buyReasonSectionContent1TL
    .fromTo($buyReasonSection_Content1_Caption, 1.5,
      {
        x: '-=100',
        skewX: -30,
        autoAlpha: 0
      }, {
        x: 0,
        skewX: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.5)
      })
    .staggerFromTo($buyReasonSection_Content1List_Img, 0.6,
      {
        rotation: -360,
        scale: 0,
        autoAlpha: 0
      }, {
        rotation: 0,
        scale: 1,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, 0.3, '-=1.2')
    .staggerFromTo($buyReasonSection_Content1List_WrapText, 0.6,
      {
        x: '+=100',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Sine.easeIn
      }, 0.3, '-=1.2');
}

function buyReasonSectionContent2Animation(buyReasonSectionContent2TL) {
  var $buyReasonSection_Content2_Caption2 = $('.buy-reason-section .content-2 .caption-2'),
    $buyReasonSection_Content2List_Li = $('.buy-reason-section .content-2-list li'),
    $buyReasonSection_Content2Circles_Circle1 = $('.buy-reason-section .content-2-circles .circle-1'),
    $buyReasonSection_Content2Circles_Circle2 = $('.buy-reason-section .content-2-circles .circle-2'),
    $buyReasonSection_Content2Circles_Circle3 = $('.buy-reason-section .content-2-circles .circle-3'),
    $buyReasonSection_Content2Circles_Circle4 = $('.buy-reason-section .content-2-circles .circle-4');


  buyReasonSectionContent2TL
    .fromTo($buyReasonSection_Content2_Caption2, 1.5,
      {
        y: '-=150',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Power2.easeOut
      }, '+0.2')
    .staggerFromTo($buyReasonSection_Content2List_Li, 1,
      {
        x: '+=200',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, 0.2, '-=1')
    .fromTo($buyReasonSection_Content2Circles_Circle1, 0.4,
      {
        rotation: -360,
        scale: 0,
        autoAlpha: 0
      }, {
        rotation: 0,
        scale: 1,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, '-=1.8')
    .fromTo($buyReasonSection_Content2Circles_Circle2, 0.8,
      {
        rotation: -360,
        scale: 0,
        autoAlpha: 0
      }, {
        rotation: 0,
        scale: 1,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, '-=1.6')
    .fromTo($buyReasonSection_Content2Circles_Circle3, 0.4,
      {
        rotation: -360,
        scale: 0,
        autoAlpha: 0
      }, {
        rotation: 0,
        scale: 1,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, '-=1.2')
    .fromTo($buyReasonSection_Content2Circles_Circle4, 0.6,
      {
        scale: 2,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Bounce.easeOut
      }, '-=0.8');
}

function buyReasonSectionContent2AnimationMobile(buyReasonSectionContent2TL) {
  var $buyReasonSection_Content2_Caption2 = $('.buy-reason-section .content-2 .caption-2'),
    $buyReasonSection_Content2List_Li = $('.buy-reason-section .content-2-list li'),
    $buyReasonSection_Content2Circles_Circle1 = $('.buy-reason-section .content-2-circles .circle-1'),
    $buyReasonSection_Content2Circles_Circle2 = $('.buy-reason-section .content-2-circles .circle-2'),
    $buyReasonSection_Content2Circles_Circle3 = $('.buy-reason-section .content-2-circles .circle-3'),
    $buyReasonSection_Content2Circles_Circle4 = $('.buy-reason-section .content-2-circles .circle-4');


  buyReasonSectionContent2TL
    .fromTo($buyReasonSection_Content2Circles_Circle1, 0.4,
      {
        rotation: -360,
        scale: 0,
        autoAlpha: 0
      }, {
        rotation: 0,
        scale: 1,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, '-=1')
    .fromTo($buyReasonSection_Content2Circles_Circle2, 0.8,
      {
        rotation: -360,
        scale: 0,
        autoAlpha: 0
      }, {
        rotation: 0,
        scale: 1,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, '-=0.8')
    .fromTo($buyReasonSection_Content2Circles_Circle3, 0.4,
      {
        rotation: -360,
        scale: 0,
        autoAlpha: 0
      }, {
        rotation: 0,
        scale: 1,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, '-=0.3')
    .fromTo($buyReasonSection_Content2Circles_Circle4, 0.6,
      {
        scale: 2,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Bounce.easeOut
      })
    .fromTo($buyReasonSection_Content2_Caption2, 1.5,
      {
        y: '-=100',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Power2.easeOut
      }, '-=0.2')
    .staggerFromTo($buyReasonSection_Content2List_Li, 1,
      {
        x: '+=100',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, 0.2, '-=0.3');
}

function chooseReasonSectionContent1Animation(chooseReasonSectionContent1TL) {
  var $chooseReasonSection_Content1_Caption2 = $('.choose-reason-section .content-1 .caption-2'),
    $chooseReasonSection_Content1List_Li = $('.choose-reason-section .content-1-list li'),
    $chooseReasonSection_Content1Circles_Span = $('.choose-reason-section .content-1-circles span');

  chooseReasonSectionContent1TL
    .fromTo($chooseReasonSection_Content1_Caption2, 1.5,
      {
        y: '-=150',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Power2.easeOut
      })
    .staggerFromTo($chooseReasonSection_Content1List_Li, 1,
      {
        x: '-=200',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, 0.2, '-=0.8')
    .staggerFromTo($chooseReasonSection_Content1Circles_Span, 1.5,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Bounce.easeOut
      }, 0.3, '-=1.7');
}

function chooseReasonSectionContent1AnimationMobile(chooseReasonSectionContent1TL) {
  var $chooseReasonSection_Content1_Caption2 = $('.choose-reason-section .content-1 .caption-2'),
    $chooseReasonSection_Content1List_Li = $('.choose-reason-section .content-1-list li'),
    $chooseReasonSection_Content1Circles_Span = $('.choose-reason-section .content-1-circles span');

  chooseReasonSectionContent1TL
    .staggerFromTo($chooseReasonSection_Content1Circles_Span, 1.5,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Bounce.easeOut
      }, 0.3)
    .fromTo($chooseReasonSection_Content1_Caption2, 1.5,
      {
        y: '-=100',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Power2.easeOut
      })
    .staggerFromTo($chooseReasonSection_Content1List_Li, 1,
      {
        x: '-=100',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, 0.2, '-=0.6');
}

function chooseReasonSectionContent2Animation(chooseReasonSectionContent2TL) {
  var $chooseReasonSection_Content2_Caption2 = $('.choose-reason-section .content-2 .caption-2'),
    $chooseReasonSection_Content2List_Li = $('.choose-reason-section .content-2-list li'),
    $chooseReasonSection_Content2Circles_Circle1 = $('.choose-reason-section .content-2-circles .circle-1'),
    $chooseReasonSection_Content2Circles_Circle2 = $('.choose-reason-section .content-2-circles .circle-2');

  chooseReasonSectionContent2TL
    .fromTo($chooseReasonSection_Content2_Caption2, 1.5,
      {
        y: '-=150',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Power2.easeOut
      })
    .staggerFromTo($chooseReasonSection_Content2List_Li, 0.6,
      {
        x: '+=200',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, 0.2, '-=1.2')
    .fromTo($chooseReasonSection_Content2Circles_Circle1, 1,
      {
        rotationY: -180,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        autoAlpha: 0
      }, {
        rotationY: 0,
        autoAlpha: 1,
        ease: Power2.easeOut
      }, '-=0.8')
    .fromTo($chooseReasonSection_Content2Circles_Circle2, 2,
      {
        rotation: 360,
        x: '+=250',
        autoAlpha: 0
      }, {
        rotation: 0,
        x: 0,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, '-=0.2');
}

function chooseReasonSectionContent2AnimationMobile(chooseReasonSectionContent2TL) {
  var $chooseReasonSection_Content2_Caption2 = $('.choose-reason-section .content-2 .caption-2'),
    $chooseReasonSection_Content2List_Li = $('.choose-reason-section .content-2-list li'),
    $chooseReasonSection_Content2Circles_Circle1 = $('.choose-reason-section .content-2-circles .circle-1'),
    $chooseReasonSection_Content2Circles_Circle2 = $('.choose-reason-section .content-2-circles .circle-2');

  chooseReasonSectionContent2TL
    .fromTo($chooseReasonSection_Content2Circles_Circle1, 1,
      {
        rotationY: -180,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        autoAlpha: 0
      }, {
        rotationY: 0,
        autoAlpha: 1,
        ease: Power2.easeOut
      })
    .fromTo($chooseReasonSection_Content2Circles_Circle2, 2,
      {
        rotation: 360,
        x: '+=150',
        autoAlpha: 0
      }, {
        rotation: 0,
        x: 0,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, '-=0.2')
    .fromTo($chooseReasonSection_Content2_Caption2, 1.5,
      {
        y: '-=100',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Power2.easeOut
      }, '-=1')
    .staggerFromTo($chooseReasonSection_Content2List_Li, 0.6,
      {
        x: '+=100',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Sine.easeOut
      }, 0.2, '-=0.7');
}

function chooseReasonSectionContent3Animation(chooseReasonSectionContent3TL) {
  var $chooseReasonSection_Content3 = $('.choose-reason-section .content-3'),
    $chooseReasonSection_Content3_Video = $('.choose-reason-section .content-3 .video'),
    $chooseReasonSection_Content3_Txt = $('.choose-reason-section .content-3 .txt');

  chooseReasonSectionContent3TL
    .fromTo($chooseReasonSection_Content3, 2,
      {
        y: '+=200',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.easeOut
      })
    .fromTo($chooseReasonSection_Content3_Video, 2,
      {
        y: '+=100',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.5')
    .fromTo($chooseReasonSection_Content3_Txt, 2,
      {
        scale: 0.5,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power2.easeOut
      }, '+=1');
}

function chooseReasonSectionContent3AnimationMobile(chooseReasonSectionContent3TL) {
  var $chooseReasonSection_Content3 = $('.choose-reason-section .content-3'),
    $chooseReasonSection_Content3_Video = $('.choose-reason-section .content-3 .video'),
    $chooseReasonSection_Content3_Txt = $('.choose-reason-section .content-3 .txt');

  chooseReasonSectionContent3TL
    .fromTo($chooseReasonSection_Content3, 2,
      {
        y: '+=100',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Power1.easeOut
      }, '+1')
    .fromTo($chooseReasonSection_Content3_Video, 2,
      {
        y: '+=50',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.5')
    .fromTo($chooseReasonSection_Content3_Txt, 2,
      {
        scale: 0.5,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power2.easeOut
      }, '-=0.8');
}