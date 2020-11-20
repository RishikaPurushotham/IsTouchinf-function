var mrect
var frect
var object1
var object2
var object3
var object4


function setup() {
  createCanvas(800,400);
  mrect=createSprite(400, 200, 50, 50);
  mrect.shapeColor=("yellow");
  mrect.debug=true;
  frect=createSprite(200, 100, 50, 50);
  frect.shapeColor=("yellow");
  frect.debug=true;
  object1=createSprite(100, 200, 50, 50);
  object1.shapeColor=("yellow");
  object1.debug=true;
  object2=createSprite(300, 100, 50, 50);
  object2.shapeColor=("yellow");
  object2.debug=true;
  object3=createSprite(650, 90, 50, 50);
  object3.shapeColor=("yellow");
  object3.debug=true;
  object4=createSprite(250, 50, 50, 50);
  object4.shapeColor=("yellow");
  object4.debug=true;
}

function draw() {
  background(0);  
  mrect.x=mouseX
  mrect.y=mouseY
  isTouching(object4)
  if(isTouching(object1)||isTouching(object2)||isTouching(object3)||isTouching(object4)||isTouching(frect)){
    fill("white")
text("istouching is working",600,50)
  }
  else
  {
    text("objects are not touching",600,100)
  }
  drawSprites();
}