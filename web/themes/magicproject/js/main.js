(function($) {

    const $slider_for = $(".slider-for");
    const $slider_nav = $(".slider-nav");

    $slider_for.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        lazyLoad: 'ondemand'
    });
    $slider_nav.slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        dots: true,
        vertical : true,
        lazyLoad: 'ondemand'
    });

    $('.slider-nav img').on('click', function(){
        $slider_for.slick('slickGoTo', $(this).data('slick-index'));
    });

    $(window).on('rezise', function(){
        var max_height = $slider_for.height();
        $slider_nav.css('max-height', max_height+'px');
    });

    $(window).ready(function(){
        var max_height = $slider_for.height();
        $slider_nav.css('max-height', max_height+'px');
    });

})( jQuery );