"use strict";
$(document).ready(function() {
    // $('.theme-loader').addClass('loaded');
    $('.theme-loader').animate({
        'opacity': '0',
    }, 700);
    setTimeout(function() {
        $('.theme-loader').remove();
    }, 700);
    // $('.pcoded').addClass('loaded');
});
