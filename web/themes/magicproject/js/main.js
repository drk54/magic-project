(function($) {

    const $slider_for = $(".slider-for");
    const $slider_nav = $(".slider-nav");

    $slider_for.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        adaptiveHeight: true,
        lazyLoad: 'ondemand'
    });
    $slider_nav.slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        lazyLoad: 'ondemand'
    });

    $(window).on('rezise', function(){
        var max_height = $slider_for.height();
        $slider_nav.css('max-height', max_height+'px');
    });

    $(window).ready(function(){
        var max_height = $slider_for.height();
        $slider_nav.css('max-height', max_height+'px');
    });

    $slider_nav
        .on('init', function() {
            mouseWheel($slider_nav)
        }).slick({});
    function mouseWheel($slider_nav) {
        $(window).on('wheel', { $slider_nav: $slider_nav }, mouseWheelHandler)
    }
    function mouseWheelHandler(event) {
        event.preventDefault();
        const $slider_nav = event.data.$slider_nav
        const delta = event.originalEvent.deltaY
        if(delta > 0) {
            $slider_nav.slick('slickNext')
        }
        else {
            $slider_nav.slick('slickPrev')
        }
    }




})( jQuery );