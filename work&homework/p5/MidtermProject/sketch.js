var centerX = 0;
var centerY = 0;

var bgChange, bgChange1, bgChange2, bgChange3, hitImage;
var bgImage, bgImage2, bgImage3, bgImage4, currentBgImage;

var hitZoneX = 100;
var hitZoneY = 100;


var curTimes = 0;

var showHide = true;
var showHideButton;


function preload() {
    bgImage = loadImage("assets/Sunrise.jpg");
    bgImage2 = loadImage("assets/Day.jpg");
    bgImage3 = loadImage("assets/Sunset.jpg");
    bgImage4 = loadImage("assets/Night.jpg");
    hitImage = loadImage("assets/balloon.png");
}

function setup() {
    createCanvas(800, 800);
    centerX = width / 2;
    centerY = height / 2;

    bgChange = createButton('Sunrise');
    bgChange.position(50, 200);
    bgChange.mousePressed(bgFunction);

    bgChange1 = createButton('Day');
    bgChange1.position(200, 200);
    bgChange1.mousePressed(bgFunction1);

    bgChange2 = createButton('Sunset');
    bgChange2.position(350, 200);
    bgChange2.mousePressed(bgFunction2);

    bgChange3 = createButton('Night');
    bgChange3.position(500, 200);
    bgChange3.mousePressed(bgFunction3);

    currentBgImage = bgImage;
}

function draw() {
    background(0);
    image(currentBgImage, 0, 0);

    strokeWeight(1);

    ellipse(hitZoneX, hitZoneY, 10, 10);
    var hitZoneDist = dist(mouseX, mouseY, hitZoneX, hitZoneY);
    //console.log(hitZoneDist);

    if (hitZoneDist < 10) {
        image(hitImage, hitZoneX - 100, hitZoneY - 100);
    }
  }

  function bgFunction() {
      currentBgImage = bgImage;
      curTimes  = 0;
  }

  function bgFunction1() {
      currentBgImage = bgImage2;
      curTimes = 1;
  }

  function bgFunction2() {
      currentBgImage = bgImage3;
      curTimes = 2;
  }

  function bgFunction3() {
      currentBgImage = bgImage4;
      curTimes = 3;
  }

  function showHideFunction() {
      if (showHide == true) {
          showHide = false;
      } else {
          showHide = true;
      }
  }
