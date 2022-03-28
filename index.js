$(document).ready(function() {

    $(`<h1>HELLO WORLD</h1>
        <h1>jQuery Playbook</h1>
        <span>20220330-20220331</span>
        <span>TomasYSH</span>`).prependTo('body');

    $('<a>', {
        html: `Text me`,
        href: 'mailto: tomasysh@gmail.com',
        target: '_blank',
    }).insertBefore('.myList');

});