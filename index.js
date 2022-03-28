$(document).ready(function() {

    $('form').submit(function(event) {
        event.preventDefault();
        console.log('on submit form...')
    });

});