
$(document).ready(function () {

    toggleBoxes();
    glitchElements();

    // $('.play-movie-button').on('click', function () {
    //     $('.play-movie-button').addClass('slide-right');
    // });
    //
    // $('.modal').on('hidden.bs.modal', function () {
    //     $('.play-movie-button').removeClass('slide-right');
    //
    //     //TODO: clear this
    //     $('.modal-video').each(function (index, element) {
    //         var src = $(element).attr('src');
    //         $(element).attr('src', '');
    //         $(element).attr('src', src);
    //     });
    // });
    //
    // $('#read-more-button').on('click', function () {
    //     $('#read-more-section').toggleClass('collapsed');
    //     $('#read-more-button').hide();
    // });
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
        glitch('#email-info', 70);
    }, 10000);
    setInterval(function () {
        glitch('#phone-info', 50);
    }, 9900);
    setInterval(function () {
        glitch('#box-1', 60);
    }, 6000);
}

function glitch(selector, length) {
    for(var i = 0; i < length; i+=2) {
        setTimeout(function() {
            $(selector).css({'background-color': '#ffffff'});
        }, i * 4);
        setTimeout(function() {
            $(selector).css( {'background-color': '#000000'});
        }, (i + 1) * 6);
    }
}

