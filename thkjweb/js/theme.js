(function($) {
    //严格模式
    'use_strict';


    // 加载
    // $(window).on("load", function() {
    //     $("#page-loader").fadeOut("slow", function() {
    //         $(this).remove();
    //     });
    // });
    // 返回顶部
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 70) {
            $(".scroll-to-top").addClass("reveal");


        } else {
            $(".scroll-to-top").removeClass("reveal");
        }

    });
    //顶部跟随导航
    $(window).on("scroll", function() {

        if ($(window).scrollTop() > 70) {
            $('.site-navigation,.trans-navigation').addClass('header-white');
        } else {
            $('.site-navigation,.trans-navigation').removeClass('header-white');
        }


    });
    //平滑滚动
    $('a.js-scroll-trigger').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').on('click', function(event) {
        $('.navbar-collapse').collapse('hide');
    });
    //首页视频
    $(function(){
        $('.video-back').vidbacking();
    });

})(jQuery);