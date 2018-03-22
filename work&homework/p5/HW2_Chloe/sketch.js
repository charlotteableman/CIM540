var centerX = 100;
var centerY = 100;

function setup() {
  // put setup code here
  createCanvas(800,800);
  background(255);
}

function draw() {
  // put drawing code here
  background(255);
  centerX = mouseX;
  centerY = mouseY;

  stroke (0);
  strokeWeight(1);
  fill("lightblue");
  ellipse(centerX -25, centerY -100, 500, 500);

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
