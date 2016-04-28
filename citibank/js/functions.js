(function($) {

    "use strict";

    $.fn.adtop_animation = function(effect, callback) {
        this.addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass(effect + ' animated');
            if (typeof callback === 'function') {
                callback.call(this);
            }
        });
    };

    window.loading_screen = window.pleaseWait({
        logo: "images/logo.png",
        backgroundColor: '#00A7E6',
        loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
    });

    $(window).on('load', function() {
        window.loading_screen.finish();
        $('body').css('opacity', 1);
        if ($('.welcome-modal').length) {
            setTimeout(function() {
                $(".welcome-modal").modal('show');
            }, 1500);
        }
    });

    $(document).ready(function() {

        /* =================================
        ===  Minimal Menu                 ====
        =================================== */
        $('.minimal-menu').before('<label class=\"minimal-menu-button\" for=\"mobile-nav\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></label><input class=\"minimal-menu-button\" type=\"checkbox\" id=\"mobile-nav\" name=\"mobile-nav\" />');
        $('.minimal-menu').find('ul.sub-menu').parent().addClass('submenu');
        $('.minimal-menu').find('div.menu-wrapper').parent().addClass('megamenu submenu');
        $('.minimal-menu').find('ul.sub-menu').before('<input class=\"show-submenu\" type=\"checkbox\" />');
        $('.minimal-menu').find('div.menu-wrapper').before('<input class=\"show-submenu\" type=\"checkbox\" />');


        /* =================================
        ===  Tooltip                 ====
        =================================== */
        if ($('[data-toggle="tooltip"]').length) {
            $('[data-toggle="tooltip"]').tooltip({
                container: 'body'
            });
        }


        /* =================================
         ===  Only Number                 ====
         =================================== */
        if ($('.onlynumber').length) {
            $('.onlynumber').onlynumber();
        }


        /* ================================
         ===  Custom Select                 ====
         =================================== */
        if ($('.custom-select').length) {
            $('.custom-select').fancySelect();
        }


        /* =================================
         ===  Custom Scrollbar                 ====
         =================================== */
        $(".wrap-general-declaration").mCustomScrollbar();


        /* =================================
         ===  StickyJS                 ====
         =================================== */
        if ($('.wrapper').length) {
            $("header.header").sticky({
                topSpacing: 0
            });
        }


        /* =================================
         ===  Preferred Item                 ====
         =================================== */
        $(this).on('mouseover', '.preferred-item', function() {
            $(this).find('.info-item').addClass('open');
        });
        $(this).on('mouseout', '.preferred-item', function() {
            $('.preferred-item .info-item').removeClass('open');
        });
        $(this).on('click', '.info-item .choose-link', function() {
            $(this).closest('.preferred-item').addClass('active');
            $(this).removeClass().addClass('remove-link').text('Remove card');
        });
        $(this).on('click', '.info-item .remove-link', function() {
            $(this).closest('.preferred-item').removeClass('active');
            $(this).removeClass().addClass('choose-link').text('Choose card');
        });


        /* =================================
         ===  Popup                 ====
         =================================== */
        $(this).on('click', '.welcome-modal .submit-btn', function() {
            $(".welcome-modal").modal('hide');
            $(".error-modal").modal('show');
            return false;
        });


        /* =================================
         ===  Autocomplete Search                 ====
         =================================== */
        
        var states = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: ["7-ELEVEN MALAYSIA","ABB","ABDA","ACCENTURE","ACTIVE EQUITY","ADECCO","ADIDAS","AEON","AFFIN","AGODA","AIA","AIG","AIR ASIA","AKER SOLUTION","AL RAJHI","ALFA LAVAL","ALLIANCE","ALLIANZ","ALPINE","AMBANK","AMCORP","AMERICAN EXPRESS","AMGENERAL","ANGLO-ORIENTAL","APPLE INC","ARMADA","ASTRO","AT AND T","ATOS","AXA AFFIN","AXIATA","BAE SYSTEMS","BANDAR NUSAJAYA","BANDAR UTAMA CITY","BANK ISLAM","BANK NEGARA","BANK RAKYAT","BANK SIMPANAN NASIONAL","BASF","BATU KAWAN","BAXTER","BAYER AG","BBRAUN","BERJAYA","BHG FAR EAST","BIG TREE OUTDOOR","BIMB","BINTULU PORT HOLDINGS BERHAD","BMW","BOON SIEW","BOSCH","BOSTON CONSULTING GROUP","BOUSTEAD","BRITISH AMERICAN TOBACCO","BUMI ARMADA","BURSA MALAYSIA BERHAD","CAGAMAS","CAHAYA MATA SARAWAK","CANON","CAPITALAND MALAYSIA MALL TRUST","CARLSBERG","CELCOM","CEMENT INDUSTRIES","CIMB","CISCO","COASTAL CONTRACT","COCA COLA","CONVERGYS CORPORATION","CREDENCE RESOURCES","CREDIT GUARANTEE","CYCLE AND CARRIAGE BINTANG","DAEWOO ENGINEERING AND CONSTRUCTION","DANAJAMIN NASIONAL","DANAMODAL NASIONAL","DANONE DUMEX M SDN BHD","DELL","DELOITTE","DHL","DIALOG GROUP","DIGI","DRB HICOM","DUTCH LADY MILK","E & O PROPERTY","EASTERN & ORIENTAL","ECO WORLD","ERICSSON","ERNST & YOUNG","ESTEE LAUDER","ETIKA STRATEGI","ETIQA","EUROMOBIL","EVERGREEN FIBREBOARD","EVERGREEN JADE","F AND N","FEDEX","FELDA","FLEXTRONICS","FMC TECHNOLOGIES","FOSTER WHEELER","FRASER & NEAVE","FREESCALE SEMICONDUCTOR","FUJI XEROX","FUJIFILM","GAMUDA","GEK POH","GENTING","GLAXOSMITHKLINE","GLENMARIE","GODFREY PHILIPS","GOLDEN ARCHES","GOLDIS","GOODYEAR","GREAT EASTERN CAPITAL","GUINNESS ANCHOR (GAB)","GUOCO ASSETS","GUOCOLAND","H AND M","HALLIBURTON","HAP SENG","HARTALEGA HOLDING","HEWLETT PACKARD","HICOM","HILTON","HITACHI","HONDA","HONEY WELL","HONG LEONG","HSBC","HYUNDAI","I & P GROUP","IBM","IGB","IHH HEALTHCARE","IJM","IMPIAN NUSANTARA","INARI AMERTRON","INDRA CITA","INFINEON","INGRAM MICRO","INTEGRATED DEVICE TECHNOLOGY","INTEL","IOI CORPORATION","IOI OLEOCHEMICAL","ISKANDAR","JABIL","JCY INTERNATIONA","JOHNSON AND JOHNSON","JOHNSON CONTROLS","JOHOR PORT","JP MORGAN CHASE & CO","KAYAKITA","KECK SENG BERHAD","KERRY GROUP","KEYSIGHT TECHNOLOGIES","KHAZANAH","KIAN JOO CAN FACTORY","KIEN HUAT REALTY","KIM LOONG","KLCC","KL-KEPONG INDUSTRIAL","KNM PROCESS SYSTEMS","KNOWLES IPC","KONICA MINOLTA","KOSSAN RUBBER","KPJ TAWAKKAL SPECIALIST HOSPITAL","KPMG","KRISASSETS HOLDINGS","KSL HOLDINGS","KULIM","KUMPULAN PRASARANA RAKYAT JOHOR","KUMPULAN WANG SIMPANAN PEKERJA","KUOK BROTHERS","LAFARGE","LAM SOON","LBS BINA","LINGUI DEVELOPMENTS","LOREAL","LOTTE CHEMICAL TITAN","LPI CAPITAL","LVMH WATCH AND JEWELLERY","MAH SING","MALAKOFF","MALAYSIA AIRLINES","MALAYSIA AIRPORTS","MALAYSIA BUILDING SOCIETY","MALAYSIAN INDUSTRIAL DEVELOPMENT FINANCE","MALAYSIAN PACIFIC INDUSTRIES","MANDOM MALAYSIA","MANULIFE HOLDINGS","MARRIOTT HOTELS & RESORTS","MATRIX CONCEPTS HOLDINGS BERHAD","MAX-FIVE TRADING","MAXIS","MAYBANK","MAZDA","MBM RESOURCES","MCKINSEY & COMPANY","MCT BERHAD","MED-BUMIKAR MARA","MEDIA PRIMA","MICROSOFT","MISC","MKH BERHAD","MMC","MMC-SHAPADU","MNRB","MONASH","MOODY INTERNATIONAL","MOTOROLA","MSM","MUDAJAYA","MY EG SERVICES BERHAD","NAM FOONG","NESTLE MANUFACTURING","NHK JAPAN BROADCASTING CORP","NIKE","NIRO CERAMIC","NIRVANA","NORTHPORT","NOVARTIS CORPORATION","NS THERMO","OCBC BANK","ON SEMICONDUCTOR","ONE FM","ORACLE","ORANGE POLICY","ORIENTAL HOLDINGS","OSK HOLDINGS","OYL MANUFACTURING","PADIBERAS NASIONAL","PADINI","PANASONIC MALAYSIA","PANTAI CAHAYA BULAN VENTURES","PANTAI HOLDINGS","PANTAI HOSPITAL","PANTAI IRAMA VENTURES","PARKSON","PAVILION REAL ESTATE INVESTMENT","PAYPAL","PELABUHAN TANJUNG PELEPAS","PELABURAN HARTANAH","PEMBINAAN REDZAI","PERMODALAN NASIONAL","PERODUA","PERSPECTIVE LANE","PFIZER MALAYSIA","PGEO GROUP","PHILIPS","PHILIPS LUMILEDS LIGHTING","PLEXUS","POS MALAYSIA","PPB GROUP","PPB OIL PALMS","PREMIUM POLICY","PRESS METAL BERHAD","PRICEWATERHOUSECOOPERS","PROCTER & GAMBLE","PROTON","PRUDENTIAL","PUBLIC BANK","RED SEA ENERGY","RESORT WORLD GENTING","RESTU JERNIH","RHB","ROAD BUILDER","ROYAL BANK OF CANADA","SAATCHI AND SAATCHI WORLDWIDE","SAMSUNG","SAP MALAYSIA","SARAWAK HIDRO","SCHNEIDER","SCIENTEX BERHAD","SEAGATE","SEAPORT TERMINAL","SECRET RECIPE","SELANGOR PROPERTIES BERHAD","SHANGRI-LA HOTELS","SHIMANO","SIEMENS","SIERRA SPRINGS","SILVERLAKE AXIS","SIME DARBY","SMART MODULAR TECHNOLOGY","SONY","SP SETIA","ST MICROELECTRONICS","STAR CRUISES ADMINISTRATIVE","STAR MEDIA GROUP BERHAD","SUNGEI WAY CORPORATION","SUNLIFE","SUNWAY","SUNWAY CITY","SUPERMAX CORPORATION BERHAD","SUPREME FORMAC","SURIA KLCC","SYARIKAT PENGELUAR AIR SELANGOR","SYMANTEC","T G I FRIDAYS","T SYSTEMS","TA ANN","TA ENTERPRISE","TA GLOBAL","TABUNG HAJI","TAKAFUL MALAYSIA","TAN CHONG","TECHNIP","TELEKOM","TENAGA NASIONAL","TESCO","TEXAS INSTRUMENTS","TIME DOTCOM","TOKIO MARINE","TOP GLOVE","TOSHIBA","TRADEWINDS","TROPICANA","TUNE HOTELS","UEM GROUP","UMW CORPORATION","UNILEVER","UNISEM","UNISEM BERHAD","UNITED MALAYAN LAND","UNITED OVERSEA BANK","UNITED PLANTATIONS","UOA HOLDINGS","USG BORAL","VADS","VALUECAP","VERTICAL CAPACITY","VOLKSWAGEN GROUP","VS INDUSTRY","WCT","WESTERN DIGITAL","WESTPORTS","WINCOR NIXDORF","WING TAI","WORLDWIDE HOLDINGS","XCHANGING","YINSON HOLDINGS BERHAD","YTL","ZURICH"]
        });

        $('#search-company').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'states',
            source: states,
            limit: 1000
        });
        // var products_suggestion = new Bloodhound({
        //     datumTokenizer: function(datum) {
        //         return Bloodhound.tokenizers.whitespace(datum.value);
        //     },
        //     queryTokenizer: Bloodhound.tokenizers.whitespace,
        //     remote: {
        //         url: 'json/company-keywords.json',
        //         filter: function(x) {
        //             return $.map(x, function(item) {
        //                 return {
        //                     id: item.id,
        //                     name: item.name
        //                 };
        //             });
        //         }
        //     }
        // });

        // products_suggestion.initialize();
        // var typeahead_elem = $('#search-company');
        // typeahead_elem.typeahead({
        //     hint: true,
        //     highlight: true,
        //     minLength: 3
        // }, {
        //     name: 'name',
        //     displayKey: 'name',
        //     limit: 1000,
        //     source: products_suggestion.ttAdapter(),
        //     templates: {
        //         empty: '<div class="noitems">Company not found.</div>',
        //         suggestion: Handlebars.compile('<h4 class="company-name">{{name}}</h4>')
        //     }
        // });
        // $('#search').bind('typeahead:select', function(ev, suggestion) {
        //     window.location.href = base_url + suggestion.name_friendly;
        // });



    });
})(window.jQuery);