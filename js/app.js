
$(document).ready(function () {

    toggleBoxes();

    showCurrentProject();

    $('#previous-project-button').on('click', function() {
    	previousProject();
    });

    $('#next-project-button').on('click', function() {
    	nextProject();
    });

    $('.play-movie-button').on('click', function () {
        $('.play-movie-button').addClass('slide-right');
    });

    $('.modal').on('hidden.bs.modal', function () {
        $('.play-movie-button').removeClass('slide-right');

        //TODO: clear this
        $('.modal-video').each(function (index, element) {
            var src = $(element).attr('src');
            $(element).attr('src', '');
            $(element).attr('src', src);
        });
    });

    $('#read-more-button').on('click', function () {
        $('#read-more-section').toggleClass('collapsed');
        $('#read-more-button').hide();
    });

    setInterval(function () {
    	glitch('#email-info', 70);
    }, 10000);
    setInterval(function () {
        glitch('#phone-info', 50);
    }, 9900);

    setInterval(function () {
        glitch('#box-1', 60);
    }, 6000);


});

var currentProjectIndex = 0;
var projectIds = [
	'project-dyplom',
    'project-heaven',
	'project-holo',
	'project-insound',
    'project-rabbit',
    'project-escher'
];

function toggleBoxes() {
    setInterval(function () {
        $('#box-1').toggleClass('box-top');
	}, 1000);
    setInterval(function () {
        $('#box-2').toggleClass('box-top-2');
    }, 700);
}

function getCurrentProjectId() {
	return '#' + projectIds[currentProjectIndex];
}

function hideCurrentProject() {
	$(getCurrentProjectId()).hide();
}

function showCurrentProject() {
	$(getCurrentProjectId()).show();
}

function previousProject() {
	hideCurrentProject();
	currentProjectIndex--;
	if(currentProjectIndex < 0) {
		currentProjectIndex = projectIds.length - 1;
	}
	showCurrentProject();
}

function nextProject() {
	hideCurrentProject();
	currentProjectIndex++;
	if(currentProjectIndex >= projectIds.length) {
		currentProjectIndex = 0;
	}
	showCurrentProject();
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

