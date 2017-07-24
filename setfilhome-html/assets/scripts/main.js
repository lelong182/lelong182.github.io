(function ($) {

  "use strict";

  // function openMenu() {
  //     $('#mainSideNav').width(250);
  //     $('#openMenuIcon').addClass('hidden');
  //     $('#closeMenuIcon').removeClass('hidden');
  // }
  //
  // function closeMenu() {
  //     $('#mainSideNav').width(0);
  //     $('#openMenuIcon').removeClass('hidden');
  //     $('#closeMenuIcon').addClass('hidden');
  // }

  function homePageSlide() {
    var slider = new MasterSlider();
    slider.setup('masterslider', {
      speed: 5,
      layout: 'autofill',
      autoplay: true,
      grabCursor: false,
      loop: true,
      view: "scale",
      filters: {
        grayscale: 1.5,
        opacity: 0.5,
        brightness: 2,
        blur: 10
      }
    });
    return slider;
  }

  function productsSlide() {
    var slider = new MasterSlider();

    slider.control('arrows');
    slider.control('lightbox');
    slider.control('thumblist', {
      autohide: false,
      dir: 'h',
      align: 'bottom',
      width: 130,
      height: 85,
      margin: 5,
      space: 5,
      hideUnder: 400
    });

    slider.setup('productMasterslider', {
      width: 1000,
      height: 500,
      fullwidth: true,
      space: 5,
      loop: true,
      view: 'fade',
      autoplay: true
    });
  }

  function projectGallery() {
    $("#gallery").unitegallery({
      gallery_theme: "tiles",
      tiles_type: "justified",
      gallery_min_width: 250,
      tiles_justified_row_height: 300,
      tiles_align: "center",	                //align of the tiles in the space
      tiles_space_between_cols: 1,			//space between images
      tiles_exact_width: false,				//exact width of column - disables the min and max columns
      tiles_space_between_cols_mobile: 1,     //space between cols for mobile type
      tiles_include_padding: false,			//include padding at the sides of the columns, equal to current space between cols
      tiles_min_columns: 1,					//min columns
      tiles_max_columns: 4,					//max columns (0 for unlimited)
      tiles_set_initial_height: true,			//columns type related only
      tiles_enable_transition: true,		    //enable transition when screen width change
      tile_overlay_opacity: 0.3,
      tile_enable_icons: false,
      tile_enable_image_effect: false,

      tile_enable_action: false,			    //enable tile action on click like lightbox
      tile_as_link: true,				        //act the tile as link, no lightbox will appear
      tile_link_newpage: false,			    //open the tile link in new page

      tile_enable_overlay: true,
      tile_enable_textpanel: true,		 	//enable textpanel
      tile_textpanel_source: "description",	//title,desc,desc_title. source of the textpanel. desc_title - if description empty, put title
      tile_textpanel_always_on: false,	 	//textpanel always visible
      tile_textpanel_position: "inside_center",//inside_bottom, inside_top, inside_center, top, bottom the position of the textpanel

      tile_textpanel_padding_top: 8,		 	//textpanel padding top
      tile_textpanel_padding_bottom: 20,	 	//textpanel padding bottom
      tile_textpanel_padding_right: 0,	 	//cut some space for text from right
      tile_textpanel_padding_left: 0,	 	//cut some space for text from left
      tile_textpanel_bg_opacity: 0.4,		 	//textpanel background opacity
      tile_textpanel_bg_color: "transparent",	//textpanel background color
      tile_textpanel_bg_css: {},			 	//textpanel background css

      tile_textpanel_title_color: null,		//textpanel title color. if null - take from css
      tile_textpanel_title_font_family: null,	//textpanel title font family. if null - take from css
      tile_textpanel_title_text_align: 'center',	 //textpanel title text align. if null - take from css
      tile_textpanel_title_font_size: 16,	    //textpanel title font size. if null - take from css
      tile_textpanel_title_bold: null			//textpanel title bold. if null - take from css
    });
  }

  function fullPageScroll() {
    $('#homePage').fullpage({
      verticalCentered: true
      // sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
      // sectionSelector: '.vertical-scrolling',
      // slideSelector: '.horizontal-scrolling',
      // navigation: true,
      // slidesNavigation: true,
      // controlArrows: false,
      // anchors: ['home', 'content'],
      // menu: '#menu',

      // afterRender: function () {
      //     setInterval(function () {
      //         $.fn.fullpage.moveSlideRight();
      //     }, 3000);
      // }

      // afterLoad: function(anchorLink, index) {
      //   $header_top.css('background', 'rgba(0, 47, 77, .3)');
      //   $nav.css('background', 'rgba(0, 47, 77, .25)');
      //   if (index == 5) {
      //       $('#fp-nav').hide();
      //     }
      // },

      // onLeave: function(index, nextIndex, direction) {
      //   if(index == 5) {
      //     $('#fp-nav').show();
      //   }
      // },

      // afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
      //     if (anchorLink == 'fifthSection' && slideIndex == 1) {
      //         $.fn.fullpage.setAllowScrolling(false, 'up');
      //         // $header_top.css('background', 'transparent');
      //         // $nav.css('background', 'transparent');
      //         // $(this).css('background', '#374140');
      //         // $(this).find('h2').css('color', 'white');
      //         // $(this).find('h3').css('color', 'white');
      //         // $(this).find('p').css(
      //         //   {
      //         //     'color': '#DC3522',
      //         //     'opacity': 1,
      //         //     'transform': 'translateY(0)'
      //         //   }
      //         // );
      //     }
      // },

      // onSlideLeave: function (anchorLink, index, slideIndex, direction) {
      //     if (anchorLink == 'fifthSection' && slideIndex == 1) {
      //         $.fn.fullpage.setAllowScrolling(true, 'up');
      //         // $header_top.css('background', 'rgba(0, 47, 77, .3)');
      //         // $nav.css('background', 'rgba(0, 47, 77, .25)');
      //     }
      // }
    });
  }

  window.loading_screen = window.pleaseWait({
    logo: "",
    backgroundColor: '#fff',
    loadingHtml: '<div id="loading"><div id="loading-center"><div id="loading-center-absolute"><div class="object" id="first_object"></div><div class="object" id="second_object"></div> <div class="object" id="third_object"></div> </div></div></div>'
  });

  $(window).on('load', function () {
    window.loading_screen.finish();
    $('body').css('opacity', 1);
  });

  $(document).ready(function () {
    // Home page slider
    // homePageSlide();

    /**start*************SLIDE MENU***************/
    $('.left-content').click(function () {
      $('#nav-icon4').toggleClass('open');
      if ($('#nav-icon4').hasClass('open')) {
        $('#mainSideNav').width(250);
      } else {
        $('#mainSideNav').width(0);
      }
    });
    /**end*************SLIDE MENU***************/

    /**start*************HOME PAGE***************/
    if ($('#homePage').length > 0) {
      fullPageScroll();
    }
    /**end*************HOME PAGE***************/

    /**start*************PROJECTS PAGE***************/
    // if ($('#grid-gallery').length > 0) {
    //     new CBPGridGallery(document.getElementById('grid-gallery'));
    // }

    if ($('#gallery').length > 0) {
      $(window).on('load', function () {
        projectGallery();
      });
    }

    /**end*************PRODUCT PAGE***************/
    $('#productsPage .products-img .img-wrapper').click(function (e) {
      if (Modernizr.mq("screen and (max-width:859px)")) {
        return;
      }
      var index;

      if (e.target != this) {
        index = $(e.target).closest('.img-wrapper').data('index');
      } else {
        index = $(e.target).data('index');
      }

      $('#productsPage .products-img .preview').removeClass('open');
      $('#productsPage .products-img .preview[data-index="' + index + '"]').addClass('open');
      if (index === 2 || index === 3 || index === 6 || index === 7) {
        $('#productsPage .products-img .preview[data-index="' + index + '"]').css('left', '25%');
      }
      if (index === 4 || index === 8) {
        $('#productsPage .products-img .preview[data-index="' + index + '"]').css('left', '50%');
      }
    });

    $('#productsPage .products-img .preview .btn-close').click(function (e) {
      var currPreview = $(e.target).closest('.preview');
      var index = currPreview.data('index');

      currPreview.removeClass('open');
    });

    $(document).click(function (e) {
      if (e.target.className != "img-wrapper"
        && e.target.className != "img-item"
        && e.target.className != "material-icons icon-search"
        && e.target.className != "title product-img-title"
        && e.target.className != "preview"
        && e.target.className != "preview-img") {
        var currPreview = $('.preview');
        currPreview.removeClass('open');
      }
    });

    $('#aboutusPage .social-network .follow-us').click(function (e) {
      $(e.target).addClass('hidden');
      $('#aboutusPage .social-network .network').css('visibility', 'visible').css('opacity', 1);
    });
    /**start*************HOME PAGE***************/

    /**end*************PRODUCT PAGE***************/
  });
})(window.jQuery);
