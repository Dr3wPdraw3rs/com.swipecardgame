// var Webflow = Webflow || [];   this array is declared at the top and wraps jQuery functions

Webflow.push(function () {
  $(document).ready(function () {

    $('.aboutPopup-open').on('click', function () {
      $('.aboutPopup').fadeIn(300);
    });

    $('.aboutPopup-close').on('click', function () {
      $('.aboutPopup').fadeOut(300);
    });

  });
});

