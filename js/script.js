$(document).ready(function () {
    $('[data-popup=open-popup]').on('click', function () {
        $('.overlay, #open-popup').fadeIn('slow');
    });
    $('.popup__close').on('click', function () {
        $('.overlay, #open-popup').fadeOut('slow');
    });
});