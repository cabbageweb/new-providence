$(window).scroll(function () { if ($(this).scrollTop() > 15) { $('.header_section').addClass("sticky_nav"); } else { $('.header_section').removeClass("sticky_nav"); } }); $(".side_bar_icon, .slide_cross").click(function(){ $(".side_bar").toggleClass("SlideOpen"); }); var individual_price_table = $('.individual_cf'); var company_price_table = $('.company_cf'); $('.plan_toggle').find('.individual').addClass('active'); $('.individual_cf').addClass('active'); $('.plan_toggle').find('.individual').on('click', function(){ $(this).addClass('active'); $('.plan_toggle').removeClass('active'); $(this).siblings().removeClass('active'); individual_price_table.addClass('active'); company_price_table.removeClass('active'); }); $('.plan_toggle').find('.company').on('click', function(){ $(this).addClass('active'); $('.plan_toggle').addClass('active'); $(this).siblings().removeClass('active'); company_price_table.addClass('active'); individual_price_table.removeClass('active'); }); wow = new WOW( { mobile: false, } ); new WOW().init();