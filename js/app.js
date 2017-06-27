
$(document).ready(function () {

    setInterval(toggleBoxes, 1000);

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
    });

    $('#read-more-button').on('click', function () {
        $('#read-more-section').toggleClass('collapsed');
        $('#read-more-button').hide();
    });


});

var currentProjectIndex = 0;
var projectIds = [
	'project-dyplom',
	'project-holo',
	'project-heaven',
    'project-rabbit'
];

function toggleBoxes() {
        $('#box-1, #box-2').toggleClass('box-top');
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

function logCurrentProject() {
	console.log(projectIds[currentProjectIndex]);
}

