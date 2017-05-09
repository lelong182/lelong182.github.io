(function ($) {

  "use strict";

  // window.loading_screen = window.pleaseWait({
  //     logo: "dist/images/logo.png",
  //     backgroundColor: '#fff',
  //     loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
  // });
  //
  // $(window).on('load', function () {
  //     window.loading_screen.finish();
  //     $('body').css('opacity', 1);
  // });

  $(document).ready(function () {

    /* =================================
     ===  Custom Select                 ====
     =================================== */
    customSelect();

    /* =================================
     ===  Clients                 ====
     =================================== */
    homeClients();


    /* =================================
     ===  Hide List Location                 ====
     =================================== */
    $(this).on('mouseup', 'body', function (event) {
      if (!$('.list-location').is(event.target) && $('.list-location').has(event.target).length === 0 && !$('.wrap-search-location .custom-input').is(event.target)) {
        $('.list-location').removeClass('open');
        $('.location-item').remove();
      }
    });


    /* =================================
     ===  Create Service - Add more                 ====
     =================================== */
    $(this).on('click', '.paap-service .add-coupon-btn', function () {
      var row_tmp = $('.coupon-row-tmp.hidden').clone();
      row_tmp.removeClass('hidden');
      $('.coupon-row-tmp.hidden').after(row_tmp);
    });
    $(this).on('click', '.paap-service .add-vehicle-btn', function () {
      var row_tmp = $('.vehicle-row-tmp.hidden').clone();
      row_tmp.removeClass('hidden');
      $('.vehicle-row-tmp.hidden').after(row_tmp);
    });


    /* =================================
     ===  Personal page                 ====
     =================================== */
    $('.paap-personal .main-tabs a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      if($('.paap-personal .main-tabs li.inbox-tab.active').length) {
        $('.info-box').addClass('hidden');
        $('.inbox-clients').removeClass('hidden');
      } else {
        $('.info-box').removeClass('hidden');
        $('.inbox-clients').addClass('hidden');
      }
    });

  });

})(window.jQuery);