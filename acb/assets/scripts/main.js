/*jshint esversion: 6 */

$(window).on('load', function () {
  // $("#loading").fadeOut(500, function () {
  //   $(this).remove();
  $('.wrapper-acb').css('opacity', 1);
  // });
});

$(document).ready(function () {

  var orientation = '';
  window.addEventListener("orientationchange", function () {
    orientation = window.orientation === 0 ? 'portrait' : 'landscape';
    window.location.reload();
  }, false);

  /* =================================
   ===  Animations  ====
   =================================== */
  CSSPlugin.defaultTransformPerspective = 800;
  CSSPlugin.defaultForce3D = true;
  TweenMax.killAll();
  var ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 0
    }
  });

  if ($(window).width() > 1001) {
    desktopVersion(ctrl);
  }
  if ($(window).width() < 1000) {
    mobileVersion(ctrl);
  }

});

function getWindowHeight(percentage) {
  return parseInt($(window).height() * percentage / 100);
}

function desktopVersion(ctrl) {
  /* ======  Section 1 scene  ====== */
  new ScrollMagic.Scene({
    triggerElement: '.section-1',
    offset: -27 - parseInt($('.wrapper-acb').offset().top + 31)
  })
  // .addIndicators({
  //   name: 'section-1'
  // })
    .setTween(section1Animation())
    .addTo(ctrl);

  /* ======  Section 2 scene  ====== */
  new ScrollMagic.Scene({
    triggerElement: '.section-2',
    offset: '-' + getWindowHeight(75)
  })
  // .addIndicators({
  //   name: 'section-2'
  // })
    .setTween(section2Animation())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-2 .trigger-hospital',
    offset: '-' + getWindowHeight(60)
  })
  // .addIndicators({
  //   name: 'section-2 hospital'
  // })
    .setTween(section2Hospital())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-2 .trigger-nurse',
    offset: '-' + getWindowHeight(60)
  })
  // .addIndicators({
  //   name: 'section-2 nurse'
  // })
    .setTween(section2Nurse())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-2 .trigger-doctor',
    offset: '-' + getWindowHeight(60)
  })
  // .addIndicators({
  //   name: 'section-2 doctor'
  // })
    .setTween(section2Doctor())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-2 .trigger-man',
    offset: '-' + getWindowHeight(60)
  })
  // .addIndicators({
  //   name: 'section-2 man'
  // })
    .setTween(section2Man())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-2 .trigger-man-2',
    offset: '-' + getWindowHeight(60)
  })
  // .addIndicators({
  //   name: 'section-2 man-2'
  // })
    .setTween(section2Man2())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-2 .trigger-baby',
    offset: '-' + getWindowHeight(60)
  })
  // .addIndicators({
  //   name: 'section-2 baby'
  // })
    .setTween(section2Baby())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-2 .trigger-service',
    offset: '-' + getWindowHeight(60)
  })
  // .addIndicators({
  //   name: 'section-2 service'
  // })
    .setTween(section2Service())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-2 .trigger-aetna',
    offset: '-' + getWindowHeight(60)
  })
  // .addIndicators({
  //   name: 'section-2 aetna'
  // })
    .setTween(section2Aetna())
    .addTo(ctrl);
  TweenMax.set($('.section-2 .text strong'), {fontSize: 25});


  /* ======  Section 3 scene  ====== */
  new ScrollMagic.Scene({
    triggerElement: '.section-3',
    offset: '-' + getWindowHeight(70)
  })
  // .addIndicators({
  //   name: 'section-3'
  // })
    .setTween(section3Animation())
    .addTo(ctrl);
  TweenMax.set($('.section-3 .privilege-item strong'), {fontSize: 25});

  /* ======  Section 4 scene  ====== */
  new ScrollMagic.Scene({
    triggerElement: '.section-4',
    offset: '-' + getWindowHeight(75)
  })
  // .addIndicators({
  //   name: 'section-4'
  // })
    .setTween(section4Animation())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-4 .trigger-customer',
    offset: '-' + getWindowHeight(68)
  })
  // .addIndicators({
  //   name: 'section-4 customer'
  // })
    .setTween(section4Customer())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-4 .trigger-staff',
    offset: '-' + getWindowHeight(60)
  })
  // .addIndicators({
  //   name: 'section-4 staff'
  // })
    .setTween(section4Staff())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-4 .trigger-support',
    offset: '-' + getWindowHeight(70)
  })
  // .addIndicators({
  //   name: 'section-4 support'
  // })
    .setTween(section4Support())
    .addTo(ctrl);
  TweenMax.set($('.section-4 .text strong'), {fontSize: 25});

  /* ======  Section 5 scene  ====== */
  new ScrollMagic.Scene({
    triggerElement: '.section-5',
    offset: '-' + getWindowHeight(75)
  })
  // .addIndicators({
  //   name: 'section-5'
  // })
    .setTween(section5Animation())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-5 .trigger-mask',
    offset: '-' + getWindowHeight(60)
  })
  // .addIndicators({
  //   name: 'section-5 mask'
  // })
    .setTween(section5Mask())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-5 .trigger-money-1',
    offset: '-' + getWindowHeight(66)
  })
  // .addIndicators({
  //   name: 'section-5 money-1'
  // })
    .setTween(section5Money1())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-5 .trigger-money-2',
    offset: '-' + getWindowHeight(75)
  })
  // .addIndicators({
  //   name: 'section-5 money-2'
  // })
    .setTween(section5Money2())
    .addTo(ctrl);
  TweenMax.set($('.section-5 .text strong'), {fontSize: 25});
}

