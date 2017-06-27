var backgroundColor = 0;
var linesColor = 50;
var backgroundVertices = [];
var skip = 20;
var maxZ = 200;

function preload() {
    loadImage('assets/img/bg.jpg', function(img) {
        img.loadPixels();
        console.log(img.pixels);
        for(var i = 0; i < img.pixels.length - skip; i += skip) {
            backgroundVertices.push(img.pixels[i]);
        }
    });
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(backgroundColor);
}

function draw() {
    background(backgroundColor);
    maxZ = map(mouseY, 0, windowHeight, 200, 1000);
    drawLines();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

//perspective
function to2D(x, y, z) {
    var distance = 400;
    return {
        x: (-x * distance) / (z - distance),
        y: -(y * distance) / (z - distance)
    };
}

function drawLines() {
    stroke(linesColor);
    strokeWeight(2);
    var index = 0;
    for(var y = 0; y < windowHeight - skip; y += skip) {
        for(var x = 0; x < windowWidth - skip; x += skip) {
            var point1 = to2D(x, y, map(backgroundVertices[index], 0, 255, 0, maxZ));
            var point2 = to2D(x + skip, y, map(backgroundVertices[index + 1], 0, 255, 0, maxZ));
            line(point1.x, point1.y, point2.x, point2.y);
            index++;
        }
    }
}


