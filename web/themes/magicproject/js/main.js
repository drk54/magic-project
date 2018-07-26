(function($) {

    //
    //SLIDER
    //

    const $slider_for   = $(".slider-for");
    const $slider_nav   = $(".slider-nav");
    const $full_screen  = $('.full_screen');

    $(window).ready(function(){
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
            lazyLoad: 'ondemand',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        vertical : false,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        slidesToScroll: 3,
                        arrows: false,
                    }
                }
            ]
        });
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
        if(window.innerWidth >= 1200){
            image_index = $(this).data('slick-index');
            var image = $('.full_screen__data[data-index='+image_index+']');
            var img_src = image.data('src');
            $full_screen.toggleClass('visible');
            $full_screen.append('<img class="full_screen__image" src="'+img_src+'">');
        }
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

    //
    //VIDEO
    //

    $(window).ready(function(){
        $('.slider_video').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            adaptiveHeight: false,
            lazyLoad: 'ondemand'
        });
    });

    $('.thumbnail__link').on('click', function(){
        var video_url = $(this).find('img').data('video');
        $('#youtube-field-player').attr('src', video_url);
    });

    $('.menu__burger').on('click', function(){
        $(this).toggleClass('active');
        $('.menu__main').slideToggle(400);
    });

    // FOOTER SOCIAL

    $(window).ready(function(){
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            $('.footer__social .facebook').attr('href', 'fb://page/410003382397452');
            $('.footer__social .twitter').attr('href', 'http://twitter.com/FlorianoProject');
        }

        if($('.text-image').length){
            $('.col-left').removeClass('col-xl-3');
            $('.col-right').removeClass('col-xl-9');
            $('.sidebar').addClass('logo-top');
        }
    });

    $('.sub_menu').on('click', function(e){
        e.stopPropagation();
        if($(this).hasClass('active')){
            $(this).toggleClass('active');
        }else{
            $('.sub_menu.active').removeClass('active');
            $(this).toggleClass('active');
        }
    });

    $(window).on('click', function(){
        $('.sub_menu.active').removeClass('active');
    });















    //EGG
    $.extend({
        playSound: function () {
            return $(
                '<audio class="sound-player" autoplay="autoplay" style="display:none;">'
                + '<source src="' + arguments[0] + '" />'
                + '<embed src="' + arguments[0] + '" hidden="true" autostart="true" loop="false"/>'
                + '</audio>'
            ).appendTo('body');
        }
    });
    var magicword = '667979777283' ;
    var index = 0;
    $(document).on('keyup', function(e){
        var key = e.keyCode;
        if(key == magicword.substr(index, 2)){
            index = index+2;
            if(index == 12){
                var audio = {};
                $.playSound("/themes/magicproject/sound/boom.mp3");
                setTimeout(function(){
                    $('.sound-player').remove();
                }, 1500);
                index = 0;
            }
        }else{
            index = 0;
        }
    });

})( jQuery );