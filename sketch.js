var noiseScale=0.03;
var backgroundColor = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

}

function draw() {
    background(backgroundColor);
    drawEllipse();
    drawWave();
    drawText();

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
    if(mouseX > 10 && mouseX < 90 && mouseY > 10 && mouseY < 90) {
        backgroundColor = color(random(255), random(255), random(255));
    }
}

function drawEllipse() {
    strokeWeight(15);
    stroke(255);
    fill(0);
    ellipse(50, 50, 80, 80);
}

function drawWave() {
    strokeWeight(1);
    for (var x=0; x < windowWidth; x+=1) {
        var noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
        stroke(255);
        line(x, mouseY+noiseVal*100, x, height);
    }
}

function drawText() {
    strokeWeight(10);
    stroke(255);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(map(windowWidth, 10, 1920, 0, 200));
    textStyle(BOLD);
    text("TAJNY PROJEKT", windowWidth/2, windowHeight/2);

    fill(255);
    textSize(map(windowWidth, 10, 1920, 0, 100));
    textStyle(BOLD);
    text("W BUDOWIE", windowWidth/2, windowHeight/2 + 200);
}

