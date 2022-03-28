$(document).ready(function() {

    console.log(`attr of #cb is ${$('#cb').attr('checked')}.`);
    console.log(`prop of #cb is ${$('#cb').prop('checked')}.`);

    $('#cb').prop('checked', true); // equals $('#cb').attr('checked', 'checked');
    
    console.log(`executed $('#cb').prop('checked', true)`);
    
    console.log(`attr of #cb is ${$('#cb').attr('checked')}.`);
    console.log(`prop of #cb is ${$('#cb').prop('checked')}.`);

    console.log('///////////////////////////////////////////')

    console.log(`attr of #cb2 is ${$('#cb2').attr('checked')}.`);
    console.log(`prop of #cb2 is ${$('#cb2').prop('checked')}.`);

    $('#cb2').attr('checked', null); // $('#cb2').prop('checked', false);

    console.log(`executed $('#cb').attr('checked', null)`);

    console.log(`attr of #cb2 is ${$('#cb2').attr('checked')}.`);
    console.log(`prop of #cb2 is ${$('#cb2').prop('checked')}.`);
    
});