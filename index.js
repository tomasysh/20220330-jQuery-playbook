$(document).ready(function() {

    $('select').change(function() {
        let str = 'Your Lie in ';
        $('select option:selected').each(function() {
            str += `${$(this).val().charAt(0).toUpperCase()}${$(this).val().slice(1)}`;
        });
        $('h1').text(str);
    });

});