(function($) {

    //
    //SLIDER
    //

    const $slider_for   = $(".slider-for");
    const $slider_nav   = $(".slider-nav");
    const $full_screen  = $('.full_screen');

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

    var image_index = false;

    $('.slider-for img').on('click', function(){
        image_index = $(this).data('slick-index');
        var image = $('.full_screen__data[data-index='+image_index+']');
        var img_src = image.data('src');
        $full_screen.toggleClass('visible');
        $full_screen.append('<img class="full_screen__image" src="'+img_src+'">');
    });

    $('.full_screen').on('click', function () {
        if(image_index !== false){
            $('.full_screen__image').remove();
            $full_screen.toggleClass('visible');
            image_index = false;
        }
    });

    $(window).on('keyup', function(e){
        if(image_index !== false && e.keyCode === 27){
            $('.full_screen__image').remove();
            $full_screen.toggleClass('visible');
            image_index = false;
        }
    });

})( jQuery );