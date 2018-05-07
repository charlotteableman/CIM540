var dogs = {};
var button;
var button2;
var box = [];
var clicked = [];

var sizeSelect = ""; // leave with just ""
var colorSelect = "";
var coatSelect = "";
var currentDog = "";

var smallX = 100;
var smallY = 100;
var dogSound = false;

var uiBoxes = [];

function preload() {
  loadFont('assets/theboldfont.ttf');
  soundFormats ('mp3','ogg');
  mySound = loadSound ('assets/bark.mp3');

  box[0] = loadImage("assets/smallbox.png");
  box[1] = loadImage("assets/mediumbox.png");
  box[2] = loadImage("assets/largebox.png");
  box[3] = loadImage("assets/whitebox.png");
  box[4] = loadImage("assets/brownbox.png");
  box[5] = loadImage("assets/blackbox.png");
  box[6] = loadImage("assets/shortbox.png");
  box[7] = loadImage("assets/longbox.png");
  box[8] = loadImage("assets/curlybox.png");

  clicked[0] = loadImage("assets/smallclicked.png");
  clicked[1] = loadImage("assets/mediumclicked.png");
  clicked[2] = loadImage("assets/largeclicked.png");
  clicked[3] = loadImage("assets/whiteclicked.png");
  clicked[4] = loadImage("assets/brownclicked.png");
  clicked[5] = loadImage("assets/blackclicked.png");
  clicked[6] = loadImage("assets/shortclicked.png");
  clicked[7] = loadImage("assets/longclicked.png");
  clicked[8] = loadImage("assets/curlyclicked.png");

  uiBoxes[0] = {"x" : 25, "y" : 10, "off" : box[0], "on" : clicked[0], "currentState": false, "size" : 83, "type" : "small"};
  uiBoxes[1] = {"x" : 25, "y" : 100, "off" : box[1], "on" : clicked[1], "currentState": false, "size" : 83, "type" : "medium"};
  uiBoxes[2] = {"x" : 25, "y" : 190, "off" : box[2], "on" : clicked[2], "currentState": false, "size" : 83, "type" : "large"};

  uiBoxes[3] = {"x" : 115, "y" : 10, "off" : box[3], "on" : clicked[3], "currentState": false, "size" : 83, "type" : "white"};
  uiBoxes[4] = {"x" : 115, "y" : 100, "off" : box[4], "on" : clicked[4], "currentState": false, "size" : 83, "type" : "brown"};
  uiBoxes[5] = {"x" : 115, "y" : 190, "off" : box[5], "on" : clicked[5], "currentState": false, "size" : 83, "type" : "black"};

  uiBoxes[6] = {"x" : 205, "y" : 10, "off" : box[6], "on" : clicked[6], "currentState": false, "size" : 83, "type" : "short"};
  uiBoxes[7] = {"x" : 205, "y" : 100, "off" : box[7], "on" : clicked[7], "currentState": false, "size" : 83, "type" : "long"};
  uiBoxes[8] = {"x" : 205, "y" : 190, "off" : box[8], "on" : clicked[8], "currentState": false, "size" : 83, "type" : "curly"};


  // image(box[0],25,10);
  // image(box[1],25,100);
  // image(box[2],25,190);
  //
  // image(box[3],115,10);
  // image(box[4],115,100);
  // image(box[5],115,190);
  //
  // image(box[6],205,10);
  // image(box[7],205,100);
  // image(box[8],205,190);

}

