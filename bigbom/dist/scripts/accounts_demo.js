browserValid();
(function ($) {

    "use strict";

    window.loading_screen = window.pleaseWait({
        logo: params.assetURL + "/images/logo.png",
        backgroundColor: '#34a853',
        loadingHtml: '<div class="sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div>'
    });

    $(window).on('load', function() {
        window.loading_screen.finish();
        $('body').css('opacity', 1);
    });

    $(document).ready(function () {

        moment.locale('vn');

        /* =================================
         ===  Convert SVG image to inline SVG                 ====
         =================================== */
        convertSvgImageToInlineSvg();


        /* =================================
         ===  Custom Scrollbar                 ====
         =================================== */
        myScrollbar([
            '.list-multi-level.has-scroll',
            '.fancy-select .options',
            '.floating-area .main-floating'
        ]);


        /* =================================
         ===  Date View                 ====
         =================================== */
        myDateView();
        renderDateViewPicker('.date-view-picker', function (data) {
            console.log(data);
        });
        // setCustomRanges('.date-view-picker', new Date('2016-08-20'),  new Date('2016-08-25'));


        /* =================================
         ===  Bigbom Table                 ====
         =================================== */
        collapseTable();
        collapseTable(true);
        tableScripts();
        $('.tabs-has-table a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            responsiveTableWidth();
        });


    });

})(window.jQuery);