var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";
  
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }

 else{
   movingRect.shapeColor = "green";
   gameObject2.shapeColor = "green";
 }

  

  drawSprites();
}

