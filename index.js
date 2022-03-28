$(document).ready(function() {

    $('button.sad').on('click', function() {
        alert('so sad');
    });

    $(`<button type="button" class="sad">:(</button>`)
        .appendTo('.header');

    $('.main').on('click', 'button.smile', function() {
        alert('so happy');
    })

    $(`<button type="button" class="smile">:)</button>`)
        .appendTo('.main');

});