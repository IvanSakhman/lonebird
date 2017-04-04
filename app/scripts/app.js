import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
    svg4everybody();

    $('.footer__up').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });

    $('.menu__open').click(function () {
        $('.menu__overlay').css("width", "100%");
    });

    $('.menu__close').click(function () {
        $('.menu__overlay').css("width", "0%");
    });

});