var centerX = 100;
var centerY = 100;
var backgroundColor = "white";

var button;

var sel;
var faceColor = "lightblue";

function setup() {
  // put setup code here
  createCanvas(800,800);
  background(255);
  button = createButton ("click me");
  button.mousePressed (changeBG);


  sel = createSelect ();
  sel.option("lightblue");
  sel.option("pink");
  sel.option("lavender");

  sel.changed(function(){

    faceColor = sel.value();

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

stroke (0);
strokeWeight(1);
fill(faceColor);
ellipse(centerX -25, centerY -100, 500, 500);

  var xOffset = map(mouseX, 0, width, -20,20);
  var yOffset = map(mouseY, 0, height, -20,20);

  stroke(0);
  strokeWeight(1);
  fill("white");
  ellipse(centerX -100,centerY -100,100,100);
  ellipse(centerX +50,centerY -100,100,100);

  stroke (0);
  strokeWeight(1);
  fill("black");
  ellipse(centerX -100,centerY -100,50,50);
  ellipse(centerX +50,centerY -100,50,50);

  stroke(125);
  strokeWeight(5);
  point(centerX -25, centerY -20);

  stroke(255, 0, 0);
  line(centerX -100,centerY -20, centerX +50,centerY -20);
}

function mousePressed(){
backgroundColor = "skyblue";
}

function mouseReleased(){
backgroundColor = "deepskyblue";
}

function changeBG(){
backgroundColor = "green";
}
