$(document).ready(function() {

    const $li = 
        $('#myList li:first')
            .appendTo('#myList')
            .addClass('highlight');

    
    $('#restoreBtn').click(function() {
        $li.prependTo('#myList')
            .removeClass('highlight');
        
        $(this).prop('disabled', true);
    });

});