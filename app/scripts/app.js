import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();

    $('.footer__up').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
});
