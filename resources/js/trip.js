$(document).ready(function () {

    setInterval(function () {
        glitch('h4', 70, '#ffffff', '');
    }, 4000);
    setInterval(function () {
        glitch('li', 50, '#ff00ff', 'rgba(0, 0, 0, 0)');
    }, 2900);
    setInterval(function () {
        glitch('h1', 60, '#ffffff', 'rgba(0, 0, 0, 0)');
    }, 3000);
    setInterval(function () {
        glitch('.jumbotron', 40, '#2324ff', 'rgba(225, 225, 225, 0.8)');
    }, 1000);

});