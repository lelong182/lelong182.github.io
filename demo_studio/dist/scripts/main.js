function getBgUrl(o){return(o.currentStyle?o.currentStyle.backgroundImage:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(o,"").backgroundImage:o.style.backgroundImage).replace(/url\(['"]?(.*?)['"]?\)/i,"$1")}function backgroundLoaded(o,e){function t(o,e,t){if(!(t=t||!1)){var a=$(window).width(),i=$(window).height(),n=$(".content ."+o);switch(n.data("type")){case"bottom":TweenMax.fromTo(n,1,{y:i,opacity:1,zIndex:++defaultZIndex},{y:0,ease:Power3.easeIn,delay:.3});break;case"right":TweenMax.fromTo(n,1,{x:a,opacity:1,zIndex:++defaultZIndex},{x:0,ease:Power3.easeIn,delay:.3});break;case"scale":TweenMax.fromTo(n,1,{opacity:0,zIndex:++defaultZIndex},{opacity:1,ease:Power3.easeIn}),TweenMax.fromTo(n.find(".main-bg"),10,{scale:1.4},{scale:1,ease:Power0.easeNone,delay:.3})}}"function"==typeof e&&e()}var a={home:root+"/images/photography-slide-one.jpg",portfolio:root+"/images/portfolio-slide-two.jpg","portfolio-1":root+"/images/slide-portfolio-one.jpg","portfolio-2":root+"/images/slide-portfolio-two.jpg","portfolio-3":root+"/images/slide-portfolio-three.jpg","portfolio-4":root+"/images/slide-portfolio-four.jpg","portfolio-5":root+"/images/slide-portfolio-five.jpg","portfolio-6":root+"/images/slide-portfolio-six.jpg",about:root+"/images/ABOUT-SLIDE-IMAGE.jpg",contact:root+"/images/CONTACT-SLIDE-IMAGE.jpg"};if(o.indexOf("portfolio-")>=0&&$(".list-portfolio-mini .portfolio-item").each(function(){var o=$(this).data("value");$(this).html('<img src="'+a[o]+'" alt="img" />')}),"none"===$(".content ."+o+" .main-bg").css("background-image")){var i=!1;$(".content ."+o+" .main-bg").css("background-image","url("+a[o]+")");var n=document.createElement("img");n.src=getBgUrl(document.getElementById(o+"-bg")),n.onload=function(){"home"===o&&(TweenMax.to($(".content ."+o),.5,{opacity:1,ease:Power2.easeOut}),i=!0),t(o,e,i)}}else t(o,e)}function handleHomeAnimation(o,e){o=o||!1,e=e||0;var t=$(".home .wrap .gray-text"),a=$(".home .wrap .white-text"),i=$(".home .wrap .primary-text"),n=$(".home .wrap .primary-btn");o?(TweenMax.fromTo(t,1,{scaleY:1},{scaleY:0,ease:Power3.easeIn}),TweenMax.fromTo(a,1,{top:0},{top:"+=100",ease:Power3.easeIn}),TweenMax.fromTo(i,1,{top:0},{top:"+=100",ease:Power3.easeIn}),TweenMax.fromTo(n,1,{top:0},{top:"+=100",ease:Power3.easeIn}),setTimeout(function(){$(".home .group-text").css("visibility","hidden")},1200)):($(".home .group-text").css("visibility","visible"),$(".content .home").addClass("active"),(new TimelineMax).fromTo(t,.8,{scaleY:0},{scaleY:1,ease:Power4.easeOut},"+"+e).fromTo(a,1.2,{top:"+=150",autoAlpha:0},{top:0,autoAlpha:1,ease:Power4.easeOut},"-=1.2").fromTo(i,1.2,{top:"+=150",autoAlpha:0},{top:0,autoAlpha:1,ease:Power4.easeOut},"-=1").fromTo(n,1.5,{top:"+=100"},{top:0,ease:Power4.easeOut},"-=1.8"))}function handlePortfolioAnimation(o,e){o=o||!1,e=e||0;var t=$(".portfolio .wrap .size-2"),a=$(".portfolio .wrap .size-1"),i=$(".portfolio .portfolio-item img");o?(TweenMax.fromTo(t,1,{top:0},{top:"+=150",ease:Power3.easeIn}),TweenMax.fromTo(a,1,{top:0},{top:"+=100",ease:Power3.easeIn}),TweenMax.fromTo(i,1,{y:0},{y:"+=200",ease:Power3.easeIn}),setTimeout(function(){$(".portfolio .group-text").css("visibility","hidden")},1200)):($(".portfolio .group-text").css("visibility","visible"),$(".content .portfolio").addClass("active"),(new TimelineMax).fromTo(t,1.2,{top:"+=150",autoAlpha:0},{top:0,autoAlpha:1,ease:Power4.easeOut},"+"+e).fromTo(a,1,{top:"+=100"},{top:0,ease:Power4.easeOut},"-=1").staggerFromTo(i,.8,{y:"+=200",autoAlpha:0},{y:0,autoAlpha:1,ease:Power4.easeOut},.2,"-=1"))}function handlePortfolio1Animation(o,e){o=o||!1,e=e||0;var t=$(".portfolio-1 .wrap .size-2"),a=$(".portfolio-1 .wrap .size-1"),i=$(".portfolio-1 .wrap .size-3"),n=$(".portfolio-1 .wrap .primary-btn");o?(TweenMax.fromTo(t,1,{top:0},{top:"+=150",ease:Power3.easeIn}),TweenMax.fromTo(a,1,{top:0},{top:"+=100",ease:Power3.easeIn}),TweenMax.fromTo(i,1,{xPercent:0},{xPercent:-100,ease:Power3.easeIn}),TweenMax.fromTo(n,.8,{top:0},{top:"+=100",ease:Power3.easeIn}),setTimeout(function(){$(".portfolio-1 .group-text").css("visibility","hidden")},1200)):($(".portfolio-1 .group-text").css("visibility","visible"),$(".content .portfolio-1").addClass("active"),(new TimelineMax).fromTo(t,1.2,{top:"+=150",autoAlpha:0},{top:0,autoAlpha:1,ease:Power4.easeOut},"+"+e).fromTo(a,1,{top:"+=100"},{top:0,ease:Power4.easeOut},"-=1").fromTo(i,1.5,{xPercent:-100},{xPercent:0,ease:Power4.easeOut},"-=.8").fromTo(n,1.4,{top:"+=100"},{top:0,ease:Power4.easeOut},"-=2"))}function handlePortfolio2Animation(o,e){o=o||!1,e=e||0;var t=$(".portfolio-2 .wrap .size-2"),a=$(".portfolio-2 .wrap .size-1"),i=$(".portfolio-2 .wrap .size-3"),n=$(".portfolio-2 .wrap .primary-btn");o?(TweenMax.fromTo(t,1,{top:0},{top:"+=150",ease:Power3.easeIn}),TweenMax.fromTo(a,1,{top:0},{top:"+=100",ease:Power3.easeIn}),TweenMax.fromTo(i,1,{xPercent:0},{xPercent:-100,ease:Power3.easeIn}),TweenMax.fromTo(n,.8,{top:0},{top:"+=100",ease:Power3.easeIn}),setTimeout(function(){$(".portfolio-2 .group-text").css("visibility","hidden")},1200)):($(".portfolio-2 .group-text").css("visibility","visible"),$(".content .portfolio-2").addClass("active"),(new TimelineMax).fromTo(t,1.2,{top:"+=150",autoAlpha:0},{top:0,autoAlpha:1,ease:Power4.easeOut},"+"+e).fromTo(a,1,{top:"+=100"},{top:0,ease:Power4.easeOut},"-=1").fromTo(i,1.5,{xPercent:-100},{xPercent:0,ease:Power4.easeOut},"-=.8").fromTo(n,1.4,{top:"+=100"},{top:0,ease:Power4.easeOut},"-=2"))}function handlePortfolio3Animation(o,e){o=o||!1,e=e||0;var t=$(".portfolio-3 .wrap .size-2"),a=$(".portfolio-3 .wrap .size-1"),i=$(".portfolio-3 .wrap .size-3"),n=$(".portfolio-3 .wrap .primary-btn");o?(TweenMax.fromTo(t,1,{top:0},{top:"+=150",ease:Power3.easeIn}),TweenMax.fromTo(a,1,{top:0},{top:"+=100",ease:Power3.easeIn}),TweenMax.fromTo(i,1,{xPercent:0},{xPercent:-100,ease:Power3.easeIn}),TweenMax.fromTo(n,.8,{top:0},{top:"+=100",ease:Power3.easeIn}),setTimeout(function(){$(".portfolio-3 .group-text").css("visibility","hidden")},1200)):($(".portfolio-3 .group-text").css("visibility","visible"),$(".content .portfolio-3").addClass("active"),(new TimelineMax).fromTo(t,1.2,{top:"+=150",autoAlpha:0},{top:0,autoAlpha:1,ease:Power4.easeOut},"+"+e).fromTo(a,1,{top:"+=100"},{top:0,ease:Power4.easeOut},"-=1").fromTo(i,1.5,{xPercent:-100},{xPercent:0,ease:Power4.easeOut},"-=.8").fromTo(n,1.4,{top:"+=100"},{top:0,ease:Power4.easeOut},"-=2"))}function handlePortfolio4Animation(o,e){o=o||!1,e=e||0;var t=$(".portfolio-4 .wrap .size-2"),a=$(".portfolio-4 .wrap .size-1"),i=$(".portfolio-4 .wrap .size-3"),n=$(".portfolio-4 .wrap .primary-btn");o?(TweenMax.fromTo(t,1,{top:0},{top:"+=150",ease:Power3.easeIn}),TweenMax.fromTo(a,1,{top:0},{top:"+=100",ease:Power3.easeIn}),TweenMax.fromTo(i,1,{xPercent:0},{xPercent:-100,ease:Power3.easeIn}),TweenMax.fromTo(n,.8,{top:0},{top:"+=100",ease:Power3.easeIn}),setTimeout(function(){$(".portfolio-4 .group-text").css("visibility","hidden")},1200)):($(".portfolio-4 .group-text").css("visibility","visible"),$(".content .portfolio-4").addClass("active"),(new TimelineMax).fromTo(t,1.2,{top:"+=150",autoAlpha:0},{top:0,autoAlpha:1,ease:Power4.easeOut},"+"+e).fromTo(a,1,{top:"+=100"},{top:0,ease:Power4.easeOut},"-=1").fromTo(i,1.5,{xPercent:-100},{xPercent:0,ease:Power4.easeOut},"-=.8").fromTo(n,1.4,{top:"+=100"},{top:0,ease:Power4.easeOut},"-=2"))}function handlePortfolio5Animation(o,e){o=o||!1,e=e||0;var t=$(".portfolio-5 .wrap .size-2"),a=$(".portfolio-5 .wrap .size-1"),i=$(".portfolio-5 .wrap .size-3"),n=$(".portfolio-5 .wrap .primary-btn");o?(TweenMax.fromTo(t,1,{top:0},{top:"+=150",ease:Power3.easeIn}),TweenMax.fromTo(a,1,{top:0},{top:"+=100",ease:Power3.easeIn}),TweenMax.fromTo(i,1,{xPercent:0},{xPercent:-100,ease:Power3.easeIn}),TweenMax.fromTo(n,.8,{top:0},{top:"+=100",ease:Power3.easeIn}),setTimeout(function(){$(".portfolio-5 .group-text").css("visibility","hidden")},1200)):($(".portfolio-5 .group-text").css("visibility","visible"),$(".content .portfolio-5").addClass("active"),(new TimelineMax).fromTo(t,1.2,{top:"+=150",autoAlpha:0},{top:0,autoAlpha:1,ease:Power4.easeOut},"+"+e).fromTo(a,1,{top:"+=100"},{top:0,ease:Power4.easeOut},"-=1").fromTo(i,1.5,{xPercent:-100},{xPercent:0,ease:Power4.easeOut},"-=.8").fromTo(n,1.4,{top:"+=100"},{top:0,ease:Power4.easeOut},"-=2"))}function handlePortfolio6Animation(o,e){o=o||!1,e=e||0;var t=$(".portfolio-6 .wrap .size-2"),a=$(".portfolio-6 .wrap .size-1"),i=$(".portfolio-6 .wrap .size-3"),n=$(".portfolio-6 .wrap .primary-btn");o?(TweenMax.fromTo(t,1,{top:0},{top:"+=150",ease:Power3.easeIn}),TweenMax.fromTo(a,1,{top:0},{top:"+=100",ease:Power3.easeIn}),TweenMax.fromTo(i,1,{yPercent:0},{yPercent:-100,ease:Power3.easeIn}),TweenMax.fromTo(n,.8,{top:0},{top:"+=100",ease:Power3.easeIn}),setTimeout(function(){$(".portfolio-6 .group-text").css("visibility","hidden")},1200)):($(".portfolio-6 .group-text").css("visibility","visible"),$(".content .portfolio-6").addClass("active"),(new TimelineMax).fromTo(t,1.2,{top:"+=150",autoAlpha:0},{top:0,autoAlpha:1,ease:Power4.easeOut},"+"+e).fromTo(a,1,{top:"+=100"},{top:0,ease:Power4.easeOut},"-=1").fromTo(i,1.5,{yPercent:-100},{yPercent:0,ease:Power4.easeOut},"-=.8").fromTo(n,1.4,{top:"+=100"},{top:0,ease:Power4.easeOut},"-=2"))}function handleAboutAnimation(o,e){o=o||!1,e=e||0;var t=$(".about .wrap .text-1"),a=$(".about .wrap .text-2"),i=$(".about .wrap .text-3"),n=$(".about .wrap .text-4"),r=$(".about .wrap .primary-btn");o?(TweenMax.fromTo(t,1,{top:0},{top:"+=100",ease:Power3.easeIn}),TweenMax.fromTo(a,1,{top:0},{top:"+=150",ease:Power3.easeIn}),TweenMax.fromTo(i,1,{top:0},{top:"+=100",ease:Power3.easeIn}),TweenMax.fromTo(n,1,{xPercent:0},{xPercent:-100,ease:Power3.easeIn}),TweenMax.fromTo(r,.8,{top:0},{top:"+=100",ease:Power3.easeIn}),setTimeout(function(){$(".about .group-text").css("visibility","hidden")},1200)):($(".about .group-text").css("visibility","visible"),$(".content .about").addClass("active"),(new TimelineMax).fromTo(t,1,{top:"+=100"},{top:0,ease:Power4.easeOut},"+"+e).fromTo(a,1.2,{top:"+=150",autoAlpha:0},{top:0,autoAlpha:1,ease:Power4.easeOut},"-=.8").fromTo(i,1,{top:"+=100"},{top:0,ease:Power4.easeOut},"-=1").fromTo(n,1.5,{xPercent:-100},{xPercent:0,ease:Power4.easeOut},"-=.8").fromTo(r,1.4,{top:"+=100"},{top:0,ease:Power4.easeOut},"-=2"))}function handleContactAnimation(o,e){o=o||!1,e=e||0;var t=$(".contact .wrap .size-1"),a=$(".contact .wrap .size-2"),i=$(".contact .wrap .size-3"),n=$(".contact .info li");o?(TweenMax.fromTo(t,1,{top:0},{top:"+=100",ease:Power3.easeIn}),TweenMax.fromTo(a,1,{top:0},{top:"+=150",ease:Power3.easeIn}),TweenMax.fromTo(i,1,{xPercent:0},{xPercent:-100,ease:Power3.easeIn}),TweenMax.fromTo(n,1,{xPercent:0},{xPercent:-100,ease:Power3.easeIn}),setTimeout(function(){$(".contact .group-text").css("visibility","hidden")},1200)):($(".contact .group-text").css("visibility","visible"),$(".content .contact").addClass("active"),TweenMax.set(n,{xPercent:0}),(new TimelineMax).fromTo(t,1,{top:"+=100"},{top:0,ease:Power4.easeOut},"+"+e).fromTo(a,1.2,{top:"+=150",autoAlpha:0},{top:0,autoAlpha:1,ease:Power4.easeOut},"-=.8").fromTo(i,1.5,{autoAlpha:0,xPercent:-100},{autoAlpha:1,xPercent:0,ease:Power4.easeOut},"-=.8").staggerFromTo(n,.8,{x:"+=100",autoAlpha:0},{x:0,autoAlpha:1,ease:Power4.easeOut},.2,"-=1.5"))}function handlePortfolioMini(o){o=o||!1;var e=$(".list-portfolio-mini"),t=$(".list-portfolio-mini .portfolio-item img");o?TweenMax.to(e,1,{autoAlpha:0,ease:Power3.easeIn}):(new TimelineMax).fromTo(e,1,{autoAlpha:0,scaleY:.5},{autoAlpha:1,scaleY:1,ease:Power4.easeOut},"+1.2").staggerFromTo(t,.6,{y:"+=50",autoAlpha:0},{y:0,autoAlpha:1,ease:Power4.easeOut},.1,"-=.8")}function handleScroll(o){if(completed){completed=!1;var e,t=$(".menu li.active"),a=t.data("anchor"),i=t.next().data("anchor"),n=t.prev().data("anchor"),r=$('.menu li[data-anchor="portfolio"]'),l=parseInt(r.attr("data-details"));if($(".menu li").removeClass("active"),$(".content li").removeClass("active"),void 0===i&&(i="home"),void 0===n&&(n="contact"),e=o.wheelDelta?o.wheelDelta:-1*o.deltaY,TweenMax.killAll(),e<0){if("portfolio"===a){var s="portfolio-"+ ++l;$(".content ."+s).length?(i=s,r.attr("data-details",l).addClass("active")):$('.menu li[data-anchor="'+i+'"]').addClass("active")}else $('.menu li[data-anchor="'+i+'"]').addClass("active");switch(i){case"home":backgroundLoaded("home",function(){handleHomeAnimation(!1,1),handleContactAnimation(!0),setTimeout(function(){TweenMax.set($(".content li"),{zIndex:0}),defaultZIndex=1,TweenMax.set($(".content .home"),{zIndex:1})},1200)});break;case"portfolio":backgroundLoaded("portfolio",function(){handleHomeAnimation(!0),handlePortfolioAnimation(!1,1.2),$('.menu li[data-anchor="portfolio"]').attr("data-details",0)});break;case"portfolio-1":backgroundLoaded("portfolio-1",function(){handlePortfolioAnimation(!0),handlePortfolio1Animation(!1,1.2),handlePortfolioMini()});break;case"portfolio-2":backgroundLoaded("portfolio-2",function(){handlePortfolio1Animation(!0),handlePortfolio2Animation(!1,1.2)});break;case"portfolio-3":backgroundLoaded("portfolio-3",function(){handlePortfolio2Animation(!0),handlePortfolio3Animation(!1,1.2)});break;case"portfolio-4":backgroundLoaded("portfolio-4",function(){handlePortfolio3Animation(!0),handlePortfolio4Animation(!1,1.2)});break;case"portfolio-5":backgroundLoaded("portfolio-5",function(){handlePortfolio4Animation(!0),handlePortfolio5Animation(!1,1.2)});break;case"portfolio-6":backgroundLoaded("portfolio-6",function(){handlePortfolio5Animation(!0),handlePortfolio6Animation(!1,1.2)});break;case"about":backgroundLoaded("about",function(){handlePortfolio6Animation(!0),handleAboutAnimation(!1,1),handlePortfolioMini(!0)});break;case"contact":backgroundLoaded("contact",function(){handleAboutAnimation(!0),handleContactAnimation(!1,.5)})}}else if(e>0)switch("portfolio"===n&&(n="portfolio-"+l,r.addClass("active")),"portfolio"===a?0===l?$('.menu li[data-anchor="'+n+'"]').addClass("active"):l-1==0?(n="portfolio",r.attr("data-details",0).addClass("active")):(n="portfolio-"+--l,r.attr("data-details",l).addClass("active")):$('.menu li[data-anchor="'+n+'"]').addClass("active"),n){case"home":backgroundLoaded("home",function(){handleHomeAnimation(!1,1),handlePortfolioAnimation(!0),setTimeout(function(){TweenMax.set($(".content li"),{zIndex:0}),defaultZIndex=1,TweenMax.set($(".content .home"),{zIndex:1})},1200)});break;case"portfolio":backgroundLoaded("portfolio",function(){handlePortfolioAnimation(!1,.8),handlePortfolio1Animation(!0),handlePortfolioMini(!0)});break;case"portfolio-1":backgroundLoaded("portfolio-1",function(){handlePortfolio1Animation(!1,.8),handlePortfolio2Animation(!0)});break;case"portfolio-2":backgroundLoaded("portfolio-2",function(){handlePortfolio2Animation(!1,.8),handlePortfolio3Animation(!0)});break;case"portfolio-3":backgroundLoaded("portfolio-3",function(){handlePortfolio3Animation(!1,.8),handlePortfolio4Animation(!0)});break;case"portfolio-4":backgroundLoaded("portfolio-4",function(){handlePortfolio4Animation(!1,.8),handlePortfolio5Animation(!0)});break;case"portfolio-5":backgroundLoaded("portfolio-5",function(){handlePortfolio5Animation(!1,.8),handlePortfolio6Animation(!0)});break;case"portfolio-6":backgroundLoaded("portfolio-6",function(){handlePortfolio6Animation(!1,.8),handleAboutAnimation(!0),handlePortfolioMini()});break;case"about":backgroundLoaded("about",function(){handleAboutAnimation(!1,.8),handleContactAnimation(!0),$('.menu li[data-anchor="portfolio"]').attr("data-details",6)});break;case"contact":backgroundLoaded("contact",function(){handleHomeAnimation(!0),handleContactAnimation(!1,.5)})}setTimeout(function(){completed=!0},2500)}}function handleMenu(){$(document).on("click",".menu li:not(.active) a",function(){TweenMax.killAll();var o=$(this).parent(),e=$(".content li.active").attr("class").split(" ")[0];switch($(".menu li").removeClass("active"),o.addClass("active"),$(".content li").removeClass("active"),e){case"home":handleHomeAnimation(!0);break;case"portfolio":handlePortfolioAnimation(!0);break;case"portfolio-1":handlePortfolio1Animation(!0);break;case"portfolio-2":handlePortfolio2Animation(!0);break;case"portfolio-3":handlePortfolio3Animation(!0);break;case"portfolio-4":handlePortfolio4Animation(!0);break;case"portfolio-5":handlePortfolio5Animation(!0);break;case"portfolio-6":handlePortfolio6Animation(!0);break;case"about":handleAboutAnimation(!0);break;case"contact":handleContactAnimation(!0)}switch(o.data("anchor")){case"home":backgroundLoaded("home",function(){handleHomeAnimation(!1,1.2),handlePortfolioMini(!0),setTimeout(function(){TweenMax.set($(".content li"),{zIndex:0}),defaultZIndex=1,TweenMax.set($(".content .home"),{zIndex:1})},1200)});break;case"portfolio":backgroundLoaded("portfolio",function(){handlePortfolioAnimation(!1,1.2),$('.menu li[data-anchor="portfolio"]').attr("data-details",0)});break;case"about":backgroundLoaded("about",function(){handleAboutAnimation(!1,1),handlePortfolioMini(!0),$('.menu li[data-anchor="portfolio"]').attr("data-details",6)});break;case"contact":backgroundLoaded("contact",function(){handleContactAnimation(!1,.5),handlePortfolioMini(!0)})}})}function handleListPortfolio(){$(document).on("click",".list-portfolio .portfolio-item, .list-portfolio-mini .portfolio-item",function(){TweenMax.killAll();var o=$(this).data("value");switch($(".content li").removeClass("active"),handlePortfolioAnimation(!0),o){case"portfolio-1":backgroundLoaded("portfolio-1",function(){handlePortfolio1Animation(!1,1.2),$('.menu li[data-anchor="portfolio"]').attr("data-details",1)});break;case"portfolio-2":backgroundLoaded("portfolio-2",function(){handlePortfolio2Animation(!1,1.2),$('.menu li[data-anchor="portfolio"]').attr("data-details",2)});break;case"portfolio-3":backgroundLoaded("portfolio-3",function(){handlePortfolio3Animation(!1,1.2),$('.menu li[data-anchor="portfolio"]').attr("data-details",3)});break;case"portfolio-4":backgroundLoaded("portfolio-4",function(){handlePortfolio4Animation(!1,1.2),$('.menu li[data-anchor="portfolio"]').attr("data-details",4)});break;case"portfolio-5":backgroundLoaded("portfolio-5",function(){handlePortfolio5Animation(!1,1.2),$('.menu li[data-anchor="portfolio"]').attr("data-details",5)});break;case"portfolio-6":backgroundLoaded("portfolio-6",function(){handlePortfolio6Animation(!1,1.2),$('.menu li[data-anchor="portfolio"]').attr("data-details",6)})}"hidden"==$(".list-portfolio-mini").css("visibility")&&handlePortfolioMini()})}function handleToPortfolio(){$(document).on("click",".to-portfolio",function(){TweenMax.killAll(),$(".menu li").removeClass("active"),$('.menu li[data-anchor="portfolio"]').addClass("active"),$(".content li").removeClass("active"),backgroundLoaded("portfolio",function(){handleHomeAnimation(!0),handlePortfolioAnimation(!1,1.2),$('.menu li[data-anchor="portfolio"]').attr("data-details",0)})})}function handleBackToOverview(){$(document).on("click",".back-to-overview",function(){TweenMax.killAll();var o=$(".content li.active").attr("class").split(" ")[0];switch($(".content li").removeClass("active"),o){case"portfolio":handlePortfolioAnimation(!0);break;case"portfolio-1":handlePortfolio1Animation(!0);break;case"portfolio-2":handlePortfolio2Animation(!0);break;case"portfolio-3":handlePortfolio3Animation(!0);break;case"portfolio-4":handlePortfolio4Animation(!0);break;case"portfolio-5":handlePortfolio5Animation(!0);break;case"portfolio-6":handlePortfolio6Animation(!0)}backgroundLoaded("portfolio",function(){handlePortfolioAnimation(!1,1.2),handlePortfolioMini(!0),$('.menu li[data-anchor="portfolio"]').attr("data-details",0)})})}function handleToHome(){$(document).on("click",".logo a",function(){TweenMax.killAll();var o=$(".content li.active").attr("class").split(" ")[0];if("home"===o)return!1;switch($(".menu li").removeClass("active"),$('.menu li[data-anchor="home"]').addClass("active"),$(".content li").removeClass("active"),o){case"portfolio":handlePortfolioAnimation(!0);break;case"portfolio-1":handlePortfolio1Animation(!0);break;case"portfolio-2":handlePortfolio2Animation(!0);break;case"portfolio-3":handlePortfolio3Animation(!0);break;case"portfolio-4":handlePortfolio4Animation(!0);break;case"portfolio-5":handlePortfolio5Animation(!0);break;case"portfolio-6":handlePortfolio6Animation(!0);break;case"about":handleAboutAnimation(!0);break;case"contact":handleContactAnimation(!0)}backgroundLoaded("home",function(){handleHomeAnimation(!1,1.2),handlePortfolioMini(!0),setTimeout(function(){TweenMax.set($(".content li"),{zIndex:0}),defaultZIndex=1,TweenMax.set($(".content .home"),{zIndex:1})},1200)})})}!function(o){"use strict";o(document).ready(function(){var e={"portfolio-1":root+"/images/slide-portfolio-one.jpg","portfolio-2":root+"/images/slide-portfolio-two.jpg","portfolio-3":root+"/images/slide-portfolio-three.jpg","portfolio-4":root+"/images/slide-portfolio-four.jpg","portfolio-5":root+"/images/slide-portfolio-five.jpg","portfolio-6":root+"/images/slide-portfolio-six.jpg"};o(".list-portfolio .portfolio-item").each(function(){var t=o(this).data("value");o(this).html('<img src="'+e[t]+'" alt="img" />')}),backgroundLoaded("home",function(){handleHomeAnimation(!1,.4)}),o(this).on("click",".menu-btn",function(){o(this).hasClass("opened")?(o(this).removeClass("opened"),o(".menu").removeClass("open")):(o(this).addClass("opened"),o(".menu").addClass("open"))}),handleMenu(),document.body.addEventListener("wheel",handleScroll),o(this).on("mouseover",".list-portfolio .portfolio-item",function(){o(this).addClass("hover")}).on("mouseout",".list-portfolio .portfolio-item",function(){o(".list-portfolio .portfolio-item").removeClass("hover")}),handleListPortfolio(),handleBackToOverview(),handleToHome(),handleToPortfolio()})}(window.jQuery);var completed=!0,defaultZIndex=0;