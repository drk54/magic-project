(function($) {

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        adaptiveHeight: true,
        lazyLoad: 'ondemand'
    });
    $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        lazyLoad: 'ondemand'
    });

    $(window).on('rezise', function(){
        var max_height = $('.slider-for').height();
        $('.slider-nav').css('max-height', max_height+'px');
    });

    $(window).ready(function(){
        var max_height = $('.slider-for').height();
        $('.slider-nav').css('max-height', max_height+'px');
    });

    const $slider = $(".slider-nav");
    $slider
        .on('init', function() {
            mouseWheel($slider)
        })
        .slick({
            dots: true,
            vertical: true,
            infinite: false,
        });
        function mouseWheel($slider) {
            $(window).on('wheel', { $slider: $slider }, mouseWheelHandler)
        }
        function mouseWheelHandler(event) {
            event.preventDefault();
            const $slider = event.data.$slider
            const delta = event.originalEvent.deltaY
            if(delta > 0) {
                $slider.slick('slickNext')
            }
            else {
                $slider.slick('slickPrev')
            }
        }




})( jQuery );