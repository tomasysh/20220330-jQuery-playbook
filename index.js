$(document).ready(function() {

    const $myList = $('.myList').click(function() {
        console.log('click #myList');
    });

    const $cloneList = 
        $myList
            .clone(true)
            .appendTo('body');

});