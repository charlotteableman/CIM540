var centerX = 100;
var centerY = 100;
var backgroundColor = "white";

var button;
var button2;

var noseColor = "black";

var sel;
var eyeColor = "white";

function setup() {
  // put setup code here
  createCanvas(800,800);
  background(255);
  button = createButton ("click me");
  button.mousePressed (changeBG);
  button2 = createButton ("click me too");
  button2.mousePressed(function(){

    //your cose goes here
    noseColor = "black";
  });

  sel = createSelect ();
  sel.option("white");
  sel.option("pink");
  sel.option("beige");

  sel.changed(function(){

    eyeColor = sel.value();

  });
}

function draw() {
  // put drawing code here
  background(backgroundColor);
  centerX = mouseX;
  centerY = mouseY;
  stroke (0);
  strokeWeight(1);

console.log("xOffset: " + xOffset + "yOffset: " + yOffset);

  fill(eyeColor);
  ellipse(centerX -25, centerY -100, 500, 500);
  ellipse(centerX -100,centerY -100,100,100);
  ellipse(centerX -100,centerY -75,50,50);
  ellipse(centerX +50,centerY -100,100,100);
  ellipse(centerX +25,centerY -100,50,50);

  var xOffset = map(mouseX, 0, width, -20,20);
  var yOffset = map(mouseY, 0, height, -20,20);

  stroke (0);
  strokeWeight(1);
  fill ("black");
  ellipse(centerX -150,centerY -300, 200, 175);
  ellipse(centerX +100,centerY -300, 200, 175);

  stroke(125);
  strokeWeight(5);
  point(centerX -25, centerY -20);

  stroke(255, 0, 0);
  line(centerX -100,centerY +50, centerX +50,centerY +50);

  noStroke();
  fill("red");
  ellipse(centerX -25, centerY +50, 75, 25);

  noStroke();
  fill(noseColor);
  ellipse(centerX -25, centerY -25, 75, 25);

  noStroke();
  fill("pink");
  ellipse(centerX +60, centerY -25, 75, 25);
  ellipse(centerX -110, centerY -25, 75, 25);
}

function mousePressed(){
backgroundColor = "blue";
}

function mouseReleased(){
backgroundColor = "red";
}

function changeBG(){
backgroundColor = "green";
}
