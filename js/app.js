$(document).ready(function () {
    setInterval(toggleBoxes, 1000);
});

function toggleBoxes() {
        $('#box-1, #box-2').toggleClass('box-top');
}
