function setup() {
    createCanvas(800, 400);
    angleMode(DEGREES);
    background(220);
}

function drawSegment() {
    if (mouseIsPressed) {
        strokeWeight(2);
        stroke(random(255), random(255), random(255)); 
        line(mouseX - width / 2, mouseY - height / 2, pmouseX - width / 2, pmouseY - height / 2);
    }
}

function draw() {
    translate(width / 2, height / 2); 
    for (let i = 0; i < 6; i++) {
        rotate(60); 
        drawSegment();
    }
}
