$(document).ready(function() {

    $('.header')
        .mouseenter(function() {
            $(this).stop().addClass('highlight').animate({ fontSize: '+=50'}, 1000);
        })
        .mouseleave(function() {
            $(this).stop().removeClass('highlight').animate({ fontSize: '-=50'}, 1000);
        })

    $('.main').hover(function() {
        $(this).toggleClass('highlight');
    });

});