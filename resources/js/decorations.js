
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