function mobileVersion(ctrl) {
  /* ======  Section 1 scene  ====== */
  new ScrollMagic.Scene({
    triggerElement: '.section-1',
    offset: -27 - parseInt($('.wrapper-acb').offset().top + 31)
  })
    // .addIndicators({
    //   name: 'section-1'
    // })
    .setTween(section1MobileAnimation())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-1 .trigger-1',
    offset: '-' + getWindowHeight(60)
  })
    // .addIndicators({
    //   name: 'section-1 trigger-1'
    // })
    .setTween(section1Trigger1Mobile())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-1 .trigger-2',
    offset: '-' + getWindowHeight(60)
  })
    // .addIndicators({
    //   name: 'section-1 trigger-2'
    // })
    .setTween(section1Trigger2Mobile())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-1 .trigger-3',
    offset: '-' + getWindowHeight(60)
  })
    // .addIndicators({
    //   name: 'section-1 trigger-3'
    // })
    .setTween(section1Trigger3Mobile())
    .addTo(ctrl);

  // /* ======  Section 2 scene  ====== */
  new ScrollMagic.Scene({
    triggerElement: '.section-2',
    offset: '-' + getWindowHeight(70)
  })
    // .addIndicators({
    //   name: 'section-2'
    // })
    .setTween(section2AnimationMobile())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-2 .trigger-hospital',
    offset: '-' + getWindowHeight(60)
  })
    // .addIndicators({
    //   name: 'section-2 hospital'
    // })
    .setTween(section2HospitalMobile())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-2 .trigger-nurse',
    offset: '-' + getWindowHeight(60)
  })
    // .addIndicators({
    //   name: 'section-2 nurse'
    // })
    .setTween(section2NurseMobile())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-2 .trigger-doctor',
    offset: '-' + getWindowHeight(60)
  })
    // .addIndicators({
    //   name: 'section-2 doctor'
    // })
    .setTween(section2DoctorMobile())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-2 .trigger-man',
    offset: '-' + getWindowHeight(60)
  })
    // .addIndicators({
    //   name: 'section-2 man'
    // })
    .setTween(section2ManMobile())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-2 .trigger-man-2',
    offset: '-' + getWindowHeight(60)
  })
    // .addIndicators({
    //   name: 'section-2 man-2'
    // })
    .setTween(section2Man2Mobile())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-2 .trigger-baby',
    offset: '-' + getWindowHeight(60)
  })
    // .addIndicators({
    //   name: 'section-2 baby'
    // })
    .setTween(section2BabyMobile())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-2 .trigger-service',
    offset: '-' + getWindowHeight(60)
  })
    // .addIndicators({
    //   name: 'section-2 service'
    // })
    .setTween(section2ServiceMobile())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-2 .trigger-aetna',
    offset: '-' + getWindowHeight(60)
  })
    // .addIndicators({
    //   name: 'section-2 aetna'
    // })
    .setTween(section2AetnaMobile())
    .addTo(ctrl);
  if ($(window).width() <= 450) {
    TweenMax.set($('.section-2 .text strong'), {fontSize: 23});
  }
  if ($(window).width() > 450 && $(window).width() <= 1000) {
    TweenMax.set($('.section-2 .text strong'), {fontSize: 25});
  }

  /* ======  Section 3 scene  ====== */
  new ScrollMagic.Scene({
    triggerElement: '.section-3',
    offset: '-' + getWindowHeight(60)
  })
    // .addIndicators({
    //   name: 'section-3'
    // })
    .setTween(section3AnimationMobile())
    .addTo(ctrl);
  if ($(window).width() <= 450) {
    TweenMax.set($('.section-3 .privilege-item strong'), {fontSize: 21});
  }
  if ($(window).width() > 450 && $(window).width() <= 1000) {
    TweenMax.set($('.section-3 .privilege-item strong'), {fontSize: 25});
  }

  /* ======  Section 4 scene  ====== */
  new ScrollMagic.Scene({
    triggerElement: '.section-4',
    offset: '-' + getWindowHeight(70)
  })
    // .addIndicators({
    //   name: 'section-4'
    // })
    .setTween(section4Animation())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-4 .trigger-customer',
    offset: '-' + getWindowHeight(60)
  })
    // .addIndicators({
    //   name: 'section-4 customer'
    // })
    .setTween(section4CustomerMobile())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-4 .trigger-staff',
    offset: '-' + getWindowHeight(60)
  })
    // .addIndicators({
    //   name: 'section-4 staff'
    // })
    .setTween(section4StaffMobile())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-4 .trigger-support',
    offset: '-' + getWindowHeight(60)
  })
    // .addIndicators({
    //   name: 'section-4 support'
    // })
    .setTween(section4SupportMobile())
    .addTo(ctrl);
  if ($(window).width() <= 450) {
    TweenMax.set($('.section-4 .text strong'), {fontSize: 23});
  }
  if ($(window).width() > 450 && $(window).width() <= 1000) {
    TweenMax.set($('.section-4 .text strong'), {fontSize: 25});
  }

  /* ======  Section 5 scene  ====== */
  new ScrollMagic.Scene({
    triggerElement: '.section-5',
    offset: '-' + getWindowHeight(70)
  })
    // .addIndicators({
    //   name: 'section-5'
    // })
    .setTween(section5AnimationMobile())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-5 .trigger-mask',
    offset: '-' + getWindowHeight(70)
  })
    // .addIndicators({
    //   name: 'section-5 mask'
    // })
    .setTween(section5Mask())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-5 .trigger-money-1',
    offset: '-' + getWindowHeight(60)
  })
    // .addIndicators({
    //   name: 'section-5 money-1'
    // })
    .setTween(section5Money1Mobile())
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: '.section-5 .trigger-money-2',
    offset: '-' + getWindowHeight(60)
  })
    // .addIndicators({
    //   name: 'section-5 money-2'
    // })
    .setTween(section5Money2Mobile())
    .addTo(ctrl);
  if ($(window).width() <= 450) {
    TweenMax.set($('.section-5 .text strong'), {fontSize: 23});
  }
  if ($(window).width() > 450 && $(window).width() <= 1000) {
    TweenMax.set($('.section-5 .text strong'), {fontSize: 25});
  }

}