function setup() {
  // put setup code here
  createCanvas(700,400);
  background(255);
  loadFont('assets/theboldfont.ttf');

  mySound.setVolume(0.1);


  dogs["beagle"] = {"size":"small", "color":"brown", "coat":"short", "image": loadImage("assets/beagle.png")};
  console.log(dogs["beagle"]);

  dogs["shiba"] = {"size":"small", "color":"brown", "coat":"long", "image": loadImage("assets/shiba.png")};
  console.log(dogs["shiba"]);

  dogs["toypoodle"] = {"size":"small", "color":"brown", "coat":"curly", "image": loadImage("assets/toypoodle.png")};
  console.log(dogs["toypoodle"]);

  dogs["pug"] = {"size":"small", "color":"black", "coat":"short", "image": loadImage("assets/pug.png")};
  console.log(dogs["pug"]);

  dogs["pumi"] = {"size":"small", "color":"black", "coat":"curly", "image": loadImage("assets/pumi.png")};
  console.log(dogs["pumi"]);

  dogs["affenpinscher"] = {"size":"small", "color":"black", "coat":"long", "image": loadImage("assets/affenpinscher.png")};
  console.log(dogs["affenpinscher"]);

  dogs["chihuahua"] = {"size":"small", "color":"white", "coat":"short", "image": loadImage("assets/chihuahua.png")};
  console.log(dogs["chihuahua"]);

  dogs["pomeranian"] = {"size":"small", "color":"white", "coat":"long", "image": loadImage("assets/pomeranian.png")};
  console.log(dogs["pomeranian"]);

  dogs["bichon"] = {"size":"small", "color":"white", "coat":"curly", "image": loadImage("assets/bichon.png")};
  console.log(dogs["bichon"]);


  dogs["bulldog"] = {"size":"medium", "color":"white", "coat":"short", "image": loadImage("assets/bulldog.png")};
  console.log(dogs["bulldog"]);

  dogs["samoyed"] = {"size":"medium", "color":"white", "coat":"long", "image": loadImage("assets/samoyed.png")};
  console.log(dogs["samoyed"]);

  dogs["labradoodle"] = {"size":"medium", "color":"white", "coat":"curly", "image": loadImage("assets/labradoodle.png")};
  console.log(dogs["labradoodle"]);

  dogs["airdale"] = {"size":"medium", "color":"brown", "coat":"curly", "image": loadImage("assets/airdale.png")};
  console.log(dogs["airdale"]);

  dogs["cockerspaniel"] = {"size":"medium", "color":"brown", "coat":"long", "image": loadImage("assets/cockerspaniel.png")};
  console.log(dogs["cockerspaniel"]);

  dogs["cattledog"] = {"size":"medium", "color":"brown", "coat":"short", "image": loadImage("assets/cattledog.png")};
  console.log(dogs["cattledog"]);

  dogs["pitbull"] = {"size":"medium", "color":"black", "coat":"short", "image": loadImage("assets/pitbull.png")};
  console.log(dogs["pitbull"]);

  dogs["lab"] = {"size":"medium", "color":"black", "coat":"long", "image": loadImage("assets/lab.png")};
  console.log(dogs["lab"]);

  dogs["waterdog"] = {"size":"medium", "color":"black", "coat":"curly", "image": loadImage("assets/waterdog.png")};
  console.log(dogs["waterdog"]);


  dogs["argentinian"] = {"size":"large", "color":"white", "coat":"short", "image": loadImage("assets/argentinian.png")};
  console.log(dogs["argentinian"]);

  dogs["husky"] = {"size":"large", "color":"white", "coat":"long", "image": loadImage("assets/husky.png")};
  console.log(dogs["husky"]);

  dogs["poodle"] = {"size":"large", "color":"white", "coat":"curly", "image": loadImage("assets/poodle.png")};
  console.log(dogs["poodle"]);

  dogs["ridgeback"] = {"size":"large", "color":"brown", "coat":"short", "image": loadImage("assets/ridgeback.png")};
  console.log(dogs["ridgeback"]);

  dogs["golden"] = {"size":"large", "color":"brown", "coat":"long", "image": loadImage("assets/golden.png")};
  console.log(dogs["golden"]);

  dogs["curlycoated"] = {"size":"large", "color":"brown", "coat":"curly", "image": loadImage("assets/curlycoated.png")};
  console.log(dogs["curlycoated"]);

  dogs["doberman"] = {"size":"large", "color":"black", "coat":"short", "image": loadImage("assets/doberman.png")};
  console.log(dogs["doberman"]);

  dogs["bernese"] = {"size":"large", "color":"black", "coat":"long", "image": loadImage("assets/bernese.png")};
  console.log(dogs["bernese"]);

  dogs["blackpoodle"] = {"size":"large", "color":"black", "coat":"curly", "image": loadImage("assets/blackpoodle.png")};
  console.log(dogs["blackpoodle"]);


  button = createButton ("find");
  button.mousePressed(function(){
  mySound.play();


    for (var dog in dogs){
      if((dogs[dog].size == sizeSelect) && (dogs[dog].color == colorSelect) && (dogs[dog].coat == coatSelect)){
        currentDog = dog;
        console.log(currentDog);
        break;
      }else{
        currentDog = "";
      }
    }
  });


  button2 = createButton ("reset");
  button2.mousePressed(function(){
  //reset create
  currentDog = "";
  sizeSelect = "";
  colorSelect = "";
  coatSelect = "";
  for(var i  = 0; i < uiBoxes.length; i++){
    uiBoxes[i].currentState == false};
  });

  //for loop





function draw() {
  // put drawing code here

for(var i  = 0; i < uiBoxes.length; i++){
  if(uiBoxes[i].currentState == false){
    image(uiBoxes[i].off,uiBoxes[i].x,uiBoxes[i].y);
  }else{
    image(uiBoxes[i].on,uiBoxes[i].x,uiBoxes[i].y);
  }
}

console.log(currentDog);

if(currentDog == ""){
  // select another dog
}else{
  image(dogs[currentDog].image,400,100,200,200);
}
}



function mousePressed(){
  // check for user selections all distances
  for(var j = 0; j < uiBoxes.length; j++){

  if(mouseX > uiBoxes[j].x && mouseX < uiBoxes[j].x + uiBoxes[j].size && mouseY > uiBoxes[j].y && mouseY < uiBoxes[j].y + uiBoxes[j].size){
    if(uiBoxes[j].currentState == false){
      //this sets the image to change on
      uiBoxes[j].currentState = true;


      //here we set sizeSelect, colorselect, coatselect
      if(j >= 0 && j <=2){
        //size
        sizeSelect = uiBoxes[j].type;
      }else if(j >= 3 && j <=5){
        //color
        colorSelect = uiBoxes[j].type;
      }else if(j >= 6 && j <=8){
      //coat }
      coatSelect = uiBoxes[j].type;
    }


  }else{
      //this sets the image to change back to off

      uiBoxes[j].currentState = false;

      // here we are resetting sizeSelect,colorselect, coatselect
      if(sizeSelect == uiBoxes[j].type){
        sizeSelect = "";
      }

      if(colorSelect == uiBoxes[j].type){
        colorSelect = "";
      }

      if(coatSelect == uiBoxes[j].type){
        coatSelect = "";
    }
  }
}

}
}



console.log(sizeSelect);
console.log(colorSelect);
console.log(coatSelect);

}//end of mousepressed
