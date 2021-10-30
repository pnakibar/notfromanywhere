var color1;

var color2;

var color3;

var colorArr;

function chooseMondrianColor() {
    var colorIndex = int(random(colorArr.length));
    return colorArr[colorIndex];
}

function drawVerticalLine(c) {
    stroke(c);
    var randomWidth = int(random(width));
    line(randomWidth, 0, randomWidth, height);
}

function drawHorizontalLine(c) {
    stroke(c);
    var randomHeight = int(random(height));
    line(0, randomHeight, width, randomHeight);
}

function setup() {
    // noLoop();
    initializeFields();
    createCanvas(1920, 1080);
    background(255);
}

function draw() {
    strokeWeight(30);
    var nLines = 5;
    for (var colorIndex = 0; colorIndex < colorArr.length; colorIndex++) {
        for (var i = 0; i < nLines; i++) {
            var c = colorArr[colorIndex];
            drawVerticalLine(c);
            drawHorizontalLine(c);
        }
    }
}

function initializeFields() {
    color1 = color(0x28, 0xF0, 0x0F);
    color2 = color(0xE4, 0x02, 0xF5);
    color3 = color(0xFF, 0x1F, 0x26);
    colorArr = [ color1, color2, color3 ];
}

