$(document).ready(function() {

    const yourLieInAprilImages = [
        'https://shieldbroblog.files.wordpress.com/2018/03/20184.jpg',
        'https://vignette.wikia.nocookie.net/shigatsu-wa-kimi-no-uso/images/f/f0/Kousei_Arima.png/revision/latest?cb=20150209172245',
        'https://vignette.wikia.nocookie.net/shigatsu-wa-kimi-no-uso/images/6/62/Tsubaki_Sawabe.png/revision/latest?cb=20141210140220',
        'https://vignette.wikia.nocookie.net/shigatsu-wa-kimi-no-uso/images/a/a5/Kaori_Miyazono.png/revision/latest/scale-to-width-down/300?cb=20141210125454',
        'https://vignette.wikia.nocookie.net/shigatsu-wa-kimi-no-uso/images/8/8f/Ryota_Watari.png/revision/latest?cb=20150209172401'
    ];
  // set initial image
  const currentGalleryImage = $('.gallery__image').prop('src', yourLieInAprilImages[0]);
  const galleryButton = $('.gallery__button');

  let i = 0;

  let galleryInterval = startCarrousel();

  galleryButton.click(function() {
      if (galleryInterval) {
          window.clearInterval(galleryInterval);
          galleryButton.prop('textContent', 'START');
          galleryInterval = null;
      } else {
          galleryInterval = startCarrousel();
          galleryButton.prop('textContent', 'PAUSE');
      }
  });


  function startCarrousel() {
      return setInterval(function() {
          i = (i + 1) % yourLieInAprilImages.length;
          currentGalleryImage.fadeOut(function() {
              $(this).prop('src', yourLieInAprilImages[i]);
              $(this).fadeIn();
          })
      }, 3000);
  }
    
});