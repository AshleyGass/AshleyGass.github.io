//position
let posXdarkBrownScared = 1240;
let posYdarkBrownScared = 403;

let posXyellowScared = 1041;
let posYyellowScared = 215;

let posXbrightBrownScared = 914;
let posYbrightBrownScared = 540;

let posXpinkScared = 584;
let posYpinkScared = 279;

let posXpaleGreenScared = 410;
let posYpaleGreenScared = 596;

let posXbrightGreenScared = 279;
let posYbrightGreenScared = 354;

let posXpaleBrightGreenScared = 54;
let posYpaleBrightGreenScared = 491;

//images
let bg;
let emptyBg;
let tumbleweed;

//scaredCactuses
let darkBrownScared;
let yellowScared;
let brightBrownScared;
let pinkScared;
let paleGreenScared;
let brightGreenScared;
let paleBrightGreenScared;

//audio
let gunshot;

function preload() {

    // BACKGROUNDS
    emptyBg = loadImage('https://ashleygass.github.io/images/background.png');

    bg = loadImage('https://ashleygass.github.io/images/backgroundHappy.png');

    //SCARED CACTUSES
    yellowScared = loadImage('https://ashleygass.github.io/images/yellow_scared.png');

    pinkScared = loadImage('https://ashleygass.github.io/images/palePink_scared.png');

    paleGreenScared = loadImage('https://ashleygass.github.io/images/paleGreen_scared.png');

    paleBrightGreenScared = loadImage('https://ashleygass.github.io/images/paleBrightGreen_scared.png');

    darkBrownScared = loadImage('https://ashleygass.github.io/images/darkBrown_scared.png');

    brightGreenScared = loadImage('https://ashleygass.github.io/images/brightGreen_scared.png');

    brightBrownScared = loadImage('https://ashleygass.github.io/images/brightBrown_scared.png');


    // EXTRA IMAGES
    gunshot = createAudio('https://ashleygass.github.io/images/gunshot.mp3');
}

function setup() {
    createCanvas(1600, 900);
    background(bg);
    bg.resize(1600, 900);
    emptyBg.resize(1600, 900);
    darkBrownScared.resize(387, 729);
    yellowScared.resize(225, 424);
    brightBrownScared.resize(159, 299);
    pinkScared.resize(237, 446);
    paleGreenScared.resize(170, 321);
    brightGreenScared.resize(130, 245);
    paleBrightGreenScared.resize(194, 365);
}

function draw() {}

function mousePressed() {
    gunshot.autoplay(true);
    image(emptyBg, 0, 0);
    image(darkBrownScared, posXdarkBrownScared, posYdarkBrownScared);
    image(yellowScared, posXyellowScared, posYyellowScared);
    image(brightBrownScared, posXbrightBrownScared, posYbrightBrownScared);
    image(pinkScared, posXpinkScared, posYpinkScared);
    image(paleGreenScared, posXpaleGreenScared, posYpaleGreenScared);
    image(brightGreenScared, posXbrightGreenScared, posYbrightGreenScared);
    image(paleBrightGreenScared, posXpaleBrightGreenScared, posYpaleBrightGreenScared);

    if ((mouseX > 1240 && mouseX < 1626) && (mouseY > 403 && mouseY < 900)) {
        posXdarkBrownScared = 1650;
        posYdarkBrownScared = 1000;
        fill('red');
        textFont('Futura', 50);
        text('BANG', mouseX - 70, mouseY);

    } else if ((mouseX > 1073 && mouseX < 1266) && (mouseY > 215 && mouseY < 639)) {
        posXyellowScared = 1650;
        posYyellowScared = 1000;
        fill('red');
        textFont('Futura', 50);
        text('BANG', mouseX - 70, mouseY);

    } else if ((mouseX > 914 && mouseX < 1072) && (mouseY > 640 && mouseY < 838)) {
        posXbrightBrownScared = 1650;
        posYbrightBrownScared = 1000;
        fill('red');
        textFont('Futura', 50);
        text('BANG', mouseX - 70, mouseY);

    } else if ((mouseX > 584 && mouseX < 821) && (mouseY > 279 && mouseY < 595)) {
        posXpinkScared = 1650;
        posYpinkScared = 1000;
        fill('red');
        textFont('Futura', 50);
        text('BANG', mouseX - 70, mouseY);

    } else if ((mouseX > 410 && mouseX < 580) && (mouseY > 596 && mouseY < 917)) {
        posXpaleGreenScared = 1650;
        posYpaleGreenScared = 1000;
        fill('red');
        textFont('Futura', 50);
        text('BANG', mouseX - 70, mouseY);

    } else if ((mouseX > 279 && mouseX < 409) && (mouseY > 353 && mouseY < 490)) {
        posXbrightGreenScared = 1650;
        posYbrightGreenScared = 1000;
        fill('red');
        textFont('Futura', 50);
        text('BANG', mouseX - 70, mouseY);

    } else if ((mouseX > 54 && mouseX < 248) && (mouseY > 491 && mouseY < 856)) {
        posXpaleBrightGreenScared = 1650;
        posYpaleBrightGreenScared = 1000;
        fill('red');
        textFont('Futura', 50);
        text('BANG', mouseX - 70, mouseY);
    }
}

function keyPressed() {
    image(bg, 0, 0);
    textStyle(BOLD);
    fill('white');
    textFont('Futura', 30);
    text('REFRESH THE PAGE\nTO START OVER', 500, 150);
}
