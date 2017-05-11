var noiseScale=0.02;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

}

function draw() {
    background(0);
    drawEllipse();
    drawWave();
    drawText();

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function drawEllipse() {
    strokeWeight(8);
    stroke(255);
    ellipse(50, 50, 80, 80);
}

function drawWave() {
    strokeWeight(1);
    for (var x=0; x < windowWidth; x++) {
        var noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
        stroke(255);
        // stroke(noiseVal*255);
        line(x, mouseY+noiseVal*80, x, height);
    }
}

function drawText() {
    strokeWeight(10);
    stroke(255);
    fill(5);
    textAlign(CENTER, CENTER);
    textSize(map(windowWidth, 10, 1920, 0, 200));
    textStyle(BOLD);
    text("TAJNY PROJEKT", windowWidth/2, windowHeight/2);
}

