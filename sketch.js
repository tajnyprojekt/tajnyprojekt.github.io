
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    lastWindowWidth = windowWidth;
    lastWindowHeight = windowHeight;
}

function draw() {
    background(0);
    strokeWeight(10);
    stroke(255);
    fill(5);
    textAlign(CENTER, CENTER);
    textSize(map(windowWidth, 10, 1920, 0, 200));
    textStyle(BOLD);
    text("TAJNY PROJEKT", windowWidth/2, windowHeight/2);
    ellipse(50, 50, 80, 80);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

