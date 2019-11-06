/******************************
 * image links
 * ****************************/
$(document).ready(function() {
    $('.imageLinks').click(function() {
        window.location = $(this).find("a:first").attr("href");
        return false;
    });
});

/***************************
 * dropdown box
 **************************/
$(document).ready(function() {
    $(".drowpdownBt1").hover(function () {
        $(".dropdown").css('display', "flex");
        $(".dropdown").finish().slideDown('medium');
    }, function () {
        $(".dropdown").finish().slideUp('medium');
    });
});

$(document).ready(function () {
    $(".drowpdownBt2").hover(function () {
        $(".dropdown2").css('display', "flex");
        $(".dropdown2").finish().slideDown('medium');
    }, function () {
        $(".dropdown2").finish().slideUp('medium');
    });   
});