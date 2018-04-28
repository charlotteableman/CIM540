var dogs = {};
var button;
var box = [];

var sizeSelect = ""; // leave with just ""
var colorSelect = "";
var coatSelect = "";
var currentDog = "";

var smallX = 100;
var smallY = 100;

function preload() {
  loadFont('assets/theboldfont.ttf');
  box[0] = loadImage("assets/smallbox.png");
  box[1] = loadImage("assets/mediumbox.png");
  box[2] = loadImage("assets/largebox.png");
  box[3] = loadImage("assets/whitebox.png");
  box[4] = loadImage("assets/brownbox.png");
  box[5] = loadImage("assets/blackbox.png");
  box[6] = loadImage("assets/shortbox.png");
  box[7] = loadImage("assets/longbox.png");
  box[8] = loadImage("assets/curlybox.png");
}

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(255);
  loadFont('assets/theboldfont.ttf');


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
  button.mousePressed(function(){ ; });
}


function draw() {
  // put drawing code here
image(box[0],25,10);
image(box[1],25,100);
image(box[2],25,190);
image(box[3],115,10);
image(box[4],115,100);
image(box[5],115,190);
image(box[6],205,10);
image(box[7],205,100);
image(box[8],205,190);


// draw interface

if(currentDog == ""){
  // select another dog
}else{
  image(dogs[currentDog].image,100,100,200,200);
}



}

function mousePressed(){
  // check for user selections all distances



  //when press find run code below
  // run this when user presses find
    for (var dog in dogs){
      if((dogs[dog].size == sizeSelect) && (dogs[dog].color == colorSelect) && (dogs[dog].coat == coatSelect)){
        currentDog = dog;
        console.log(currentDog);
      }else{
        currentDog = "";
      }
    }
}
