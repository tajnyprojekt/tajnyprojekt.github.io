var mouseXPrev = 0, mouseYPrev = 0;
var mouseXNext = 0, mouseYNext = 0;
var mouseXContact = 0, mouseYContact = 0;

$(document).ready(function () {

    toggleBoxes();
    glitchElements();

    $('.play-movie-button').on('click', function () {
        $('.play-movie-button').addClass('slide-right');
    });

    $('.modal').on('hidden.bs.modal', function () {
        $('.play-movie-button').removeClass('slide-right');
        $('#video-modal').each(function (index, element) {
            $(element).attr('src', '');
            projects.handleModalClose();
        });
    });

    $('.contact-container-area').mousemove(function(e){
        var offset = $('.contact-container-area').offset();
        mouseXContact = e.pageX - offset.left - 70;
        mouseYContact = Math.min(e.pageY - offset.top - 190, 350);
        if (mouseXContact < 0) mouseXContact = 0;
        if (mouseYContact < 0) mouseYContact = 0;
    });

    $('#project-navigation__previous').mousemove(function(e){
        var offset = $('#project-navigation__previous').offset();
        mouseXPrev = e.pageX - offset.left - 70;
        mouseYPrev = e.pageY - offset.top - 50;
        if (mouseXPrev < 0) mouseXPrev = 0;
        if (mouseYPrev < 0) mouseYPrev = 0;
    });

    $('#project-navigation__next').mousemove(function(e){
        var offset = $('#project-navigation__next').offset();
        mouseXNext = e.pageX - offset.left - 70;
        mouseYNext = e.pageY - offset.top - 50;
        if (mouseXNext < 0) mouseXNext = 0;
        if (mouseYNext < 0) mouseYNext = 0;
    });

    // cache the selector
    var followerPrev = $("#previous-project-button");
    var xpPrev = 0, ypPrev = 0;
    var followerNext = $("#next-project-button");
    var xpNext = 0, ypNext = 0;
    var followerContact = $(".contact-container");
    var xpContact = 0, ypContact = 0;
    var loop = setInterval(function(){
        // change 12 to alter damping higher is slower
        xpPrev += (mouseXPrev - xpPrev) / 12;
        ypPrev += (mouseYPrev - ypPrev) / 12;
        followerPrev.css({left:xpPrev, top:ypPrev});

        xpNext += (mouseXNext - xpNext) / 12;
        ypNext += (mouseYNext - ypNext) / 12;
        followerNext.css({left:xpNext, top:ypNext});

        xpContact += (mouseXContact - xpContact) / 12;
        ypContact += (mouseYContact - ypContact) / 12;
        followerContact.css({left:xpContact, top:ypContact});
    }, 10);
});

function toggleBoxes() {
    setInterval(function () {
        $('#box-1').toggleClass('box-1-top');
	}, 1000);
    setInterval(function () {
        $('#box-2').toggleClass('box-2-top');
    }, 700);
}

function glitchElements() {
    setInterval(function () {
        glitch('#email-info', 70, '#ffffff', '#000000');
    }, 10000);
    setInterval(function () {
        glitch('#phone-info', 50, '#ffffff', '#000000');
    }, 9900);
    setInterval(function () {
        glitch('#box-1', 60, '#ffffff', '#000000');
    }, 6000);
    setInterval(function () {
        glitch('#insta-info', 40, '#000000', '#ffffff');
    }, 3000);
}

function glitch(selector, length, startColor, endColor) {
    for(var i = 0; i < length; i+=2) {
        setTimeout(function() {
            $(selector).css({'background-color': startColor});
        }, i * 4);
        setTimeout(function() {
            $(selector).css( {'background-color': endColor});
        }, (i + 1) * 6);
    }
}

