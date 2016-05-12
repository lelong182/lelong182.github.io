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

    Array.prototype.max = function() {
        return Math.max.apply(Math, this);
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
                $(".welcome-modal").modal({
                    show: true,
                    backdrop: 'static',
                    keyboard: false
                });
            }, 1500);
        }
    });

    $(document).ready(function() {

        /* =================================
        ===  Tooltip                 ====
        =================================== */
        if ($('[data-toggle="tooltip"]').length) {
            $('[data-toggle="tooltip"]').tooltip({
                container: 'body'
            });
        }


        /* =================================
        ===  Disable Tab                 ====
        =================================== */
        $(".nav-tabs li.disabled a[data-toggle=tab]").on("click", function(e) {
            e.preventDefault();
            return false;
        });


        /* =================================
         ===  Only Number                 ====
         =================================== */
        if ($('.onlynumber').length) {
            $('.onlynumber').onlynumber();
        }


        /* =================================
         ===  Month Format                 ====
         =================================== */
        if ($('.month-format').length) {
            $('.month-format').mask('00/0000', {
                reverse: true
            });
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
        $(".wrap-general-declaration").mCustomScrollbar({
            callbacks: {
                whileScrolling: function() {
                    if (this.mcs.topPct == 100) {
                        $('.complete-content .submit-btn').removeClass('unread');
                    }
                },
                alwaysTriggerOffsets: false
            }
        });


        /* =================================
         ===  Preferred Item                 ====
         =================================== */
        $(this).on('mouseover', '.preferred-item', function() {
            $(this).find('.info-item').addClass('open');
        });
        $(this).on('mouseout', '.preferred-item', function() {
            $('.preferred-item .info-item').removeClass('open');
        });


        /* =================================
         ===  Autocomplete Search                 ====
         =================================== */

        var list_country = ["7-ELEVEN MALAYSIA", "ABB", "ABDA", "ACCENTURE", "ACTIVE EQUITY", "ADECCO", "ADIDAS", "AEON", "AFFIN", "AGODA", "AIA", "AIG", "AIR ASIA", "AKER SOLUTION", "AL RAJHI", "ALFA LAVAL", "ALLIANCE", "ALLIANZ", "ALPINE", "AMBANK", "AMCORP", "AMERICAN EXPRESS", "AMGENERAL", "ANGLO-ORIENTAL", "APPLE INC", "ARMADA", "ASTRO", "AT AND T", "ATOS", "AXA AFFIN", "AXIATA", "BAE SYSTEMS", "BANDAR NUSAJAYA", "BANDAR UTAMA CITY", "BANK ISLAM", "BANK NEGARA", "BANK RAKYAT", "BANK SIMPANAN NASIONAL", "BASF", "BATU KAWAN", "BAXTER", "BAYER AG", "BBRAUN", "BERJAYA", "BHG FAR EAST", "BIG TREE OUTDOOR", "BIMB", "BINTULU PORT HOLDINGS BERHAD", "BMW", "BOON SIEW", "BOSCH", "BOSTON CONSULTING GROUP", "BOUSTEAD", "BRITISH AMERICAN TOBACCO", "BUMI ARMADA", "BURSA MALAYSIA BERHAD", "CAGAMAS", "CAHAYA MATA SARAWAK", "CANON", "CAPITALAND MALAYSIA MALL TRUST", "CARLSBERG", "CELCOM", "CEMENT INDUSTRIES", "CIMB", "CISCO", "COASTAL CONTRACT", "COCA COLA", "CONVERGYS CORPORATION", "CREDENCE RESOURCES", "CREDIT GUARANTEE", "CYCLE AND CARRIAGE BINTANG", "DAEWOO ENGINEERING AND CONSTRUCTION", "DANAJAMIN NASIONAL", "DANAMODAL NASIONAL", "DANONE DUMEX M SDN BHD", "DELL", "DELOITTE", "DHL", "DIALOG GROUP", "DIGI", "DRB HICOM", "DUTCH LADY MILK", "E & O PROPERTY", "EASTERN & ORIENTAL", "ECO WORLD", "ERICSSON", "ERNST & YOUNG", "ESTEE LAUDER", "ETIKA STRATEGI", "ETIQA", "EUROMOBIL", "EVERGREEN FIBREBOARD", "EVERGREEN JADE", "F AND N", "FEDEX", "FELDA", "FLEXTRONICS", "FMC TECHNOLOGIES", "FOSTER WHEELER", "FRASER & NEAVE", "FREESCALE SEMICONDUCTOR", "FUJI XEROX", "FUJIFILM", "GAMUDA", "GEK POH", "GENTING", "GLAXOSMITHKLINE", "GLENMARIE", "GODFREY PHILIPS", "GOLDEN ARCHES", "GOLDIS", "GOODYEAR", "GREAT EASTERN CAPITAL", "GUINNESS ANCHOR (GAB)", "GUOCO ASSETS", "GUOCOLAND", "H AND M", "HALLIBURTON", "HAP SENG", "HARTALEGA HOLDING", "HEWLETT PACKARD", "HICOM", "HILTON", "HITACHI", "HONDA", "HONEY WELL", "HONG LEONG", "HSBC", "HYUNDAI", "I & P GROUP", "IBM", "IGB", "IHH HEALTHCARE", "IJM", "IMPIAN NUSANTARA", "INARI AMERTRON", "INDRA CITA", "INFINEON", "INGRAM MICRO", "INTEGRATED DEVICE TECHNOLOGY", "INTEL", "IOI CORPORATION", "IOI OLEOCHEMICAL", "ISKANDAR", "JABIL", "JCY INTERNATIONA", "JOHNSON AND JOHNSON", "JOHNSON CONTROLS", "JOHOR PORT", "JP MORGAN CHASE & CO", "KAYAKITA", "KECK SENG BERHAD", "KERRY GROUP", "KEYSIGHT TECHNOLOGIES", "KHAZANAH", "KIAN JOO CAN FACTORY", "KIEN HUAT REALTY", "KIM LOONG", "KLCC", "KL-KEPONG INDUSTRIAL", "KNM PROCESS SYSTEMS", "KNOWLES IPC", "KONICA MINOLTA", "KOSSAN RUBBER", "KPJ TAWAKKAL SPECIALIST HOSPITAL", "KPMG", "KRISASSETS HOLDINGS", "KSL HOLDINGS", "KULIM", "KUMPULAN PRASARANA RAKYAT JOHOR", "KUMPULAN WANG SIMPANAN PEKERJA", "KUOK BROTHERS", "LAFARGE", "LAM SOON", "LBS BINA", "LINGUI DEVELOPMENTS", "LOREAL", "LOTTE CHEMICAL TITAN", "LPI CAPITAL", "LVMH WATCH AND JEWELLERY", "MAH SING", "MALAKOFF", "MALAYSIA AIRLINES", "MALAYSIA AIRPORTS", "MALAYSIA BUILDING SOCIETY", "MALAYSIAN INDUSTRIAL DEVELOPMENT FINANCE", "MALAYSIAN PACIFIC INDUSTRIES", "MANDOM MALAYSIA", "MANULIFE HOLDINGS", "MARRIOTT HOTELS & RESORTS", "MATRIX CONCEPTS HOLDINGS BERHAD", "MAX-FIVE TRADING", "MAXIS", "MAYBANK", "MAZDA", "MBM RESOURCES", "MCKINSEY & COMPANY", "MCT BERHAD", "MED-BUMIKAR MARA", "MEDIA PRIMA", "MICROSOFT", "MISC", "MKH BERHAD", "MMC", "MMC-SHAPADU", "MNRB", "MONASH", "MOODY INTERNATIONAL", "MOTOROLA", "MSM", "MUDAJAYA", "MY EG SERVICES BERHAD", "NAM FOONG", "NESTLE MANUFACTURING", "NHK JAPAN BROADCASTING CORP", "NIKE", "NIRO CERAMIC", "NIRVANA", "NORTHPORT", "NOVARTIS CORPORATION", "NS THERMO", "OCBC BANK", "ON SEMICONDUCTOR", "ONE FM", "ORACLE", "ORANGE POLICY", "ORIENTAL HOLDINGS", "OSK HOLDINGS", "OYL MANUFACTURING", "PADIBERAS NASIONAL", "PADINI", "PANASONIC MALAYSIA", "PANTAI CAHAYA BULAN VENTURES", "PANTAI HOLDINGS", "PANTAI HOSPITAL", "PANTAI IRAMA VENTURES", "PARKSON", "PAVILION REAL ESTATE INVESTMENT", "PAYPAL", "PELABUHAN TANJUNG PELEPAS", "PELABURAN HARTANAH", "PEMBINAAN REDZAI", "PERMODALAN NASIONAL", "PERODUA", "PERSPECTIVE LANE", "PFIZER MALAYSIA", "PGEO GROUP", "PHILIPS", "PHILIPS LUMILEDS LIGHTING", "PLEXUS", "POS MALAYSIA", "PPB GROUP", "PPB OIL PALMS", "PREMIUM POLICY", "PRESS METAL BERHAD", "PRICEWATERHOUSECOOPERS", "PROCTER & GAMBLE", "PROTON", "PRUDENTIAL", "PUBLIC BANK", "RED SEA ENERGY", "RESORT WORLD GENTING", "RESTU JERNIH", "RHB", "ROAD BUILDER", "ROYAL BANK OF CANADA", "SAATCHI AND SAATCHI WORLDWIDE", "SAMSUNG", "SAP MALAYSIA", "SARAWAK HIDRO", "SCHNEIDER", "SCIENTEX BERHAD", "SEAGATE", "SEAPORT TERMINAL", "SECRET RECIPE", "SELANGOR PROPERTIES BERHAD", "SHANGRI-LA HOTELS", "SHIMANO", "SIEMENS", "SIERRA SPRINGS", "SILVERLAKE AXIS", "SIME DARBY", "SMART MODULAR TECHNOLOGY", "SONY", "SP SETIA", "ST MICROELECTRONICS", "STAR CRUISES ADMINISTRATIVE", "STAR MEDIA GROUP BERHAD", "SUNGEI WAY CORPORATION", "SUNLIFE", "SUNWAY", "SUNWAY CITY", "SUPERMAX CORPORATION BERHAD", "SUPREME FORMAC", "SURIA KLCC", "SYARIKAT PENGELUAR AIR SELANGOR", "SYMANTEC", "T G I FRIDAYS", "T SYSTEMS", "TA ANN", "TA ENTERPRISE", "TA GLOBAL", "TABUNG HAJI", "TAKAFUL MALAYSIA", "TAN CHONG", "TECHNIP", "TELEKOM", "TENAGA NASIONAL", "TESCO", "TEXAS INSTRUMENTS", "TIME DOTCOM", "TOKIO MARINE", "TOP GLOVE", "TOSHIBA", "TRADEWINDS", "TROPICANA", "TUNE HOTELS", "UEM GROUP", "UMW CORPORATION", "UNILEVER", "UNISEM", "UNISEM BERHAD", "UNITED MALAYAN LAND", "UNITED OVERSEA BANK", "UNITED PLANTATIONS", "UOA HOLDINGS", "USG BORAL", "VADS", "VALUECAP", "VERTICAL CAPACITY", "VOLKSWAGEN GROUP", "VS INDUSTRY", "WCT", "WESTERN DIGITAL", "WESTPORTS", "WINCOR NIXDORF", "WING TAI", "WORLDWIDE HOLDINGS", "XCHANGING", "YINSON HOLDINGS BERHAD", "YTL", "ZURICH"];
        var country = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: list_country
        });
        $('#search-company').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'country',
            source: country,
            limit: 1000
        });
        $('#search-company').bind('typeahead:render ', function(e) {
            var input_val = e.currentTarget.value;
            $('.tt-dataset .tt-suggestion').each(function() {
                if (!eval('/^' + input_val + '/gi.test($(this).text())')) {
                    $(this).hide();
                }
            });
        });

        var list_current_bank = ["AFFIN BANK BERHAD", "ALLIANCE BANK", "AL-RAJHI", "AMBANK BERHAD", "AMEX", "BANK ISLAM BERHAD", "BANK KERJASAMA BERHAD", "BANK MUAMALAT", "BANK OF AMERICA", "BANK OF TOKYO-MITSUBISHI", "BANK PERTANIAN MALAYSIA AGROBA", "BANK SIMPANAN NASIONAL BE", "BNPP(BNP PARIBAS MALAYSIA", "CIMB BANK BERHAD", "CITIBANK BERHAD", "DEUTSCHE BANK", "EON BANK", "HONG LEONG BANK", "HSBC BANK BERHAD", "INDUSTRIAL &amp; COMMERCIAL BA", "JP MORGAN CHASE", "KUWAIT FINANCE HOUSE", "MAYBANK BERHAD", "MBF", "MIZUHO CORPORATE BANK", "OCBC BANK", "PUBLIC BANK", "RBS BANK", "RHB", "STANDARD CHARTERED BERHAD", "SUMITOMO MITSUI BANKING CORPOR", "UNITED OVERSEAS BERHAD"];
        var current_bank = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: list_current_bank
        });
        $('#search-current-bank').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'current-bank',
            source: current_bank,
            limit: 1000
        });


        /* =================================
         ===  Popup                 ====
         =================================== */
        $(this).on('click', '.welcome-form .submit-btn', function() {
            var pass = true;
            var message = "";
            var val = $('#search-company').val();
            $('.welcome-form').find('.required').each(function() {
                if (!this.value || this.value.charAt(0) == " ") {
                    pass = false;
                    message = $(this).data('message');
                    return false;
                }
            });
            if (pass) {
                if ($(this).hasClass('check-length')) {
                    pass = false;
                    message = 'Please enter mobile number at least 10 digits total.';
                }
            }
            if (pass) {
                if (val == "" || val == null) {
                    pass = false;
                    message = 'Please enter company name.';
                } else {
                    var in_list = $.inArray(val, list_country);
                    $(".welcome-modal").modal('hide');
                    if (in_list < 0) {
                        $(".error-modal").modal({
                            show: true,
                            backdrop: 'static',
                            keyboard: false
                        });
                    } else {
                        $(".more-efficient-modal").modal({
                            show: true,
                            backdrop: 'static',
                            keyboard: false
                        });
                    }
                    $('.welcome-form #search-company').val('');
                }
            }
            if (!pass) {
                alert(message);
            }
            return false;
        });
        $(this).on('click', '.more-efficient-modal .yes-btn', function() {
            $(".more-efficient-modal").modal('hide');
            return false;
        });
        $(this).on('click', '.more-efficient-modal .no-btn', function() {
            $(".more-efficient-modal").modal('hide');
            $(".no-more-modal").modal({
                show: true,
                backdrop: 'static',
                keyboard: false
            });
            return false;
        });
        $(this).on('click', '.error-modal .back-welcome', function() {
            $(".error-modal").modal('hide');
            $(".welcome-modal").modal('show');
            return false;
        });
        $(this).on('keyup', '.welcome-form .onlynumber', function() {
            if ($(this).val().length >= 10) {
                $('.welcome-form .submit-btn').removeClass('check-length');
            } else {
                $('.welcome-form .submit-btn').addClass('check-length');
            }
        });


        /* =================================
         ===  Complete Page                 ====
         =================================== */
        $(this).on('click', '.complete-content .principal-rd', function() {
            var val = $(this).val();
            var content = $('.complete-content');
            if (this.checked) {
                if (val == 0) {
                    content.find('.no-section').removeClass('hidden');
                    content.find('.yes-section').addClass('hidden');
                    content.addClass('no-content');
                } else {
                    content.find('.yes-section').removeClass('hidden');
                    content.find('.no-section').addClass('hidden');
                    content.removeClass('no-content');
                }
            }
        });
        var checkHasHidden = function(next_i) {
            var nav_tabs = $('.complete-content .nav-tabs');
            if (nav_tabs.find('li:eq(' + next_i + ')').hasClass('hidden')) {
                return checkHasHidden(next_i + 1);
            } else {
                nav_tabs.find('li:eq(' + next_i + ')').removeClass('disabled');
                nav_tabs.find('li:eq(' + next_i + ') a[data-toggle=tab]').unbind('click');
                nav_tabs.find('li:eq(' + next_i + ') a[data-toggle=tab]').trigger('click');
                return;
            }
        };
        var validateEmail = function(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        $(this).on('click', '.complete-content .continue-btn', function() {
            var pass = true;
            var this_tab = $(this).closest('.complete-tab-details');
            var message = "";
            this_tab.find('.required').each(function() {
                if (!this.value || this.value.charAt(0) == " ") {
                    pass = false;
                    $(this).focus();
                    message = $(this).data('message');
                    return false;
                }
            });
            if (pass) {
                var wrap_number = this_tab.find('.wrap-nummber');
                if (wrap_number.hasClass('check-length')) {
                    pass = false;
                    message = wrap_number.data('message');
                }
            }
            if (pass) {
                this_tab.find('.credit-card').each(function() {
                    if (this.value == '0000') {
                        pass = false;
                        $(this).focus();
                        message = $(this).data('message');
                        return false;
                    }
                });
            }
            if (pass) {
                this_tab.find('.tt-input').each(function() {
                    if (!this.value || this.value.charAt(0) == " ") {
                        pass = false;
                        $(this).focus();
                        message = $(this).data('message');
                        return false;
                    }
                });
            }
            if (pass) {
                this_tab.find('.email').each(function() {
                    if (!this.value || !validateEmail(this.value) || this.value.charAt(0) == " ") {
                        pass = false;
                        $(this).focus();
                        message = $(this).data('message');
                        return false;
                    }
                });
            }
            if (pass) {
                checkHasHidden($(this).closest('.tab-pane').index() + 1);
                $('html, body').stop().animate({
                    'scrollTop': $('.complete-content .nav-tabs').offset().top
                }, 900, 'swing');
            } else {
                alert(message);
            }
            return false;
        });
        $('.next-input').each(function() {
            var this_input = $(this);
            this_input.keyup(function() {
                if (this_input.val().length >= this_input.attr('maxlength')) {
                    this_input.parent().next().children().focus();
                }
            });
        });
        $(this).on('blur', '.first-zero', function() {
            var that = this;
            if ($(that).val().charAt(0) != 0 || $(that).val().charAt(0) != '0') {
                $(that).val('');
                alert('Include area code e.g. 03 23838888');
                setTimeout(function() {
                    $(that).focus();
                }, 0);
            }
        });
        $(this).on('click', '.complete-content .submit-btn', function() {
            if (!$('.yes-obligation').hasClass('hidden')) {
                var this_section1 = $('.yes-obligation');
                var pass1 = true;
                var message1 = "";
                this_section1.find('.required').each(function() {
                    if (!this.value || this.value.charAt(0) == " ") {
                        pass1 = false;
                        $(this).focus();
                        message1 = $(this).data('message');
                        return false;
                    }
                });
                if (pass1) {
                    var wrap_number = this_section1.find('.wrap-nummber');
                    if (wrap_number.hasClass('check-length')) {
                        pass1 = false;
                        message1 = wrap_number.data('message');
                    }
                }
                if (pass1) {
                    this_section1.find('.credit-card').each(function() {
                        if (this.value == '0000') {
                            pass1 = false;
                            $(this).focus();
                            message1 = $(this).data('message');
                            return false;
                        }
                    });
                }
                if (pass1) {
                    this_section1.find('.tt-input').each(function() {
                        if (!this.value || this.value.charAt(0) == " ") {
                            pass1 = false;
                            $(this).focus();
                            message1 = $(this).data('message');
                            return false;
                        }
                    });
                }
                if (pass1) {
                    this_section1.find('.email').each(function() {
                        if (!this.value || !validateEmail(this.value) || this.value.charAt(0) == " ") {
                            pass1 = false;
                            $(this).focus();
                            message1 = $(this).data('message');
                            return false;
                        }
                    });
                }
                if (pass1) {
                    if ($(this).hasClass('unread')) {
                        pass1 = false;
                        message1 = 'Please read the full terms and conditions by scrolling down till the end of the document.';
                    }
                }
                if (pass1) {
                    alert('Complete!');
                } else {
                    alert(message1);
                }
            } else if (!$('.yes-public').hasClass('hidden')) {
                var this_section2 = $('.yes-public');
                var pass2 = true;
                var message2 = "";
                this_section2.find('.required').each(function() {
                    if (!this.value || this.value.charAt(0) == " ") {
                        pass2 = false;
                        $(this).focus();
                        message2 = $(this).data('message');
                        return false;
                    }
                });
                if (pass2) {
                    var wrap_number = this_section2.find('.wrap-nummber');
                    if (wrap_number.hasClass('check-length')) {
                        pass2 = false;
                        message2 = wrap_number.data('message');
                    }
                }
                if (pass2) {
                    this_section2.find('.credit-card').each(function() {
                        if (this.value == '0000') {
                            pass2 = false;
                            $(this).focus();
                            message2 = $(this).data('message');
                            return false;
                        }
                    });
                }
                if (pass2) {
                    this_section2.find('.tt-input').each(function() {
                        if (!this.value || this.value.charAt(0) == " ") {
                            pass2 = false;
                            $(this).focus();
                            message2 = $(this).data('message');
                            return false;
                        }
                    });
                }
                if (pass2) {
                    this_section2.find('.email').each(function() {
                        if (!this.value || !validateEmail(this.value) || this.value.charAt(0) == " ") {
                            pass2 = false;
                            $(this).focus();
                            message2 = $(this).data('message');
                            return false;
                        }
                    });
                }
                if (pass2) {
                    if ($(this).hasClass('unread')) {
                        pass2 = false;
                        message2 = 'Please read the full terms and conditions by scrolling down till the end of the document.';
                    }
                }
                if (pass2) {
                    alert('Complete!');
                } else {
                    alert(message2);
                }
            } else {
                var pass = true;
                var message = "";
                if (pass) {
                    if ($(this).hasClass('unread')) {
                        pass = false;
                        message = 'Please read the full terms and conditions by scrolling down till the end of the document.';
                    }
                }
                if (pass) {
                    alert('Complete!');
                } else {
                    alert(message);
                }
            }
            return false;
        });
        $(this).on('keyup', '.wrap-nummber .onlynumber', function() {
            var total_length = 0;
            var this_wrap = $(this).closest('.wrap-nummber');
            this_wrap.find('.onlynumber').each(function() {
                total_length += $(this).val().length;
            });
            if (total_length >= 10) {
                this_wrap.removeClass('check-length');
            } else {
                this_wrap.addClass('check-length');
            }
        });
        $(this).on('click', '.complete-tab-details input[name="debt-obligation"]', function() {
            var val = $(this).val();
            if (this.checked && val == 1) {
                $('.complete-tab-details .yes-obligation').removeClass('hidden');
            } else {
                $('.complete-tab-details .yes-obligation').addClass('hidden');
            }
        });
        $(this).on('click', '.complete-tab-details input[name="public-figure"]', function() {
            var val = $(this).val();
            if (this.checked && (val == 1 || val == 2)) {
                $('.complete-tab-details .yes-public').removeClass('hidden');
            } else {
                $('.complete-tab-details .yes-public').addClass('hidden');
            }
        });


        /* =================================
         ===  Cookies                 ====
         =================================== */
        var path = window.location.href.split("?")[0];
        var loc = path.substring(path.lastIndexOf('/') + 1);
        if (loc == 'index.htm' || loc == '') {
            Cookies.remove('data');
            var arr_name = [];
            var arr_img = [];
            var arr_earn = [];
            $(window).scroll(function() {
                var scroll_bottom_height = $(window).scrollTop() + $(window).height();
                if ($('.wrap-footer-info').hasClass('open')) {
                    var note_top_offset = $('.wrap-footer-info.open').offset().top + $('.wrap-footer-info').height();
                    if (scroll_bottom_height > note_top_offset) {
                        $('.footer-info').css({
                            position: 'absolute'
                        });
                    } else {
                        $('.footer-info').css({
                            position: 'fixed'
                        });
                    }
                }
            });
            $(this).on('click', '.preferred-item .choose-link', function() {
                if ($('.preferred-item.active').length >= 3) {
                    alert('You can apply for 3 cards at max!');
                } else {
                    var this_item = $(this).closest('.preferred-item');
                    this_item.addClass('active');
                    $(this).removeClass().addClass('remove-link').text('Remove card');
                    arr_name.push(this_item.find('.item-name').text());
                    arr_img.push(this_item.find('.item-img').attr('src'));
                    arr_earn.push($(this).parent('.info-item').data('earn'));
                    if ($(this).parent('.info-item').data('type') == 'rewards') {
                        $('.footer-info .rewards-section').removeClass('hidden');
                    }
                    $('.footer-info .wrap-text').text(arr_name.join(", "));
                    if ($('.preferred-item.active').length == 1) {
                        $('.wrap-footer-info').addClass('open');
                        $('.footer-info').css({
                            bottom: 0
                        });
                    }
                    var max_earn = arr_earn.max();
                    $('.footer-info .earn').text(max_earn);
                }
            });
            $(this).on('click', '.preferred-item.active .remove-link', function() {
                var this_item = $(this).closest('.preferred-item');
                this_item.removeClass('active');
                $(this).removeClass().addClass('choose-link').text('Choose card');
                arr_name.splice(arr_name.indexOf(this_item.find('.item-name').text()), 1);
                arr_img.splice(arr_img.indexOf(this_item.find('.item-img').attr('src')), 1);
                arr_earn.splice(arr_earn.indexOf($(this).parent('.info-item').data('earn')), 1);
                if ($(this).parent('.info-item').data('type') == 'rewards') {
                    $('.footer-info .rewards-section').addClass('hidden');
                }
                $('.footer-info .wrap-text').text(arr_name.join(", "));
                if ($('.preferred-item.active').length == 0) {
                    $('.wrap-footer-info').removeClass('open');
                    $('.footer-info').css({
                        bottom: '-100%'
                    });
                }
                var max_earn = arr_earn.max();
                $('.footer-info .earn').text(max_earn);
            });
            $(this).on('click', '.footer-info .started-btn', function() {
                var has_card = false;
                var has_cat = false;
                $('.preferred-item').each(function() {
                    if ($(this).hasClass('active')) {
                        has_card = true;
                    }
                });
                if (!$('.rewards-section').hasClass('hidden')) {
                    $('.list-rewards-cat .css-checkbox').each(function() {
                        if (this.checked) {
                            has_cat = true;
                        }
                    });
                } else {
                    has_cat = true;
                }
                if (!has_card) {
                    alert('Please select your card.');
                } else if (!has_cat) {
                    alert('Please select Rewards Categories.');
                } else {
                    Cookies.set('data', {
                        name: arr_name,
                        img: arr_img
                    });
                    window.location.href = "complete.htm";
                }
                return false;
            });
        }
        if (loc == 'complete.htm') {
            var data = Cookies.getJSON('data');
            if (typeof data == 'undefined' || data == null) {
                window.location.href = "index.htm";
            } else {
                var list_name = "";
                var list_img = "";
                $.each(data, function(key, value) {
                    $.each(value, function(i, v) {
                        if (key == 'name') {
                            if (i == value.length - 1) {
                                list_name += v;
                            } else {
                                list_name += v + ', ';
                            }
                        }
                        if (key == 'img') {
                            list_img += '<img src="' + v + '" alt="img" />';
                        }
                    });
                });
                $('.headline-complete .wrap-text').text(list_name);
                $('.headline-complete .wrap-img').html(list_img);
            }
        }


    });
})(window.jQuery);