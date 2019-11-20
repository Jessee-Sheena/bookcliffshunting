/******************************
 * image links
 * ****************************/
$(document).ready(function() {
    $('.imageLinks').click(function () {
        if ($(this).attr('id') == "hunt") {
            var url = $(this).find("a:first").attr("href");
            window.open(url, '_blank');
            return false;
        }
        else {
            window.location = $(this).find("a:first").attr("href");
            return false;
        }
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
/***************************
 * slideout box
 **************************/
$(document).ready(function () {
    $(".slideoutBt1").hover(function () {
        $(".slideout").css('display', "flex");
        $(".slideout").finish().slideDown('medium');
    }, function () {
        $(".slideout").finish().slideUp('medium');
    });
});

$(document).ready(function () {
    $(".slideoutBt2").hover(function () {
        $(".slideout2").css('display', "flex");
        $(".slideout2").finish().slideDown('medium');
    }, function () {
            $(".slideout2").finish().slideUp('medium');
            $("#navBar").finish().slideUp('medium');
    });
});

/***************************
 * Hamburger Menu
 **************************/
$(document).ready(function () {
    $("#hamburger").hover(function () {
        $("#navBar").css('display', "block");
        $("#navBar").finish().slideDown('medium');

    })
})