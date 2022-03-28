$(document).ready(function() {

    $('body').on('keydown', function(event) {
        const leftArrow = 37;

        if (event.which === leftArrow) {
            $('.charmander')
                .stop()
                .animate({
                    rotate: '180',
                    marginRight: '+=10'
                }, 50);
        }

    });

});