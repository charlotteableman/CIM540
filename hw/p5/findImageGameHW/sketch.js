
var targetPosX = [0,200,400,600,800,1000];

var targetPosY = [0,200];

var imageSize = 200;

var pics = [];

var outputText = "Find the Happiest Dog:";

var currentBox = 0;

var startGame;

var sg = false;

function preload(){
pics[0] = loadImage("assets/happypup.jpg");
pics[1] = loadImage("assets/bullypup.jpg");
pics[2] = loadImage("assets/labpup.jpg");
pics[3] = loadImage("assets/mountainpup.jpg");
pics[4] = loadImage("assets/splashpup.jpg");
pics[5] = loadImage("assets/swimmingpup.jpg");
}

function setup(){
    createCanvas(1000,400);
    console.log("first postition in targetPosX: " + targetPosX[0]);
    console.log("3rd postition in targetPosX: " + targetPosX[2]);
    startGame = createButton("Click to start");
    startGame.position(width/2, 300);
    startGame.mousePressed(function(){
      sg = true;
    });
}

function draw() {

background(255);

if(sg == true){

fill(0);
rect(targetPosX[0], targetPosY[0], imageSize, imageSize);
rect(targetPosX[1], targetPosY[0], imageSize, imageSize);
rect(targetPosX[2], targetPosY[0], imageSize, imageSize);
rect(targetPosX[3], targetPosY[0], imageSize, imageSize);
rect(targetPosX[4], targetPosY[0], imageSize, imageSize);
rect(targetPosX[5], targetPosY[0], imageSize, imageSize);

if(mouseX >= targetPosX[0] && mouseX < targetPosX[1] && mouseY >= targetPosY[0] && mouseY < targetPosY[1]){
console.log("Box 1");
image(pics[0], targetPosX[0], targetPosY[0]);
currentBox = 1;
}

if(mouseX >= targetPosX[1] && mouseX < targetPosX[2] && mouseY >= targetPosY[0] && mouseY < targetPosY[1]){
console.log("Box 2");
image(pics[1], targetPosX[1], targetPosY[0]);
currentBox = 2;
}

if(mouseX >= targetPosX[2] && mouseX < targetPosX[3] && mouseY >= targetPosY[0] && mouseY < targetPosY[1]){
console.log("Box 3");
image(pics[2], targetPosX[2], targetPosY[0]);
currentBox = 3;
}

if(mouseX >= targetPosX[3] && mouseX < targetPosX[4] && mouseY >= targetPosY[0] && mouseY < targetPosY[1]){
console.log("Box 4");
image(pics[3], targetPosX[3], targetPosY[0]);
currentBox = 4;
}

if(mouseX >= targetPosX[4] && mouseX < targetPosX[5] && mouseY >= targetPosY[0] && mouseY < targetPosY[1]){
console.log("Box 5");
image(pics[4], targetPosX[4], targetPosY[0]);
currentBox = 5;
}

if(mouseX >= targetPosX[5] && mouseX < targetPosX[6] && mouseY >= targetPosY[0] && mouseY < targetPosY[1]){
console.log("Box 6");
image(pics[5], targetPosX[5], targetPosY[0]);
currentBox = 6;
}

}
textSize(32);
text(outputText, 50, 250);

if(currentBox == 1) {
  console.log("You won!!!!!");
  outputText = "You won!!!!!"
}
else if(currentBox == 2 || currentBox == 3 || currentBox == 4 || currentBox == 5 || currentBox == 6)
{console.log("You lose!!!");
outputText = "You lose!!!"
}

}
