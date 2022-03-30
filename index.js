$(document).ready(function () {
    $('.fetch-data').click(function () {
      $(this).prop({ disabled: true });
      $('#pokemon').empty();
      $('body').addClass('backdrop');
      setTimeout(() => {
        getPokemon();
      }, 1000);
    });

    function getPokemon() {
      const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';

      $.ajax({
        url: POKE_API_URL,
        data: {
          limit: 10,
          offset: 0,
        },
        type: 'GET',
        dataType: 'json',
      })
        .done(function (response) {
          console.log('response', response);
        })
        .fail(function (error) {
          console.log('some error occurred :(');
        })
        .always(function () {
          $('body').removeClass('backdrop');
        });
    }
  });