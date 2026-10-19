
let canvas;
let xPos = 0;
let yPos = 0;
let easing = 0.3;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style("z-index", -2);
    // background(225);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    clear();
    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);
    drawThing(xPos, yPos);
}

function drawThing(_x, _y){
    fill(255, 204, 229);
    ellipse(_x, _y, 15, 15);
}

//one day.... one day i will make a sparkle that works