function section1Animation() {
  var section1Box = $('.section-1 .group-text .box'),
    section1Mask = $('.section-1 .bg-mask'),
    section1H2 = $('.section-1 .group-text h2'),
    section1H4 = $('.section-1 .group-text h4'),
    section1CaptionSplit = new SplitText($('.section-1 .caption'), {type: 'chars'}),
    section1Text1Dot = $('.section-1 .text-1 .dot'),
    section1Text1Dash = $('.section-1 .text-1 .dash line'),
    section1Text2Dot = $('.section-1 .text-2 .dot'),
    section1Text2Dash = $('.section-1 .text-2 .dash line'),
    section1Text3Dot = $('.section-1 .text-3 .dot'),
    section1Text3Dash = $('.section-1 .text-3 .dash line'),
    section1Text4Dot = $('.section-1 .text-4 .dot'),
    section1Text4Dash = $('.section-1 .text-4 .dash line'),
    section1Text5Dot = $('.section-1 .text-5 .dot'),
    section1Text5Dash = $('.section-1 .text-5 .dash polyline'),
    section1Text6Dot = $('.section-1 .text-6 .dot'),
    section1Text6Dash = $('.section-1 .text-6 .dash polyline'),
    section1Land = $('.section-1 .land'),
    section1Man1 = $('.section-1 .man-1'),
    section1Man2 = $('.section-1 .man-2'),
    section1Man3 = $('.section-1 .man-3'),
    section1Man4 = $('.section-1 .man-4'),
    section1Man5 = $('.section-1 .man-5'),
    section1House1 = $('.section-1 .house-1'),
    section1Card1 = $('.section-1 .card-1'),
    section1Table1 = $('.section-1 .table-1'),
    section1Table2 = $('.section-1 .table-2'),
    section1Tree1 = $('.section-1 .tree-1'),
    section1Tree2 = $('.section-1 .tree-2'),
    section1Stand1 = $('.section-1 .stand-1'),
    section1Stand2 = $('.section-1 .stand-2'),
    section1Stand3 = $('.section-1 .stand-3'),
    section1Stand4 = $('.section-1 .stand-4'),
    section1Text1 = $('.section-1 .text-1 .txt'),
    section1Text2 = $('.section-1 .text-2 .txt'),
    section1Text3 = $('.section-1 .text-3 .txt'),
    section1Text4 = $('.section-1 .text-4 .txt'),
    section1Text5 = $('.section-1 .text-5 .txt'),
    section1Text6 = $('.section-1 .text-6 .txt');

  var section1TL = new TimelineMax({yoyo: true});
  section1TL
    .fromTo(section1Box, 0.7,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      }, '+0.3')
    .fromTo(section1H2, 0.7,
      {
        rotationX: 90,
        autoAlpha: 0
      }, {
        rotationX: 0,
        autoAlpha: 1,
        ease: Back.easeOut
      }, '-=0.5')
    .fromTo(section1H4, 0.7,
      {
        rotationX: 90,
        autoAlpha: 0
      }, {
        rotationX: 0,
        autoAlpha: 1,
        ease: Back.easeOut
      }, '-=0.4')
    .to(section1Mask, 0.8,
      {
        scaleY: 0,
        transformOrigin: 'center bottom',
        ease: Power2.easeOut
      }, '-=0.5')
    .staggerFrom(section1CaptionSplit.chars, 0.8,
      {
        autoAlpha: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: Back.easeOut
      }, 0.01, '-=1')
    .fromTo(section1Land, 0.7,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.2)
      }, '-=0.5')
    .addLabel('land')
    .fromTo(section1Table1, 0.8,
      {
        y: '+=100',
        x: '-=150',
        autoAlpha: 0
      }, {
        y: 0,
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.5)
      }, 'land-=0.3')
    // .fromTo(section1Tree1, 0.5,
    //   {
    //     rotationX: 90,
    //     transformOrigin: 'center bottom'
    //   }, {
    //     rotationX: 0,
    //     ease: Back.easeOut.config(1.2)
    //   }, 'land')
    // .fromTo(section1Tree2, 0.5,
    //   {
    //     rotationX: 90,
    //     transformOrigin: 'center bottom'
    //   }, {
    //     rotationX: 0,
    //     ease: Back.easeOut.config(1.2)
    //   }, 'land+=0.1')
    .fromTo(section1Stand1, 0.6,
      {
        scale: 0.3,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.5)
      }, 'land')
    .addLabel('obj1', '-=0.6')
    .fromTo(section1Man1, 0.6,
      {
        y: '-=150',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, 'land+=0.2')
    .from(section1Text5Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, '-=0.4')
    .to(section1Text5Dash, 0.2,
      {
        attr: {
          points: '0.5,0.5 -39.5,0.5 -39.5,0.5 -39.5,0.5'
        },
        ease: Power2.easeOut
      }, '-=0.3')
    .to(section1Text5Dash, 0.2,
      {
        attr: {
          points: '0.5,0.5 -39.5,0.5 -39.5,80.5 -39.5,80.5'
        },
        ease: Power2.easeOut
      }, '-=0.1')
    .to(section1Text5Dash, 0.3,
      {
        attr: {
          points: '0.5,0.5 -39.5,0.5 -39.5,80.5 144,80.5'
        },
        ease: Power2.easeOut
      })
    .fromTo(section1Text5, 0.6,
      {
        x: '-=100',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, '-=0.3')
    .fromTo(section1Stand2, 0.6,
      {
        scale: 0.3,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.5)
      }, 'obj1+=0.4')
    .addLabel('obj2', '-=1')
    .fromTo(section1Man3, 0.6,
      {
        y: '-=150',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, 'obj1+=0.6')
    .from(section1Text1Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, 'obj1+=0.7')
    .to(section1Text1Dash, 0.6,
      {
        attr: {
          x2: 195
        },
        ease: Power2.easeOut
      }, 'obj1+=0.8')
    .fromTo(section1Text1, 0.6,
      {
        x: '+=100',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, 'obj1+=1')
    .fromTo(section1Man2, 0.6,
      {
        y: '-=150',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, 'obj2+=0.3')
    .addLabel('obj3', '-=0.6')
    .from(section1Text2Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, 'obj2+=0.4')
    .to(section1Text2Dash, 0.6,
      {
        attr: {
          x2: 192
        },
        ease: Power2.easeOut
      }, 'obj2+=0.5')
    .fromTo(section1Text2, 0.6,
      {
        x: '+=100',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, 'obj2+=0.7')
    .fromTo(section1Stand4, 0.6,
      {
        scale: 0.3,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.5)
      }, 'obj3+=0.3')
    .addLabel('obj4', '-=0.6')
    .fromTo(section1Man5, 0.6,
      {
        y: '-=150',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, 'obj3+=0.4')
    .from(section1Text3Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, 'obj3+=0.5')
    .to(section1Text3Dash, 0.6,
      {
        attr: {
          x2: 215
        },
        ease: Power2.easeOut
      }, 'obj3+=0.6')
    .fromTo(section1Text3, 0.6,
      {
        x: '+=100',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, 'obj3+=0.8')
    .fromTo(section1Stand3, 0.6,
      {
        scale: 0.3,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.5)
      }, 'obj4+=0.3')
    .addLabel('obj5', '-=0.6')
    .fromTo(section1Man4, 0.6,
      {
        y: '-=150',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, 'obj4+=0.4')
    .fromTo(section1Card1, 0.6,
      {
        y: '-=50',
        x: '-=50',
        autoAlpha: 0
      }, {
        y: 0,
        x: 0,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, 'obj4+=0.4')
    .from(section1Text4Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, 'obj4+=0.5')
    .to(section1Text4Dash, 0.6,
      {
        attr: {
          x2: 234
        },
        ease: Power2.easeOut
      }, 'obj4+=0.6')
    .fromTo(section1Text4, 0.6,
      {
        x: '+=100',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, 'obj4+=0.8')
    .fromTo(section1House1, 0.6,
      {
        scale: 0.5,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power2.easeOut
      }, 'obj5+=0.1')
    .fromTo(section1Table2, 0.6,
      {
        y: '-=100',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(2)
      }, 'obj5+=0.3')
    .from(section1Text6Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, 'obj5+=0.4')
    .to(section1Text6Dash, 0.3,
      {
        attr: {
          points: '0.5,0.5 0.5,48.5 0.5,48.5'
        },
        ease: Power2.easeOut
      }, 'obj5+=0.5')
    .to(section1Text6Dash, 0.4,
      {
        attr: {
          points: '0.5,0.5 0.5,48.5 -161,48.5'
        },
        ease: Power2.easeOut
      }, '-=0.2')
    .fromTo(section1Text6, 0.6,
      {
        x: '-=100',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, 'obj5+=0.7');
  var tl = new TimelineMax({repeat: -1, yoyo: true, delay: 0.6});
  tl.fromTo(section1Table2, 0.7,
    {
      y: -6
    }, {
      y: 6,
      ease: Power0.easeNone
    });

  return section1TL;
}

function section1MobileAnimation() {
  var section1Box = $('.section-1 .group-text .box');
  var section1H2 = $('.section-1 .group-text h2');
  var section1H4 = $('.section-1 .group-text h4');
  var section1CaptionSplit = new SplitText($('.section-1 .caption'), {type: 'lines'});

  var section1TL = new TimelineMax({yoyo: true});
  section1CaptionSplit.revert();
  section1CaptionSplit = section1CaptionSplit.split({type: 'lines'});
  section1TL
    .fromTo(section1Box, 0.7,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      }, '+0.3')
    .fromTo(section1H2, 0.7,
      {
        rotationX: 90,
        autoAlpha: 0
      }, {
        rotationX: 0,
        autoAlpha: 1,
        ease: Back.easeOut
      }, '-=0.5')
    .fromTo(section1H4, 0.7,
      {
        rotationX: 90,
        autoAlpha: 0
      }, {
        rotationX: 0,
        autoAlpha: 1,
        ease: Back.easeOut
      }, '-=0.4')
    .staggerFrom(section1CaptionSplit.lines, 0.6,
      {
        autoAlpha: 0,
        y: '+=60',
        ease: Back.easeOut
      }, 0.1, '-=0.4');

  return section1TL;
}

function section1Trigger1Mobile() {
  var section1Text2Dash = '';
  var section1Text6Dash = '';
  if ($(window).width() <= 450) {
    section1Text2Dash = $('.section-1 .text-2 .dash-mb-xs line');
    section1Text6Dash = $('.section-1 .text-6 .dash-mb-xs polyline');
  }
  if ($(window).width() > 450 && $(window).width() <= 1000) {
    section1Text2Dash = $('.section-1 .text-2 .dash-mb line');
    section1Text6Dash = $('.section-1 .text-6 .dash-mb polyline');
  }
  var section1Mask = $('.section-1 .bg-mask');
  var section1Land = $('.section-1 .land-2');
  var section1House1 = $('.section-1 .house-1');
  var section1Table1 = $('.section-1 .table-1');
  var section1Table2 = $('.section-1 .table-2');
  var section1Text2Dot = $('.section-1 .text-2 .dot');
  var section1Text2 = $('.section-1 .text-2 .txt');
  var section1Text6Dot = $('.section-1 .text-6 .dot');
  var section1Text6 = $('.section-1 .text-6 .txt');
  var section1Man2 = $('.section-1 .man-2');
  var section1Trigger1TL = new TimelineMax({yoyo: true});

  section1Trigger1TL
    .to(section1Mask, 1,
      {
        scaleY: 0,
        transformOrigin: 'center bottom',
        ease: Power2.easeOut
      })
    .fromTo(section1Land, 0.7,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.2)
      }, '-=0.8')
    .fromTo(section1Table1, 0.8,
      {
        y: '+=100',
        x: '-=150',
        autoAlpha: 0
      }, {
        y: 0,
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.5)
      }, '-=0.6')
    .addLabel('obj1')
    .fromTo(section1House1, 0.6,
      {
        scale: 0.5,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power2.easeOut
      }, 'obj1-=0.6')
    .fromTo(section1Table2, 0.6,
      {
        y: '-=100',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(2)
      }, 'obj1-=0.3')
    .from(section1Text6Dot, 0.3,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, 'obj1')
    .add(text6Dash(), 'obj1+=0.3')
    .fromTo(section1Text6, 0.6,
      {
        x: '-=100',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, 'obj1+=0.3')
    .addLabel('obj2', 'obj1-=0.2')
    .fromTo(section1Man2, 0.6,
      {
        y: '-=150',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, 'obj2')
    .from(section1Text2Dot, 0.3,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, 'obj2+=0.2')
    .add(text2Dash(), 'obj2+=0.3')
    .fromTo(section1Text2, 0.6,
      {
        x: '+=100',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, 'obj2+=0.4');

  function text2Dash() {
    var tl = new TimelineMax({yoyo: true});
    if ($(window).width() <= 450) {
      tl.to(section1Text2Dash, 0.4,
        {
          attr: {
            x2: 92
          },
          ease: Power2.easeOut
        });
    }
    if ($(window).width() > 450 && $(window).width() <= 1000) {
      tl.to(section1Text2Dash, 0.4,
        {
          attr: {
            x2: 128
          },
          ease: Power2.easeOut
        });
    }
    return tl;
  }

  function text6Dash() {
    var tl = new TimelineMax({yoyo: true});
    if ($(window).width() <= 450) {
      tl
        .to(section1Text6Dash, 0.2,
          {
            attr: {
              points: '0.5,0.5 0.5,-58.5 0.5,-58.5'
            },
            ease: Power2.easeOut
          })
        .to(section1Text6Dash, 0.3,
          {
            attr: {
              points: '0.5,0.5 0.5,-58.5 134,-58.5'
            },
            ease: Power2.easeOut
          });
    }
    if ($(window).width() > 450 && $(window).width() <= 1000) {
      tl
        .to(section1Text6Dash, 0.2,
          {
            attr: {
              points: '0.5,0.5 0.5,-141.5 0.5,-141.5'
            },
            ease: Power2.easeOut
          }, '-=0.2')
        .to(section1Text6Dash, 0.3,
          {
            attr: {
              points: '0.5,0.5 0.5,-141.5 192,-141.5'
            },
            ease: Power2.easeOut
          });
    }
    return tl;
  }

  return section1Trigger1TL;
}

function section1Trigger2Mobile() {
  var section1Text4Dash = '';
  var section1Text5Dash = '';
  if ($(window).width() <= 450) {
    section1Text4Dash = $('.section-1 .text-4 .dash-mb-xs polyline');
    section1Text5Dash = $('.section-1 .text-5 .dash-mb-xs polyline');
  }
  if ($(window).width() > 450 && $(window).width() <= 1000) {
    section1Text4Dash = $('.section-1 .text-4 .dash-mb polyline');
    section1Text5Dash = $('.section-1 .text-5 .dash-mb polyline');
  }
  var section1Text4Dot = $('.section-1 .text-4 .dot');
  var section1Text5Dot = $('.section-1 .text-5 .dot');
  var section1Man1 = $('.section-1 .man-1');
  var section1Man4 = $('.section-1 .man-4');
  var section1Card1 = $('.section-1 .card-1');
  var section1Stand1 = $('.section-1 .stand-1');
  var section1Stand3 = $('.section-1 .stand-3');
  var section1Text4 = $('.section-1 .text-4 .txt');
  var section1Text5 = $('.section-1 .text-5 .txt');
  var section1Trigger2TL = new TimelineMax({yoyo: true});
  section1Trigger2TL
    .fromTo(section1Stand1, 0.6,
      {
        scale: 0.3,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.5)
      })
    .addLabel('obj1')
    .fromTo(section1Man1, 0.6,
      {
        y: '-=150',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, '-=0.4')
    .from(section1Text5Dot, 0.3,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, '-=0.4')
    .add(text5Dash(), '-=0.2')
    .fromTo(section1Text5, 0.6,
      {
        x: '-=100',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, '-=0.4')
    .fromTo(section1Stand3, 0.6,
      {
        scale: 0.3,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.5)
      }, 'obj1')
    .fromTo(section1Man4, 0.6,
      {
        y: '-=150',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, 'obj1+=0.2')
    .fromTo(section1Card1, 0.6,
      {
        y: '-=50',
        x: '-=50',
        autoAlpha: 0
      }, {
        y: 0,
        x: 0,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, 'obj1+=0.4')
    .from(section1Text4Dot, 0.3,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, 'obj1+=0.3')
    .add(text4Dash(), '-=0.6')
    .fromTo(section1Text4, 0.6,
      {
        x: '+=100',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, 'obj1+=0.5');

  function text4Dash() {
    var tl = new TimelineMax({yoyo: true});
    if ($(window).width() <= 450) {
      tl
        .to(section1Text4Dash, 0.2,
          {
            attr: {
              points: '0.5,0.5 0.5,60.5 0.5,60.5'
            },
            ease: Power2.easeOut
          })
        .to(section1Text4Dash, 0.3,
          {
            attr: {
              points: '0.5,0.5 0.5,60.5 107,60.5'
            },
            ease: Power2.easeOut
          });
    }
    if ($(window).width() > 450 && $(window).width() <= 1000) {
      tl
        .to(section1Text4Dash, 0.2,
          {
            attr: {
              points: '0.5,0.5 0.5,53.5 0.5,53.5'
            },
            ease: Power2.easeOut
          })
        .to(section1Text4Dash, 0.3,
          {
            attr: {
              points: '0.5,0.5 0.5,53.5 126,53.5'
            },
            ease: Power2.easeOut
          });
    }
    return tl;
  }

  function text5Dash() {
    var tl = new TimelineMax({yoyo: true});
    if ($(window).width() <= 450) {
      tl
        .to(section1Text5Dash, 0.2,
          {
            attr: {
              points: '0.5,0.5 -59,0.5 -59,0.5 -59,0.5'
            },
            ease: Power2.easeOut
          })
        .to(section1Text5Dash, 0.2,
          {
            attr: {
              points: '0.5,0.5 -59,0.5 -59,59.5 -59,59.5'
            },
            ease: Power2.easeOut
          })
        .to(section1Text5Dash, 0.2,
          {
            attr: {
              points: '0.5,0.5 -59,0.5 -59,59.5 154,59.5'
            },
            ease: Power2.easeOut
          });
    }
    if ($(window).width() > 450 && $(window).width() <= 1000) {
      tl
        .to(section1Text5Dash, 0.2,
          {
            attr: {
              points: '0.5,0.5 -47,0.5 -47,0.5'
            },
            ease: Power2.easeOut
          })
        .to(section1Text5Dash, 0.2,
          {
            attr: {
              points: '0.5,0.5 -47,0.5 -47,80'
            },
            ease: Power2.easeOut
          });
    }
    return tl;
  }

  return section1Trigger2TL;
}

function section1Trigger3Mobile() {
  var section1Text1Dash = '';
  var section1Text3Dash = '';
  if ($(window).width() <= 450) {
    section1Text1Dash = $('.section-1 .text-1 .dash-mb-xs polyline');
    section1Text3Dash = $('.section-1 .text-3 .dash-mb-xs polyline');
  }
  if ($(window).width() > 450 && $(window).width() <= 1000) {
    section1Text1Dash = $('.section-1 .text-1 .dash-mb polyline');
    section1Text3Dash = $('.section-1 .text-3 .dash-mb polyline');
  }
  var section1Land = $('.section-1 .land-3');
  var section1Text1Dot = $('.section-1 .text-1 .dot');
  var section1Text3Dot = $('.section-1 .text-3 .dot');
  var section1Man3 = $('.section-1 .man-3');
  var section1Man5 = $('.section-1 .man-5');
  var section1Stand2 = $('.section-1 .stand-2');
  var section1Stand4 = $('.section-1 .stand-4');
  var section1Text1 = $('.section-1 .text-1 .txt');
  var section1Text3 = $('.section-1 .text-3 .txt');
  var section1Trigger3TL = new TimelineMax({yoyo: true});
  section1Trigger3TL
    .fromTo(section1Land, 0.7,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.2)
      })
    .fromTo(section1Stand2, 0.6,
      {
        scale: 0.3,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.5)
      }, '-=0.5')
    .addLabel('obj1')
    .fromTo(section1Man3, 0.6,
      {
        y: '-=150',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, '-=0.4')
    .from(section1Text1Dot, 0.3,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, '-=0.4')
    .add(text1Dash(), '-=0.2')
    .fromTo(section1Text1, 0.6,
      {
        x: '+=100',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, '-=0.4')
    .fromTo(section1Stand4, 0.6,
      {
        scale: 0.3,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.5)
      }, 'obj1-=0.2')
    .fromTo(section1Man5, 0.6,
      {
        y: '-=150',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Expo.easeOut
      }, 'obj1')
    .from(section1Text3Dot, 0.3,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, 'obj1+=0.1')
    .add(text3Dash(), '-=0.4')
    .fromTo(section1Text3, 0.6,
      {
        x: '+=100',
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut.config(1)
      }, 'obj1+=0.5');

  function text1Dash() {
    var tl = new TimelineMax({yoyo: true});
    if ($(window).width() <= 450) {
      tl
        .to(section1Text1Dash, 0.2,
          {
            attr: {
              points: '0.5,0.5 0.5,80.5 0.5,80.5'
            },
            ease: Power2.easeOut
          })
        .to(section1Text1Dash, 0.3,
          {
            attr: {
              points: '0.5,0.5 0.5,80.5 121,80.5'
            },
            ease: Power2.easeOut
          });
    }
    if ($(window).width() > 450 && $(window).width() <= 1000) {
      tl
        .to(section1Text1Dash, 0.2,
          {
            attr: {
              points: '0.5,0.5 0.5,87.5 0.5,87.5'
            },
            ease: Power2.easeOut
          })
        .to(section1Text1Dash, 0.3,
          {
            attr: {
              points: '0.5,0.5 0.5,87.5 138,87.5'
            },
            ease: Power2.easeOut
          });
    }
    return tl;
  }

  function text3Dash() {
    var tl = new TimelineMax({yoyo: true});
    if ($(window).width() <= 450) {
      tl
        .to(section1Text3Dash, 0.2,
          {
            attr: {
              points: '0.5,0.5 0.5,34.5 0.5,34.5'
            },
            ease: Power2.easeOut
          })
        .to(section1Text3Dash, 0.3,
          {
            attr: {
              points: '0.5,0.5 0.5,34.5 118,34.5'
            },
            ease: Power2.easeOut
          });
    }
    if ($(window).width() > 450 && $(window).width() <= 1000) {
      tl
        .to(section1Text3Dash, 0.2,
          {
            attr: {
              points: '0.5,0.5 0.5,44.5 0.5,44.5'
            },
            ease: Power2.easeOut
          })
        .to(section1Text3Dash, 0.3,
          {
            attr: {
              points: '0.5,0.5 0.5,44.5 172,44.5'
            },
            ease: Power2.easeOut
          });
    }
    return tl;
  }

  return section1Trigger3TL;
}

function section2Animation() {
  var section2CaptionSplit = new SplitText($('.section-2 .caption'), {type: 'chars'});
  var section2TL = new TimelineMax({yoyo: true});
  section2CaptionSplit.revert();
  section2CaptionSplit = section2CaptionSplit.split({type: 'chars'});
  section2TL
    .staggerFrom(section2CaptionSplit.chars, 0.8,
      {
        autoAlpha: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: Back.easeOut
      }, 0.01);
  return section2TL;
}

function section2AnimationMobile() {
  var section2CaptionSplit = new SplitText($('.section-2 .caption'), {type: 'lines'});
  var section2TL = new TimelineMax({yoyo: true});
  section2CaptionSplit.revert();
  section2CaptionSplit = section2CaptionSplit.split({type: 'lines'});
  section2TL
    .staggerFrom(section2CaptionSplit.lines, 0.6,
      {
        autoAlpha: 0,
        y: '+=60',
        ease: Back.easeOut
      }, 0.1);
  return section2TL;
}

function section2Hospital() {
  var section2Text1Split = new SplitText($('.section-2 .text-1 .txt'), {type: 'lines'});
  var section2Mask = $('.section-2 .bg-mask-1');
  var section2Hospital = $('.section-2 .hospital');
  var section2Text1Dot = $('.section-2 .text-1 .dot');
  var section2Text1Dash = $('.section-2 .text-1 .dash line');
  // var section2HospitalCar = $('.section-2 .hospital .car');
  var section2HospitalTL = new TimelineMax({yoyo: true});
  section2Text1Split.revert();
  section2Text1Split = section2Text1Split.split({type: 'lines'});
  section2HospitalTL
    .fromTo(section2Hospital, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      })
    .to(section2Mask, 0.6,
      {
        scaleX: 0,
        transformOrigin: 'right center',
        ease: Power2.easeOut
      }, '-=0.5')
    .from(section2Text1Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, '-=0.5')
    .to(section2Text1Dash, 0.6,
      {
        attr: {
          x2: 202
        },
        ease: Power2.easeOut
      }, '-=0.3')
    .staggerFrom(section2Text1Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');
  // var tl = new TimelineMax({repeat: -1, delay: 0.2});
  // tl.fromTo(section2HospitalCar, 3,
  //   {
  //     y: '-=10',
  //     x: '-=10',
  //     autoAlpha: 1
  //   }, {
  //     y: '+=40',
  //     x: '+=75',
  //     autoAlpha: 0,
  //     ease: Power0.easeNone
  //   });

  return section2HospitalTL;
}

function section2HospitalMobile() {
  var section2Text1Split = new SplitText($('.section-2 .text-1 .txt'), {type: 'lines'});
  var section2Mask = $('.section-2 .bg-mask-1');
  var section2Hospital = $('.section-2 .hospital');
  var section2HospitalTL = new TimelineMax({yoyo: true});
  section2Text1Split.revert();
  section2Text1Split = section2Text1Split.split({type: 'lines'});
  section2HospitalTL
    .fromTo(section2Hospital, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      })
    .to(section2Mask, 0.6,
      {
        scaleX: 0,
        transformOrigin: 'right center',
        ease: Power2.easeOut
      }, '-=0.5')
    .staggerFrom(section2Text1Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');

  return section2HospitalTL;
}

function section2Nurse() {
  var section2Text2Split = new SplitText($('.section-2 .text-2 .txt'), {type: 'lines'});
  var section2Nurse = $('.section-2 .nurse');
  var section2Stand1 = $('.section-2 .stand-1');
  var section2Text2Dot = $('.section-2 .text-2 .dot');
  var section2Text2Dash = $('.section-2 .text-2 .dash line');
  var section2NurseTL = new TimelineMax({yoyo: true});
  section2Text2Split.revert();
  section2Text2Split = section2Text2Split.split({type: 'lines'});
  section2NurseTL
    .fromTo(section2Stand1, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section2Nurse, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .from(section2Text2Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, '-=0.4')
    .to(section2Text2Dash, 0.6,
      {
        attr: {
          x2: 0.5
        },
        ease: Power2.easeOut
      }, '-=0.3')
    .staggerFrom(section2Text2Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '-=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');

  return section2NurseTL;
}

function section2NurseMobile() {
  var section2Text2Split = new SplitText($('.section-2 .text-2 .txt'), {type: 'lines'});
  var section2Nurse = $('.section-2 .nurse');
  var section2Stand1 = $('.section-2 .stand-1');
  var section2NurseTL = new TimelineMax({yoyo: true});
  section2Text2Split.revert();
  section2Text2Split = section2Text2Split.split({type: 'lines'});
  section2NurseTL
    .fromTo(section2Stand1, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section2Nurse, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .staggerFrom(section2Text2Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '-=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');

  return section2NurseTL;
}

function section2Doctor() {
  var section2Text3Split = new SplitText($('.section-2 .text-3 .txt'), {type: 'lines'});
  var section2Doctor = $('.section-2 .doctor');
  var section2Stand2 = $('.section-2 .stand-2');
  var section2Text3Dot = $('.section-2 .text-3 .dot');
  var section2Text3Dash = $('.section-2 .text-3 .dash line');
  var section2DoctorTL = new TimelineMax({yoyo: true});
  section2Text3Split.revert();
  section2Text3Split = section2Text3Split.split({type: 'lines'});
  section2DoctorTL
    .fromTo(section2Stand2, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section2Doctor, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .from(section2Text3Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, '-=0.4')
    .to(section2Text3Dash, 0.6,
      {
        attr: {
          x2: 317
        },
        ease: Power2.easeOut
      }, '-=0.3')
    .staggerFrom(section2Text3Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');
  return section2DoctorTL;
}

function section2DoctorMobile() {
  var section2Text3Split = new SplitText($('.section-2 .text-3 .txt'), {type: 'lines'});
  var section2Doctor = $('.section-2 .doctor');
  var section2Stand2 = $('.section-2 .stand-2');
  var section2Mask = $('.section-2 .bg-mask-2');
  var section2DoctorTL = new TimelineMax({yoyo: true});
  section2Text3Split.revert();
  section2Text3Split = section2Text3Split.split({type: 'lines'});
  section2DoctorTL
    .fromTo(section2Stand2, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section2Doctor, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .to(section2Mask, 0.6,
      {
        scaleX: 0,
        transformOrigin: 'left center',
        ease: Power2.easeOut
      }, '-=0.5')
    .staggerFrom(section2Text3Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');
  return section2DoctorTL;
}

function section2Man() {
  var section2Text4Split = new SplitText($('.section-2 .text-4 .txt'), {type: 'lines'});
  var section2Man = $('.section-2 .man');
  var section2Stand3 = $('.section-2 .stand-3');
  var section2Text4Dot = $('.section-2 .text-4 .dot');
  var section2Text4Dash = $('.section-2 .text-4 .dash line');
  var section2ManTL = new TimelineMax({yoyo: true});
  section2Text4Split.revert();
  section2Text4Split = section2Text4Split.split({type: 'lines'});
  section2ManTL
    .fromTo(section2Stand3, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section2Man, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .from(section2Text4Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, '-=0.4')
    .to(section2Text4Dash, 0.6,
      {
        attr: {
          x2: 0.5
        },
        ease: Power2.easeOut
      }, '-=0.3')
    .staggerFrom(section2Text4Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '-=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');
  return section2ManTL;
}

function section2ManMobile() {
  var section2Text4Split = new SplitText($('.section-2 .text-4 .txt'), {type: 'lines'});
  var section2Man = $('.section-2 .man');
  var section2Stand3 = $('.section-2 .stand-3');
  var section2ManTL = new TimelineMax({yoyo: true});
  section2Text4Split.revert();
  section2Text4Split = section2Text4Split.split({type: 'lines'});
  section2ManTL
    .fromTo(section2Stand3, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section2Man, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .staggerFrom(section2Text4Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '-=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');
  return section2ManTL;
}

function section2Man2() {
  var section2Text5Split = new SplitText($('.section-2 .text-5 .txt'), {type: 'lines'});
  var section2Mask = $('.section-2 .bg-mask-2');
  var section2Man2 = $('.section-2 .man-2');
  var section2Stand4 = $('.section-2 .stand-4');
  var section2Text5Dot = $('.section-2 .text-5 .dot');
  var section2Text5Dash = $('.section-2 .text-5 .dash line');
  var section2Man2TL = new TimelineMax({yoyo: true});
  section2Text5Split.revert();
  section2Text5Split = section2Text5Split.split({type: 'lines'});
  section2Man2TL
    .fromTo(section2Stand4, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section2Man2, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .to(section2Mask, 0.6,
      {
        scaleX: 0,
        transformOrigin: 'left center',
        ease: Power2.easeOut
      }, '-=0.5')
    .from(section2Text5Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, '-=0.5')
    .to(section2Text5Dash, 0.6,
      {
        attr: {
          x2: 380
        },
        ease: Power2.easeOut
      }, '-=0.3')
    .staggerFrom(section2Text5Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');
  return section2Man2TL;
}

function section2Man2Mobile() {
  var section2Text5Split = new SplitText($('.section-2 .text-5 .txt'), {type: 'lines'});
  var section2Man2 = $('.section-2 .man-2');
  var section2Stand4 = $('.section-2 .stand-4');
  var section2Mask = $('.section-2 .bg-mask-3');
  var section2Man2TL = new TimelineMax({yoyo: true});
  section2Text5Split.revert();
  section2Text5Split = section2Text5Split.split({type: 'lines'});
  section2Man2TL
    .fromTo(section2Stand4, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section2Man2, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .to(section2Mask, 0.6,
      {
        scaleX: 0,
        transformOrigin: 'right center',
        ease: Power2.easeOut
      }, '-=0.5')
    .staggerFrom(section2Text5Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');
  return section2Man2TL;
}

function section2Baby() {
  var section2Text6Split = new SplitText($('.section-2 .text-6 .txt'), {type: 'lines'});
  var section2Baby = $('.section-2 .baby');
  var section2Stand5 = $('.section-2 .stand-5');
  var section2Text6Dot = $('.section-2 .text-6 .dot');
  var section2Text6Dash = $('.section-2 .text-6 .dash line');
  var section2BabyTL = new TimelineMax({yoyo: true});
  section2Text6Split.revert();
  section2Text6Split = section2Text6Split.split({type: 'lines'});
  section2BabyTL
    .fromTo(section2Stand5, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section2Baby, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .from(section2Text6Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, '-=0.4')
    .to(section2Text6Dash, 0.6,
      {
        attr: {
          x2: 0.5
        },
        ease: Power2.easeOut
      }, '-=0.3')
    .staggerFrom(section2Text6Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '-=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');
  return section2BabyTL;
}

function section2BabyMobile() {
  var section2Text6Split = new SplitText($('.section-2 .text-6 .txt'), {type: 'lines'});
  var section2Baby = $('.section-2 .baby');
  var section2Stand5 = $('.section-2 .stand-5');
  var section2BabyTL = new TimelineMax({yoyo: true});
  section2Text6Split.revert();
  section2Text6Split = section2Text6Split.split({type: 'lines'});
  section2BabyTL
    .fromTo(section2Stand5, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section2Baby, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .staggerFrom(section2Text6Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '-=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');
  return section2BabyTL;
}

function section2Service() {
  var section2Text7Split = new SplitText($('.section-2 .text-7 .txt'), {type: 'lines'});
  var section2Service = $('.section-2 .service');
  var section2Stand6 = $('.section-2 .stand-6');
  var section2Text7Dot = $('.section-2 .text-7 .dot');
  var section2Text7Dash = $('.section-2 .text-7 .dash line');
  var section2ServiceTL = new TimelineMax({yoyo: true});
  section2Text7Split.revert();
  section2Text7Split = section2Text7Split.split({type: 'lines'});
  section2ServiceTL
    .fromTo(section2Stand6, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section2Service, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .from(section2Text7Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, '-=0.4')
    .to(section2Text7Dash, 0.6,
      {
        attr: {
          x2: 234
        },
        ease: Power2.easeOut
      }, '-=0.3')
    .staggerFrom(section2Text7Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');
  return section2ServiceTL;
}

function section2ServiceMobile() {
  var section2Text7Split = new SplitText($('.section-2 .text-7 .txt'), {type: 'lines'});
  var section2Service = $('.section-2 .service');
  var section2Stand6 = $('.section-2 .stand-6');
  var section2Mask = $('.section-2 .bg-mask-4');
  var section2ServiceTL = new TimelineMax({yoyo: true});
  section2Text7Split.revert();
  section2Text7Split = section2Text7Split.split({type: 'lines'});
  section2ServiceTL
    .fromTo(section2Stand6, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section2Service, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .to(section2Mask, 0.6,
      {
        scaleX: 0,
        transformOrigin: 'left center',
        ease: Power2.easeOut
      }, '-=0.5')
    .staggerFrom(section2Text7Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');
  return section2ServiceTL;
}

function section2Aetna() {
  var section2Text8Split = new SplitText($('.section-2 .text-8 .txt'), {type: 'lines'});
  var section2Aetna = $('.section-2 .aetna');
  var section2Stand7 = $('.section-2 .stand-7');
  var section2Text8Dot = $('.section-2 .text-8 .dot');
  var section2Text8Dash = $('.section-2 .text-8 .dash line');
  var section2AetnaTL = new TimelineMax({yoyo: true});
  section2Text8Split.revert();
  section2Text8Split = section2Text8Split.split({type: 'lines'});
  section2AetnaTL
    .fromTo(section2Stand7, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section2Aetna, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .from(section2Text8Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, '-=0.4')
    .to(section2Text8Dash, 0.6,
      {
        attr: {
          x2: 0.5
        },
        ease: Power2.easeOut
      }, '-=0.3')
    .staggerFrom(section2Text8Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '-=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');
  return section2AetnaTL;
}

function section2AetnaMobile() {
  var section2Text8Split = new SplitText($('.section-2 .text-8 .txt'), {type: 'lines'});
  var section2Aetna = $('.section-2 .aetna');
  var section2Stand7 = $('.section-2 .stand-7');
  var section2AetnaTL = new TimelineMax({yoyo: true});
  section2Text8Split.revert();
  section2Text8Split = section2Text8Split.split({type: 'lines'});
  section2AetnaTL
    .fromTo(section2Stand7, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section2Aetna, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .staggerFrom(section2Text8Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '-=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');
  return section2AetnaTL;
}

function section3Animation() {
  var section3CaptionSplit = new SplitText($('.section-3 .caption'), {type: 'chars'});
  var section3ItemH3Split = new SplitText($('.section-3 .privilege-item .text'), {type: 'lines'});
  var section3Mask = $('.section-3 .bg-mask');
  var section3Circle = $('.section-3 .circle');
  var section3TL = new TimelineMax({yoyo: true});
  section3CaptionSplit.revert();
  section3CaptionSplit = section3CaptionSplit.split({type: 'chars'});
  section3ItemH3Split.revert();
  section3ItemH3Split = section3ItemH3Split.split({type: 'lines'});
  section3TL
    .staggerFrom(section3CaptionSplit.chars, 0.8,
      {
        autoAlpha: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: Back.easeOut
      }, 0.01)
    .to(section3Mask, 0.7,
      {
        scaleY: 0,
        ease: Power2.easeOut
      }, '-=0.4')
    .staggerFromTo(section3Circle, 1,
      {
        rotationY: 90,
        autoAlpha: 0
      }, {
        rotationY: 0,
        autoAlpha: 1,
        ease: Back.easeOut
      }, 0.2, '-=0.3')
    .staggerFromTo(section3ItemH3Split.lines, 0.5,
      {
        y: '+=30',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Back.easeOut
      }, 0.15, '-=1.5');
  return section3TL;
}

function section3AnimationMobile() {
  var section3CaptionSplit = new SplitText($('.section-3 .caption'), {type: 'lines'});
  var section3ItemH3Split = new SplitText($('.section-3 .privilege-item .text'), {type: 'lines'});
  var section3Mask = $('.section-3 .bg-mask');
  var section3Circle = $('.section-3 .circle');
  var section3TL = new TimelineMax({yoyo: true});
  section3CaptionSplit.revert();
  section3CaptionSplit = section3CaptionSplit.split({type: 'lines'});
  section3ItemH3Split.revert();
  section3ItemH3Split = section3ItemH3Split.split({type: 'lines'});
  section3TL
    .staggerFrom(section3CaptionSplit.lines, 0.6,
      {
        autoAlpha: 0,
        y: '+=60',
        ease: Back.easeOut
      }, 0.1)
    .to(section3Mask, 0.7,
      {
        scaleY: 0,
        ease: Power2.easeOut
      }, '-=0.4')
    .staggerFromTo(section3Circle, 1,
      {
        rotationY: 90,
        autoAlpha: 0
      }, {
        rotationY: 0,
        autoAlpha: 1,
        ease: Back.easeOut
      }, 0.2, '-=0.3')
    .staggerFromTo(section3ItemH3Split.lines, 0.5,
      {
        y: '+=30',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Back.easeOut
      }, 0.15, '-=1.5');
  return section3TL;
}

function section4Animation() {
  var section4Box = $('.section-4 .group-text .box');
  var section4H2 = $('.section-4 .group-text h2');
  var section4H4 = $('.section-4 .group-text h4');
  var section4TL = new TimelineMax({yoyo: true});
  section4TL
    .fromTo(section4Box, 0.7,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section4H2, 0.7,
      {
        rotationX: 90,
        autoAlpha: 0
      }, {
        rotationX: 0,
        autoAlpha: 1,
        ease: Back.easeOut
      }, '-=0.5')
    .fromTo(section4H4, 0.7,
      {
        rotationX: 90,
        autoAlpha: 0
      }, {
        rotationX: 0,
        autoAlpha: 1,
        ease: Back.easeOut
      }, '-=0.4');
  return section4TL;
}

function section4Customer() {
  var section4Text1Split = new SplitText($('.section-4 .text-1 .txt'), {type: 'lines'});
  var section4Customer = $('.section-4 .customer');
  var section4Stand1 = $('.section-4 .stand-1');
  var section4Text1Dot = $('.section-4 .text-1 .dot');
  var section4Text1Dash = $('.section-4 .text-1 .dash line');
  var section4CustomerTL = new TimelineMax({yoyo: true});
  section4Text1Split.revert();
  section4Text1Split = section4Text1Split.split({type: 'lines'});
  section4CustomerTL
    .fromTo(section4Stand1, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section4Customer, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .from(section4Text1Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, '-=0.4')
    .to(section4Text1Dash, 0.6,
      {
        attr: {
          x2: 288
        },
        ease: Power2.easeOut
      }, '-=0.3')
    .staggerFrom(section4Text1Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');

  return section4CustomerTL;
}

function section4CustomerMobile() {
  var section4Text1Split = new SplitText($('.section-4 .text-1 .txt'), {type: 'lines'});
  var section4Customer = $('.section-4 .customer');
  var section4Stand1 = $('.section-4 .stand-1');
  var section4Text1Dot = $('.section-4 .text-1 .dot');
  var section4Text1Dash = $('.section-4 .text-1 .dash line');
  var section4CustomerTL = new TimelineMax({yoyo: true});
  section4Text1Split.revert();
  section4Text1Split = section4Text1Split.split({type: 'lines'});
  section4CustomerTL
    .fromTo(section4Stand1, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section4Customer, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .from(section4Text1Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, '-=0.4')
    .to(section4Text1Dash, 0.6,
      {
        attr: {
          x2: 288
        },
        ease: Power2.easeOut
      }, '-=0.3')
    .staggerFrom(section4Text1Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '+=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');

  return section4CustomerTL;
}

function section4Staff() {
  var section4Text2Split = new SplitText($('.section-4 .text-2 .txt'), {type: 'lines'});
  var section4Staff = $('.section-4 .staff');
  var section4Stand2 = $('.section-4 .stand-2');
  var section4Text2Dot = $('.section-4 .text-2 .dot');
  var section4Text2Dash = $('.section-4 .text-2 .dash line');
  var section4StaffTL = new TimelineMax({yoyo: true});
  section4Text2Split.revert();
  section4Text2Split = section4Text2Split.split({type: 'lines'});
  section4StaffTL
    .fromTo(section4Stand2, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section4Staff, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .from(section4Text2Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, '-=0.4')
    .to(section4Text2Dash, 0.6,
      {
        attr: {
          x2: 0.5
        },
        ease: Power2.easeOut
      }, '-=0.3')
    .staggerFrom(section4Text2Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '-=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');

  return section4StaffTL;
}

function section4StaffMobile() {
  var section4Text2Split = new SplitText($('.section-4 .text-2 .txt'), {type: 'lines'});
  var section4Staff = $('.section-4 .staff');
  var section4Stand2 = $('.section-4 .stand-2');
  var section4Text2Dot = $('.section-4 .text-2 .dot');
  var section4Text2Dash = $('.section-4 .text-2 .dash line');
  var section4StaffTL = new TimelineMax({yoyo: true});
  section4Text2Split.revert();
  section4Text2Split = section4Text2Split.split({type: 'lines'});
  section4StaffTL
    .fromTo(section4Stand2, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section4Staff, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .from(section4Text2Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, '-=0.4')
    .to(section4Text2Dash, 0.6,
      {
        attr: {
          x2: 0.5
        },
        ease: Power2.easeOut
      }, '-=0.3')
    .staggerFrom(section4Text2Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '-=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');

  return section4StaffTL;
}

function section4Support() {
  var section4Text3Split = new SplitText($('.section-4 .text-3 .txt'), {type: 'lines'});
  var section4Support = $('.section-4 .support');
  var section4Stand3 = $('.section-4 .stand-3');
  var section4Text3Dot = $('.section-4 .text-3 .dot');
  var section4Text3Dash = $('.section-4 .text-3 .dash line');
  var section4SupportTL = new TimelineMax({yoyo: true});
  section4Text3Split.revert();
  section4Text3Split = section4Text3Split.split({type: 'lines'});
  section4SupportTL
    .fromTo(section4Stand3, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section4Support, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .from(section4Text3Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, '-=0.4')
    .to(section4Text3Dash, 0.6,
      {
        attr: {
          x2: 210
        },
        ease: Power2.easeOut
      }, '-=0.3')
    .staggerFrom(section4Text3Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '-=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');

  return section4SupportTL;
}

function section4SupportMobile() {
  var section4Text3Split = new SplitText($('.section-4 .text-3 .txt'), {type: 'lines'});
  var section4Support = $('.section-4 .support');
  var section4Stand3 = $('.section-4 .stand-3');
  var section4Text3Dot = $('.section-4 .text-3 .dot');
  var section4Text3Dash = $('.section-4 .text-3 .dash line');
  var section4SupportTL = new TimelineMax({yoyo: true});
  section4Text3Split.revert();
  section4Text3Split = section4Text3Split.split({type: 'lines'});
  section4SupportTL
    .fromTo(section4Stand3, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section4Support, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .from(section4Text3Dot, 0.4,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
      }, '-=0.4')
    .to(section4Text3Dash, 0.6,
      {
        attr: {
          x2: 210
        },
        ease: Power2.easeOut
      }, '-=0.3')
    .staggerFrom(section4Text3Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '-=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');

  return section4SupportTL;
}

function section5Mask() {
  var section5Mask = $('.section-5 .bg-mask');
  var section5MaskTL = new TimelineMax({yoyo: true});
  section5MaskTL
    .to(section5Mask, 1,
      {
        scaleY: 0,
        transformOrigin: 'center bottom',
        ease: Power2.easeOut
      });
  return section5MaskTL;
}

function section5Animation() {
  var section5Box = $('.section-5 .group-text .box');
  var section5H2 = $('.section-5 .group-text h2');
  var section5H4 = $('.section-5 .group-text h4');

  var section5TL = new TimelineMax({yoyo: true});
  section5TL
    .fromTo(section5Box, 0.7,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section5H2, 0.7,
      {
        rotationX: 90,
        autoAlpha: 0
      }, {
        rotationX: 0,
        autoAlpha: 1,
        ease: Back.easeOut
      }, '-=0.5')
    .fromTo(section5H4, 0.7,
      {
        rotationX: 90,
        autoAlpha: 0
      }, {
        rotationX: 0,
        autoAlpha: 1,
        ease: Back.easeOut
      }, '-=0.4');
  return section5TL;
}

function section5AnimationMobile() {
  var section5Box = $('.section-5 .group-text .box');
  var section5H2 = $('.section-5 .group-text h2');
  var section5H4 = $('.section-5 .group-text h4');

  var section5TL = new TimelineMax({yoyo: true});
  section5TL
    .fromTo(section5Box, 0.7,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section5H2, 0.7,
      {
        rotationX: 90,
        autoAlpha: 0
      }, {
        rotationX: 0,
        autoAlpha: 1,
        ease: Back.easeOut
      }, '-=0.5')
    .fromTo(section5H4, 0.7,
      {
        rotationX: 90,
        autoAlpha: 0
      }, {
        rotationX: 0,
        autoAlpha: 1,
        ease: Back.easeOut
      }, '-=0.4');
  return section5TL;
}

function section5Money1() {
  var section5Text1Split = new SplitText($('.section-5 .text-1'), {type: 'lines'});
  var section5Money1 = $('.section-5 .money-1');
  var section5Stand1 = $('.section-5 .stand-1');
  var section5Money1TL = new TimelineMax({yoyo: true});
  section5Text1Split.revert();
  section5Text1Split = section5Text1Split.split({type: 'lines'});
  section5Money1TL
    .fromTo(section5Stand1, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section5Money1, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .staggerFrom(section5Text1Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '-=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');

  return section5Money1TL;
}

function section5Money1Mobile() {
  var section5Text1Split = new SplitText($('.section-5 .text-1'), {type: 'lines'});
  var section5Money1 = $('.section-5 .money-1');
  var section5Stand1 = $('.section-5 .stand-1');
  var section5Money1TL = new TimelineMax({yoyo: true});
  section5Text1Split.revert();
  section5Text1Split = section5Text1Split.split({type: 'lines'});
  section5Money1TL
    .fromTo(section5Stand1, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section5Money1, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .staggerFrom(section5Text1Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '-=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');

  return section5Money1TL;
}

function section5Money2() {
  var section5Text2Split = new SplitText($('.section-5 .text-2'), {type: 'lines'});
  var section5Money2 = $('.section-5 .money-2');
  var section5Stand2 = $('.section-5 .stand-2');
  var section5Money2TL = new TimelineMax({yoyo: true});
  section5Text2Split.revert();
  section5Text2Split = section5Text2Split.split({type: 'lines'});
  section5Money2TL
    .fromTo(section5Stand2, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section5Money2, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .staggerFrom(section5Text2Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '-=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');

  return section5Money2TL;
}

function section5Money2Mobile() {
  var section5Text2Split = new SplitText($('.section-5 .text-2'), {type: 'lines'});
  var section5Money2 = $('.section-5 .money-2');
  var section5Stand2 = $('.section-5 .stand-2');
  var section5Money2TL = new TimelineMax({yoyo: true});
  section5Text2Split.revert();
  section5Text2Split = section5Text2Split.split({type: 'lines'});
  section5Money2TL
    .fromTo(section5Stand2, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Back.easeOut
      })
    .fromTo(section5Money2, 0.6,
      {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        ease: Power3.easeOut
      }, '-=0.4')
    .staggerFrom(section5Text2Split.lines, 0.6,
      {
        autoAlpha: 0,
        x: '-=100',
        ease: Back.easeOut.config(1)
      }, 0.2, '-=0.4');

  return section5Money2TL;
}